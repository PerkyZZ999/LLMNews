import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { z } from "zod";

import { SectionShell } from "@/components/layout/section-shell";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
} from "@/components/ui/table";
import { benchmarkLeaderboardQueryOptions } from "@/lib/queries/content";

const benchmarkSearchSchema = z.object({
	band: z.enum(["all", "leader", "contender", "specialist"]).default("all"),
	provider: z.string().default("all"),
	query: z.string().default(""),
	sort: z
		.enum(["score-desc", "score-asc", "model-asc", "vendor-asc"])
		.default("score-desc"),
});

export const Route = createFileRoute("/benchmarks")({
	validateSearch: (search) => benchmarkSearchSchema.parse(search),
	loader: ({ context }) =>
		context.queryClient.ensureQueryData(benchmarkLeaderboardQueryOptions()),
	component: BenchmarksPage,
});

function BenchmarksPage() {
	const leaderboard = Route.useLoaderData();
	const search = Route.useSearch();
	const navigate = useNavigate({ from: "/benchmarks" });
	const providerOptions = Array.from(
		new Set(leaderboard.map((row) => row.vendor?.shortName ?? "Unknown")),
	).sort((left, right) => left.localeCompare(right));

	const filteredRows = leaderboard
		.filter((row) => {
			const matchesQuery =
				search.query.length === 0 ||
				row.modelName.toLowerCase().includes(search.query.toLowerCase()) ||
				(row.vendor?.shortName ?? "Unknown")
					.toLowerCase()
					.includes(search.query.toLowerCase()) ||
				row.notableMetric.toLowerCase().includes(search.query.toLowerCase());
			const matchesProvider =
				search.provider === "all" ||
				(row.vendor?.shortName ?? "Unknown") === search.provider;
			const matchesBand =
				search.band === "all" || row.reasoningBand === search.band;

			return matchesQuery && matchesProvider && matchesBand;
		})
		.sort((left, right) => {
			switch (search.sort) {
				case "score-asc":
					return left.score - right.score;
				case "model-asc":
					return left.modelName.localeCompare(right.modelName);
				case "vendor-asc":
					return (left.vendor?.shortName ?? "Unknown").localeCompare(
						right.vendor?.shortName ?? "Unknown",
					);
				default:
					return right.score - left.score;
			}
		});

	const averageScore =
		leaderboard.reduce((total, row) => total + row.score, 0) /
		Math.max(leaderboard.length, 1);

	function updateSearch(
		updates: Partial<z.infer<typeof benchmarkSearchSchema>>,
	) {
		navigate({
			search: (previous) => ({
				...previous,
				...updates,
			}),
		});
	}

	return (
		<div className="space-y-8">
			<SectionShell
				description="Aggregated technical scores for model launches and workflow systems, with lightweight controls that keep the MVP scan-friendly instead of turning the page into a heavy BI surface."
				eyebrow="route / benchmarks"
				title="Model performance leaderboard"
			>
				<div className="flex flex-wrap items-center gap-3">
					<Badge>technical board</Badge>
					<Badge>weekly snapshot</Badge>
					<Badge>{leaderboard.length} tracked entries</Badge>
				</div>
			</SectionShell>

			<div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_18rem]">
				<Card>
					<CardHeader className="border-b border-line pb-5">
						<div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
							<div className="space-y-2">
								<div className="technical-label text-primary">
									filters / query
								</div>
								<CardTitle>Benchmark controls</CardTitle>
								<CardDescription>
									Search, provider, reasoning band, and sort controls are kept
									URL-backed so this view stays shareable and easy to reset.
								</CardDescription>
							</div>
							<Badge>avg {averageScore.toFixed(1)}</Badge>
						</div>
					</CardHeader>
					<CardContent className="grid gap-4 pt-6 md:grid-cols-2 xl:grid-cols-4">
						<div className="space-y-2">
							<label
								className="technical-label text-muted-foreground"
								htmlFor="benchmark-query"
							>
								Search models
							</label>
							<Input
								id="benchmark-query"
								onChange={(event) =>
									updateSearch({ query: event.target.value })
								}
								placeholder="GPT, Claude, LongBench..."
								value={search.query}
							/>
						</div>
						<div className="space-y-2">
							<label
								className="technical-label text-muted-foreground"
								htmlFor="benchmark-provider"
							>
								Provider
							</label>
							<select
								className="flex h-10 w-full rounded-md border border-input bg-surface-1 px-3 py-2 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring"
								id="benchmark-provider"
								onChange={(event) =>
									updateSearch({ provider: event.target.value })
								}
								value={search.provider}
							>
								<option value="all">All providers</option>
								{providerOptions.map((provider) => (
									<option key={provider} value={provider}>
										{provider}
									</option>
								))}
							</select>
						</div>
						<div className="space-y-2">
							<label
								className="technical-label text-muted-foreground"
								htmlFor="benchmark-band"
							>
								Reasoning band
							</label>
							<select
								className="flex h-10 w-full rounded-md border border-input bg-surface-1 px-3 py-2 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring"
								id="benchmark-band"
								onChange={(event) =>
									updateSearch({
										band: event.target.value as z.infer<
											typeof benchmarkSearchSchema
										>["band"],
									})
								}
								value={search.band}
							>
								<option value="all">All bands</option>
								<option value="leader">Leader</option>
								<option value="contender">Contender</option>
								<option value="specialist">Specialist</option>
							</select>
						</div>
						<div className="space-y-2">
							<label
								className="technical-label text-muted-foreground"
								htmlFor="benchmark-sort"
							>
								Sort by
							</label>
							<select
								className="flex h-10 w-full rounded-md border border-input bg-surface-1 px-3 py-2 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring"
								id="benchmark-sort"
								onChange={(event) =>
									updateSearch({
										sort: event.target.value as z.infer<
											typeof benchmarkSearchSchema
										>["sort"],
									})
								}
								value={search.sort}
							>
								<option value="score-desc">Score desc</option>
								<option value="score-asc">Score asc</option>
								<option value="model-asc">Model name</option>
								<option value="vendor-asc">Vendor name</option>
							</select>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<div className="technical-label text-primary">board / state</div>
						<CardTitle>Current scope</CardTitle>
					</CardHeader>
					<CardContent className="space-y-3 text-sm text-muted-foreground">
						<p>
							This MVP leaderboard focuses on dense scan value, not exhaustive
							methodology tooling.
						</p>
						<p>
							Filters stay intentionally lightweight and the table emphasizes
							benchmark, score, context window, and band.
						</p>
						<p>
							Matching entries:{" "}
							<span className="font-medium text-foreground">
								{filteredRows.length}
							</span>
						</p>
					</CardContent>
				</Card>
			</div>

			{filteredRows.length === 0 ? (
				<Card>
					<CardHeader>
						<div className="technical-label text-primary">board / empty</div>
						<CardTitle>
							No benchmark rows match the current filter set.
						</CardTitle>
						<CardDescription>
							Loosen the query or switch provider and band filters to widen the
							result set.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<button
							className="rounded-md border border-line px-4 py-2 text-sm text-foreground transition-colors hover:bg-surface-2"
							onClick={() =>
								updateSearch({
									band: "all",
									provider: "all",
									query: "",
									sort: "score-desc",
								})
							}
							type="button"
						>
							Reset filters
						</button>
					</CardContent>
				</Card>
			) : (
				<Card>
					<CardHeader className="border-b border-line pb-5">
						<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
							<div>
								<div className="technical-label text-primary">
									leaderboard / live view
								</div>
								<CardTitle className="mt-2">
									Filtered comparison table
								</CardTitle>
							</div>
							<Badge>{search.sort.replace("-", " ")}</Badge>
						</div>
					</CardHeader>
					<CardContent className="overflow-x-auto pt-2">
						<Table>
							<TableHead>
								<TableRow>
									<TableHeaderCell>Rank</TableHeaderCell>
									<TableHeaderCell>Model</TableHeaderCell>
									<TableHeaderCell>Provider</TableHeaderCell>
									<TableHeaderCell>Benchmark</TableHeaderCell>
									<TableHeaderCell>Window</TableHeaderCell>
									<TableHeaderCell>Band</TableHeaderCell>
									<TableHeaderCell>Score</TableHeaderCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{filteredRows.map((row, index) => (
									<TableRow className="hover:bg-surface-2/60" key={row.id}>
										<TableCell className="font-medium text-primary">
											#{index + 1}
										</TableCell>
										<TableCell>
											<div className="space-y-1">
												<div className="font-medium text-foreground">
													{row.modelName}
												</div>
												<div className="technical-label text-muted-foreground">
													{row.id}
												</div>
											</div>
										</TableCell>
										<TableCell>{row.vendor?.shortName ?? "Unknown"}</TableCell>
										<TableCell>{row.notableMetric}</TableCell>
										<TableCell>{row.contextWindow}</TableCell>
										<TableCell>
											<Badge className="capitalize">{row.reasoningBand}</Badge>
										</TableCell>
										<TableCell>
											<div className="space-y-2">
												<div className="font-medium text-foreground">
													{row.score.toFixed(1)}
												</div>
												<div className="h-1.5 w-28 overflow-hidden rounded-full bg-surface-3">
													<div
														className="h-full rounded-full bg-primary"
														style={{ width: `${Math.min(row.score, 100)}%` }}
													/>
												</div>
											</div>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</CardContent>
				</Card>
			)}
		</div>
	);
}

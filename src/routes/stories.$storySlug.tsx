import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
} from "@/components/ui/table";
import { storyDetailQueryOptions } from "@/lib/queries/content";

export const Route = createFileRoute("/stories/$storySlug")({
	loader: async ({ context, params }) => {
		const detail = await context.queryClient.fetchQuery(
			storyDetailQueryOptions(params.storySlug),
		);

		if (!detail) {
			throw notFound();
		}

		return detail;
	},
	component: StoryDetailPage,
});

function StoryDetailPage() {
	const { category, detailContent, relatedStories, story, vendor } =
		Route.useLoaderData();

	return (
		<div className="space-y-8">
			<div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
				<Link
					className="transition-colors hover:text-foreground"
					to={story.category === "models" ? "/models" : "/coding-tools"}
				>
					{category?.label ?? story.category}
				</Link>
				<span>/</span>
				<span>{story.productName}</span>
			</div>

			<div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_20rem]">
				<article className="space-y-8">
					<header className="space-y-6 border-b border-line pb-8">
						<div className="flex flex-wrap items-center gap-3">
							<Badge>{story.releaseType}</Badge>
							<Badge>{detailContent.readingTime}</Badge>
							<Badge>{vendor?.shortName ?? story.productName}</Badge>
						</div>
						<div className="space-y-4">
							<h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
								{story.headline}
							</h1>
							<p className="max-w-3xl text-lg text-muted-foreground sm:text-xl">
								{story.summary}
							</p>
						</div>
						<div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
							<MetadataCard label="Published" value={story.releaseDate} />
							<MetadataCard
								label="Editorial status"
								value={story.editorialStatus}
							/>
							<MetadataCard
								label="Source links"
								value={`${story.sourceLinks.length}`}
							/>
							<MetadataCard label="Tags" value={`${story.tags.length}`} />
						</div>
					</header>

					<div className="space-y-8">
						<p className="max-w-3xl text-xl leading-8 text-foreground/90">
							{detailContent.lead}
						</p>

						{detailContent.sections.map((section) => (
							<section className="space-y-4" key={section.title}>
								<h2 className="text-2xl font-semibold tracking-tight">
									{section.title}
								</h2>
								{section.paragraphs.map((paragraph) => (
									<p
										className="max-w-3xl text-base leading-8 text-muted-foreground"
										key={paragraph}
									>
										{paragraph}
									</p>
								))}
								{section.codeSample ? (
									<div className="surface-panel overflow-hidden rounded-xl">
										<div className="flex items-center justify-between border-b border-line px-5 py-3 text-xs text-muted-foreground">
											<span className="technical-label text-muted-foreground">
												{section.codeSample.filename}
											</span>
											<span>{section.codeSample.language}</span>
										</div>
										<pre className="overflow-x-auto p-5 text-sm leading-6 text-primary">
											<code>{section.codeSample.snippet}</code>
										</pre>
									</div>
								) : null}
							</section>
						))}

						{story.benchmarkNotes.length > 0 ? (
							<section className="space-y-4">
								<h2 className="text-2xl font-semibold tracking-tight">
									Benchmark notes
								</h2>
								<div className="surface-panel overflow-hidden rounded-xl">
									<Table>
										<TableHead>
											<TableRow>
												<TableHeaderCell>Metric</TableHeaderCell>
												<TableHeaderCell>Value</TableHeaderCell>
												<TableHeaderCell>Source</TableHeaderCell>
												<TableHeaderCell>Context</TableHeaderCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{story.benchmarkNotes.map((note) => (
												<TableRow key={`${note.label}-${note.metric}`}>
													<TableCell className="font-medium">
														{note.label}
													</TableCell>
													<TableCell>{note.value}</TableCell>
													<TableCell>{note.source}</TableCell>
													<TableCell className="text-muted-foreground">
														{note.context}
													</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								</div>
							</section>
						) : null}

						<section className="space-y-4">
							<h2 className="text-2xl font-semibold tracking-tight">Sources</h2>
							<div className="grid gap-3">
								{story.sourceLinks.map((sourceLink) => (
									<a
										className="surface-panel flex items-center justify-between rounded-xl px-5 py-4 transition-colors hover:border-primary"
										href={sourceLink.url}
										key={sourceLink.url}
										rel="noreferrer"
										target="_blank"
									>
										<div>
											<div className="font-medium text-foreground">
												{sourceLink.label}
											</div>
											<div className="text-sm text-muted-foreground">
												{sourceLink.url}
											</div>
										</div>
										<div className="technical-label text-primary">open</div>
									</a>
								))}
							</div>
						</section>
					</div>
				</article>

				<aside className="space-y-6">
					<Card>
						<CardHeader>
							<div className="technical-label text-primary">story / specs</div>
							<CardTitle>Structured metadata</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							{detailContent.specs.map((spec) => (
								<div
									className="flex items-start justify-between gap-4 border-b border-line pb-3 last:border-b-0 last:pb-0"
									key={spec.label}
								>
									<span className="text-sm text-muted-foreground">
										{spec.label}
									</span>
									<span className="text-right text-sm font-medium text-foreground">
										{spec.value}
									</span>
								</div>
							))}
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<div className="technical-label text-primary">story / tags</div>
							<CardTitle>Coverage signals</CardTitle>
						</CardHeader>
						<CardContent className="flex flex-wrap gap-2">
							{story.tags.map((tag) => (
								<Badge key={tag}>{tag}</Badge>
							))}
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<div className="technical-label text-primary">
								story / related
							</div>
							<CardTitle>Related updates</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							{relatedStories.map((relatedStory) => (
								<Link
									className="block rounded-lg border border-transparent p-3 transition-colors hover:border-line hover:bg-surface-2"
									key={relatedStory.id}
									params={{ storySlug: relatedStory.slug }}
									to="/stories/$storySlug"
								>
									<div className="technical-label text-primary">
										{relatedStory.category}
									</div>
									<h3 className="mt-2 text-sm font-medium leading-6 text-foreground">
										{relatedStory.headline}
									</h3>
									<p className="mt-2 text-xs text-muted-foreground">
										{relatedStory.releaseDate}
									</p>
								</Link>
							))}
						</CardContent>
					</Card>
				</aside>
			</div>
		</div>
	);
}

function MetadataCard({ label, value }: { label: string; value: string }) {
	return (
		<div className="surface-panel rounded-xl px-4 py-4">
			<div className="technical-label text-muted-foreground">{label}</div>
			<div className="mt-2 text-sm font-medium capitalize text-foreground">
				{value}
			</div>
		</div>
	);
}

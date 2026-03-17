import { createFileRoute, Link } from "@tanstack/react-router";

import { SectionShell } from "@/components/layout/section-shell";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { homeFeedQueryOptions } from "@/lib/queries/content";
import { getScaffoldStatus } from "@/lib/server/scaffold.functions";

export const Route = createFileRoute("/")({
	loader: async ({ context }) => {
		const [feed, scaffoldStatus] = await Promise.all([
			context.queryClient.ensureQueryData(homeFeedQueryOptions()),
			getScaffoldStatus(),
		]);

		return {
			...feed,
			scaffoldStatus,
		};
	},
	component: HomePage,
});

function HomePage() {
	const { featuredStories, latestStories, leadStory, scaffoldStatus } =
		Route.useLoaderData();

	return (
		<div className="space-y-10">
			<SectionShell
				description="Phase 1 establishes the route tree, theme system, seeded domain data, and shared app shell the later editorial product will build on."
				eyebrow="home / foundation"
				title="The public surface is live with seeded editorial structure."
			>
				<div className="flex flex-wrap items-center gap-3">
					<Badge>{scaffoldStatus.service}</Badge>
					<Badge>{scaffoldStatus.environment}</Badge>
					<Badge>{scaffoldStatus.surfaces.join(" / ")}</Badge>
				</div>
				<div className="grid gap-6 lg:grid-cols-[1.45fr_0.95fr]">
					<Card className="overflow-hidden">
						<CardHeader className="gap-4 border-b border-line pb-5">
							<div className="flex items-center gap-3">
								<Badge>{leadStory.releaseType}</Badge>
								<div className="technical-label text-muted-foreground">
									{leadStory.productName}
								</div>
							</div>
							<Link
								params={{ storySlug: leadStory.slug }}
								to="/stories/$storySlug"
							>
								<CardTitle className="text-2xl transition-colors hover:text-primary sm:text-3xl">
									{leadStory.headline}
								</CardTitle>
							</Link>
							<CardDescription className="max-w-2xl text-base">
								{leadStory.summary}
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4 pt-6">
							{leadStory.keyChanges.map((change) => (
								<div className="flex gap-3" key={change}>
									<div className="mt-2 h-2 w-2 rounded-full bg-primary" />
									<p className="text-sm text-muted-foreground">{change}</p>
								</div>
							))}
						</CardContent>
					</Card>
					<div className="grid gap-6">
						{featuredStories.map((story) => (
							<Card key={story.id}>
								<CardHeader>
									<div className="flex items-center gap-3">
										<Badge>{story.category}</Badge>
										<div className="technical-label text-muted-foreground">
											{story.productName}
										</div>
									</div>
									<Link
										params={{ storySlug: story.slug }}
										to="/stories/$storySlug"
									>
										<CardTitle className="transition-colors hover:text-primary">
											{story.headline}
										</CardTitle>
									</Link>
									<CardDescription>{story.summary}</CardDescription>
								</CardHeader>
							</Card>
						))}
					</div>
				</div>
			</SectionShell>

			<section className="space-y-4">
				<div className="flex items-center justify-between">
					<div>
						<div className="technical-label text-primary">latest / feed</div>
						<h2 className="mt-2 text-2xl font-semibold">
							Recent structured stories
						</h2>
					</div>
					<Badge>mock seeded data</Badge>
				</div>
				<div className="grid gap-4">
					{latestStories.map((story) => (
						<Card className="p-5" key={story.id}>
							<div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
								<div className="space-y-2">
									<div className="flex items-center gap-3">
										<Badge>{story.category}</Badge>
										<div className="technical-label text-muted-foreground">
											{story.productName}
										</div>
									</div>
									<Link
										params={{ storySlug: story.slug }}
										to="/stories/$storySlug"
									>
										<h3 className="text-lg font-semibold tracking-tight transition-colors hover:text-primary">
											{story.headline}
										</h3>
									</Link>
									<p className="max-w-3xl text-sm text-muted-foreground">
										{story.summary}
									</p>
								</div>
								<div className="technical-label text-muted-foreground">
									{story.releaseDate}
								</div>
							</div>
						</Card>
					))}
				</div>
			</section>
		</div>
	);
}

import { createFileRoute, Link } from "@tanstack/react-router";

import { SectionShell } from "@/components/layout/section-shell";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { storiesByCategoryQueryOptions } from "@/lib/queries/content";

export const Route = createFileRoute("/coding-tools")({
	loader: ({ context }) =>
		context.queryClient.ensureQueryData(
			storiesByCategoryQueryOptions("coding-tools"),
		),
	component: CodingToolsPage,
});

function CodingToolsPage() {
	const stories = Route.useLoaderData();

	return (
		<SectionShell
			description="Launch-category route for AI IDEs, terminal agents, and workflow tooling updates."
			eyebrow="route / coding-tools"
			title="AI coding app coverage"
		>
			{stories.length === 0 ? (
				<Card>
					<CardHeader>
						<div className="technical-label text-primary">route / empty</div>
						<CardTitle>No AI coding tool stories are available yet.</CardTitle>
						<CardDescription>
							This route is ready for seeded or editorial entries, but the
							current dataset is empty.
						</CardDescription>
					</CardHeader>
				</Card>
			) : (
				<div className="grid gap-4 md:grid-cols-2">
					{stories.map((story) => (
						<Card key={story.id}>
							<CardHeader>
								<div className="flex items-center gap-3">
									<Badge>{story.releaseType}</Badge>
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
			)}
		</SectionShell>
	);
}

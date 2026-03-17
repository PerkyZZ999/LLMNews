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

export const Route = createFileRoute("/models")({
	loader: ({ context }) =>
		context.queryClient.ensureQueryData(
			storiesByCategoryQueryOptions("models"),
		),
	component: ModelsPage,
});

function ModelsPage() {
	const stories = Route.useLoaderData();

	return (
		<SectionShell
			description="Launch-category route for model releases, benchmark movement, and pricing or context-window changes."
			eyebrow="route / models"
			title="LLM model coverage"
		>
			{stories.length === 0 ? (
				<Card>
					<CardHeader>
						<div className="technical-label text-primary">route / empty</div>
						<CardTitle>No model stories are available yet.</CardTitle>
						<CardDescription>
							This category is wired and ready, but no seeded model entries are
							in the current dataset.
						</CardDescription>
					</CardHeader>
				</Card>
			) : (
				<div className="grid gap-4">
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

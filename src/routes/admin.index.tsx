import { createFileRoute } from "@tanstack/react-router";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { adminOverviewQueryOptions } from "@/lib/queries/content";

export const Route = createFileRoute("/admin/")({
	loader: ({ context }) =>
		context.queryClient.ensureQueryData(adminOverviewQueryOptions()),
	component: AdminDashboardPage,
});

function AdminDashboardPage() {
	const overview = Route.useLoaderData();

	return (
		<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
			<AdminMetric label="Published" value={overview.publishedCount} />
			<AdminMetric label="In review" value={overview.reviewCount} />
			<AdminMetric label="Scheduled" value={overview.scheduledCount} />
			<AdminMetric label="Drafts" value={overview.draftCount} />
			<AdminMetric
				label="Featured slots"
				value={overview.featuredSlotsFilled}
			/>
			<AdminMetric label="Tracked sources" value={overview.sourceCount} />
		</div>
	);
}

function AdminMetric({ label, value }: { label: string; value: number }) {
	return (
		<Card>
			<CardHeader className="flex flex-row items-start justify-between gap-4">
				<div>
					<div className="technical-label text-muted-foreground">
						admin / metric
					</div>
					<CardTitle className="mt-2 text-base">{label}</CardTitle>
				</div>
				<Badge>{label.toLowerCase()}</Badge>
			</CardHeader>
			<CardContent>
				<div className="text-4xl font-semibold tracking-tight">{value}</div>
			</CardContent>
		</Card>
	);
}

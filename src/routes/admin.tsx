import { createFileRoute, Outlet } from "@tanstack/react-router";

import { SectionShell } from "@/components/layout/section-shell";

export const Route = createFileRoute("/admin")({
	component: AdminLayout,
});

function AdminLayout() {
	return (
		<SectionShell
			description="The internal dashboard route tree exists now so the editorial product can grow without a routing reset later."
			eyebrow="route / admin"
			title="Editorial dashboard"
		>
			<Outlet />
		</SectionShell>
	);
}

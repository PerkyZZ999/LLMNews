import { createFileRoute } from "@tanstack/react-router";

import { SectionShell } from "@/components/layout/section-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/login")({
	component: LoginPage,
});

function LoginPage() {
	return (
		<SectionShell
			description="Phase 1 establishes the auth route boundary even before real session handling is added."
			eyebrow="route / auth"
			title="Internal access placeholder"
		>
			<Card className="max-w-xl">
				<CardHeader>
					<CardTitle>
						Editorial sign-in will land with the admin auth slice.
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<Input placeholder="editor@llmnews.local" type="email" />
					<Input placeholder="Password" type="password" />
					<Button type="button">Continue</Button>
				</CardContent>
			</Card>
		</SectionShell>
	);
}

import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export function AppPending() {
	return (
		<div className="surface-panel rounded-xl px-4 py-3 text-sm text-muted-foreground">
			Syncing route state...
		</div>
	);
}

export function AppNotFound() {
	return (
		<div className="flex min-h-[50vh] items-center justify-center">
			<Card className="w-full max-w-lg">
				<CardHeader>
					<div className="technical-label text-primary">404 / route</div>
					<CardTitle>That page is not in the current route tree.</CardTitle>
					<CardDescription>
						The foundation routes are in place, but this path does not map to a
						public or admin surface yet.
					</CardDescription>
				</CardHeader>
				<CardContent className="flex gap-3">
					<Link to="/">
						<Button>Return home</Button>
					</Link>
					<Link to="/admin">
						<Button variant="outline">Open admin</Button>
					</Link>
				</CardContent>
			</Card>
		</div>
	);
}

export function AppError({ error }: { error: Error }) {
	return (
		<div className="flex min-h-[50vh] items-center justify-center">
			<Card className="w-full max-w-lg">
				<CardHeader>
					<div className="technical-label text-destructive">error / route</div>
					<CardTitle>The route failed before it could render.</CardTitle>
					<CardDescription>{error.message}</CardDescription>
				</CardHeader>
				<CardContent>
					<Button onClick={() => window.location.reload()}>Reload</Button>
				</CardContent>
			</Card>
		</div>
	);
}

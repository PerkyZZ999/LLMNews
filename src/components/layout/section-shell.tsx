import type { ReactNode } from "react";

import { cn } from "@/lib/ui/cn";

export function SectionShell({
	children,
	className,
	description,
	eyebrow,
	title,
}: {
	children: ReactNode;
	className?: string;
	description: string;
	eyebrow: string;
	title: string;
}) {
	return (
		<section className={cn("space-y-6", className)}>
			<header className="space-y-3">
				<div className="technical-label text-primary">{eyebrow}</div>
				<div className="max-w-3xl space-y-2">
					<h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
						{title}
					</h1>
					<p className="text-base text-muted-foreground sm:text-lg">
						{description}
					</p>
				</div>
			</header>
			{children}
		</section>
	);
}

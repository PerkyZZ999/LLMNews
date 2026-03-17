import type { HTMLAttributes } from "react";

import { cn } from "@/lib/ui/cn";

export function Badge({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn(
				"technical-label inline-flex items-center rounded-full border border-line bg-surface-2 px-3 py-1 text-[0.65rem] text-muted-foreground",
				className,
			)}
			{...props}
		/>
	);
}

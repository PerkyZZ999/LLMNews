import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/ui/cn";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				primary: "bg-primary text-primary-foreground hover:brightness-110",
				secondary: "bg-secondary text-secondary-foreground hover:bg-surface-3",
				ghost: "bg-transparent text-foreground hover:bg-surface-2",
				outline:
					"border border-border bg-transparent text-foreground hover:bg-surface-2",
			},
			size: {
				sm: "h-9 px-3",
				md: "h-10 px-4",
				lg: "h-11 px-5",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "md",
		},
	},
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants>;

export function Button({ className, size, variant, ...props }: ButtonProps) {
	return (
		<button
			className={cn(buttonVariants({ className, size, variant }))}
			{...props}
		/>
	);
}

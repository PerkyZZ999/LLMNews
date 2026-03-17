import type {
	HTMLAttributes,
	TableHTMLAttributes,
	TdHTMLAttributes,
	ThHTMLAttributes,
} from "react";

import { cn } from "@/lib/ui/cn";

export function Table({
	className,
	...props
}: TableHTMLAttributes<HTMLTableElement>) {
	return (
		<table
			className={cn("w-full border-collapse text-left text-sm", className)}
			{...props}
		/>
	);
}

export function TableHead({
	className,
	...props
}: HTMLAttributes<HTMLTableSectionElement>) {
	return (
		<thead
			className={cn("technical-label text-muted-foreground", className)}
			{...props}
		/>
	);
}

export function TableBody({
	className,
	...props
}: HTMLAttributes<HTMLTableSectionElement>) {
	return <tbody className={cn(className)} {...props} />;
}

export function TableRow({
	className,
	...props
}: HTMLAttributes<HTMLTableRowElement>) {
	return (
		<tr
			className={cn("border-b border-line last:border-b-0", className)}
			{...props}
		/>
	);
}

export function TableHeaderCell({
	className,
	...props
}: ThHTMLAttributes<HTMLTableCellElement>) {
	return <th className={cn("px-4 py-3 font-medium", className)} {...props} />;
}

export function TableCell({
	className,
	...props
}: TdHTMLAttributes<HTMLTableCellElement>) {
	return <td className={cn("px-4 py-4 align-top", className)} {...props} />;
}

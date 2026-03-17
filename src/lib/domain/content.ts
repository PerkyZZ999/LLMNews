import { z } from "zod";

export const categorySlugSchema = z.enum(["models", "coding-tools"]);
export const editorialStatusSchema = z.enum([
	"draft",
	"review",
	"scheduled",
	"published",
	"archived",
]);
export const featuredSlotSchema = z.enum([
	"home-hero",
	"home-featured-1",
	"home-featured-2",
	"home-featured-3",
]);

export const sourceLinkSchema = z.object({
	label: z.string().min(1, "A source label is required."),
	url: z.string().url("A valid source URL is required."),
});

export const categorySchema = z.object({
	id: z.string().min(1),
	slug: categorySlugSchema,
	label: z.string().min(1),
	description: z.string().min(1),
});

export const vendorSchema = z.object({
	id: z.string().min(1),
	name: z.string().min(1),
	shortName: z.string().min(1),
	website: z.string().url(),
});

export const sourceSchema = z.object({
	id: z.string().min(1),
	label: z.string().min(1),
	url: z.string().url(),
	kind: z.enum(["official-blog", "api-docs", "benchmark-board", "newsroom"]),
	status: z.enum(["active", "paused"]),
});

export const benchmarkNoteSchema = z.object({
	label: z.string().min(1),
	metric: z.string().min(1),
	value: z.string().min(1),
	source: z.string().min(1),
	context: z.string().min(1),
});

export const featuredPlacementSchema = z.object({
	slot: featuredSlotSchema,
	order: z.number().int().nonnegative(),
	emphasis: z.enum(["hero", "featured", "standard"]),
});

export const storySchema = z.object({
	id: z.string().min(1),
	slug: z.string().min(1),
	headline: z.string().min(1),
	summary: z.string().min(1),
	category: categorySlugSchema,
	vendorId: z.string().min(1),
	productName: z.string().min(1),
	releaseDate: z.string().min(1),
	publishedAt: z.string().min(1),
	editorialStatus: editorialStatusSchema,
	releaseType: z.enum(["release", "benchmark", "feature", "pricing"]),
	keyChanges: z.array(z.string().min(1)).min(1),
	benchmarkNotes: z.array(benchmarkNoteSchema),
	sourceLinks: z.array(sourceLinkSchema).min(1),
	tags: z.array(z.string().min(1)).min(1),
	featuredPlacement: featuredPlacementSchema.nullable(),
});

export const benchmarkRowSchema = z.object({
	id: z.string().min(1),
	modelName: z.string().min(1),
	vendorId: z.string().min(1),
	score: z.number().nonnegative(),
	contextWindow: z.string().min(1),
	reasoningBand: z.enum(["leader", "contender", "specialist"]),
	notableMetric: z.string().min(1),
});

export const createStorySchema = storySchema.omit({
	id: true,
	publishedAt: true,
});

export const updateStorySchema = createStorySchema.partial();

export type CategorySlug = z.infer<typeof categorySlugSchema>;
export type EditorialStatus = z.infer<typeof editorialStatusSchema>;
export type Category = z.infer<typeof categorySchema>;
export type Vendor = z.infer<typeof vendorSchema>;
export type Source = z.infer<typeof sourceSchema>;
export type BenchmarkNote = z.infer<typeof benchmarkNoteSchema>;
export type FeaturedPlacement = z.infer<typeof featuredPlacementSchema>;
export type Story = z.infer<typeof storySchema>;
export type BenchmarkRow = z.infer<typeof benchmarkRowSchema>;

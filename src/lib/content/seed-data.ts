import {
	type BenchmarkRow,
	benchmarkRowSchema,
	type Category,
	type CategorySlug,
	categorySchema,
	type Story,
	sourceSchema,
	storySchema,
	type Vendor,
	vendorSchema,
} from "@/lib/domain/content";
import { environment } from "@/lib/env";

type StoryDetailSection = {
	title: string;
	paragraphs: string[];
	codeSample?: {
		filename: string;
		language: string;
		snippet: string;
	};
};

type StoryDetailContent = {
	readingTime: string;
	lead: string;
	sections: StoryDetailSection[];
	specs: Array<{
		label: string;
		value: string;
	}>;
};

const categories = categorySchema.array().parse([
	{
		id: "category-models",
		slug: "models",
		label: "LLM Models",
		description: "Model launches, benchmark movement, and deployment details.",
	},
	{
		id: "category-coding-tools",
		slug: "coding-tools",
		label: "AI Coding Apps",
		description: "AI IDEs, terminal agents, and developer workflow tooling.",
	},
]);

const vendors = vendorSchema.array().parse([
	{
		id: "vendor-openai",
		name: "OpenAI",
		shortName: "OpenAI",
		website: "https://openai.com",
	},
	{
		id: "vendor-anthropic",
		name: "Anthropic",
		shortName: "Anthropic",
		website: "https://anthropic.com",
	},
	{
		id: "vendor-cursor",
		name: "Cursor",
		shortName: "Cursor",
		website: "https://cursor.com",
	},
	{
		id: "vendor-minimax",
		name: "Minimax",
		shortName: "Minimax",
		website: "https://www.minimax.io",
	},
]);

const sources = sourceSchema.array().parse([
	{
		id: "source-openai-blog",
		label: "OpenAI blog",
		url: "https://openai.com/news",
		kind: "official-blog",
		status: "active",
	},
	{
		id: "source-anthropic-blog",
		label: "Anthropic newsroom",
		url: "https://www.anthropic.com/news",
		kind: "newsroom",
		status: "active",
	},
	{
		id: "source-cursor-blog",
		label: "Cursor changelog",
		url: "https://cursor.com/changelog",
		kind: "official-blog",
		status: "active",
	},
]);

const stories = storySchema.array().parse([
	{
		id: "story-openai-gpt-5.1",
		slug: "openai-gpt-5-1-lands-with-stronger-reasoning-controls",
		headline:
			"OpenAI ships GPT-5.1 with tighter reasoning controls and higher coding throughput",
		summary:
			"The release sharpens controllability for long reasoning runs and improves benchmark consistency on coding-heavy tasks.",
		category: "models",
		vendorId: "vendor-openai",
		productName: "GPT-5.1",
		releaseDate: "2026-02-13",
		publishedAt: "2026-02-13T09:00:00.000Z",
		editorialStatus: "published",
		releaseType: "release",
		keyChanges: [
			"Lower variance on multi-step reasoning benchmarks.",
			"Improved tool-call reliability for coding and data tasks.",
			"Higher context efficiency for long-form evaluation prompts.",
		],
		benchmarkNotes: [
			{
				label: "SWE-bench Verified",
				metric: "score",
				value: "67.4",
				source: "OpenAI benchmark card",
				context: "Higher than the previous GPT-5 release snapshot.",
			},
		],
		sourceLinks: [
			{ label: "Announcement", url: "https://openai.com/news" },
			{ label: "API docs", url: "https://platform.openai.com/docs" },
		],
		tags: ["release", "reasoning", "coding"],
		featuredPlacement: {
			slot: "home-hero",
			order: 0,
			emphasis: "hero",
		},
	},
	{
		id: "story-anthropic-claude-code",
		slug: "anthropic-expands-claude-code-background-workflows",
		headline:
			"Anthropic expands Claude Code background workflows for longer terminal sessions",
		summary:
			"Claude Code now handles longer-running terminal jobs with better checkpointing and clearer task recovery.",
		category: "coding-tools",
		vendorId: "vendor-anthropic",
		productName: "Claude Code",
		releaseDate: "2026-02-11",
		publishedAt: "2026-02-11T13:30:00.000Z",
		editorialStatus: "published",
		releaseType: "feature",
		keyChanges: [
			"Long-running background tasks survive terminal disconnects.",
			"Resume context is clearer after tool execution failures.",
			"Session summaries are more compact and easier to scan.",
		],
		benchmarkNotes: [],
		sourceLinks: [
			{ label: "Release notes", url: "https://www.anthropic.com/news" },
		],
		tags: ["agents", "terminal", "workflow"],
		featuredPlacement: {
			slot: "home-featured-1",
			order: 1,
			emphasis: "featured",
		},
	},
	{
		id: "story-cursor-background-agents",
		slug: "cursor-pushes-background-agents-deeper-into-the-main-editor-flow",
		headline:
			"Cursor pushes background agents deeper into the main editor flow",
		summary:
			"The latest Cursor release moves multi-file background tasks closer to the core navigation and review loop.",
		category: "coding-tools",
		vendorId: "vendor-cursor",
		productName: "Cursor",
		releaseDate: "2026-02-10",
		publishedAt: "2026-02-10T16:15:00.000Z",
		editorialStatus: "published",
		releaseType: "feature",
		keyChanges: [
			"Agent work shows up inline beside active editor changes.",
			"Review affordances are faster for multi-file edits.",
			"Diff summaries are more explicit about tool actions.",
		],
		benchmarkNotes: [],
		sourceLinks: [
			{ label: "Cursor changelog", url: "https://cursor.com/changelog" },
		],
		tags: ["editor", "agents", "workflow"],
		featuredPlacement: {
			slot: "home-featured-2",
			order: 2,
			emphasis: "featured",
		},
	},
	{
		id: "story-minimax-m2.5",
		slug: "minimax-m2-5-posts-a-faster-open-model-profile",
		headline:
			"Minimax M2.5 posts a faster open model profile with stronger long-context economics",
		summary:
			"The new release emphasizes long-context cost control while staying competitive on general reasoning tables.",
		category: "models",
		vendorId: "vendor-minimax",
		productName: "Minimax M2.5",
		releaseDate: "2026-02-08",
		publishedAt: "2026-02-08T08:45:00.000Z",
		editorialStatus: "published",
		releaseType: "benchmark",
		keyChanges: [
			"Sharper price-to-context-window profile.",
			"Competitive reasoning numbers against top proprietary peers.",
			"Open deployment story remains a key differentiator.",
		],
		benchmarkNotes: [
			{
				label: "LongBench",
				metric: "score",
				value: "72.1",
				source: "Vendor benchmark card",
				context:
					"Stronger than the vendor previous generation on long-context tasks.",
			},
		],
		sourceLinks: [{ label: "Model note", url: "https://www.minimax.io" }],
		tags: ["benchmark", "open-model", "context-window"],
		featuredPlacement: {
			slot: "home-featured-3",
			order: 3,
			emphasis: "featured",
		},
	},
]);

const benchmarkRows = benchmarkRowSchema.array().parse([
	{
		id: "benchmark-gpt-5.1",
		modelName: "GPT-5.1",
		vendorId: "vendor-openai",
		score: 67.4,
		contextWindow: "256k",
		reasoningBand: "leader",
		notableMetric: "SWE-bench Verified",
	},
	{
		id: "benchmark-minimax-m2.5",
		modelName: "Minimax M2.5",
		vendorId: "vendor-minimax",
		score: 72.1,
		contextWindow: "1M",
		reasoningBand: "contender",
		notableMetric: "LongBench",
	},
	{
		id: "benchmark-claude-code-agent",
		modelName: "Claude Code workflow",
		vendorId: "vendor-anthropic",
		score: 61.2,
		contextWindow: "200k",
		reasoningBand: "specialist",
		notableMetric: "Agent recovery success",
	},
]);

const vendorLookup = new Map(vendors.map((vendor) => [vendor.id, vendor]));

async function maybeDelay() {
	if (!environment.enableMockDelay) {
		return;
	}

	await new Promise((resolve) => globalThis.setTimeout(resolve, 120));
}

export async function getHomeFeed() {
	await maybeDelay();

	const orderedStories = [...stories].sort((left, right) =>
		right.publishedAt.localeCompare(left.publishedAt),
	);

	return {
		leadStory: orderedStories[0],
		featuredStories: orderedStories.slice(1, 4),
		latestStories: orderedStories,
	};
}
const categoryLookup = new Map(
	categories.map((category) => [category.slug, category]),
);

function buildStoryDetailContent(
	story: Story,
	vendor?: Vendor,
): StoryDetailContent {
	const baseSpecs = [
		{ label: "Vendor", value: vendor?.shortName ?? "Independent" },
		{
			label: "Category",
			value: categoryLookup.get(story.category)?.label ?? story.category,
		},
		{ label: "Release type", value: story.releaseType },
		{ label: "Sources", value: `${story.sourceLinks.length}` },
	];

	switch (story.slug) {
		case "openai-gpt-5-1-lands-with-stronger-reasoning-controls":
			return {
				readingTime: "5 min read",
				lead: "GPT-5.1 is less about a dramatic capability jump and more about making high-end reasoning behave predictably under production pressure. The release is tuned for long chains of thought, steadier coding throughput, and fewer tool-call stumbles when tasks move across search, planning, and execution.",
				sections: [
					{
						title: "Operational shift",
						paragraphs: [
							"The important change is controllability. OpenAI is signaling that enterprise and developer teams need fewer benchmark spikes and more stable execution across repeated runs, especially when the model is coordinating multiple tool invocations.",
							"That matters for LLMNews because coding and workflow products increasingly depend on long-lived agent loops. A model that keeps the same quality profile when a task stretches over multiple steps is materially more useful than one that wins only on isolated one-shot prompts.",
						],
						codeSample: {
							filename: "agent-plan.ts",
							language: "TypeScript",
							snippet: `const plan = await client.responses.create({
	  model: "gpt-5.1",
	  input: "Analyze repository changes, propose a patch, then verify tests.",
	  reasoning: { effort: "high" },
	  tools: [{ type: "code_interpreter" }, { type: "web_search" }],
	})`,
						},
					},
					{
						title: "Why the benchmark note matters",
						paragraphs: [
							"A higher SWE-bench Verified result is relevant because it points directly at agent-style coding tasks instead of generic language quality. The improvement is paired with lower variance, which is often a stronger production signal than the headline score alone.",
							"The release therefore fits the product's editorial lens: less hype about abstract generality, more focus on whether the model becomes a better substrate for real developer and benchmark-driven workflows.",
						],
					},
				],
				specs: [
					...baseSpecs,
					{ label: "Primary metric", value: "SWE-bench Verified" },
					{ label: "Metric value", value: "67.4" },
				],
			};
		case "anthropic-expands-claude-code-background-workflows":
			return {
				readingTime: "4 min read",
				lead: "Claude Code's latest update targets a practical failure mode in AI coding products: users start long terminal jobs, context drifts, a connection drops, and the whole task becomes difficult to recover. Anthropic is tightening that loop with better resumability and clearer task checkpoints.",
				sections: [
					{
						title: "Background task reliability",
						paragraphs: [
							"The product trend here is toward longer-running delegated work. Once agents are allowed to operate across multiple files, tests, and shell sessions, failure recovery becomes a first-order UX requirement rather than a secondary detail.",
							"Anthropic's move suggests that the winning coding products will be the ones that make interruption survivable. Durable sessions and better summaries reduce the cost of letting the agent handle real work instead of tightly supervised snippets.",
						],
					},
					{
						title: "Editorial takeaway",
						paragraphs: [
							"This is not a visual polish release. It is infrastructure for trust. If the user can restart a session and quickly understand what the model already did, the product becomes more viable for professional coding workflows.",
							"That positions Claude Code closer to the emerging agent-operator category rather than a simple autocomplete or chat wrapper.",
						],
					},
				],
				specs: [
					...baseSpecs,
					{ label: "Workflow focus", value: "Background sessions" },
					{ label: "Primary change", value: "Checkpoint recovery" },
				],
			};
		case "cursor-pushes-background-agents-deeper-into-the-main-editor-flow":
			return {
				readingTime: "4 min read",
				lead: "Cursor is reducing the distance between agent execution and the editor itself. Instead of treating background work as a separate mode, the latest release pulls those actions into the main navigation and review loop where developers already spend time.",
				sections: [
					{
						title: "From sidecar to core workflow",
						paragraphs: [
							"The strategic move is integration. Agent work becomes more useful when it is visible in the same place as the files, diffs, and review context a developer is already using.",
							"That reduces mental context switching and makes multi-file tasks feel less like a separate experiment and more like part of the normal editorial or engineering flow inside the product.",
						],
					},
					{
						title: "Why this matters",
						paragraphs: [
							"The broader category is converging on similar capabilities. The differentiation is increasingly in placement, review ergonomics, and recovery after the agent does something unexpected.",
							"Cursor's release therefore reads as an interface bet as much as a model bet: make autonomous work legible, near the source of truth, and cheap to approve or reject.",
						],
					},
				],
				specs: [
					...baseSpecs,
					{ label: "Workflow focus", value: "Inline review" },
					{ label: "Primary change", value: "Agent visibility" },
				],
			};
		case "minimax-m2-5-posts-a-faster-open-model-profile":
			return {
				readingTime: "5 min read",
				lead: "Minimax M2.5 is interesting less because it claims top-line superiority and more because it sharpens the economics of long-context usage. That combination of open deployment positioning and stronger efficiency keeps it relevant in a market dominated by proprietary frontier launches.",
				sections: [
					{
						title: "Economics over spectacle",
						paragraphs: [
							"Long-context models are expensive to use badly. A release that reduces the price of actually exploiting a large context window can matter more than one that merely advertises a bigger theoretical ceiling.",
							"For teams comparing deployment options, this pushes M2.5 into the conversation as a practical operating point instead of only a benchmark curiosity.",
						],
					},
					{
						title: "Open model positioning",
						paragraphs: [
							"The open deployment angle still matters for organizations that need control over where inference runs, how models are adapted, and what the long-term vendor dependency profile looks like.",
							"That makes the LongBench result useful editorial context: it shows whether the economic claim is accompanied by credible long-context performance rather than just a pricing message.",
						],
					},
				],
				specs: [
					...baseSpecs,
					{ label: "Primary metric", value: "LongBench" },
					{ label: "Metric value", value: "72.1" },
				],
			};
		default:
			return {
				readingTime: "4 min read",
				lead: story.summary,
				sections: [
					{
						title: "Editorial summary",
						paragraphs: [story.summary],
					},
				],
				specs: baseSpecs,
			};
	}
}

function getRelatedStories(story: Story) {
	const preferredStories = stories.filter(
		(candidate) =>
			candidate.id !== story.id &&
			(candidate.category === story.category ||
				candidate.vendorId === story.vendorId),
	);
	const fallbackStories = stories.filter(
		(candidate) =>
			candidate.id !== story.id &&
			!preferredStories.some((preferred) => preferred.id === candidate.id),
	);

	return [...preferredStories, ...fallbackStories]
		.sort((left, right) => right.publishedAt.localeCompare(left.publishedAt))
		.slice(0, 3);
}

export async function getStoriesByCategory(category: CategorySlug) {
	await maybeDelay();

	return stories
		.filter((story) => story.category === category)
		.sort((left, right) => right.publishedAt.localeCompare(left.publishedAt));
}

export async function getStoryDetail(storySlug: string) {
	await maybeDelay();

	const story = stories.find((candidate) => candidate.slug === storySlug);

	if (!story) {
		return null;
	}

	const vendor = vendorLookup.get(story.vendorId);

	return {
		story,
		vendor,
		category: categoryLookup.get(story.category),
		relatedStories: getRelatedStories(story),
		detailContent: buildStoryDetailContent(story, vendor),
	};
}

export async function getBenchmarkLeaderboard() {
	await maybeDelay();

	return benchmarkRows
		.map((row) => ({
			...row,
			vendor: vendorLookup.get(row.vendorId),
		}))
		.sort((left, right) => right.score - left.score);
}

export async function getAdminOverview() {
	await maybeDelay();

	return {
		draftCount: stories.filter((story) => story.editorialStatus === "draft")
			.length,
		reviewCount: stories.filter((story) => story.editorialStatus === "review")
			.length,
		scheduledCount: stories.filter(
			(story) => story.editorialStatus === "scheduled",
		).length,
		publishedCount: stories.filter(
			(story) => story.editorialStatus === "published",
		).length,
		featuredSlotsFilled: stories.filter(
			(story) => story.featuredPlacement !== null,
		).length,
		sourceCount: sources.length,
	};
}

export function getCategories(): Category[] {
	return categories;
}

export function getStories(): Story[] {
	return stories;
}

export function getBenchmarks(): BenchmarkRow[] {
	return benchmarkRows;
}

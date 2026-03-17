export const libraryBoundaries = {
	query: {
		role: "Server-state caching, route-driven preloading, and mutation invalidation.",
		usedFor: [
			"feed loaders",
			"admin overview queries",
			"future editorial mutations",
		],
	},
	store: {
		role: "Lightweight client UI state that should not live in TanStack Query.",
		usedFor: [
			"theme preference",
			"future table density controls",
			"workspace UI state",
		],
	},
	virtual: {
		role: "Dense list virtualization once dashboard and ingestion views exceed comfortable DOM sizes.",
		usedFor: [
			"posts tables",
			"activity logs",
			"future ingestion candidate lists",
		],
	},
} as const;

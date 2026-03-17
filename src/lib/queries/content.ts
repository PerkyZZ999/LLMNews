import { queryOptions } from "@tanstack/react-query";
import {
	getAdminOverview,
	getBenchmarkLeaderboard,
	getHomeFeed,
	getStoriesByCategory,
	getStoryDetail,
} from "@/lib/content/seed-data";
import type { CategorySlug } from "@/lib/domain/content";

export function homeFeedQueryOptions() {
	return queryOptions({
		queryKey: ["stories", "home"],
		queryFn: getHomeFeed,
	});
}

export function storiesByCategoryQueryOptions(category: CategorySlug) {
	return queryOptions({
		queryKey: ["stories", "category", category],
		queryFn: () => getStoriesByCategory(category),
	});
}

export function storyDetailQueryOptions(storySlug: string) {
	return queryOptions({
		queryKey: ["stories", "detail", storySlug],
		queryFn: () => getStoryDetail(storySlug),
	});
}

export function benchmarkLeaderboardQueryOptions() {
	return queryOptions({
		queryKey: ["benchmarks", "leaderboard"],
		queryFn: getBenchmarkLeaderboard,
	});
}

export function adminOverviewQueryOptions() {
	return queryOptions({
		queryKey: ["admin", "overview"],
		queryFn: getAdminOverview,
	});
}

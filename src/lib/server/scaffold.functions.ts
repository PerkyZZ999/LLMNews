import { createServerFn } from "@tanstack/react-start";

import { environment } from "@/lib/env";
import { emitWideEvent } from "@/lib/observability/logger";

export const getScaffoldStatus = createServerFn({ method: "GET" }).handler(
	async () => {
		emitWideEvent("appStartup", {
			environment: environment.appEnv,
			surfaces: ["public", "auth", "admin"],
		});

		return {
			environment: environment.appEnv,
			service: "LLMNews",
			surfaces: ["public", "auth", "admin"],
		};
	},
);

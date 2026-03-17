import { z } from "zod";

const environmentSchema = z.object({
	APP_ENV: z.enum(["development", "test", "production"]).default("development"),
	APP_URL: z.string().url().default("http://localhost:3000"),
	ENABLE_MOCK_DELAY: z
		.enum(["true", "false"])
		.default("false")
		.transform((value) => value === "true"),
});

const parsedEnvironment = environmentSchema.safeParse({
	APP_ENV: import.meta.env.APP_ENV,
	APP_URL: import.meta.env.APP_URL,
	ENABLE_MOCK_DELAY: import.meta.env.ENABLE_MOCK_DELAY,
});

export const environment = parsedEnvironment.success
	? {
			appEnv: parsedEnvironment.data.APP_ENV,
			appUrl: parsedEnvironment.data.APP_URL,
			enableMockDelay: parsedEnvironment.data.ENABLE_MOCK_DELAY,
		}
	: {
			appEnv: "development" as const,
			appUrl: "http://localhost:3000",
			enableMockDelay: false,
		};

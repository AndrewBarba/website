import { randomUUID } from "node:crypto";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
	const requestId = randomUUID();
	console.log(requestId, "Processing incoming request...");
	await sleep(5_000);
	console.log(requestId, "Processing complete.");
	return Response.json(
		{
			userAgent: req.headers.get("user-agent"),
		},
		{
			headers: {
				vary: "user-agent",
				"cdn-cache-control": "max-age=3600",
			},
		},
	);
}

async function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

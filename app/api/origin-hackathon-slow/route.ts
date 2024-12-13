import { randomUUID } from "node:crypto";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
	const requestId = randomUUID();
	console.log(requestId, "Processing incoming request...");
	await sleep(10_000);
	console.log(requestId, "Processing complete.");
	return Response.json(
		{
			userAgent: req.headers.get("user-agent"),
		},
		{
			headers: {
				"hackathon-cdn-cache-control": "max-age=5",
			},
		},
	);
}

async function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

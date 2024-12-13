export const dynamic = "force-dynamic";

export async function GET(req: Request) {
	await sleep(10_000);
	return Response.json(
		{
			userAgent: req.headers.get("user-agent"),
		},
		{
			headers: {
				"cdn-cache-control": "max-age=5",
			},
		},
	);
}

async function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

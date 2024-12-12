export const dynamic = "force-dynamic";

export async function GET(req: Request) {
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

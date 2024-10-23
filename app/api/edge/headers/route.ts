export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
	return Response.json({
		headers: Array.from(req.headers.entries()).reduce(
			(acc, [key, value]) => {
				acc[key] = value;
				return acc;
			},
			{} as Record<string, string>,
		),
	});
}

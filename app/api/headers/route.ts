export const dynamic = "force-dynamic";

export async function GET(req: Request) {
	const data = {
		headers: Array.from(req.headers.entries()).reduce(
			(acc: Record<string, unknown>, [key, value]) => {
				acc[key] = value;
				return acc;
			},
			{},
		),
	};
	return new Response(JSON.stringify(data, null, 4), {
		headers: { "content-type": "application/json" },
	});
}

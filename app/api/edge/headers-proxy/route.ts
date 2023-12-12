export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export async function GET(req: Request) { 
  const url = new URL('/api/headers', `https://${req.headers.get('host')}`)
  const res = await fetch(url, {
    headers: {
      'cookie': '_vercel_debug_request_challenges=1'
    }
  })
  if (!res.ok) {
    return new Response('Failed to fetch headers', { status: 500 })
  }
  return Response.json(await res.json())
}
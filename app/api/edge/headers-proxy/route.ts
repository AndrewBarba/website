export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export async function GET(req: Request) { 
  const url = new URL('/api/headers', `https://${req.headers.get('host')}`)
  return fetch(url, {
    headers: {
      'cookie': '_vercel_debug_request_challenges=1'
    }
  })
}
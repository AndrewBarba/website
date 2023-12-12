export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export async function GET(req: Request) { 
  const url = new URL('/api/edge/headers', `https://${process.env.VERCEL_URL}`)
  return fetch(url, { cache: 'no-cache' })
}
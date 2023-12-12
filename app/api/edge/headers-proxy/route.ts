export async function GET(req: Request) { 
  const url = new URL('/api/edge/headers', `https://${process.env.VERCEL_URL}`)
  return fetch(url, { cache: 'no-cache' })
}
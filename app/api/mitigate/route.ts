export const dynamic = 'force-dynamic'

export async function GET(req: Request) { 
  return Response.json({ 
    status: 'OK'
  }, {
    headers: {
      'x-vercel-mitigate': 'challenge; ttl=600;'
    }
  })
}
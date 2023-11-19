export async function GET(req: Request) { 
  return Response.json({ 
    headers: Array.from(req.headers.entries()).reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})
  })
}
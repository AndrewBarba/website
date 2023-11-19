export async function GET(req: Request) { 
  return Response.json({ 
    headers: req.headers
  })
}
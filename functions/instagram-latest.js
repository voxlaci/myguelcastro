export async function onRequest(context) {
  const token = context.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) {
    return Response.json({ configured: false }, {
      headers: { "cache-control": "public, max-age=300" }
    });
  }

  const fields = "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp";
  const endpoint = `https://graph.instagram.com/me/media?fields=${fields}&limit=1&access_token=${encodeURIComponent(token)}`;

  try {
    const res = await fetch(endpoint);
    if (!res.ok) throw new Error(`Instagram ${res.status}`);
    const payload = await res.json();
    const post = payload.data?.[0];
    if (!post) throw new Error("No posts");

    return Response.json({
      configured: true,
      image: post.thumbnail_url || post.media_url,
      url: post.permalink,
      caption: (post.caption || "").slice(0, 180),
      timestamp: post.timestamp,
    }, {
      headers: { "cache-control": "public, max-age=900" }
    });
  } catch (err) {
    return Response.json({ configured: true, error: err.message }, { status: 502 });
  }
}

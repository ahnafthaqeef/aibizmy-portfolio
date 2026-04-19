export async function onRequestPost({ request, env }) {
  const corsHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://aibizmy.com',
  };

  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ ok: false }), { status: 400, headers: corsHeaders });
  }

  const { name, email, message } = body;
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ ok: false }), { status: 400, headers: corsHeaders });
  }

  const text =
    `📬 *New Contact — aibizmy.com*\n\n` +
    `*Name:* ${name}\n` +
    `*Email:* ${email}\n\n` +
    `*Message:*\n${message}`;

  const tgRes = await fetch(
    `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: env.TELEGRAM_CHAT_ID,
        text,
        parse_mode: 'Markdown',
      }),
    }
  );

  if (!tgRes.ok) {
    return new Response(JSON.stringify({ ok: false }), { status: 502, headers: corsHeaders });
  }

  return new Response(JSON.stringify({ ok: true }), { headers: corsHeaders });
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': 'https://aibizmy.com',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

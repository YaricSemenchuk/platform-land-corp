import { NextResponse } from 'next/server';

type Payload = {
  fullName?: string;
  company?: string;
  email?: string;
  messenger?: string;
  message?: string;
};

const formatLines = (p: Payload) => [
  `Full Name: ${p.fullName || '-'}`,
  `Company: ${p.company || '-'}`,
  `E-mail: ${p.email || '-'}`,
  `Messenger: ${p.messenger || '-'}`,
  `Message: ${p.message || '-'}`,
];

export async function POST(req: Request) {
  const data = (await req.json()) as Payload;
  const text = ['New contact form submission:', ...formatLines(data)].join('\n');

  const slackUrl = process.env.SLACK_WEBHOOK_URL;
  const tgToken = process.env.TELEGRAM_BOT_TOKEN;
  const tgChat = process.env.TELEGRAM_CHAT_ID;

  const tasks: Promise<Response>[] = [];

  if (slackUrl) {
    tasks.push(
      fetch(slackUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      }),
    );
  }

  if (tgToken && tgChat) {
    tasks.push(
      fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: tgChat,
          text,
        }),
      }),
    );
  }

  const results = await Promise.allSettled(tasks);
  const failures: { i: number; status?: number; body?: string; reason?: unknown }[] = [];
  for (let i = 0; i < results.length; i++) {
    const r = results[i];
    if (r.status === 'rejected') {
      failures.push({ i, reason: r.reason });
    } else if (!r.value.ok) {
      const body = await r.value.text().catch(() => '');
      failures.push({ i, status: r.value.status, body });
    }
  }

  if (failures.length) {
    console.error('Contact webhook failures:', JSON.stringify(failures));
    return NextResponse.json({ ok: false, failures }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

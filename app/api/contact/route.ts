import { NextResponse } from 'next/server';

type Payload = {
  fullName?: string;
  company?: string;
  email?: string;
  messenger?: string;
  message?: string;
};

const formatLines = (p: Payload) => [
  `*Full Name:* ${p.fullName || '-'}`,
  `*Company:* ${p.company || '-'}`,
  `*E-mail:* ${p.email || '-'}`,
  `*Messenger:* ${p.messenger || '-'}`,
  `*Message:* ${p.message || '-'}`,
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
          parse_mode: 'Markdown',
        }),
      }),
    );
  }

  const results = await Promise.allSettled(tasks);
  const failures = results
    .map((r, i) => ({ r, i }))
    .filter(({ r }) => r.status === 'rejected' || (r.status === 'fulfilled' && !r.value.ok));

  if (failures.length) {
    console.error('Contact webhook failures:', failures);
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

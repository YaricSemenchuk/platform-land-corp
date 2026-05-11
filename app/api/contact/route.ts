import { NextResponse } from "next/server";

type Payload = {
  fullName?: string;
  company?: string;
  email?: string;
  messenger?: string;
  message?: string;
};

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const fullName = body.fullName?.trim();
  const company = body.company?.trim();
  const email = body.email?.trim();
  const messenger = body.messenger?.trim();
  const message = body.message?.trim();

  if (!fullName || !company || !email || !messenger || !message) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 },
    );
  }

  const lines = [
    "New contact form submission",
    `Full Name: ${fullName}`,
    `Company: ${company}`,
    `E-mail: ${email}`,
    `Messenger: ${messenger}`,
    `Message: ${message}`,
  ];

  const slackUrl = process.env.SLACK_WEBHOOK_URL;
  // const tgToken = process.env.TELEGRAM_BOT_TOKEN;
  // const tgChatId = process.env.TELEGRAM_CHAT_ID;

  const tasks: Promise<Response>[] = [];

  if (slackUrl) {
    tasks.push(
      fetch(slackUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: ["*New contact form submission*", ...lines.slice(1)].join("\n"),
        }),
      }),
    );
  }

  // if (tgToken && tgChatId) {
  //   tasks.push(
  //     fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         chat_id: tgChatId,
  //         text: lines.join("\n"),
  //         disable_web_page_preview: true,
  //       }),
  //     }),
  //   );
  // }

  if (tasks.length === 0) {
    return NextResponse.json(
      { error: "No delivery channels configured" },
      { status: 500 },
    );
  }

  const results = await Promise.allSettled(tasks);
  const anyOk = results.some((r) => r.status === "fulfilled" && r.value.ok);

  if (!anyOk) {
    return NextResponse.json(
      { error: "Failed to deliver message" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

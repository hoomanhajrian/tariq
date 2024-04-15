import { Resend } from "resend";
import { NextResponse } from "next/server";
import { emailLimiter } from "../limiter";
import { EmailTemplate } from "../EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const res = await req.json();
  const remaining = await emailLimiter.removeTokens(1);
  const origin = req.headers.get("origin");

  if (remaining < 0) {
    return NextResponse.json("You have already sent a message.", {
      status: 429,
      statusText: "Too many requests",
    });
  } else {
    try {
      const data = await resend.emails.send({
        from: "Customer Request <website@littlesellca.com>",
        to: ["tariqlouiss@yahoo.com"],
        subject: `${res.user.subject}(${res.user.name})`,
        react: EmailTemplate({
          name: "name",
          email: "email",
          phone: "phone",
          request: "request",
        }),
        text: "cool",
      });

      return NextResponse.json(data, {
        status: 200,
        statusText: "Email sent",
        headers: {
          "Access-Control-Allow-Origin": origin || "*",
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      return NextResponse.json(error, { status: 500 });
    }
  }
}

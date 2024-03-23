import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { EmailTemplate } from "./EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

type Req_Data_Type = {
  name: string;
  company: string;
  email: string;
  phone: string;
  request: string;
  message: string;
  attachment: { filename: string; content: Buffer } | undefined;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;
  const {
    name,
    company,
    email,
    phone,
    request,
    message,
    attachment,
  }: Req_Data_Type = body;

  if (method === "POST") {
    try {
      const result = await resend.emails.send(
        attachment != undefined
          ? {
              from: `${name} <website@pacivil.com>`,
              to: ["info@pacivil.com"],
              subject: `${company}-${request}`,
              react: EmailTemplate({
                name: name,
                company: company,
                email: email,
                phone: phone,
                request: request,
                message: message,
              }),
              attachments: [
                {
                  filename: attachment.filename,
                  content: attachment.content,
                },
              ],
              text: req.body.request,
            }
          : {
              from: `${name} <website@pacivil.com>`,
              to: ["info@pacivil.com"],
              subject: `${company}-${request}`,
              react: EmailTemplate({
                name: name,
                company: company,
                email: email,
                phone: phone,
                request: request,
                message: message,
              }),
              text: req.body.request,
            }
      );

      if (result.data) {
        res.status(200).send(result.data);
      } else {
        res.status(500).send(result.error?.message);
      }
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  } else {
    res.status(404).send("Does not exist!");
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "25mb", // Set desired value here
    },
  },
};

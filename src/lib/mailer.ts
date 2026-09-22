import nodemailer from "nodemailer";

let transporter: ReturnType<typeof nodemailer.createTransport> | null = null;

export function getTransporter() {
  if (transporter) return transporter;

  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: Number(process.env.SMTP_PORT ?? 465) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  return transporter;
}

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "williamautoparts1950@gmail.com";
export const PUBLIC_CONTACT_EMAIL =
  process.env.PUBLIC_CONTACT_EMAIL ?? "sales2@bigskysalvage.com";

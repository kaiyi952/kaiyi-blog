import sgMail from '@sendgrid/mail';
import fs from 'fs';
import path from 'path';
import dotenv from "dotenv";
import { fileURLToPath } from 'url';

dotenv.config({ path: "../.env" });

export interface BlogUpdateData {
  blog_title: string;
  blog_excerpt: string;
  blog_url: string;
  unsubscribe_url: string;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function loadEmailTemplate(templateName: string): string {
  const templatePath = path.join(__dirname, 'emailTemplates', `${templateName}.html`);
  return fs.readFileSync(templatePath, 'utf-8');
}

export function replaceTemplateVariables(template: string, data: BlogUpdateData): string {
  let html = template;

  Object.entries(data).forEach(([key, value]) => {
    const placeholder = `{{${key}}}`;
    html = html.replace(new RegExp(placeholder, 'g'), String(value));
  });

  return html;
}

export async function sendNewsletter(subscriberEmail: string, data: BlogUpdateData): Promise<boolean> {
  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    throw new Error('SENDGRID_API_KEY is not configured');
  }

  sgMail.setApiKey(apiKey);

  const template = loadEmailTemplate('newsletter');

  const htmlContent = replaceTemplateVariables(template, data);

  const msg = {
    to: subscriberEmail,
    from: process.env.SENDGRID_SENDER || 'newsletter@kaiyi.io',
    subject: `📝 New Blog Post: ${data.blog_title}`,
    text: `Blog Update Notification\n\nNew Article: ${data.blog_title}\n\nExcerpt: ${data.blog_excerpt}\n\nRead More: ${data.blog_url}`,
    html: htmlContent,
  };

  try {
    await sgMail.send(msg);
    console.log(`Newsletter sent successfully to ${subscriberEmail}`);
    return true;
  } catch (error: unknown) {
    console.error('Error sending newsletter:', error);
    throw error;
  }
}

export async function sendSampleNewsletter(): Promise<void> {
  const sampleData: BlogUpdateData = {
    blog_title: "React 18 New Features Deep Dive",
    blog_excerpt: "Explore the new concurrency features, automatic batching, and how to use them in your projects.",
    blog_url: "https://kaiyi.io/blog/react-18-features",
    unsubscribe_url: "https://kaiyi.io/unsubscribe?email=user@example.com"
  };

  try {
    await sendNewsletter('irishe952@gmail.com', sampleData);
  } catch (error) {
    console.error('Failed to send sample newsletter:', error);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  sendSampleNewsletter();
}

export default sendNewsletter;

import { Resend } from 'resend';
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const { email, subject, content } = await req.json();

        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['yunsikk02@gmail.com'],
            subject: subject,
            html: `
                <p>From: ${email}</p>
                <p>${content}</p>
            `,
        });
        
        if (error) {
            return Response.json({ error }, { status: 500 })
        }
        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}

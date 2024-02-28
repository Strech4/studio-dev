"use server"
import { EmailTemplate } from "@/components/resend/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data) {

    const senderEmail = data.email;
    const emailObject = data.emailObject;
    const message = data.message;

    if(!senderEmail || !emailObject || !message){
        return false
    }

    const Sendemail = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'contact@studio-dev.fr',
        subject: emailObject || "error in sendEmail Function",
        react: EmailTemplate({ message, senderEmail, emailObject })
    });
    
    if(Sendemail) return true; else return false;
    
}
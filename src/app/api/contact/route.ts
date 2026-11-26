import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const { name, firstName, email, phone, message } = await request.json();

        if (
            typeof name !== "string" ||
            typeof email !== "string" ||
            typeof message !== "string" ||
            (typeof firstName !== "undefined" &&
                typeof firstName !== "string") ||
            (typeof phone !== "undefined" && typeof phone !== "string")
        ) {
            return NextResponse.json(
                { error: "Données invalides." },
                { status: 400 },
            );
        }

        if (
            !name.trim() ||
            !email.trim() ||
            !message.trim() ||
            name.length > 100 ||
            email.length > 254 ||
            message.length > 5000 ||
            (firstName !== undefined && firstName.length > 100) ||
            (phone !== undefined && phone.length > 30) ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
        ) {
            return NextResponse.json(
                { error: "Veuillez vérifier les champs du formulaire." },
                { status: 400 },
            );
        }

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: `SITE MAGNETISME : Nouveau message de ${firstName?.trim() || ""} ${name.trim()} <${process.env.GMAIL_USER}>`,
            to: process.env.CONTACT_EMAIL,
            replyTo: email.trim(),
            subject: `SITE MAGNETISME : Nouveau message de ${firstName?.trim() || ""} ${name.trim()}`,
            text: `
                Nom : ${name.trim()}
                Prénom : ${firstName?.trim() || "Non renseigné"}
                Email : ${email.trim()}
                Téléphone : ${phone?.trim() || "Non renseigné"}

                Message :
                ${message.trim()}
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact form error:", error);

        return NextResponse.json(
            { error: "Impossible d'envoyer le message." },
            { status: 500 },
        );
    }
}

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, firstName, email, phone, message } = await request.json();

        // Basic validation
        if (
            typeof name !== "string" ||
            typeof email !== "string" ||
            typeof message !== "string" ||
            !name.trim() ||
            !email.trim() ||
            !message.trim() ||
            name.length > 100 ||
            email.length > 254 ||
            message.length > 5000
        ) {
            return NextResponse.json(
                { error: "Veuillez vérifier les champs du formulaire." },
                { status: 400 },
            );
        }

        const { data, error } = await resend.emails.send({
            from: `Site magnétisme : Nouvelle prise de contact de ${name.trim()} <${process.env.EMAIL_FROM!}>`,
            to: process.env.EMAIL_CONTACT!,
            replyTo: email.trim(),
            subject: `Nouveau message de ${name.trim()}`,
            text: `
                Nom : ${name}
                Prénom : ${firstName || "Non renseigné"}
                Email : ${email}
                Téléphone : ${phone || "Non renseigné"}

                Message :
                ${message}
            `,
        });

        if (error) {
            console.error("Resend error:", error);

            return NextResponse.json(
                { error: "Impossible d'envoyer le message." },
                { status: 500 },
            );
        }

        return NextResponse.json({ success: true, id: data?.id });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Une erreur est survenue." },
            { status: 500 },
        );
    }
}

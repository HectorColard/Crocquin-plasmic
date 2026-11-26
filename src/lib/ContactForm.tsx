"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
    const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");

    async function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setStatus("loading");

        const form = event.currentTarget;
        const formData = new FormData(form);

        const payload = {
            name: formData.get("name"),
            firstName: formData.get("firstName"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            form.reset();
            setStatus("success");
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    }

    return (
        <form className="contact-form card" onSubmit={submit}>
            <header>
                <h3>Formulaire de contact</h3>
            </header>

            <div className="fields">
                <label>
                    Nom *
                    <input name="name" placeholder="Votre nom" required />
                </label>

                <label className="desktop-only-field">
                    Prénom *
                    <input name="firstName" placeholder="Votre prénom" required />
                </label>

                <label>
                    Email *
                    <input
                        name="email"
                        type="email"
                        placeholder="votre@email.fr"
                        required
                    />
                </label>

                <label>
                    Téléphone *
                    <input
                        name="phone"
                        type="tel"
                        placeholder="06 12 34 56 78"
                        required
                    />
                </label>

                <label>
                    Message *
                    <textarea
                        name="message"
                        placeholder="Décrivez votre demande…"
                        required
                    />
                </label>
            </div>

            {status === "success" && (
                <p role="status">Votre message a bien été envoyé !</p>
            )}

            {status === "error" && (
                <p role="alert">Une erreur est survenue. Veuillez réessayer.</p>
            )}

            <button
                className="button primary submit"
                type="submit"
                disabled={status === "loading"}
            >
                {status === "loading"
                    ? "Envoi en cours..."
                    : status === "success"
                      ? "Message envoyé"
                      : "Envoyer"}
            </button>
        </form>
    );
}

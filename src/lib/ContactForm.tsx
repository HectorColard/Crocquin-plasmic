"use client";
import { SubmitEvent, useState } from "react";

export function ContactForm() {
    const [sent, setSent] = useState(false);

    function submit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        setSent(true);
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
                    Prénom
                    <input name="firstName" placeholder="Votre prénom" />
                </label>
                <label>
                    Email
                    <input
                        name="email"
                        type="email"
                        placeholder="votre@email.fr"
                        required
                    />
                </label>
                <label>
                    Téléphone
                    <input
                        name="phone"
                        type="tel"
                        placeholder="06 12 34 56 78"
                    />
                </label>
                <label>
                    Message
                    <textarea
                        name="message"
                        placeholder="Décrivez votre demande…"
                    />
                </label>
            </div>
            <button className="button primary submit" type="submit">
                {sent ? "Message envoyé" : "Envoyer"}
            </button>
        </form>
    );
}

import { SectionHeading } from "../ui/SectionHeading";
import { ContactForm } from "@/lib/ContactForm";

type ContactProps = {
    heading?: {
        title: string;
        description: string;
    };
    email?: string;
    phone?: string;
    hours?: string;
};

const defaultProps: Required<ContactProps> = {
    heading: {
        title: "Contact",
        description:
            "N'hésitez pas à me contacter pour prendre rendez-vous ou pour toute question sur mes séances.",
    },
    email: "12 rue de la Paix, 75002 Paris",
    phone: "+33 6 12 34 56 78",
    hours: "Du lundi au vendredi sur rendez-vous",
};
export function Contact({
    heading = defaultProps.heading,
    email = defaultProps.email,
    phone = defaultProps.phone,
    hours = defaultProps.hours,
}: ContactProps) {
    return (
        <section className="contact section" id="contact">
            <SectionHeading title={heading.title}>
                {heading.description}
            </SectionHeading>
            <div className="contact-columns">
                <ContactForm />
                <aside className="contact-details card">
                    <h3>Email &amp; téléphone</h3>
                    <div className="muted">
                        <p>Catherine Lajudie-Rocquin</p>
                        <p>{email}</p>
                        <p className="phone">Tél. : {phone}</p>
                    </div>
                </aside>
            </div>
        </section>
    );
}

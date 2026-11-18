import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard, type TestimonialCardProps } from "@/components/ui/TestimonialCard";
import { Pagination } from "@/lib/Pagination";

type TestimonialProps = {
    heading?: string;
    testimonials?: TestimonialCardProps[];
};

const testimonials: TestimonialProps["testimonials"] = [
  {
    quote:
      "“J'ai retrouvé une sérénité profonde après mes séances. Catherine sait créer un espace de confiance et de bien-être.”",
    author: "Sophie M.",
    location: "Paris",
  },
  {
    quote:
      "“Un accompagnement doux et précis. J'ai ressenti une réelle libération des tensions et une meilleure cohérence intérieure.”",
    author: "Marc L.",
    location: "Lyon",
  },
  {
    quote:
      "“Une approche naturelle et apaisante. Je recommande vivement pour retrouver son équilibre et sa vitalité.”",
    author: "Anaïs R.",
    location: "Bordeaux",
  },
];

const defaultProps: Required<TestimonialProps> = {
    heading: "Témoignages",
    testimonials: testimonials,
};

export function Testimonial({
    heading = defaultProps.heading,
    testimonials = defaultProps.testimonials,
}: TestimonialProps) {
    return (
        <section className="testimonials section" id="temoignages">
          <SectionHeading title={heading}>
            Des retours clients qui parlent d'eux-mêmes : bien-être, sérénité et équilibre
            retrouvés.
          </SectionHeading>
          <div className="card-row scroll-row">
            {testimonials.map((item) => (
              <TestimonialCard key={item.author} item={item} />
            ))}
          </div>
          <Pagination count={3} />
        </section>
    );
}
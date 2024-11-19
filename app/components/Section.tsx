interface SectionProps {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    imgSrc: string;
    link: string;
  }
  
  export default function Section({ id, title, subtitle, description, imgSrc, link }: SectionProps) {
    return (
      <section id={id} className="py-8">
        <h5 className="text-sm uppercase">{title}</h5>
        <h2 className="text-3xl font-bold">{subtitle}</h2>
        <h3 className="text-xl text-gray-600">{description}</h3>
        <a href={link} className="text-blue-600 hover:underline">
          Learn More
        </a>
        <img src={imgSrc} alt={title} className="mt-4 w-full rounded-lg shadow-lg" />
      </section>
    );
  }
import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Welkom!</h1>
      <p className="mb-4">
        {`Beyond Web Solutions is een softwarebedrijf dat zich richt op het ontwikkelen van robuuste webapplicaties met moderne technieken. Wij specialiseren ons in het bouwen van hoogwaardige, op maat gemaakte softwareoplossingen die aansluiten bij de behoeften van onze klanten. Ons doel is om efficiënte, schaalbare producten te leveren, met een sterke focus op kwaliteit, transparantie en samenwerking. Op deze blog delen we onze inzichten, codestijlen, ontwikkelingspraktijken en de lessen die we onderweg hebben geleerd.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}

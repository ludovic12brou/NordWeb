import SectionTitle from "./SectionTitle";

export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: "NordWeb a transformé notre présence en ligne. Le site est magnifique et nos ventes ont doublé en 3 mois. Une équipe professionnelle et à l'écoute!",
      author: "Marie Chabot",
      role: "Directrice Marketing, TechFlow Inc.",
      initials: "MC"
    },
    {
      rating: 5,
      text: "Un service exceptionnel du début à la fin. Notre nouveau site e-commerce est exactement ce dont nous avions besoin. Le support technique est réactif et efficace.",
      author: "Jean Tremblay",
      role: "PDG, Boutique Élégance",
      initials: "JT"
    },
    {
      rating: 5,
      text: "Collaborer avec NordWeb a été un véritable plaisir. Ils ont compris notre vision et l'ont dépassée. Notre trafic web a augmenté de 250% grâce à leur expertise SEO.",
      author: "Sophie Lavoie",
      role: "Fondatrice, Zen Wellness",
      initials: "SL"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#091E30]">
      <div className="container">
        <SectionTitle title="Ce Que Disent Nos Clients" subtitle="La satisfaction client au cœur de notre mission" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-orange-500/30 hover:-translate-y-2 hover:border-orange-500/60 hover:shadow-2xl transition-all duration-300">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               
               <div className="text-orange-500 text-xl mb-4">
                 {"★".repeat(testimonial.rating)}
               </div>
               
               <p className="text-gray-200 italic mb-6 leading-relaxed">
                 "{testimonial.text}"
               </p>
               
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">
                   {testimonial.initials}
                 </div>
                 <div>
                   <div className="font-bold text-white">{testimonial.author}</div>
                   <div className="text-sm text-gray-400">{testimonial.role}</div>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

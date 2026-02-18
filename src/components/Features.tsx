import SectionTitle from "./SectionTitle";

export default function Features() {
  const features = [
    {
      number: "01",
      title: "Expertise Technique",
      description: "Notre équipe maîtrise les technologies les plus récentes pour créer des solutions innovantes et performantes."
    },
    {
      number: "02",
      title: "Approche Personnalisée",
      description: "Chaque projet est unique. Nous adaptons nos solutions à vos besoins spécifiques et vos objectifs."
    },
    {
      number: "03",
      title: "Design Premium",
      description: "Des interfaces élégantes et modernes qui captivent vos visiteurs et renforcent votre image de marque."
    },
    {
      number: "04",
      title: "Résultats Mesurables",
      description: "Nous nous concentrons sur des KPIs concrets: trafic, conversions, et retour sur investissement."
    },
    {
      number: "05",
      title: "Support Dédié",
      description: "Une équipe à votre écoute pour répondre à vos questions et gérer vos demandes rapidement."
    },
    {
      number: "06",
      title: "Prix Transparents",
      description: "Pas de frais cachés. Des forfaits clairs et des devis détaillés pour une totale transparence."
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#091E30]">
      <div className="container">
        <SectionTitle title="Pourquoi Choisir NordWeb?" subtitle="L'excellence à chaque étape de votre projet" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative bg-white/5 border border-white/5 rounded-2xl p-8 border-l-4 border-l-orange-500 hover:translate-x-2 transition-transform duration-300 hover:shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="text-4xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-orange-300 mb-4">
                {feature.number}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

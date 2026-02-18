import SectionTitle from "./SectionTitle";

export default function Portfolio() {
  const projects = [
    {
      category: "E-commerce",
      title: "Boutique Mode Premium",
      description: "Site e-commerce avec +300% de conversion en 6 mois",
      tags: ["E-commerce", "SEO"],
      gradient: "from-orange-500 to-orange-300"
    },
    {
      category: "Corporate",
      title: "Plateforme SaaS B2B",
      description: "Application web complexe avec tableau de bord analytique",
      tags: ["Web App", "Dashboard"],
      gradient: "from-[#1D4E89] to-[#4A90E2]"
    },
    {
      category: "Restaurant",
      title: "Chaîne de Restaurants",
      description: "Site vitrine multi-localisations avec réservation en ligne",
      tags: ["Réservation", "Responsive"],
      gradient: "from-[#0E2A4F] via-[#1D4E89] to-[#4A90E2]"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-[#0E2A4F] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(74,144,226,0.1)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="container relative z-10">
        <SectionTitle title="Nos Réalisations" subtitle="Des projets qui font la différence" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-slate-900/80 border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300">
              <div className="h-64 overflow-hidden relative">
                <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                  <span className="text-2xl font-bold text-white font-heading">{project.category}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-md border border-orange-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

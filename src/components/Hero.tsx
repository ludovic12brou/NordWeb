import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800"
    >
      {/* Animated Background */}
      <ParticleBackground />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(29,78,137,0.08)_0%,transparent_50%)]" />
      </div>

      <div className="container relative z-10 text-center max-w-5xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Transformez Votre Présence En Ligne
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Solutions professionnelles de création et gestion de sites web pour
          propulser votre entreprise vers le succès numérique
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <a href="#contact" className="btn btn-primary text-lg px-8 py-4">
            Démarrer Votre Projet
          </a>
          <a href="#services" className="btn btn-secondary text-lg px-8 py-4">
            Découvrir Nos Services
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-white/5 rounded-lg border border-white/10 transition-colors hover:bg-white/8">
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-sm text-gray-400">Projets Réalisés</div>
          </div>
          <div className="p-6 bg-white/5 rounded-lg border border-white/10 transition-colors hover:bg-white/8">
            <div className="text-3xl font-bold text-white mb-2">98%</div>
            <div className="text-sm text-gray-400">Clients Satisfaits</div>
          </div>
          <div className="p-6 bg-white/5 rounded-lg border border-white/10 transition-colors hover:bg-white/8">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-sm text-gray-400">Support Technique</div>
          </div>
        </div>
      </div>
    </section>
  );
}

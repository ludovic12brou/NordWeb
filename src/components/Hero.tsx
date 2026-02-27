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
          Solutions professionnelles de création et gestion de sites web pour propulser votre entreprise vers le succès
          numérique
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <a href="#contact" className="btn btn-primary text-lg px-8 py-4">
            Démarrer Votre Projet
          </a>
          <a href="#services" className="btn btn-secondary text-lg px-8 py-4">
            Découvrir Nos Services
          </a>
        </div>
      </div>
    </section>
  );
}

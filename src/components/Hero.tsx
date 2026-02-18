export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-[#7c2d12]">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(249,115,22,0.15)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(249,115,22,0.25)_0%,transparent_50%)] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(29,78,137,0.1)_0%,transparent_50%)] animate-pulse delay-2000" />
      </div>

      <div className="container relative z-10 text-center max-w-5xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-indigo-100 mb-6 leading-tight">
          Transformez Votre Présence En Ligne
        </h1>
        <p className="text-xl md:text-2xl text-white/85 mb-12 max-w-3xl mx-auto leading-relaxed">
          Solutions professionnelles de création et gestion de sites web pour propulser votre entreprise vers le succès numérique
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
          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:-translate-y-1 transition-transform">
            <div className="text-4xl font-extrabold text-white mb-2">500+</div>
            <div className="text-sm text-white/80">Projets Réalisés</div>
          </div>
          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:-translate-y-1 transition-transform">
            <div className="text-4xl font-extrabold text-white mb-2">98%</div>
            <div className="text-sm text-white/80">Clients Satisfaits</div>
          </div>
          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:-translate-y-1 transition-transform">
            <div className="text-4xl font-extrabold text-white mb-2">24/7</div>
            <div className="text-sm text-white/80">Support Technique</div>
          </div>
        </div>
      </div>
    </section>
  );
}

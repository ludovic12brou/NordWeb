"use client";

import { useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after first trigger
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Création de sites web",
      description:
        "Sites web modernes et performants, conçus sur mesure pour répondre à vos objectifs business.",
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      title: "Hébergement sécurisé",
      description:
        "Infrastructure fiable et maintenue, garantissant disponibilité et performance optimale de votre site.",
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden"
    >
      <div className="container">
        <SectionTitle
          title="Nos Services"
          subtitle="Votre partenaire digital de confiance"
        />

        <div className="max-w-5xl mx-auto mt-16 space-y-12">
          {/* Message principal */}
          <div
            className={`text-center max-w-3xl mx-auto px-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <h3 className="text-3xl md:text-4xl text-white font-bold leading-tight mb-6">
              Nous vous aidons à vous orienter dans la réalisation de vos
              projets
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              De la conception initiale au déploiement final, nous vous
              accompagnons à chaque étape pour transformer votre vision en une
              présence digitale performante.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white/5 border border-white/10 rounded-lg p-8 
                  hover:bg-white/10 hover:border-orange-500/70 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-700
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{
                  transitionDelay: isVisible ? `${(index + 1) * 200}ms` : "0ms",
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                      {service.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Subtle progress indicator on hover */}
                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>

          {/* Call to action subtitle */}
          <div
            className={`text-center text-gray-400 max-w-2xl mx-auto px-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
          >
            <p className="text-lg">
              Notre expertise technique et notre approche personnalisée
              garantissent des solutions adaptées à vos besoins spécifiques.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

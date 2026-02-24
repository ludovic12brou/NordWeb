import Image from "next/image";
import SectionTitle from "./SectionTitle";

export default function About() {
  const team = [
    {
      name: "Ludovic Brouillette",
      role: "Co-fondateur",
      image: "/ludovic_brouillette.jpeg",
      description: "Passionné par l'innovation numérique et la stratégie web.",
    },
    {
      name: "Charles-Antoine Giroux",
      role: "Co-fondateur",
      image: "/charles-antoine_giroux.jpeg",
      description:
        "Expert en développement technologique et solutions sur mesure.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-slate-800 to-slate-900"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Notre Équipe"
          subtitle="Les visages derrière NordWeb"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
          {team.map((member, index) => (
            <div key={index} className="group relative">
              <div className="relative overflow-hidden rounded-lg aspect-[3/4] mb-6 shadow-md mx-auto max-w-xs">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 z-10" />
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-orange-500 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

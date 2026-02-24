import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#05111D] border-t border-white/5 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <Link href="#" className="inline-flex items-center">
              <Image
                src="/logo.png"
                alt="NordWeb Logo"
                width={55}
                height={55}
                className="h-12 w-auto"
              />
              <div className="flex flex-col ml-2">
                <span className="text-white font-bold text-xl">NordWeb</span>
                <span className="text-orange-500 font-medium text-sm">
                  Solutions Web
                </span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Votre partenaire de confiance pour des solutions web
              d&apos;excellence.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              {["Services", "Avantages", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace("é", "e").replace("à", "a")}`}
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          <p>&copy; 2026 NordWeb. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

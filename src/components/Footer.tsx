import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#05111D] border-t border-white/5 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <a href="#" className="inline-block">
              <Image 
                src="/logo-horizontal.svg" 
                alt="NordWeb Logo" 
                width={180} 
                height={55} 
                className="h-12 w-auto"
              />
            </a>
            <p className="text-gray-400 leading-relaxed">
              Votre partenaire de confiance pour des solutions web d'excellence.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              {['Services', 'Avantages', 'Portfolio', 'Contact'].map(item => (
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
          
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Suivez-Nous</h4>
            <div className="flex gap-4">
               {/* Facebook */}
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-700 hover:text-white transition-all">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                   <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                 </svg>
              </a>
              {/* Twitter */}
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-sky-500 hover:text-white transition-all">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                   <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                 </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          <p>&copy; 2026 NordWeb. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

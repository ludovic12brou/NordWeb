"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  
  const [notification, setNotification] = useState<{message: string, type: 'success' | 'error'} | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulation
    if (!formData.name || !formData.email || !formData.message) {
      setNotification({ message: 'Veuillez remplir tous les champs obligatoires.', type: 'error' });
      return;
    }

    setNotification({ message: 'Message envoyé avec succès! Nous vous contacterons bientôt.', type: 'success' });
    setFormData({ name: "", email: "", company: "", message: "" });
    
    setTimeout(() => setNotification(null), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-900 to-[#0E2A4F]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-4">Prêt à Démarrer Votre Projet?</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Discutons de vos besoins et découvrez comment NordWeb peut propulser votre entreprise vers le succès numérique.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-orange-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Téléphone</div>
                  <div className="text-white font-semibold">+1 (514) 555-NORD</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-orange-500">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="text-white font-semibold">contact@nordweb.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-orange-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Localisation</div>
                  <div className="text-white font-semibold">Montréal, Québec</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-white/5 p-6 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nom Complet</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Adresse Email</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Entreprise</label>
                <input 
                  type="text" 
                  id="company"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  placeholder="Nom de votre entreprise"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea 
                  id="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  placeholder="Parlez-nous de votre projet..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              
              <button type="submit" className="w-full btn btn-primary text-lg">
                Envoyer le Message
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Notification Toast */}
      {notification && (
        <div className={`fixed top-24 right-5 px-6 py-4 rounded-xl shadow-2xl z-50 text-white font-semibold animate-in slide-in-from-right duration-300 ${
          notification.type === 'success' ? 'bg-emerald-500' : 'bg-red-500'
        }`}>
          {notification.message}
        </div>
      )}
    </section>
  );
}

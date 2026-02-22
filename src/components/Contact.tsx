"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  company: string;
  message: string;
  _gotcha: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [notification, setNotification] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    try {
      const API_URL = "https://mail-client-647822815809.northamerica-northeast1.run.app";

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company,
          message: data.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setNotification({ message: "Message envoyé avec succès! Nous vous contacterons bientôt.", type: "success" });
        reset();
        setTimeout(() => setNotification(null), 5000);
      } else {
        throw new Error(result.error || "Une erreur est survenue lors de l'envoi.");
      }
    } catch (error) {
      console.error(error);
      setNotification({ message: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.", type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-900 to-[#0E2A4F]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-4">Prêt à Démarrer Votre Projet?</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Discutons de vos besoins et découvrez comment NordWeb peut propulser votre entreprise vers le succès
              numérique.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-orange-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Téléphone</div>
                  <div className="text-white font-semibold">+1 (514) 555-NORD</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-orange-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="text-white font-semibold">contact@nordweb.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-orange-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Localisation</div>
                  <div className="text-white font-semibold">Montréal, Québec</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-white/5 p-6 rounded-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Nom Complet
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  placeholder="Votre nom"
                  {...register("name", { required: "Le nom est obligatoire." })}
                />
                {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Adresse Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  placeholder="votre@email.com"
                  {...register("email", {
                    required: "L'adresse email est obligatoire.",
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "L'adresse email est invalide." },
                  })}
                />
                {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                  Entreprise
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  placeholder="Nom de votre entreprise"
                  {...register("company")}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  placeholder="Parlez-nous de votre projet..."
                  {...register("message", { required: "Le message est obligatoire." })}
                />
                {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>}
              </div>

              {/* Anti-spam Honeypot field - hidden from users */}
              <input
                type="text"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                {...register("_gotcha")}
              />

              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn btn-primary text-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Envoi en cours...
                  </>
                ) : (
                  "Envoyer le Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Notification Toast */}
      {notification && (
        <div
          className={`fixed top-24 right-5 px-6 py-4 rounded-xl shadow-2xl z-50 text-white font-semibold animate-in slide-in-from-right duration-300 ${
            notification.type === "success" ? "bg-emerald-500" : "bg-red-500"
          }`}
        >
          {notification.message}
        </div>
      )}
    </section>
  );
}

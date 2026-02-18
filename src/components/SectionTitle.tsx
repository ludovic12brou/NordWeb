export default function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center mb-16">
      <h2 className="section-title relative inline-block text-4xl font-extrabold text-white mb-6">
        {title}
      </h2>
      <p className="section-subtitle text-xl text-gray-300 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}

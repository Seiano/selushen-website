import { company } from '@/data/company';

export default function Certifications() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            International Certifications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our products meet the highest international standards for quality and safety
          </p>
          <div className="mt-4 h-1 w-20 mx-auto rounded-full bg-accent" />
        </div>

        <div className="flex justify-center items-stretch gap-4 md:gap-6 max-w-5xl mx-auto">
          {company.certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex-1 min-w-0 bg-white rounded-xl p-4 md:p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h4 className="font-heading font-semibold text-primary text-sm">{cert.name}</h4>
              <p className="text-gray-500 text-xs mt-1">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from 'next';
import { company } from '@/data/company';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${company.brand} - a 58,000 sqm fire door manufacturer with ISO, UL, and 3C certifications. 8 branch offices across China, serving 50+ countries worldwide.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900 to-primary opacity-90" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            About STS-SOLUTION
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Your trusted partner for door opening system solutions since establishment
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-primary">{company.name.en}</strong> is an integrated enterprise
                  specializing in research & development, production, sales, consulting, and engineering services.
                </p>
                <p>
                  We are committed to providing safe, reliable, and innovative door opening system solutions,
                  striving to become a global leader in the industry. With our 58,000 sqm state-of-the-art
                  manufacturing facility and international advanced sheet metal flexible processing production lines,
                  we deliver world-class fire doors and specialized door systems to customers worldwide.
                </p>
                <p>
                  Our products are widely used in commercial buildings, schools, hotels, hospitals, rail transit,
                  airports, industrial facilities, exhibition centers, nuclear plants, and high-end residential projects.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/office/office-01.jpg')" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '58,000', unit: 'sqm', label: 'Production & Office Area' },
              { value: '50M', unit: 'RMB', label: 'Registered Capital' },
              { value: '8', unit: '+', label: 'Branch Offices' },
              { value: '6', unit: '+', label: 'International Certifications' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold text-primary">
                  {stat.value}
                  <span className="text-accent text-2xl ml-1">{stat.unit}</span>
                </div>
                <p className="text-gray-500 mt-2 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {company.mission}
          </p>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Our Journey
          </h2>
          <div className="max-w-3xl mx-auto">
            {company.milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary-900 font-heading font-bold text-sm shrink-0">
                    {index + 1}
                  </div>
                  {index < company.milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-accent/30 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    {milestone.year}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-primary mt-1">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branch Offices */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Nationwide Service Network
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With headquarters in Nanjing and branch offices across 8 major cities, we provide comprehensive
              service coverage throughout China and beyond.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {company.branches.map((branch) => (
              <div
                key={branch}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <svg className="w-8 h-8 text-accent mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-heading font-semibold text-primary">{branch}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Capabilities */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
                Production Capabilities
              </h2>
              <ul className="space-y-4">
                {company.productionCapabilities.map((cap, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden aspect-[4/3]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/factory/factory-01.jpg')" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Target Markets */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            Application Scenarios
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Our products serve a wide range of industries and building types
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {company.targetMarkets.map((market) => (
              <div
                key={market}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-sm font-medium text-primary">{market}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

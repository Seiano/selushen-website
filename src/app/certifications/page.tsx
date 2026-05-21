import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Certifications',
  description: `STS-SOLUTION holds ISO 9001, ISO 14001, ISO 45001, UL, and 3C certifications. Our products meet the highest international standards.`,
};

export default function CertificationsPage() {
  const certDetails = [
    {
      name: 'ISO 9001:2015',
      fullName: 'Quality Management System',
      description:
        'Our quality management system ensures consistent product quality and continuous improvement across all processes. ISO 9001 certification validates our commitment to meeting customer requirements and regulatory standards.',
      image: '/images/certifications/3c-cert.png',
      highlights: [
        'Systematic quality control processes',
        'Continuous improvement methodology',
        'Customer satisfaction focus',
        'Documented procedures for all operations',
      ],
    },
    {
      name: 'ISO 14001:2015',
      fullName: 'Environmental Management System',
      description:
        'Our environmental management system demonstrates our commitment to reducing environmental impact. We implement sustainable manufacturing practices and continuously monitor our environmental performance.',
      image: '/images/certifications/3c-cert.png',
      highlights: [
        'Sustainable manufacturing practices',
        'Waste reduction and recycling programs',
        'Energy efficiency optimization',
        'Environmental impact monitoring',
      ],
    },
    {
      name: 'ISO 45001:2018',
      fullName: 'Occupational Health & Safety Management',
      description:
        'Our occupational health and safety management system ensures a safe working environment for all employees. We maintain strict safety protocols and provide ongoing safety training.',
      image: '/images/certifications/3c-cert.png',
      highlights: [
        'Comprehensive safety protocols',
        'Regular safety training programs',
        'Incident prevention and reporting',
        'Worker health monitoring',
      ],
    },
    {
      name: 'UL Certification',
      fullName: 'Underwriters Laboratories Safety Certification',
      description:
        'UL certification is one of the most recognized safety certifications globally. Our fire doors have been independently tested and certified by UL to meet rigorous safety standards for the North American and international markets.',
      image: '/images/certifications/ul-cert.png',
      highlights: [
        'Independent third-party testing',
        'North American market access',
        'Rigorous fire safety standards',
        'Ongoing compliance monitoring',
      ],
    },
    {
      name: '3C Certification',
      fullName: 'China Compulsory Product Certification',
      description:
        '3C certification is mandatory for fire door products sold in China. Our products meet all national safety, electromagnetic compatibility, and environmental protection requirements.',
      image: '/images/certifications/3c-cert.png',
      highlights: [
        'Mandatory Chinese safety standard',
        'National fire safety compliance',
        'Product quality assurance',
        'Regular factory inspections',
      ],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Certifications & Standards
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our products are certified to the highest international standards for quality, safety, and environmental responsibility
          </p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {certDetails.map((cert, index) => (
              <div
                key={cert.name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="rounded-2xl overflow-hidden bg-gray-50 shadow-lg p-4 flex items-center justify-center min-h-[300px]">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-auto max-h-[500px] object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    {cert.fullName}
                  </span>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mt-2 mb-4">
                    {cert.name}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {cert.description}
                  </p>
                  <ul className="space-y-3">
                    {cert.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Committed to Quality & Safety
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Every product that leaves our factory undergoes rigorous quality testing to ensure it meets or exceeds
            the requirements of our international certifications.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-accent text-primary-900 px-8 py-3 rounded font-heading font-semibold hover:bg-accent-400 transition-colors"
          >
            Request Certification Documents
          </a>
        </div>
      </section>
    </>
  );
}

import React, { useState, useRef } from 'react';

/**
 * Responsive, accessible FAQ section.
 * - Modern, minimalist, bright design
 * - Two-column (desktop), single-column (mobile/tablet)
 * - Accessible accordion: ARIA, keyboard, semantic HTML
 * - Smooth expand/collapse animation
 * - WCAG AA contrast, minimum font sizes
 * 
 * Dependencies: Tailwind CSS (no extra packages)
 * Assumptions: 
 *   - Tailwind CSS is set up in your project.
 *   - Replace the image URL with your own brand asset if desired.
 */

const faqs = [
  {
    question: 'Design should enrich our day',
    answer:
      'Our design services start and end with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people.',
  },
  {
    question: 'Bring their individual experience and creative',
    answer:
      'We believe in the power of diverse perspectives. Our team brings unique experiences and creativity to every project, ensuring innovative solutions.',
  },
  {
    question: 'Human centred design to challenges',
    answer:
      'We approach every challenge with a human-centered mindset, focusing on the needs and experiences of your users.',
  },
  {
    question: 'Developing core web applications',
    answer:
      'From concept to launch, we develop robust, scalable web applications tailored to your business goals.',
  },
  {
    question: 'Are they everything to everyone?',
    answer:
      'We focus on what we do best, delivering specialized solutions that make a real impact for our clients.',
  },
];

const ACCENT_COLOR = 'text-blue-600'; // Change to match your brand palette

const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Keyboard navigation: up/down arrow, Home/End
  const handleKeyDown = (e: React.KeyboardEvent, idx: number) => {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(e.key)) return;
    e.preventDefault();
    let nextIdx = idx;
    if (e.key === 'ArrowDown') nextIdx = (idx + 1) % faqs.length;
    if (e.key === 'ArrowUp') nextIdx = (idx - 1 + faqs.length) % faqs.length;
    if (e.key === 'Home') nextIdx = 0;
    if (e.key === 'End') nextIdx = faqs.length - 1;
    buttonRefs.current[nextIdx]?.focus();
  };

  return (
    <section
      className="bg-white py-16 px-4 md:px-0 border-t border-b border-gray-100"
      aria-labelledby="faq-section-title"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
        {/* Left: Accordion (60% on desktop) */}
        <div className="md:col-span-3">
          <h2
            id="faq-section-title"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-10 leading-tight"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            We Are A Digital Agency For<br className="hidden md:block" />
            Visually Frequency And<br className="hidden md:block" />
            Questions ReBrand.
          </h2>
          <div className="space-y-0 rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm">
            {faqs.map((faq, idx) => (
              <div key={faq.question} className="group">
                <button
                  ref={el => (buttonRefs.current[idx] = el)}
                  type="button"
                  aria-expanded={openIdx === idx}
                  aria-controls={`faq-panel-${idx}`}
                  id={`faq-header-${idx}`}
                  className={`w-full flex items-center justify-between min-h-[48px] px-6 py-4 text-left transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
                    ${openIdx === idx ? 'bg-gray-50' : 'bg-white'}
                  `}
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  onKeyDown={e => handleKeyDown(e, idx)}
                >
                  <span
                    className="font-semibold text-lg md:text-xl text-gray-900"
                    style={{ minHeight: 24, fontSize: '18px' }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`ml-4 flex-shrink-0 transition-transform duration-300 ease-in-out
                      ${openIdx === idx ? 'rotate-180' : ''}
                    `}
                    aria-hidden="true"
                  >
                    {/* Icon: + (collapsed), – (expanded) */}
                    <svg
                      className={`w-6 h-6 ${ACCENT_COLOR}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {openIdx === idx ? (
                        // Minus
                        <line x1="5" y1="12" x2="19" y2="12" />
                      ) : (
                        // Plus
                        <>
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </>
                      )}
                    </svg>
                  </span>
                </button>
                {/* Divider */}
                {idx !== faqs.length - 1 && (
                  <div className="border-t border-gray-200 mx-6" aria-hidden="true" />
                )}
                {/* Answer panel */}
                <div
                  id={`faq-panel-${idx}`}
                  role="region"
                  aria-labelledby={`faq-header-${idx}`}
                  className={`overflow-hidden transition-all duration-400 ease-in-out
                    ${openIdx === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                  `}
                  style={{
                    transitionProperty: 'max-height, opacity',
                  }}
                >
                  <div
                    className={`px-6 pb-6 pt-1 text-gray-600 text-base md:text-lg leading-relaxed
                      transition-opacity duration-400
                      ${openIdx === idx ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
                    `}
                    style={{
                      fontSize: '16px',
                      lineHeight: 1.7,
                      transition: 'opacity 0.4s, transform 0.4s',
                    }}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right: Supporting image (40% on desktop) */}
        <div className="md:col-span-2 flex flex-col items-center md:items-end mt-12 md:mt-0">
          <img
            src="https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&w=600&q=80"
            alt="Branding design mockups"
            className="rounded-2xl shadow-xl w-full max-w-md object-cover border border-gray-100"
            style={{ background: '#f7f7f7' }}
          />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

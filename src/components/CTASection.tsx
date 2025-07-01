import React from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * Responsive, accessible Call to Action (CTA) section.
 * - Dark, high-contrast background with rounded corners
 * - Two-column layout on desktop, stacked on mobile/tablet
 * - Large, bold heading; right-aligned description and CTA button
 * - Accessible button: ARIA label, keyboard focus, visible outline
 * - Fully responsive and WCAG AA compliant
 */

const CTASection: React.FC = () => (
  <section
    aria-labelledby="cta-title"
    className="relative z-10 max-w-7xl mx-auto px-6"
    style={{ marginTop: "-3rem" }} // visually overlaps previous section for effect
  >
    <div
      className="bg-[#11171b] rounded-[2.5rem] md:rounded-[2.5rem] px-6 md:px-16 py-12 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-0 shadow-lg"
      role="region"
      aria-label="Call to Action"
    >
      {/* Left: Heading */}
      <h2
        id="cta-title"
        className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6 md:mb-0"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        Let&apos;s talk about a project,<br className="hidden md:block" />
        collaboration or an idea you may have
      </h2>
      {/* Right: Description and Button */}
      <div className="flex flex-col items-start md:items-end w-full md:w-auto">
        <p className="text-gray-200 text-lg md:text-xl mb-6 max-w-md text-left md:text-right" style={{ fontWeight: 500 }}>
          We design exceptional brands, products, web apps, mobile apps, websites for startups and enterprises.
        </p>
        <a
          href="#contact"
          role="button"
          aria-label="Contact us to discuss your project"
          tabIndex={0}
          className="group flex items-center focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400 transition"
        >
          <span
            className="bg-white text-gray-900 text-lg md:text-xl font-semibold rounded-full px-8 py-4 shadow-md transition hover:bg-gray-100 focus:bg-gray-100"
            style={{ minWidth: 0, minHeight: 56, fontFamily: "Inter, sans-serif" }}
          >
            Let’s Talk With Us
          </span>
          <span
            className="ml-[-1.5rem] z-10"
            aria-hidden="true"
          >
            <span
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-200 group-hover:bg-green-300 transition"
            >
              <ArrowUpRight className="w-7 h-7 text-gray-900" />
            </span>
          </span>
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;

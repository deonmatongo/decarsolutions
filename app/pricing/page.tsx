import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Reveal from "@/components/Reveal";
import { pricingPlans, pricingFaqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing — Decar Solutions",
  description:
    "Projects from £500. Four ways to work with Decar Solutions: a discovery sprint, a managed build, staff augmentation, or an ongoing support retainer.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Projects from £500 and up"
        lede="Every project is quoted individually once we understand the scope. Here are the four ways to work with us — tell us what you need and we'll come back with a firm price."
      >
        <a href="/contact" className="btn btn-pill btn-ink btn-lg">
          Get a quote →
        </a>
      </PageHero>

      <section className="section section-flush-top">
        <div className="wrap">
          <div className="pricing-grid">
            {pricingPlans.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 70}>
                <div
                  className={`pricing-card${plan.featured ? " pricing-card--featured" : ""}`}
                >
                  {plan.featured && <span className="pricing-badge">Most popular</span>}
                  <h3 className="pricing-name">{plan.name}</h3>
                  <p className="pricing-tagline">{plan.tagline}</p>
                  <div className="pricing-cadence">{plan.cadence}</div>
                  <p className="pricing-best">Best for: {plan.bestFor}</p>
                  <ul className="pricing-bullets">
                    {plan.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <a href="/contact" className="btn btn-ghost">
                    Talk to us →
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Faq items={pricingFaqs} heading="Pricing questions" id="pricing-faq" />
      <FinalCta />
    </>
  );
}

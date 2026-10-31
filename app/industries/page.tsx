import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FinalCta from "@/components/FinalCta";
import Reveal from "@/components/Reveal";
import GenerativeFigure, { type FigureKind } from "@/components/GenerativeFigure";
import { industries } from "@/lib/content";

// Cycled rather than hand-assigned — six industries, four figures, no
// particular meaning to which gets which, just visual variety in the grid.
const FIGURES: FigureKind[] = ["burst", "torus", "globe", "barrel"];

export const metadata: Metadata = {
  title: "Industries — Decar Solutions",
  description:
    "Decar Solutions builds software for retail, fintech, healthcare, logistics, professional services and manufacturing teams.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Software shaped by the industry it runs in"
        lede="A payments dashboard and a warehouse dashboard solve completely different problems, even when the tech stack looks the same on paper. We build for the constraints your industry actually has — compliance, uptime, integration with what you already run."
      >
        <a href="/contact" className="btn btn-pill btn-ink btn-lg">
          Talk about your industry →
        </a>
      </PageHero>

      <section className="section section-flush-top">
        <div className="wrap">
          <div className="industry-grid">
            {industries.map((industry, i) => (
              <Reveal key={industry.slug} delay={(i % 3) * 70}>
                <article className="industry-card" id={industry.slug}>
                  <div className="industry-card-figure">
                    <GenerativeFigure
                      kind={FIGURES[i % FIGURES.length]}
                      idSuffix={industry.slug}
                    />
                  </div>
                  <h3>{industry.title}</h3>
                  <p>{industry.summary}</p>
                  <ul>
                    {industry.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}

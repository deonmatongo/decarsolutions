import Link from "next/link";
import GenerativeFigure from "./GenerativeFigure";
import Reveal from "./Reveal";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section className="wwd" id="services">
      <div className="wrap">
        <div className="wwd-eyebrow">Experienced software house</div>
        <h2 className="wwd-head">
          One{" "}
          {/* the word and the rule can't break apart, so the rule always
              trails the end of a line rather than indenting the next one */}
          <span className="wwd-nobreak">
            team <span className="wwd-rule" aria-hidden="true" />
          </span>{" "}
          designs, builds, and automates high-quality web and mobile software
        </h2>

        <div className="wwd-grid">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={(i % 2) * 90}>
              <article className="wwd-item">
                <GenerativeFigure kind={service.figure} idSuffix={service.id} />
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="work-more">
          <Link href="/services" className="btn btn-ghost">
            See all services →
          </Link>
        </div>
      </div>
    </section>
  );
}

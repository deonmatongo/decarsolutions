import GenerativeFigure from "./GenerativeFigure";
import Reveal from "./Reveal";
import { tailoredSolutions } from "@/lib/content";

export default function TailoredSolutions() {
  return (
    <section className="wwd tailored">
      <div className="wrap">
        <h2 className="wwd-head">Two ways to bring us in</h2>
        <div className="wwd-grid">
          {tailoredSolutions.map((item, i) => (
            <Reveal key={item.id} delay={(i % 2) * 90}>
              <article className="wwd-item">
                <GenerativeFigure kind={item.figure} idSuffix={item.id} />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

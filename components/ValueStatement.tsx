import Link from "next/link";
import GenerativeFigure from "./GenerativeFigure";
import Reveal from "./Reveal";
import { valueStatement } from "@/lib/content";

export default function ValueStatement() {
  return (
    <section className="value" id="about">
      <div className="wrap">
        <Reveal className="value-top">
          <GenerativeFigure kind="barrel" idSuffix="value" />
          <h2>{valueStatement.heading}</h2>
        </Reveal>
        <div className="value-body">
          {valueStatement.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <div className="work-more">
          <Link href="/about" className="btn btn-outline">
            More about us →
          </Link>
        </div>
      </div>
    </section>
  );
}

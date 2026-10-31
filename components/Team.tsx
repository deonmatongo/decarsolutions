import GenerativeFigure from "./GenerativeFigure";
import Reveal from "./Reveal";
import { team } from "@/lib/content";

export default function Team() {
  return (
    <section className="team">
      <div className="wrap">
        <Reveal className="team-inner">
          <GenerativeFigure kind="torus" idSuffix="team" />
          <div>
            <h2>{team.heading}</h2>
            <p>{team.body}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

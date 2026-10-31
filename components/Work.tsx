import Link from "next/link";
import Reveal from "./Reveal";
import WorkCover from "./WorkCover";
import { workItems } from "@/lib/content";

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Case studies</div>
          <h2>Our work</h2>
        </div>
        <div className="work-grid">
          {workItems.map((item, i) => (
            <Reveal key={item.slug} delay={i * 70}>
              <Link href={`/work/${item.slug}`} className="work-card">
                <WorkCover slug={item.slug} tags={item.tags} />
                <div className="work-body">
                  <div className="work-tags">
                    {item.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                    {item.illustrative && <span className="tag">Illustrative</span>}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="work-more">
          <Link href="/work" className="btn btn-ghost">
            See all case studies →
          </Link>
        </div>
      </div>
    </section>
  );
}

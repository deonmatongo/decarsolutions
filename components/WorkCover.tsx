// Generated cover art for a case study, standing in for a screenshot we
// don't have yet. Built from the same formula-driven figures and brand
// gradient as the rest of the site, so an "empty" thumbnail still looks
// designed rather than missing. The primary tag picks the figure; the
// slug seeds which corner it sits in, so a grid of cards doesn't repeat.
import GenerativeFigure, { type FigureKind } from "./GenerativeFigure";

const TAG_FIGURE: Record<string, FigureKind> = {
  Web: "globe",
  Mobile: "burst",
  AI: "torus",
  Automation: "barrel",
};

const CORNERS = ["cover-tl", "cover-tr", "cover-bl", "cover-br"];

function seed(slug: string) {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) | 0;
  return Math.abs(h);
}

export default function WorkCover({
  slug,
  tags,
  size = "card",
}: {
  slug: string;
  tags: string[];
  size?: "card" | "banner";
}) {
  const kind = TAG_FIGURE[tags[0]] ?? "torus";
  const corner = CORNERS[seed(slug) % CORNERS.length];

  return (
    <div className={`work-cover work-cover--${size}`} aria-hidden="true">
      <div className={`work-cover-figure ${corner}`}>
        <GenerativeFigure kind={kind} idSuffix={`cover-${slug}`} />
      </div>
    </div>
  );
}

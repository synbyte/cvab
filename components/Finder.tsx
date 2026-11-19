import Link from "next/link";

export default function Finder() {
  return (
    <section className="tc-card text-center">
      <h2 className="tc-card-title mb-2">AA Group Finder</h2>
      <p className="tc-muted mb-5">
        (Other meetings can be found on{" "}
        <Link className="tc-link-inline" href="/support">
          Groups/Resources
        </Link>{" "}
        page.)
      </p>
      <iframe
        className="h-[min(600px,70vh)] w-full rounded-panel border border-brand-100 shadow-sm"
        frameBorder="0"
        title="AA Group Finder"
        src="https://www.vancouveraa.org/meetings/"
      />
    </section>
  );
}
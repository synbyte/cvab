import { supportData } from "../data/supportData";

export default async function Home() {
  return (
    <main className="tc-page">
      <section className="tc-card">
        <h1 className="tc-card-title mb-8 text-center">Support</h1>
        <div className="tc-resource-grid">
          {Object.values(supportData).map((section, index) => (
            <div key={index}>
              <ul className="text-left">
                <li className="list-none">
                  <a href={section.url} className="tc-link-inline mb-2 block">
                    {section.title}
                  </a>
                </li>
                {"phone" in section &&
                  (typeof section.phone === "object" &&
                  "west" in section.phone ? (
                    <>
                      <p className="tc-muted mb-1">
                        West - {section.phone.west}
                      </p>
                      <p className="tc-muted mb-3">
                        East - {section.phone.east}
                      </p>
                    </>
                  ) : (
                    <p className="tc-muted mb-3">{section.phone as string}</p>
                  ))}
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="list-none">
                    <a href={link.href} className="tc-list-item">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
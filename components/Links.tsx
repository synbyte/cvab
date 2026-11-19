import { docketData } from "@/app/data/docketData";

export default function Links() {
  return (
    <section className="tc-card">
      <h2 className="tc-card-title mb-5 text-center sm:text-left">
        Docket Zoom Links
      </h2>
      <ul className="space-y-5 text-left">
        {Object.entries(docketData).map(([category, items]) => (
          <li key={category} className="list-none">
            <p className="tc-section-title">{category}</p>
            <ul className="space-y-1.5 pl-1">
              {items.map((item, index) => (
                <li key={index} className="list-none">
                  <a href={item.link} className="tc-list-item">
                    {item.time}{" "}
                    {"description" in item && item.description
                      ? `${item.description} -`
                      : ""}{" "}
                    {item.judge}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
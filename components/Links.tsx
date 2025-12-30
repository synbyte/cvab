import { docketData } from "@/app/data/docketData";

export default function Links() {
  return (
    <main className="animate-slide-down p-6 text-center rounded-2xl shadow-lg min-w-fit bg-white border border-gray-200">
      <p className="pb-4 text-2xl font-semibold text-gray-800 heading">
        Docket Zoom Links
      </p>
      <ul className="text-left text-gray-700">
        {Object.entries(docketData).map(([category, items]) => (
          <div key={category} className="mb-4">
            <p className="font-semibold text-blue-700 mb-2">{category}</p>
            {items.map((item, index) => (
              <li key={index} className="ml-2 hover:text-blue-600 transition-colors">
                <a href={item.link}>
                  {item.time}{" "}
                  {"description" in item && item.description
                    ? `${item.description} -`
                    : ""}{" "}
                  {item.judge}
                </a>
              </li>
            ))}
          </div>
        ))}
      </ul>
    </main>
  );
}

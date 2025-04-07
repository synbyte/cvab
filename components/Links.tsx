import { docketData } from "@/app/data/docketData";

export default function Links() {
  return (
    <main className="p-3 text-center text-black rounded-2xl shadow-sm card shadow-gray-400 min-w-fit bg-cyan-50/10 backdrop-blur-sm">
      <p className="pb-4 text-2xl font-medium text-cyan-800 heading ">
        Docket Zoom Links
      </p>
      <ul className="text-left text-cyan-700">
        {Object.entries(docketData).map(([category, items]) => (
          <div key={category}>
            <p className="font-medium text-cyan-800">{category}</p>
            {items.map((item, index) => (
              <li key={index}>
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

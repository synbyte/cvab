import { docketData } from "@/app/data/docketData";

export default function Links() {
  return (
    <main className=" animate-slide-down p-3 text-center text-coffee-dark rounded-2xl shadow-sm card shadow-gray-400 min-w-fit bg-coffee-light backdrop-blur-sm">
      <p className="pb-4 text-2xl font-medium text-coffee-dark heading ">
        Docket Zoom Links
      </p>
      <ul className="text-left text-coffee-dark">
        {Object.entries(docketData).map(([category, items]) => (
          <div key={category}>
            <p className="font-medium text-coffee-dark">{category}</p>
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

import { supportData } from "../data/supportData";

export default async function Home() {
  return (
    <main className=" animate-slide-down items-center p-5 min-w-full min-h-screen pt-20">
      <div className="grid p-3 mx-auto text-center text-white rounded-2xl shadow-sm shadow-gray-400 bg-cyan-50/10 backdrop-blur-sm md:w-5/6">
        <p className="pb-4 text-2xl font-medium text-cyan-800 heading">
          Support
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Object.values(supportData).map((section, index) => (
            <div key={index} className="mb-6">
              <ul className="text-left text-cyan-700">
                <a href={section.url}>
                  <p className="font-medium text-cyan-800 underline">
                    {section.title}
                  </p>
                </a>
                {"phone" in section &&
                  (typeof section.phone === "object" &&
                  "west" in section.phone ? (
                    <>
                      <p className="text-xs">West - {section.phone.west}</p>
                      <p className="text-xs">East - {section.phone.east}</p>
                    </>
                  ) : (
                    <p className="text-xs">{section.phone as string}</p>
                  ))}
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

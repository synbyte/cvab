import { supportData } from "../data/supportData";

export default async function Home() {
  return (
    <main className="animate-slide-down items-center p-5 min-w-full min-h-screen pt-20">
      <div className="grid p-6 mx-auto text-center rounded-2xl shadow-lg bg-white border border-gray-200 md:w-5/6">
        <p className="pb-6 text-3xl font-semibold text-gray-800 heading">
          Support
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.values(supportData).map((section, index) => (
            <div key={index} className="mb-6">
              <ul className="text-left text-gray-700">
                <a href={section.url}>
                  <p className="font-semibold text-blue-700 underline hover:text-blue-800 mb-2">
                    {section.title}
                  </p>
                </a>
                {"phone" in section &&
                  (typeof section.phone === "object" &&
                  "west" in section.phone ? (
                    <>
                      <p className="text-xs text-gray-600 mb-1">West - {section.phone.west}</p>
                      <p className="text-xs text-gray-600 mb-2">East - {section.phone.east}</p>
                    </>
                  ) : (
                    <p className="text-xs text-gray-600 mb-2">{section.phone as string}</p>
                  ))}
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="text-sm hover:text-blue-600 transition-colors">
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

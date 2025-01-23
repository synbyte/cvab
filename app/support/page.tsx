export default async function Home() {
  const supportData = {
    pier360: {
      title: "Pier 360",
      url: "https://cvabonline.com",
      phone: {
        west: "(360) 397-8050",
        east: "(360) 253-4036"
      },
      links: [
        { href: "https://www.cvabonline.org/s/Pier360-West-January-2025-Final.pdf", text: "West center calendar" },
        { href: "https://www.cvabonline.org/s/Pier360-East-January-2025-Final.pdf", text: "East center calendar" },
        { href: "https://www.cvabonline.org/services", text: "Information on services provided" },
        { href: "https://www.cvabonline.org/training", text: "Pier 360 Academy" },
        { href: "https://www.cvabonline.org/warmline", text: "Warm Line" }
      ]
    },
    recoveryCafe: {
      title: "Recovery Cafe",
      url: "https://www.recoverycafecc.org/",
      phone: "(360) 984-6163",
      links: [
        { href: "https://www.recoverycafecc.org/about-3-1", text: "Calendar" },
        { href: "https://www.recoverycafecc.org/recovery-navigator-program", text: "Recovery Navigator Program" },
        { href: "https://www.recoverycafecc.org/vha-program", text: "VHA Program" },
        { href: "https://www.recoverycafecc.org/recovery-coach-program", text: "Recovery Coach Program" }
      ]
    },
    couveCollective: {
      title: "Couve Collective",
      url: "https://couvecollective.org/",
      phone: "(564) 208-4842",
      links: [
        { href: "https://couvecollective.org/events/", text: "Calendar" },
        { href: "https://couvecollective.org/saga/", text: "SAGA" },
        { href: "https://couvecollective.org/recovery/", text: "Membership" }
      ]
    },
    restoredRevived: {
      title: "Restored & Revived",
      url: "https://www.restoredandrevived.com/",
      phone: "(541) 350-2098",
      links: [
        { href: "https://www.restoredandrevived.com/events", text: "Calendar" },
        { href: "https://www.restoredandrevived.com/programs-and-services", text: "Programs & Services" }
      ]
    },
    aa: {
      title: "Alcoholics Anonymous",
      url: "https://www.vancouveraa.org/",
      phone: "(360) 314-4619",
      links: [
        { href: "https://www.vancouveraa.org/events/", text: "Calendar" },
        { href: "https://www.vancouveraa.org/meetings/", text: "Meetings" },
        { href: "https://www.vancouveraa.org/links/", text: "Links & Resources" },
        { href: "https://www.restoredandrevived.com/programs-and-services", text: "Programs & Services" }
      ]
    },
    na: {
      title: "Narcotics Anonymous",
      url: "https://swanaonline.org/",
      phone: "(360) 703-0990",
      links: [
        { href: "https://swanaonline.org/events/", text: "Calendar" },
        { href: "https://swanaonline.org/meetings/", text: "Meetings" }
      ]
    },
    ha: {
      title: "Heroin Anonymous",
      url: "https://heroinanonymous.org/",
      links: [
        { href: "https://heroinanonymous.org/resources/", text: "Resources" },
        { href: "https://heroinanonymous.org/meetings1/", text: "Meetings" }
      ]
    },
    smartRecovery: {
      title: "Smart Recovery",
      url: "https://smartrecovery.org/",
      phone: "(440) 951-5357",
      links: [
        { href: "https://swanaonline.org/events/", text: "Calendar" },
        { href: "https://meetings.smartrecovery.org/meetings/?coordinates=50&location=Vancouver%2C+WA%2C+USA", text: "Meetings" }
      ]
    }
  };

  return (
    <main className="items-center p-5 min-w-full min-h-screen pt-20">
      <div className="grid p-3 mx-auto text-center text-white rounded-2xl shadow-sm shadow-gray-400 bg-cyan-50/10 backdrop-blur-sm md:w-5/6">
        <p className="pb-4 text-2xl font-bold text-cyan-800 heading">Support</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Object.values(supportData).map((section, index) => (
            <div key={index} className="mb-6">
              <ul className="text-left text-cyan-700">
                <a href={section.url}>
                  <p className="font-bold text-cyan-800 underline">{section.title}</p>
                </a>
                {'phone' in section && (
                  typeof section.phone === 'object' && 'west' in section.phone ? (
                    <>
                      <p className="text-xs">West - {section.phone.west}</p>
                      <p className="text-xs">East - {section.phone.east}</p>
                    </>
                  ) : (
                    <p className="text-xs">{section.phone as string}</p>
                  )
                )}
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
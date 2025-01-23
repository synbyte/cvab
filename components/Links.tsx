export default function Links() {
  const docketData = {
    "Family Treatment Court": [
      {
        time: "3:00pm MONDAY",
        judge: "Commissioner Ellis",
        link: "https://clark.wa.gov/media/document/70162"
      }
    ],
    "Drug Court/DOSA": [
      {
        time: "10:30am THURSDAY",
        judge: "Judge Snider",
        description: "Drug Court",
        link: "https://clark.wa.gov/media/document/70164"
      },
      {
        time: "2:30pm THURSDAY",
        judge: "Judge Snider",
        description: "Drug Court",
        link: "https://clark.wa.gov/media/document/70165"
      },
      {
        time: "10:00am FRIDAY",
        judge: "Judge Snider",
        description: "Res-DOSA",
        link: "https://clark.wa.gov/media/document/70166"
      },
      {
        time: "11:00am FRIDAY",
        judge: "Judge Snider",
        description: "DOSA/Drug Court In-Custody Docket",
        link: "https://clark.wa.gov/media/document/70167"
      }
    ]
  };

  return (
    <main className="p-3 text-center text-black rounded-2xl shadow-sm card shadow-gray-400 min-w-fit bg-cyan-50/10 backdrop-blur-sm">
      <p className="pb-4 text-2xl font-bold text-cyan-800 heading ">
        Docket Zoom Links
      </p>
      <ul className="text-left text-cyan-700">
        {Object.entries(docketData).map(([category, items]) => (
          <div key={category}>
            <p className="font-bold text-cyan-800">{category}</p>
            {items.map((item, index) => (
              <li key={index}>
                <a href={item.link}>
                  {item.time} {('description' in item && item.description) ? `${item.description} -` : ''} {item.judge}
                </a>
              </li>
            ))}
          </div>
        ))}
      </ul>
    </main>
  );
}
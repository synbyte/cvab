export default async function Home() {
  const formData = {
    drugCourt: {
      title: "Drug Court/DOSA Participant Forms",
      forms: [
        { href: "https://clark.wa.gov/media/document/56217", text: "Drug Court team contact list" },
        { href: "https://clark.wa.gov/media/document/56218", text: "DOSA team contact list" },
        { href: "https://clark.wa.gov/media/document/56220", text: "Application to phase up to 2 Drug Court" },
        { href: "https://clark.wa.gov/media/document/56221", text: "Application to phase up to 3 Drug Court" },
        { href: "https://clark.wa.gov/media/document/56222", text: "Application to phase up to 4 Drug Court" },
        { href: "https://clark.wa.gov/media/document/110461", text: "Application to graduate Drug Court" },
        { href: "https://clark.wa.gov/media/document/56223", text: "Community service log with sites" },
        { href: "https://clark.wa.gov/media/document/56224", text: "Needs Assessment Form" },
        { href: "https://clark.wa.gov/media/document/56225", text: "Job Search Form" },
        { href: "https://clark.wa.gov/media/document/106901", text: "Health Care Form" },
        { href: "https://clark.wa.gov/media/document/113391", text: "Request Form" },
        { href: "https://clark.wa.gov/media/document/106906", text: "Life Story Template" },
        { href: "https://clark.wa.gov/media/document/135166", text: "Recovery support documentation" },
        { href: "https://clark.wa.gov/media/document/78211", text: "Recovery Passport" },
        { href: "https://clark.wa.gov/media/document/152841", text: "Personal Budget Form - Excel version" },
        { href: "https://clark.wa.gov/media/document/78361", text: "Personal Budget Form - PDF fillable version" },
        { href: "https://clark.wa.gov/media/document/56228", text: "Drug Court/DOSA Exit Interview" }
      ]
    },
    familyTreatment: {
      title: "Family Treatment Court Participant Forms",
      forms: [
        { href: "https://clark.wa.gov/media/document/117136", text: "FTC team contact list" },
        { href: "https://clark.wa.gov/media/document/56230", text: "Introduction to Family Treatment Court" },
        { href: "https://clark.wa.gov/media/document/56223", text: "Community service log with sites" },
        { href: "https://clark.wa.gov/media/document/56232", text: "Needs assessment" },
        { href: "https://clark.wa.gov/media/document/56225", text: "Job Search Form" },
        { href: "https://clark.wa.gov/media/document/106901", text: "Health Care Form" },
        { href: "https://clark.wa.gov/media/document/106906", text: "Life Story Template" },
        { href: "https://clark.wa.gov/media/document/56235", text: "Recovery Wellness Plan" },
        { href: "https://clark.wa.gov/media/document/56236", text: "Family Case Plan" },
        { href: "https://clark.wa.gov/media/document/103271", text: "Children - under age 5 form" },
        { href: "https://clark.wa.gov/media/document/103276", text: "Children - over age 5 form" },
        { href: "https://clark.wa.gov/media/document/56227", text: "Support group verification" },
        { href: "https://clark.wa.gov/media/document/118456", text: "Application to phase up to 2 - FTC" },
        { href: "https://clark.wa.gov/media/document/117446", text: "Application to phase up to 3 - FTC" },
        { href: "https://clark.wa.gov/media/document/117586", text: "Application to phase up to 4 - FTC" },
        { href: "https://clark.wa.gov/media/document/117601", text: "Application to Graduate - FTC" }
      ]
    },
    duiCourt: {
      title: "DUI/TAC Court Participant Forms",
      forms: [
        { href: "https://clark.wa.gov/media/document/125456", text: "Physicians letter" },
        { href: "https://clark.wa.gov/media/document/55431", text: "DUI Court brochure" },
        { href: "https://clark.wa.gov/media/document/190706", text: "Application to phase up to 2 DUI/TAC Court" },
        { href: "https://clark.wa.gov/media/document/190711", text: "Application to phase up to 3 DUI/TAC Court" },
        { href: "https://clark.wa.gov/media/document/56222", text: "Application to phase up to 4 DUI/TAC Court" },
      ]},
      mhcCourt: {
        title: "Mental Health Court Participant Forms",
        forms: [
          { href: "https://clark.wa.gov/media/document/38071", text: "Mental Health Court brochure" },
          { href: "https://clark.wa.gov/media/document/125661", text: "Mental Health Court participants' handbook" },
          { href: "https://clark.wa.gov/media/document/125451", text: "Physicians letter" },
        ]},
        vetco: {
          title: "Veterans Court Participant Forms",
          forms: [
            { href: "https://clark.wa.gov/media/document/55429", text: "Veterans Court brochure" },
            { href: "https://clark.wa.gov/media/document/125671", text: "Veterans Court participants' handbook" },
            { href: "https://clark.wa.gov/media/document/125456", text: "Physicians letter" },
          ]},
  };

  return (
    <main className="items-center p-5 min-w-full min-h-screen pt-20">
      <div className="grid p-3 mx-auto text-center text-white rounded-2xl shadow-sm shadow-gray-400 bg-cyan-50/10 backdrop-blur-sm md:w-5/6">
        <p className="pb-4 text-2xl font-bold text-cyan-800 heading">
          Forms and Documents
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {Object.values(formData).map((section, index) => (
            <div key={index} className="mb-6">
              <ul className="text-left text-cyan-700">
                <p className="font-bold text-cyan-800">{section.title}</p>
                {section.forms.map((form, formIndex) => (
                  <li key={formIndex}>
                    <a href={form.href}>{form.text}</a>
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
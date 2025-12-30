import { formData } from "../data/formData";
export default async function Home() {
  return (
    <main className="animate-slide-down items-center p-5 min-w-full min-h-screen pt-20">
      <div className="grid p-6 mx-auto text-center rounded-2xl shadow-lg bg-white border border-gray-200 md:w-5/6">
        <p className="pb-6 text-3xl font-semibold text-gray-800 heading">
          Forms and Documents
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {Object.values(formData).map((section, index) => (
            <div key={index} className="mb-6">
              <ul className="text-left text-gray-700">
                <p className="font-semibold text-blue-700 mb-2">{section.title}</p>
                {section.forms.map((form, formIndex) => (
                  <li key={formIndex} className="text-sm hover:text-blue-600 transition-colors">
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

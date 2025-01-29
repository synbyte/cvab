import {formData} from "../data/formData"
export default async function Home() {
  

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
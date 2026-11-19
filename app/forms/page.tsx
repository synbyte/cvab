import { formData } from "../data/formData";

export default async function Home() {
  return (
    <main className="tc-page">
      <section className="tc-card">
        <h1 className="tc-card-title mb-6 text-center">Forms and Documents</h1>
        <div className="tc-banner-password mx-auto mb-8 max-w-xl">
          🔒 Password: TSC-COURT
        </div>
        <div className="tc-form-grid">
          {Object.values(formData).map((section, index) => (
            <div key={index}>
              <p className="tc-section-title">{section.title}</p>
              <ul className="space-y-1.5">
                {section.forms.map((form, formIndex) => (
                  <li key={formIndex} className="list-none">
                    <a href={form.href} className="tc-list-item">
                      {form.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
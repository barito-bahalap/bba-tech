// Hooks
import { useContactForm, useLocale } from "@/hooks";
// Components
import { Button, Input, Select, Textarea } from "@/components";
import { Checklist, Section, SectionHeader } from "@/components";
// Data
import { SECTION_ALT_TONE } from "@/data/layout";
import { PageAnchor } from "./PageAnchor";

const COPY = {
  en: {
    optional: "optional",
    prepared:
      "Your email should open with the message ready to send. If nothing opened, choose your email service:",
    defaultApp: "Default email app",
    orEmail: "Or email",
  },
  id: {
    optional: "opsional",
    prepared:
      "Email Anda akan terbuka dengan pesan siap kirim. Jika tidak terbuka, pilih layanan email Anda:",
    defaultApp: "Aplikasi email bawaan",
    orEmail: "Atau email ke",
  },
} as const;

export function ConsultationSection() {
  const { locale, site, content, ui } = useLocale();
  const { contact } = content;
  const { form } = ui;
  const text = COPY[locale === "en" ? "en" : "id"];
  const { values, errors, prepared, links, handleChange, handleSubmit } =
    useContactForm(site.email, contact, form);

  const blank = { value: "", label: form.labels.select };
  const inquiryOptions = [blank, ...contact.inquiryTypes];
  const orgTypeOptions = [blank, ...contact.orgTypes];
  const timelineOptions = [blank, ...contact.timelines];

  return (
    <PageAnchor id="consultation">
      <Section tone={SECTION_ALT_TONE}>
        <SectionHeader
          eyebrow={contact.intro.eyebrow}
          title={contact.intro.title}
          intro={contact.intro.description}
        />
        <div className="grid-split">
          <div className="contact-checklist">
            <h4>{contact.includeTitle}</h4>
            <Checklist items={contact.includeList} />
            <p className="form-note">
              {text.orEmail} <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>

          <form className="form-grid" onSubmit={handleSubmit} noValidate>
            <div className="form-grid__row">
              <Input
                id="name"
                name="name"
                label={form.labels.name}
                autoComplete="name"
                required
                value={values.name}
                error={errors.name}
                onChange={handleChange}
              />
              <Input
                id="email"
                name="email"
                type="email"
                label={form.labels.email}
                autoComplete="email"
                required
                value={values.email}
                error={errors.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-grid__row">
              <Input
                id="organization"
                name="organization"
                label={`${form.labels.organization} (${text.optional})`}
                autoComplete="organization"
                value={values.organization}
                error={errors.organization}
                onChange={handleChange}
              />
              <Select
                id="orgType"
                name="orgType"
                label={form.labels.orgType}
                options={orgTypeOptions}
                value={values.orgType}
                error={errors.orgType}
                onChange={handleChange}
              />
            </div>
            <div className="form-grid__row">
              <Input
                id="role"
                name="role"
                label={form.labels.role}
                autoComplete="organization-title"
                value={values.role}
                error={errors.role}
                onChange={handleChange}
              />
              <Select
                id="timeline"
                name="timeline"
                label={form.labels.timeline}
                options={timelineOptions}
                value={values.timeline}
                error={errors.timeline}
                onChange={handleChange}
              />
            </div>
            <Select
              id="inquiryType"
              name="inquiryType"
              label={form.labels.inquiryType}
              options={inquiryOptions}
              value={values.inquiryType}
              error={errors.inquiryType}
              onChange={handleChange}
            />
            <Textarea
              id="message"
              name="message"
              label={form.labels.message}
              rows={6}
              required
              value={values.message}
              error={errors.message}
              onChange={handleChange}
            />

            <Button
              label={form.submit}
              type="submit"
              variant="primary"
              brand="tech"
              fullWidth
            />

            {prepared && links && (
              <div className="form-note" role="status" aria-live="polite">
                <p>{text.prepared}</p>
                <ul className="form-links" role="list">
                  <li>
                    <a
                      href={links.gmail}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Gmail
                    </a>
                  </li>
                  <li>
                    <a
                      href={links.outlook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Outlook
                    </a>
                  </li>
                  <li>
                    <a href={links.mailto}>{text.defaultApp}</a>
                  </li>
                </ul>
              </div>
            )}
          </form>
        </div>
      </Section>
    </PageAnchor>
  );
}

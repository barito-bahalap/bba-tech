// Hooks
import { useContactForm, useLocale } from "@/hooks";
// Components
import { Button, Input, Select, Textarea } from "@/components";
import { Checkbox, Checklist, Section, SectionHeader } from "@/components";
// Data
import { SECTION_ALT_TONE } from "@/data/layout";
import { PageAnchor } from "./PageAnchor";

export function ConsultationSection() {
  const { site, content, ui } = useLocale();
  const { contact } = content;
  const { form } = ui;
  const { values, errors, handleChange, handleConsent, handleSubmit } =
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
              Atau email ke <a href={`mailto:${site.email}`}>{site.email}</a>
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
                label={form.labels.organization}
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
              required
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
            <Checkbox
              id="consent"
              label={contact.consentText}
              checked={values.consent}
              error={errors.consent}
              onChange={handleConsent}
            />

            <Button
              label={form.submit}
              type="submit"
              variant="primary"
              brand="tech"
              fullWidth
            />
          </form>
        </div>
      </Section>
    </PageAnchor>
  );
}

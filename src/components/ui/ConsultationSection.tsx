// Hooks
import { useContactForm, useLocale } from "@/hooks";
// Components
import {
  Button,
  Checkbox,
  Checklist,
  Input,
  Section,
  SectionHeader,
  Select,
  Textarea,
} from "@/components";
// Data
import { SECTION_ALT_TONE } from "@/data/layout";
import { PageAnchor } from "./PageAnchor";

export function ConsultationSection() {
  const { site, content, ui } = useLocale();
  const { contact } = content;
  const { form } = ui;
  const {
    values,
    errors,
    prepared,
    handleChange,
    handleConsent,
    handleSubmit,
  } = useContactForm(site.email, contact, form);

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
          <div className="stack">
            <h3>{contact.includeTitle}</h3>
            <Checklist items={contact.includeList} />
            <p className="form-note">
              {contact.emailLabel}:{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p className="form-note">{site.location}</p>
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
                required
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
            <div>
              <Button type="submit" variant="primary" brand="tech">
                {form.submit}
              </Button>
            </div>
            <p className="form-note" aria-live="polite">
              {prepared ? form.statusPrepared : form.statusIdle}
            </p>
          </form>
        </div>
      </Section>
    </PageAnchor>
  );
}

// Style
import "./ContactPage.css";
// Hooks
import { useContactContent, useSiteContent, useContactForm } from "@/hooks";
// Components
import { Button, Checkbox, Checklist, Field, Input } from "@/components";
import { PageHero, SEO, Section, Select, Textarea } from "@/components";
// Utils
import { breadcrumbSchema } from "@/domain/schema";

export default function ContactPage() {
  const { site } = useSiteContent();
  const { contactIntro, inquiryTypes, includeList, consentText } =
    useContactContent();
  const { values, errors, prepared, handleChange, handleSubmit } =
    useContactForm(site.email, inquiryTypes);

  return (
    <>
      <SEO
        title={`Contact | ${site.name}`}
        description="Request a consultation with Barito Bahalap Tech about an enterprise system, dashboard, automation or support requirement."
        path="/contact"
        jsonLd={breadcrumbSchema(site, [
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <PageHero
        eyebrow={contactIntro.eyebrow}
        title={contactIntro.title}
        description={contactIntro.description}
      />

      <Section>
        <div className="grid-split">
          <div className="stack">
            <h2>What to include</h2>
            <Checklist items={includeList} />
            <p className="form-note">
              Email: <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p className="form-note">{site.location}</p>
          </div>

          <form className="form-grid" onSubmit={handleSubmit} noValidate>
            <div className="form-grid__row">
              <Field label="Name" htmlFor="name" error={errors.name}>
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={values.name}
                  onChange={handleChange}
                />
              </Field>
              <Field
                label="Organization"
                htmlFor="organization"
                error={errors.organization}
              >
                <Input
                  id="organization"
                  name="organization"
                  autoComplete="organization"
                  value={values.organization}
                  onChange={handleChange}
                />
              </Field>
            </div>
            <div className="form-grid__row">
              <Field label="Role" htmlFor="role" error={errors.role}>
                <Input
                  id="role"
                  name="role"
                  autoComplete="organization-title"
                  value={values.role}
                  onChange={handleChange}
                />
              </Field>
              <Field label="Email" htmlFor="email" error={errors.email}>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </Field>
            </div>
            <Field
              label="Inquiry type"
              htmlFor="inquiryType"
              error={errors.inquiryType}
            >
              <Select
                id="inquiryType"
                name="inquiryType"
                value={values.inquiryType}
                onChange={handleChange}
              >
                <option value="">Select</option>
                {inquiryTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="Requirement" htmlFor="message" error={errors.message}>
              <Textarea
                id="message"
                name="message"
                rows={6}
                value={values.message}
                onChange={handleChange}
              />
            </Field>
            <Checkbox
              id="consent"
              name="consent"
              label={consentText}
              checked={values.consent}
              onChange={handleChange}
              error={errors.consent}
            />
            <div>
              <Button type="submit" variant="primary" brand="tech">
                Prepare email
              </Button>
            </div>
            <p className="form-note" aria-live="polite">
              {prepared
                ? "Your email application should now open with the inquiry. Send the email to complete the request."
                : "This form prepares an email in your own mail application. Nothing is sent until you send it."}
            </p>
          </form>
        </div>
      </Section>
    </>
  );
}

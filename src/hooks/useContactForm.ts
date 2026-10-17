import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
// Utils
import type {
  ContactErrors,
  ContactValues,
  FormCopy,
  MainContent,
  Option,
} from "@/domain/content";

const emptyValues: ContactValues = {
  name: "",
  organization: "",
  orgType: "",
  role: "",
  email: "",
  inquiryType: "",
  timeline: "",
  message: "",
  consent: false,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: ContactValues, copy: FormCopy): ContactErrors {
  const errors: ContactErrors = {};
  if (!values.name.trim()) errors.name = copy.errors.name;
  if (!values.organization.trim())
    errors.organization = copy.errors.organization;
  if (!emailPattern.test(values.email.trim())) errors.email = copy.errors.email;
  if (!values.inquiryType) errors.inquiryType = copy.errors.inquiryType;
  if (values.message.trim().length < 20) errors.message = copy.errors.message;
  if (!values.consent) errors.consent = copy.errors.consent;
  return errors;
}

function optionLabel(options: Option[], value: string) {
  if (!value) return "-";
  return options.find((option) => option.value === value)?.label ?? value;
}

function buildMailto(
  recipient: string,
  values: ContactValues,
  contact: MainContent["contact"],
  copy: FormCopy,
) {
  const m = copy.mail;
  const typeLabel = optionLabel(contact.inquiryTypes, values.inquiryType);
  const subject = `[${m.subjectPrefix}] ${typeLabel} (${values.organization.trim()})`;
  const body = [
    `${m.name}: ${values.name.trim()}`,
    `${m.organization}: ${values.organization.trim()}`,
    `${m.orgType}: ${optionLabel(contact.orgTypes, values.orgType)}`,
    `${m.role}: ${values.role.trim() || "-"}`,
    `${m.email}: ${values.email.trim()}`,
    `${m.inquiryType}: ${typeLabel}`,
    `${m.timeline}: ${optionLabel(contact.timelines, values.timeline)}`,
    "",
    values.message.trim(),
  ].join("\n");
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function useContactForm(
  recipient: string,
  contact: MainContent["contact"],
  copy: FormCopy,
) {
  const [values, setValues] = useState<ContactValues>(emptyValues);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [prepared, setPrepared] = useState(false);

  function handleChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setPrepared(false);
  }

  function handleConsent(checked: boolean) {
    setValues((current) => ({ ...current, consent: checked }));
    setErrors((current) => ({ ...current, consent: undefined }));
    setPrepared(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values, copy);
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;
    window.location.href = buildMailto(recipient, values, contact, copy);
    setPrepared(true);
  }

  return {
    values,
    errors,
    prepared,
    handleChange,
    handleConsent,
    handleSubmit,
  };
}

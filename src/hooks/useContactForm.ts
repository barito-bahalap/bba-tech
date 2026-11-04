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

export interface ContactLinks {
  mailto: string;
  gmail: string;
  outlook: string;
}

const emptyValues: ContactValues = {
  name: "",
  organization: "",
  orgType: "",
  role: "",
  email: "",
  inquiryType: "",
  timeline: "",
  message: "",
  consent: true,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: ContactValues, copy: FormCopy): ContactErrors {
  const errors: ContactErrors = {};
  if (!values.name.trim()) errors.name = copy.errors.name;
  if (!emailPattern.test(values.email.trim())) errors.email = copy.errors.email;
  if (values.message.trim().length < 20) errors.message = copy.errors.message;
  return errors;
}

function isMobileDevice(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  if (/Android|iPhone|iPad|iPod|Mobile/i.test(ua)) return true;
  return /Macintosh/i.test(ua) && navigator.maxTouchPoints > 1;
}

function optionLabel(options: Option[], value: string) {
  if (!value) return "-";
  return options.find((option) => option.value === value)?.label ?? value;
}

function buildLinks(
  recipient: string,
  values: ContactValues,
  contact: MainContent["contact"],
  copy: FormCopy,
): ContactLinks {
  const m = copy.mail;
  const typeLabel = optionLabel(contact.inquiryTypes, values.inquiryType);
  const who = values.organization.trim() || values.name.trim();
  const subject = `[${m.subjectPrefix}] ${
    values.inquiryType ? `${typeLabel} ` : ""
  }(${who})`;
  const body = [
    `${m.name}: ${values.name.trim()}`,
    `${m.organization}: ${values.organization.trim() || "-"}`,
    `${m.orgType}: ${optionLabel(contact.orgTypes, values.orgType)}`,
    `${m.role}: ${values.role.trim() || "-"}`,
    `${m.email}: ${values.email.trim()}`,
    `${m.inquiryType}: ${typeLabel}`,
    `${m.timeline}: ${optionLabel(contact.timelines, values.timeline)}`,
    "",
    values.message.trim(),
  ].join("\r\n");

  const to = encodeURIComponent(recipient);
  const su = encodeURIComponent(subject);
  const bd = encodeURIComponent(body);

  return {
    mailto: `mailto:${recipient}?subject=${su}&body=${bd}`,
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}&body=${bd}`,
    outlook: `https://outlook.live.com/mail/0/deeplink/compose?to=${to}&subject=${su}&body=${bd}`,
  };
}

export function useContactForm(
  recipient: string,
  contact: MainContent["contact"],
  copy: FormCopy,
) {
  const [values, setValues] = useState<ContactValues>(emptyValues);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [prepared, setPrepared] = useState(false);
  const [links, setLinks] = useState<ContactLinks | undefined>();

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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values, copy);
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    const built = buildLinks(recipient, values, contact, copy);
    setLinks(built);
    setPrepared(true);

    if (isMobileDevice()) {
      window.location.href = built.mailto;
    } else {
      window.open(built.gmail, "_blank", "noopener,noreferrer");
    }
  }

  return {
    values,
    errors,
    prepared,
    links,
    handleChange,
    handleSubmit,
  };
}

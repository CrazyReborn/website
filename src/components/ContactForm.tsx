import React, {useState} from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../stylesheets/ContactForm.css'

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xqknjgbb");
  const [successMessage, setSuccessMessage] = useState(false);

  if (!successMessage) {
    setTimeout(() => setSuccessMessage(false), 10000);
  }

  if (state.succeeded) {
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Contact Me</h2>
      <label htmlFor="name">
        Name
      </label>
      <input
        id="name"
        type="text"
        name="name"
      />
      <ValidationError
        prefix="name"
        field="name"
        errors={state.errors}
      />
      <label htmlFor="email">
        Email
      </label>
      <input
        id="email"
        type="email"
        name="email"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows={10}
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button type="submit" onClick={() => setSuccessMessage(true)} disabled={state.submitting}>
        Send Message
      </button>
      <h3 style={{ visibility : successMessage ? "visible" : "hidden" }}>Email has been sent!</h3>
    </form>
  );
}
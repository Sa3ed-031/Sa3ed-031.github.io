// Must Reduce Inputs Fields Code
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import clsx from "clsx";
import Button from "./ui/Button";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";

const TheContact = ({ setFormModal }) => {
  const form = useRef();
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleContactFormSubmit = (e) => {
    e.preventDefault();

    !contactInfo.name &&
    !contactInfo.email &&
    !contactInfo.phone &&
    !contactInfo.subject &&
    !contactInfo.message
      ? setFormModal({
          show: true,
          message:
            "Please enter your name, phone number or email, and subject or message!",
        })
      : !contactInfo.name &&
          (contactInfo.email || contactInfo.phone) &&
          (contactInfo.subject || contactInfo.message)
        ? setFormModal({
            show: true,
            message: "Please enter your name!",
          })
        : contactInfo.name &&
            !contactInfo.email &&
            !contactInfo.phone &&
            !contactInfo.subject &&
            !contactInfo.message
          ? setFormModal({
              show: true,
              message:
                "Please enter phone number or email, and subject or message!",
            })
          : contactInfo.name &&
              (contactInfo.message || contactInfo.subject) &&
              !contactInfo.email &&
              !contactInfo.phone
            ? setFormModal({
                show: true,
                message: "Please enter your phone number or email!",
              })
            : contactInfo.name &&
                (contactInfo.email || contactInfo.phone) &&
                !contactInfo.subject &&
                !contactInfo.message
              ? setFormModal({
                  show: true,
                  message: "Please enter subject or message!",
                })
              : !contactInfo.name &&
                  !contactInfo.subject &&
                  !contactInfo.message &&
                  (contactInfo.phone || contactInfo.email)
                ? setFormModal({
                    show: true,
                    message: "Please enter your name, and subject or message!",
                  })
                : !contactInfo.name &&
                    !contactInfo.phone &&
                    !contactInfo.email &&
                    (contactInfo.subject || contactInfo.message)
                  ? setFormModal({
                      show: true,
                      message:
                        "Please enter your name, and phone number or email!",
                    })
                  : contactInfo.name &&
                      (contactInfo.email || contactInfo.phone) &&
                      (contactInfo.subject || contactInfo.message)
                    ? sendEmail()
                    : null;
  };

  function sendEmail() {
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      )
      .then(
        () => {
          form.current.reset(); // Reset using the form ref
          setContactInfo({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          setFormModal({ show: true, message: "Message sent successfully!" });
        },
        () => {
          setFormModal({
            show: true,
            message: "Failed to send message. Please try again.",
          });
        },
      );
  }

  return (
    <Section
      id="Contact"
      padding="px-8 pt-12 pb-8 from-1537:p-12 upto-768:px-4 upto-768:pt-8 upto-768:pb-12 upto-680:px-8 upto-680:pt-12 upto-680:pb-8"
    >
      <div className="flex flex-col gap-2">
        <SectionTitle className="upto-616:leading-none">
          Contact <span className="text-lavender">Me</span>
        </SectionTitle>

        <p className="text-center text-lg text-white/90">
          Email me directly at{" "}
          <a
            href="mailto:saeedalhajwork@gmail.com"
            className="font-bold break-all text-lavender underline underline-offset-4"
          >
            saeedalhajwork@gmail.com
          </a>
        </p>
      </div>

      <form
        ref={form}
        method="POST"
        // onSubmit={handleContactFormSubmit}
        className="flex items-center justify-center gap-4 upto-768:gap-2 upto-680:flex-col upto-680:gap-4 upto-616:w-[96%] upto-616:self-center"
      >
        <div className="flex flex-col items-center gap-5 from-1537:gap-8 upto-768:justify-center upto-768:gap-4 upto-680:w-[95%] upto-680:flex-row upto-616:flex-col upto-616:gap-3">
          <div className={inputBox}>
            <Field
              type="text"
              name="client_name"
              id="name"
              placeholder="Your Name"
              required
              value={contactInfo.name}
              onChange={(e) => {
                setContactInfo({ ...contactInfo, name: e.target.value });
              }}
            />
            <Field
              type="email"
              name="client_email"
              id="email"
              placeholder="Your Email"
              required
              value={contactInfo.email}
              onChange={(e) => {
                setContactInfo({ ...contactInfo, email: e.target.value });
              }}
            />
          </div>
          <div className={inputBox}>
            <Field
              type="text"
              name="client_phone"
              id="phone"
              placeholder="Your Number (optional)"
              value={contactInfo.phone}
              onChange={(e) => {
                setContactInfo({ ...contactInfo, phone: e.target.value });
              }}
            />
            <Field
              type="text"
              name="client_subject"
              id="subject"
              placeholder="Subject"
              value={contactInfo.subject}
              onChange={(e) => {
                setContactInfo({ ...contactInfo, subject: e.target.value });
              }}
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 upto-768:gap-3 upto-680:w-[95%] upto-680:gap-4 upto-616:gap-3">
          <Field
            as="textarea"
            name="client_message"
            id="message"
            rows={8}
            cols={30}
            placeholder="Your Message"
            value={contactInfo.message}
            onChange={(e) => {
              setContactInfo({ ...contactInfo, message: e.target.value });
            }}
          />
          <Button
            as="input"
            type="submit"
            value="Send Message"
            variant="solid"
            className="hover:scale-103 from-1537:p-8 from-1537:text-[2rem] upto-768:w-full upto-768:rounded-[1.4rem] upto-616:w-fit"
            onClick={handleContactFormSubmit}
          />
        </div>
      </form>
    </Section>
  );
};

const inputBox =
  "flex flex-col flex-wrap gap-5 from-1537:gap-[1.9rem] upto-768:gap-4 upto-680:w-1/2 upto-616:w-full upto-616:gap-3";

// Text input or textarea with the form's shared look
const Field = ({ as = "input", className, ...props }) => {
  const Tag = as;
  return (
    <Tag
      className={clsx(
        "resize-none rounded-[1.4rem] border-2 border-indigo-deep bg-gray-800 p-[1.2rem] text-[1.2rem] text-white/90 outline-none from-1537:p-8 from-1537:text-[2rem] upto-768:text-[1.1rem] upto-680:w-full upto-492:px-[0.9rem] upto-492:py-[0.6rem]",
        className,
      )}
      {...props}
    />
  );
};

export default TheContact;

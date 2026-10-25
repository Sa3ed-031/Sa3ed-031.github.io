// Must Reduce Inputs Fields Code
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

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
    <div className="the-contact section-container pb-12" id="Contact">
      <h2 className="section-heading">
        Contact <span className="color-main">Me</span>
      </h2>

      <p className="contact-email almost-white text-center text-lg">
        Email me directly at{" "}
        <a
          href="mailto:saeedalhajwork@gmail.com"
          className="color-main font-bold underline underline-offset-4 break-all"
        >
          saeedalhajwork@gmail.com
        </a>
      </p>

      <form
        ref={form}
        method="POST"
        // onSubmit={handleContactFormSubmit}
        className="flex justify-center items-center gap-4"
      >
        <div className="input-group">
          <div className="input-box">
            <input
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
            <input
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
          <div className="input-box">
            <input
              type="text"
              name="client_phone"
              id="phone"
              placeholder="Your Number (optional)"
              value={contactInfo.phone}
              onChange={(e) => {
                setContactInfo({ ...contactInfo, phone: e.target.value });
              }}
            />
            <input
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

        <div className="input-group-message">
          <textarea
            name="client_message"
            id="message"
            rows={8}
            cols={30}
            placeholder="Your Message"
            value={contactInfo.message}
            onChange={(e) => {
              setContactInfo({ ...contactInfo, message: e.target.value });
            }}
          ></textarea>
          <input
            type="submit"
            value="Send Message"
            className="btn"
            onClick={handleContactFormSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default TheContact;

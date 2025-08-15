import ContactForm from "../../components/contact-body/ContactForm";
import ContactHeader from "../../components/contact-body/ContactHeader";

export default function Contact() {
  return (
    <>
      <section className={`mx-auto py-40 max-w-xl text-center`} id="contact">
        <ContactHeader />
        <ContactForm />
      </section>
    </>
  );
}

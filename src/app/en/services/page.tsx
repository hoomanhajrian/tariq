import { lazy } from "react";
const ContactForm = lazy(()=>import("@/components/en/ContactForm"));

const Services = () => {
  return (
    <>
      <p className="text-justify text-xl">
        Tariq Louis offers a range of services for those interested in acquiring
        his artwork or commissioning custom pieces. Whether you&apos;re a
        collector looking to add a unique sculpture to your collection or an
        individual seeking a personalized creation, Tariq is dedicated to
        bringing your vision to life. Services include consultation sessions to
        discuss your specific requirements, conceptualization and design of
        bespoke sculptures, and expert craftsmanship to execute your project
        with precision and skill. From small-scale sculptures to monumental
        installations, Tariq&apos;s commitment to excellence ensures that each
        piece is crafted with meticulous attention to detail and artistic
        integrity. Contact us today to inquire about Tariq Louis&apos;s services
        and begin your journey towards owning a masterpiece of sculptural art.
      </p>
      <ContactForm />
    </>
  );
};
export default Services;

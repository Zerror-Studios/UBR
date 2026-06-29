import SectionHero from "@/components/common/SectionHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import FAQ from "@/components/contact/FAQ";
import { createPageMetadata } from "@/lib/seo";

const ContactPage = () => {
  return (
    <>
    <SectionHero
        btnText={"Get In Touch"}
        heading={"Get In Touch"}
        desc={"Tell us what you are building, raising, or backing. One of us reads everything that comes in and replies within two working days."}
      />
      <ContactForm/>
      {/* <FAQ/> */}
    </>
  );
};

export default ContactPage;

export async function generateMetadata() {
  return createPageMetadata("/contact");
}

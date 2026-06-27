import SectionHero from "@/components/common/SectionHero";
import { createMetadata } from "@/lib/seo";
import { Link } from "next-view-transitions";

const terms = [
  {
    label: "State code",
    value: "27",
    note: "Maharashtra registration jurisdiction.",
  },
  {
    label: "Supply location",
    value: "Mumbai",
    note: "All supply and billing records are anchored in Mumbai.",
  },
  {
    label: "Cheque payment",
    value: "Payable at Mumbai in favour of UBR Disrptve LLP",
    note: "Please use the exact beneficiary name for cheque issuance.",
  },
  {
    label: "PAN",
    value: "AAJFU2710N",
    note: "Use this for tax and vendor master records.",
  },
];

const bankDetails = [
  ["Bank name", "HDFC Bank"],
  ["Account number", "50200119990215"],
  ["IFSC code", "HDFC0000240"],
  ["MICR code", "400240002"],
  ["Branch", "Sandoz House Worli"],
];

const companyDetails = [
  "8th Floor, Office No. 8, CTS No. 844",
  "14 Plot No. 14, Commercial Bldg, Link Rd",
  "Ambivali Village, Near Yash Raj Studio",
  "Andheri (W), Mumbai, 400053",
];

const TermsAndConditionsPage = () => {
  return (
    <>
      <SectionHero
        btnText="Terms"
        heading="Terms & Conditions"
        desc="Payment, tax, and company information for UBR Disrptve LLP engagements."
      />

      <section className="container py-12 md:py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-5  md:h-fit">
            <p className=" text-sm uppercase text-[#4688F0]">
              Commercial Details
            </p>
            <h2 data-para-effect className="max-w-xl leading-none">
              Reference information for billing and payments.
            </h2>
            <p data-para-effect className="max-w-md text-lg leading-tight opacity-70">
              Please verify these details before processing invoices, vendor
              onboarding, cheque payments, or bank transfers.
            </p>
          </div>

          <div className="space-y-5">
            {terms.map((item, index) => (
              <div
                key={item.label}
                className="group grid gap-5 border-t border-black/15 py-5  md:grid-cols-[5rem_1fr]"
              >
                <p className=" text-sm text-[#4688F0]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="grid gap-3 md:grid-cols-[0.9fr_1.3fr]">
                  <h5 className="leading-none">{item.label}</h5>
                  <div className="space-y-2">
                    <p className="text-xl leading-tight">
                      {item.value}
                    </p>
                    <p className="max-w-lg leading-tight opacity-60">
                      {item.note}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className=" text-white">
        <div className="container grid gap-5 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg bg-[#4688F0] p-6  md:p-8">
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-4 h-42">
                <p className=" text-sm uppercase ">
                  Bank Transfer
                </p>
                <h3 className="max-w-md leading-none">
                  Account details for direct settlement.
                </h3>
              </div>

              <div className="space-y-1">
                {bankDetails.map(([label, value]) => (
                  <div
                    key={label}
                    className="grid grid-cols-[7.5rem_1fr] border-t border-white/30 py-3 md:grid-cols-[0.5fr_1fr]"
                  >
                    <p className=" text-sm leading-tight uppercase">{label}</p>
                    <p className=" break-words text-lg text-right leading-tight md:text-left">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg bg-[#4688F0] p-6  md:p-8">
            <div className=" flex items-start justify-between gap-5">
              <div className="space-y-3 h-42 ">
                <p className=" text-sm uppercase">
                  Company Identity
                </p>
                <h3 className="leading-none">UBR DISRPTVE LLP</h3>
              </div>
            </div>

            <div className=" border-t border-white/30 ">
              <div className="grid grid-cols-2 py-3">
                <p className=" mb-3 text-sm leading-none  uppercase">
                  Registered Office
                </p>
                <div className=" text-lg   leading-tight">
                  {companyDetails.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>

              <div className="grid  border-t border-white/30 pt-3 md:grid-cols-2">
                <div>
                  <p className=" mb-2 text-sm uppercase">
                    GSTIN
                  </p>
                  <p className="text-lg leading-tight">27AAJFU2710N1ZV</p>
                </div>
                <div>
                  <p className=" mb-2 text-sm uppercase">
                    Email
                  </p>
                  <Link
                  href="mailto:team@ubrdisrptve.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-fit text-lg block cursor-pointer hover:opacity-60 transition-all duration-150 opacity-100  group"
                >
                  <span
                    className="absolute left-0 bottom-0 h-[1.5px] rounded-full w-full bg-[#FFFFFF]  transition-transform duration-300 ease-out   scale-x-0 origin-left group-hover:scale-x-100    "
                  />
                 team@ubrdisrptve.com
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditionsPage;

export async function generateMetadata() {
  return createMetadata({
    title: "Terms & Conditions",
    description:
      "Payment, tax, bank, and registered office details for UBR Disrptve LLP.",
    path: "/terms-and-conditions",
  });
}

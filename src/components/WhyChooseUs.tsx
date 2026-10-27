import { ShieldCheck, Map, Headset } from "lucide-react";

const features = [
  {
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
    Icon: ShieldCheck,
  },
  {
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
    Icon: Map,
  },
  {
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
    Icon: Headset,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-[#ECFAFC] px-5 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="font-serif text-4xl font-normal tracking-[-0.045em] text-[#111111] sm:text-5xl lg:text-[56px] lg:leading-tight">
            Why Choose Wanderlust
          </h2>

          <p className="mt-3 text-sm text-[#737373] sm:text-base">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
          {features.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="min-h-[245px] border-b border-[#DCE5E7] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-10"
            >
              <Icon
                size={42}
                strokeWidth={2.4}
                className="mb-6 text-[#12A3BF]"
                aria-hidden="true"
              />

              <h3 className="mb-3 font-serif text-2xl font-normal tracking-tight text-[#171717]">
                {title}
              </h3>

              <p className="max-w-sm text-[15px] leading-6 text-[#737373]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

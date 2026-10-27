
import { Banner } from "@/components/Banner";
import CTASection from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <div>
      <Banner/>
      <WhyChooseUs/>
      <Testimonials/>
      <CTASection/>
    </div>
  );
}

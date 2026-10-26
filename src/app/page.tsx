import Banner from "@/components/ui/Banner";
import CTASection from "@/components/ui/CTASection";
import Navbar from "@/components/ui/Navbar";
import Testimonials from "@/components/ui/Testimonials";
import WhyChooseUs from "@/components/ui/WhyChooseUs";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner/>
      <WhyChooseUs/>
      <Testimonials/>
      <CTASection/>
    </div>
  );
}

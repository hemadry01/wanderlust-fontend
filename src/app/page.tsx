import Banner from "@/components/ui/Banner";
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
    </div>
  );
}

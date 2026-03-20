import EnhancedTestimonials from "@/components/ui/google-reviews";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24"
    >
      <div className="container">
        <EnhancedTestimonials />
      </div>
    </section>
  );
}

import LogoCarousel from "./companylogos";

export const LogoTicker = () => {
  return(
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-lg text-center text-white/70 mb-16">Trusted by India&apos;s most innovative brands</h2>
        <LogoCarousel/>
      </div>
    </div>
  )
};
import Image from 'next/image'
import aakashLogo from "../assets/images/aakash.png";
import cultfitLogo from "../assets/images/culyfit.jpg";
import hrxLogo from "../assets/images/hrx-logo-png.png";
import lenskartLogo from "../assets/images/Lenskart.jpg";
import titanLogo from "../assets/images/Titan.png";

export default function LogoCarousel() {

  const logos = [
    { src: aakashLogo, alt: "Aakash Logo" },
    { src: cultfitLogo, alt: "Cult.fit Logo" },
    { src: hrxLogo, alt: "HRX Logo" },
    { src: lenskartLogo, alt: "Lenskart Logo" },
    { src: titanLogo, alt: "Titan Logo" },
  ]

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} height={60} />
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} height={60} />
          </li>
        ))}
      </ul>
    </div>
  )
}
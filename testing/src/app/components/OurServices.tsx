'use client';
import Image from 'next/image';
import { Albert_Sans } from 'next/font/google';
const albertSans = Albert_Sans({ subsets: ['latin'], weight: ['400', '700', '800'] });

const serviceCards = [
  {
    title: "Medical Access",
    imgSrc: "/images/Ellipse 6.png",
    description: "Get connected to clinics and hospital that are still open to get a refill for your ARVs dosage. Locate the nearest clinic to you without a hassle.",
  },
  {
    title: "Counseling Services",
    imgSrc: "/images/Ellipse 5.png",
    description: "Get connected to clinics, hospital and counselling centers that are still open to get your counseling sessions. Search for centers near you using HaliCare with ease.",
  },
];

const stats = [
  {
    icon: "/images/Clinic.png",
    label: "Clinics",
    value: "172 +",
  },
  {
    icon: "/images/Downtown.png",
    label: "Counselling Centers",
    value: "153 +",
  },
  {
    icon: "/images/Facebook Like.png",
    label: "Happy Patients",
    value: "301 +",
  },
];

export default function OurServices() {
  return (
    <section className={`w-full min-h-screen bg-gradient-to-br from-[#f5f6ff] to-[#e1e7ff] flex flex-col py-0 px-0 ${albertSans.className}`}>
      <h2 className="text-[#182978] text-3xl xs:text-4xl sm:text-5xl font-extrabold text-center mb-8 sm:mb-10 drop-shadow-lg" style={{letterSpacing:"1px"}}>
        Our Services
      </h2>
      <div className="flex flex-col md:flex-row items-stretch justify-center w-full max-w-[1400px] mx-auto mb-0 gap-8 sm:gap-12 md:gap-24 lg:gap-48 px-2 sm:px-8">
        {serviceCards.map(card => (
          <div
            key={card.title}
            className="bg-[#e5e5e5] rounded-[40px] shadow-lg p-4 xs:p-6 sm:p-8 md:p-10 flex flex-col items-center flex-1 h-full min-h-[380px] w-full"
          >
            <div className="mb-4 sm:mb-6 flex justify-center">
              <Image src={card.imgSrc} width={80} height={80} alt={card.title} className="rounded-full sm:w-[120px] sm:h-[120px]" />
            </div>
            <h3 className="text-[#182978] text-lg xs:text-xl sm:text-2xl md:text-[2rem] font-extrabold mb-2 sm:mb-3 text-center">{card.title}</h3>
            <p className="text-[#182978] text-xs xs:text-sm sm:text-base md:text-lg text-center">{card.description}</p>
          </div>
        ))}
      </div>
      <div className="bg-[#182978] rounded-[40px] w-full max-w-[1400px] mx-auto px-3 xs:px-4 sm:px-8 md:px-6 py-5 xs:py-8 md:py-12 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-8 shadow-lg mt-8 sm:mt-12">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center flex-1 ${idx < stats.length - 1 ? 'md:border-r md:border-white md:pr-4 sm:pr-8' : ''}`}
          >
            <div className="mb-3 sm:mb-5">
              <Image src={stat.icon} width={36} height={36} alt={stat.label} className="sm:w-[56px] sm:h-[56px]" />
            </div>
            <div className="text-white font-extrabold text-base sm:text-2xl mb-1 sm:mb-2 text-center">{stat.label}</div>
            <div className="text-[#00e6ff] text-xl sm:text-3xl md:text-5xl font-extrabold text-center">{stat.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
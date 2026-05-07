import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import DonateModal from '../components/DonateModal';


const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/assets/images/1.png',
    '/assets/images/2.png',
    '/assets/images/3.png',
    '/assets/images/4.png',
    '/assets/images/6.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (<section className="relative h-screen min-h-[520px] md:min-h-[620px] pt-[90px] overflow-hidden flex items-center justify-center text-center">


    {/* BACKGROUND SLIDER */}
    <div className="absolute inset-0">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-[1200ms] ${index === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
          style={{ backgroundImage: `url('${slide}')` }}
        ></div>
      ))}
    </div>

    {/* CLEAN DARK OVERLAY */}
    <div className="absolute inset-0 bg-black/55"></div>

    {/* CONTENT */}
    <div className="relative z-10 max-w-[900px] px-4 md:px-6">
      <h1 className="text-white font-bold text-center leading-tight 
               text-[2.2rem] sm:text-[2.6rem] md:text-[3.6rem] lg:text-[4rem] 
               max-w-[1200px] mx-auto mb-6">
        <span className="block">Empowering Rural Voice &</span>
        <span className="block">
          Transforming Communities
        </span>
      </h1>

      <p className="text-gray-200 
              text-[1rem] md:text-[1.35rem] lg:text-[1.4rem] 
              leading-relaxed mb-8 max-w-[750px] mx-auto text-center px-2">
        Fostering sustainable rural development through education, healthcare, and skill empowerment.
      </p>

      {/* CTA */}
      <div className="flex justify-center">
        <Button
          variant="contained"
          href="https://docs.google.com/forms/d/e/1FAIpQLScIu571TRGETKdjeBrrWgN9CRWTgV3mr681GiFTdg5jTvw3sA/viewform?usp=publish-editor"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            borderRadius: '999px',
            px: { xs: '30px', md: '38px' },
            py: { xs: '12px', md: '14px' },
            fontSize: { xs: '0.9rem', md: '1rem' },
            fontWeight: 600,
            backgroundColor: '#2e7d32',
            textTransform: 'none',
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: '#1b5e20',
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 18px rgba(0,0,0,0.25)'
            }
          }}
        >
          Get Involved
        </Button>
      </div>
    </div>
  </section>


  );
};



const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          setIsVisible(true);
          hasStarted.current = true;
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = countRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const end = parseInt(target.replace(/\D/g, ''));
    if (isNaN(end)) return;

    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  const suffix = target.replace(/[0-9]/g, '');

  return (
    <span ref={countRef}>
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 mt-10 mb-10" id="impact">
      <div className="bg-primary text-white py-12 md:py-16 relative z-[2] rounded-[12px] shadow-lg">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 text-center">
          <div className="stat-item px-2">
            <h3 className="text-[2.2rem] md:text-[3rem] font-extrabold mb-1 md:mb-2">
              <Counter target="100+" />
            </h3>
            <p className="text-[0.9rem] md:text-[1.1rem] opacity-90 leading-tight">Villages Impacted</p>
          </div>
          <div className="stat-item px-2">
            <h3 className="text-[2.2rem] md:text-[3rem] font-extrabold mb-1 md:mb-2">
              <Counter target="20k+" />
            </h3>
            <p className="text-[0.9rem] md:text-[1.1rem] opacity-90 leading-tight">Women Empowered</p>
          </div>
          <div className="stat-item px-2">
            <h3 className="text-[2.2rem] md:text-[3rem] font-extrabold mb-1 md:mb-2">
              <Counter target="50k+" />
            </h3>
            <p className="text-[0.9rem] md:text-[1.1rem] opacity-90 leading-tight">Beneficiaries</p>
          </div>
          <div className="stat-item px-2">
            <h3 className="text-[2.2rem] md:text-[3rem] font-extrabold mb-1 md:mb-2">
              <Counter target="30+" />
            </h3>
            <p className="text-[0.9rem] md:text-[1.1rem] opacity-90 leading-tight">Active Programs</p>
          </div>
        </div>
      </div>
    </section>
  );
};



const images = [
  {
    src: "/assets/images/img1.png",
    alt: "Rural community empowerment",
    text: "Empowering rural women through education & community support."
  },
  {
    src: "/assets/images/img2.png",
    alt: "Women skill development",
    text: "Skill development programs enabling self-reliance."
  },
  {
    src: "/assets/images/img3.png",
    alt: "Education and child welfare",
    text: "Child welfare and education initiatives in rural areas."
  },
  {
    src: "/assets/images/img4.png",
    alt: "Community development programs",
    text: "Strengthening villages through grassroots programs."
  }
];

const LeadingNGOSection = () => {
  return (<section className="py-16 bg-white" id="about-ngo"> <div className="max-w-6xl mx-auto px-6">


    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch min-h-[500px] md:min-h-[550px]">

      {/* LEFT — IMAGE GRID */}
      <div className="grid grid-cols-2 gap-4 h-full">

        {images.map((img, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer h-full"
          >

            {/* IMAGE */}
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* HOVER CURTAIN */}
            <div className="absolute inset-0 flex items-end opacity-100 lg:opacity-0 lg:scale-y-0 lg:group-hover:opacity-100 lg:group-hover:scale-y-100 transition-all duration-500 origin-bottom">

              {/* GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>

              {/* TEXT */}
              <p className="relative text-white text-[0.75rem] sm:text-sm md:text-base font-semibold p-3 md:p-4 leading-snug translate-y-0 lg:translate-y-6 lg:group-hover:translate-y-0 transition duration-500">
                {img.text}
              </p>

            </div>

          </div>
        ))}

      </div>

      {/* RIGHT — TEXT */}
      <div className="max-w-xl h-full flex flex-col justify-center">

        <h2 className="text-3xl md:text-4xl lg:text-[2.7rem] font-bold text-indigo-900 leading-[1.2]">
          Leading NGO in India for Rural Development, Women Empowerment &amp; Skill Enhancement
        </h2>

        <div className="w-full h-[3px] bg-green-500 mt-6 mb-6"></div>

        <div className="text-gray-700 text-base md:text-lg leading-relaxed space-y-4">

          <p>
            Vanasthali Rural Development Centre (VRDC), Pune has been a beacon of rural transformation for over four decades.
            Guided by the inspiring motto “A Balwadi for every village,” the organization is dedicated to bridging the critical early childhood education gap while fostering holistic rural development.
          </p>

          <p>
            Through its grassroots, community-driven programs, VRDC impacts thousands of lives each year across multiple districts of Maharashtra.
          </p>

          <p>
            At its core, Vanasthali works to empower rural communities through a strong foundation of education, women and child welfare, and skill development initiatives
          </p>

        </div>

      </div>

    </div>
  </div>
  </section>


  );
};



const FounderSection = () => {
  return (<section className="bg-gray-50 py-12" id="founder"> <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-[2.8rem] font-bold text-green-700 relative inline-block">
        Founder's Vision

        {/* UNDERLINE */}
        <span className="block h-[3px] w-full bg-green-600 mt-3 rounded"></span>
      </h2>
    </div>

    {/* CUSTOM GRID (40% - 60%) */}
    <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.3fr] gap-6 md:gap-10 items-center">

      {/* LEFT — IMAGE (COMPRESSED SQUARE STYLE) */}
      <div className="w-full h-[240px] md:h-[280px] rounded-xl overflow-hidden shadow-md bg-white flex items-center justify-center">
        <img
          src="/assets/images/founder.png"
          alt="Nirmala Balwant Purandare — Founder of Vanasthali"
          className="w-full h-full object-cover object-[50%_25%]"
        />
      </div>

      {/* RIGHT — EXTENDED QUOTE BOX */}
      <div className="relative bg-green-700 min-h-[260px] md:min-h-[300px] h-auto flex flex-col justify-between p-6 md:p-8 rounded-xl shadow-lg">

        {/* Opening quote */}
        <span className="absolute top-10 left-4 text-yellow-400 text-3xl opacity-50">
          &ldquo;
        </span>

        {/* Quote */}
        <p className="text-white text-sm md:text-base lg:text-lg font-medium leading-relaxed mt-4 italic">
          I started Vanasthali with the belief that real change in rural India begins with early education. My vision of “A Balwadi for every village” was to prepare children before formal schooling and reduce dropouts. I also believed in empowering local women as educators, so that change comes from within the community. For me, education is the key to building awareness, confidence, and a self-reliant rural society.
          <span className="text-yellow-400 text-3xl opacity-50 ml-1 translate-y-1 inline-block leading-none">
            &rdquo;
          </span>
        </p>

        {/* Attribution */}
        <p className="text-sm md:text-base font-semibold text-gray-100 mt-3 border-l-2 border-yellow-400 pl-3">
          — Nirmala Balwant Purandare, Founder of Vanasthali
        </p>

        {/* Button */}
        <Button
          component={Link}
          to="/about#visionary"
          variant="contained"
          sx={{
            mt: -1,
            px: '12px',
            py: '4px',
            fontSize: '0.75rem',
            fontWeight: 600,
            backgroundColor: 'white',
            color: '#15803d',
            textTransform: 'none',
            borderRadius: '6px',
            boxShadow: 'none',
            width: 'fit-content',
            ml: 'auto',
            '&:hover': {
              backgroundColor: '#f3f4f6',
            },
          }}
        >
          Know More
        </Button>



      </div>

    </div>
  </div>
  </section>

  );
};


const Timeline = () => {
  return (
    <section className="bg-beige py-12 md:py-20">
      <div className="container max-w-[1200px] mx-auto px-8">
        <h2 className="text-[1.8rem] md:text-[2.5rem] text-primary text-center font-bold mb-12 md:mb-8">
          Our Journey of Impact
        </h2>
        <p className="text-center text-[#666] max-w-[600px] mx-auto -mt-8 md:-mt-4 mb-12 text-[1.1rem]">
          Tracing the inspiring journey of 45 years of Vanasthali, from its humble
          beginnings to becoming a beacon of change for rural empowerment.
        </p>

        <div className="relative max-w-[800px] mx-auto after:content-[''] after:absolute after:w-[4px] after:bg-primary after:top-0 after:bottom-0 after:left-[31px] md:after:left-1/2 after:-ml-[2px] after:rounded-[2px]">

          {/* Left Item */}
          <div className="relative w-full md:w-1/2 pl-[70px] pr-[25px] md:pl-[40px] md:pr-[40px] py-[10px] left-0 after:content-[''] after:absolute after:w-[20px] after:h-[20px] after:bg-white after:border-4 after:border-primary after:top-[15px] after:rounded-full after:z-[1] after:left-[21px] md:after:-right-[10px] md:after:left-auto">
            <div className="p-5 md:p-8 bg-white relative rounded-[12px] shadow-sm">
              <h3 className="text-primary text-[1.5rem] md:text-[1.8rem] font-bold mb-2">1981</h3>
              <p><strong>Foundation:</strong> VRDC was established with a small office run within Nirmalatai's home on December 21, 1981 in Pune</p>
            </div>
          </div>

          {/* Right Item */}
          <div className="relative w-full md:w-1/2 pl-[70px] pr-[25px] md:pl-[40px] md:pr-[40px] py-[10px] left-0 md:left-1/2 after:content-[''] after:absolute after:w-[20px] after:h-[20px] after:bg-white after:border-4 after:border-primary after:top-[15px] after:rounded-full after:z-[1] after:left-[21px] md:after:-left-[10px]">
            <div className="p-5 md:p-8 bg-white relative rounded-[12px] shadow-sm">
              <h3 className="text-primary text-[1.5rem] md:text-[1.8rem] font-bold mb-2">1996</h3>
              <p><strong>Expanding into Primary Education: </strong> Responding to local demand, VRDC established the Jejuri Primary School, expanding beyond pre-primary education to offer semi-English curriculum and computer training. </p>
            </div>
          </div>

          {/* Left Item */}
          <div className="relative w-full md:w-1/2 pl-[70px] pr-[25px] md:pl-[40px] md:pr-[40px] py-[10px] left-0 after:content-[''] after:absolute after:w-[20px] after:h-[20px] after:bg-white after:border-4 after:border-primary after:top-[15px] after:rounded-full after:z-[1] after:left-[21px] md:after:-right-[10px] md:after:left-auto">
            <div className="p-5 md:p-8 bg-white relative rounded-[12px] shadow-sm">
              <h3 className="text-primary text-[1.5rem] md:text-[1.8rem] font-bold mb-2">2021</h3>
              <p><strong>Formalizing Women Empowerment: </strong> VRDC launched Gruhaudyogini, a dedicated initiative providing financial support and interest-free loans to women, enabling them to start their own household businessesno.</p>
            </div>
          </div>

          {/* Right Item */}
          <div className="relative w-full md:w-1/2 pl-[70px] pr-[25px] md:pl-[40px] md:pr-[40px] py-[10px] left-0 md:left-1/2 after:content-[''] after:absolute after:w-[20px] after:h-[20px] after:bg-white after:border-4 after:border-primary after:top-[15px] after:rounded-full after:z-[1] after:left-[21px] md:after:-left-[10px]">
            <div className="p-5 md:p-8 bg-white relative rounded-[12px] shadow-sm">
              <h3 className="text-primary text-[1.5rem] md:text-[1.8rem] font-bold mb-2">2026</h3>
              <p><strong>Growth Milestone:</strong> VRDC's work is now spread across 9 districts of Maharasthra including about 26 talukas and about 100 villages</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};



const CTASection = () => {
  const [donateOpen, setDonateOpen] = useState(false);

  return (
    <section className="bg-primary text-white text-center py-24 px-4" id="cta">
      <div className="container max-w-[1200px] mx-auto">
        <h2 className="text-[1.8rem] md:text-[2.5rem] text-white font-bold mb-4 text-center">
          Join the Movement of Change
        </h2>
        <p className="text-[1.2rem] mb-8 opacity-90 max-w-[800px] mx-auto">
          Your support can help us reach more villages, educate more children, and empower more women. Together, we
          can build a brighter future.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-8 sm:px-0">
          <Button
            variant="outlined"
            onClick={() => setDonateOpen(true)}
            sx={{
              borderRadius: '30px',
              px: '32px',
              py: '16px',
              fontSize: '1.1rem',
              fontWeight: 600,
              color: 'white',
              borderColor: 'white',
              borderWidth: '2px',
              textTransform: 'none',
              width: { xs: '100%', sm: 'auto' },
              '&:hover': {
                backgroundColor: 'white',
                color: '#2e7d32',
                borderColor: 'white',
                borderWidth: '2px',
                transform: 'translateY(-2px)'
              }
            }}
          >
            Donate Now
          </Button>
          <Button
            variant="contained"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeA3-PxzYtUNE3dQtvvLUmUGL8qP0hxMUh6-WkbrcBtHK3djA/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              borderRadius: '30px',
              px: '32px',
              py: '16px',
              fontSize: '1.1rem',
              fontWeight: 600,
              backgroundColor: 'white',
              color: '#2e7d32',
              textTransform: 'none',
              width: { xs: '100%', sm: 'auto' },
              '&:hover': {
                backgroundColor: '#f9f6f0',
                transform: 'translateY(-2px)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
              }
            }}
          >
            Partner With Us
          </Button>
        </div>
      </div>
      <DonateModal open={donateOpen} handleClose={() => setDonateOpen(false)} />
    </section>
  );
};


const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <StatsSection />
      <LeadingNGOSection />
      <FounderSection />
      <Timeline />
      <CTASection />
    </>
  );
};

export default HomePage;

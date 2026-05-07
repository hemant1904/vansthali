import { Button } from '@mui/material';
import { CheckCircle, School, BookOpen, Microscope, Book, Sun, GraduationCap } from 'lucide-react';
import DonateModal from '../components/DonateModal';
import { useState } from 'react';

const ProgramCard = ({ title, description, items, image, icon: Icon, reverse }) => (
  <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center mb-32 group`}>
    {/* IMAGE FRAME */}
    <div className="w-full lg:w-1/2 relative">
      <div className="absolute -inset-2 md:-inset-4 bg-green-100 rounded-3xl -rotate-1 md:-rotate-2 group-hover:rotate-0 transition-transform duration-500 opacity-50"></div>
      <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>
    </div>

    {/* CONTENT BOX */}
    <div className="w-full lg:w-1/2 space-y-6">
      <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-lg italic border-l-4 border-green-600 pl-4">
        {description}
      </p>
      
      <div className="grid grid-cols-1 gap-4 pt-4">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-3 group/item">
            <div className="mt-1 bg-green-100 text-green-700 p-1 rounded-full group-hover/item:bg-green-700 group-hover/item:text-white transition-colors duration-300">
              <CheckCircle className="w-4 h-4" />
            </div>
            <span className="text-gray-700 font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ProgramsPage = () => {
  const [donateOpen, setDonateOpen] = useState(false);
  const programs = [
    {
      title: "Balewadi Pre-schools",
      icon: School,
      image: "/assets/images/primary-school.jpg",
      description: "Providing pre-primary education to children in rural areas, focusing on holistic development and school readiness.",
      items: [
        "Provides early childhood education for ages 3–6.",
        "Builds discipline, habits, and social skills based on child psychology.",
        "Includes games, recitation, and creative activities for development.",
        "Introduces basic reading, writing, and arithmetic.",
        "Ensures nursery education access for underserved communities."
      ]
    },
    {
      title: "Teacher Training Course",
      icon: GraduationCap,
      image: "/assets/images/teacher-training.jpg",
      description: "Empowering local women to become educators, improving the quality of primary education in rural schools.",
      items: [
        "Structured 6-month programme to become educators and leaders.",
        "Covers child psychology, health, nutrition & social welfare.",
        "Training in teaching methods, learning aids, and creative arts.",
        "Builds confidence with social recognition and economic independence.",
        "Prepares graduates for roles in educational institutions."
      ],
      reverse: true
    },
    {
      title: "Leap Learning Enhancement",
      icon: BookOpen,
      image: "/assets/images/leap-learning.jpg",
      description: "Leveraging technology to bridge educational gaps and provide personalized learning experiences to students.",
      items: [
        "Provides daily enrichment sessions for children aged 6–12.",
        "Strengthens reading and writing skills for those lagging.",
        "Encourages creativity through drawing, theatre, and poetry.",
        "Promotes environmental sensitivity through projects.",
        "Builds confidence and interest in studies through engagement."
      ]
    },
    {
      title: "Science Exhibition & Labs",
      icon: Microscope,
      image: "/assets/images/science-expo.jpg",
      description: "Empowering young minds through hands-on scientific exploration, innovation, and experimentation.",
      items: [
        "Performing experiments despite limited school facilities.",
        "Encourages observation and independent understanding.",
        "Provides “Vidnyan Petya” science kits for classroom use.",
        "Organizes Science Day exhibitions for student projects.",
        "Partners with expert organizations like QUEST and IUCAA."
      ],
      reverse: true
    },
    {
      title: "Library Programmes",
      icon: Book,
      image: "/assets/images/library.jpg",
      description: "Running evening learning centers and libraries to support school-going children and combat dropout rates.",
      items: [
        "Distributes 1000s of books across centers for all ages.",
        "Delivers books to villages lacking library infrastructure.",
        "Promotes reading through storytelling and skits.",
        "Brings books directly to households via doorstep library.",
        "Strengthens access to information via “Vachanalayas”."
      ]
    },
    {
      title: "Summer & Winter Camps",
      icon: Sun,
      image: "/assets/images/summer-camp.jpg",
      description: "Organizing camps during vacations to engage children in constructive activities, art, and cultural exploration.",
      items: [
        "Organizes 3–5 day residential and day camps.",
        "Includes mask making, pottery, puppetry, and folk arts.",
        "Brings children from different villages for shared learning.",
        "Involves locals in supporting and hosting activities.",
        "Offers special sessions like bird watching with experts."
      ],
      reverse: true
    }
  ];

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <div
        className="relative h-[50vh] md:h-[65vh] flex items-center justify-center text-white overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/our programme bg.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        
        <div className="relative text-center px-4 md:px-6 max-w-[900px] z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-center">
            Our Programs
          </h1>
          <p className="text-base md:text-xl text-gray-200 max-w-[850px] mx-auto px-2">
            Comprehensive initiatives designed to address the multifaceted challenges faced
            by rural communities across Maharashtra.
          </p>
        </div>
      </div>

      {/* PROGRAMS LIST */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-green-700 mb-6 inline-block border-b-4 border-green-600 pb-2">Empowering Through Action</h2>
            <p className="text-gray-600 text-lg max-w-[800px] mx-auto">
              Our diverse range of programs focuses on early childhood education, teacher empowerment, and community engagement to ensure sustainable rural development.
            </p>
          </div>

          {programs.map((prog, index) => (
            <ProgramCard key={index} {...prog} />
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>

        <div className="relative max-w-[900px] mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Ready to Make an Impact?
          </h2>

          <p className="text-lg md:text-xl text-green-100 mb-12 max-w-[700px] mx-auto leading-relaxed">
            Your support can transform lives. Join us in our mission to bring quality education 
            and empowerment to the heart of rural Maharashtra.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={() => setDonateOpen(true)}
              className="bg-white text-green-800 px-10 py-4 rounded-full font-bold shadow-2xl hover:bg-gray-100 hover:scale-105 transition duration-300 text-lg"
            >
              Donate Now
            </button>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScIu571TRGETKdjeBrrWgN9CRWTgV3mr681GiFTdg5jTvw3sA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-green-800 transition duration-300 inline-block text-center text-lg"
            >
              Get Involved
            </a>
          </div>
        </div>
        <DonateModal open={donateOpen} handleClose={() => setDonateOpen(false)} />
      </section>
    </div>
  );
};

export default ProgramsPage;


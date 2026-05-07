import React, { useState } from 'react';
import { GraduationCap, Users, Microscope, Briefcase, BookOpen } from 'lucide-react';
import DonateModal from '../components/DonateModal';

const StoryCard = ({ story }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const paragraphs = story.content.split('\n\n');
  const preview = paragraphs[0];
  const rest = paragraphs.slice(1);

  return (
    <div className="">
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2 bg-green-50 rounded-lg text-green-700 w-fit">
           <div className="[&>svg]:w-5 [&>svg]:h-5">
             {story.icon}
           </div>
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-green-600">
          {story.category}
        </span>
      </div>

      <h2 className="text-2xl md:text-4xl font-extrabold text-green-800 mb-6 leading-[1.2]">
        {story.title}
      </h2>

      <div className="space-y-6">
        <p className="text-gray-700 text-[1.1rem] md:text-[1.25rem] leading-relaxed">
          {preview}
        </p>
        
        {isExpanded && rest.length > 0 && (
          <div className="space-y-6 pt-4 border-t border-green-50 mt-4 animate-in fade-in slide-in-from-top-4 duration-500">
            {rest.map((p, i) => (
              <p key={i} className="text-gray-600 text-[1.05rem] md:text-[1.15rem] leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-10 py-3 rounded-full font-bold transition duration-300 shadow-md hover:shadow-lg text-lg"
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

const stories = [
  {
    id: 1,
    title: "The Global Journey of Kalpana Gunaki",
    category: "Women Empowerment & Education",
    icon: <GraduationCap className="w-8 h-8 text-green-700" />,
    content: `Kalpana Gunaki’s journey is one of resilience, transformation, and empowerment. She began her association with Vanasthali as a young woman with only a Class 10 education, living within the traditional boundaries of rural life. Like many women in her community, her role was largely confined to domestic responsibilities, and stepping beyond that came with resistance—especially from within her own family. As Kalpana became more involved in the organization’s teacher training programs, her growing independence and exposure to new ideas were initially met with hesitation and disapproval from her husband.

However, what set her apart was her determination to grow and the unwavering mentorship she received from Vanasthali’s founder, Nirmala Tai. Encouraged to pursue her education despite challenges, Kalpana balanced her responsibilities as a teacher while continuing her academic journey. Through persistence and support, she successfully completed her Master’s degree in Sociology—an achievement that not only transformed her life but also redefined her identity within her community.

The true test of her strength came after the loss of her husband. At a time when many would struggle to cope, Kalpana stood firm, supported by the confidence and professional foundation she had built through Vanasthali. She was able to independently sustain herself and her family, becoming a symbol of self-reliance and courage.

Her journey did not stop there. Her dedication and excellence led her to represent rural India on an international platform in France, where she participated in an exchange program. Today, Kalpana serves as a Supervisor and Trainer at the Somatne Phata center, mentoring and inspiring hundreds of women. Her story continues to motivate countless “Balwaditais” to dream beyond their circumstances and believe in their potential.`
  },
  {
    id: 2,
    title: "The Rise of Jejuri Primary School",
    category: "Education & Community Development",
    icon: <Users className="w-8 h-8 text-green-700" />,
    content: `The story of the Jejuri Primary School is a powerful example of how community trust and demand can shape sustainable educational development. In 1996, parents in the Jejuri region began to notice a remarkable difference in their children who attended Vanasthali’s Balwadis. These children displayed stronger foundational skills, better confidence, and greater readiness for formal schooling compared to others.

Recognizing this impact, the community approached Vanasthali with a request—to establish a full-fledged primary school that would continue nurturing their children with the same quality and values. This demand marked the beginning of a new chapter.

Under the leadership of Supervisor Sunanda Aaglave and Principal Ujwala Jejurikar, the school was established and steadily built a reputation for excellence. Despite competition from several private Marathi and English-medium schools in the area, Vanasthali’s institution stood out due to its focus on holistic development, discipline, and strong educational foundations.

As times evolved, so did the school. In 2009, it adopted a semi-English curriculum to meet modern educational needs while maintaining its core values. The institution continued to innovate and expand its offerings, introducing facilities such as computer education, karate training, and abacus mathematics to ensure well-rounded development.

Today, the school serves approximately 180–200 students and has become a symbol of quality education in a rural setting. Its students consistently perform well in prestigious state-level competitions such as Pradnya Shodh and Manthan, proving that with the right guidance and environment, rural children can compete and excel at the highest levels.`
  },
  {
    id: 3,
    title: "Science in the Village – The Vidnyan Petya Initiative",
    category: "Educational Innovation",
    icon: <Microscope className="w-8 h-8 text-green-700" />,
    content: `One of the key challenges identified by Vanasthali was the gap between theoretical knowledge and practical learning in rural schools. While textbooks included numerous scientific concepts and experiments, the lack of basic laboratory infrastructure meant that students rarely had the opportunity to experience science hands-on. This often resulted in limited understanding and reduced interest in the subject.

To address this issue, Vanasthali collaborated with the NGO Quest and science expert Malati Kelkar to introduce the “Vidnyan Petya” initiative. These “Science Trunks” are portable kits containing equipment and materials for conducting experiments in physics, chemistry, and biology. Designed for easy transport, they bring the laboratory directly into village classrooms.

The implementation of this initiative transformed the learning experience for students. Instead of merely reading about scientific concepts, children began performing experiments themselves, sparking curiosity and deeper understanding. The program also included Science Exhibition Days, where students demonstrated their experiments to parents and community members, creating a culture of learning beyond the classroom.

In the academic year 2023–2024 alone, 21 new science kits were distributed, benefiting 541 students across 9 schools in regions such as Vadgaon and Saswad. The initiative not only improved academic engagement but also encouraged critical thinking and a scientific outlook among rural children.`
  },
  {
    id: 4,
    title: "Gruhaudyogini – Unlocking Economic Independence",
    category: "Women Empowerment & Livelihood",
    icon: <Briefcase className="w-8 h-8 text-green-700" />,
    content: `Vanasthali has always believed that true empowerment goes beyond education—it must also include economic independence. While many women associated with the organization were already contributing as educators, there was a growing need to provide them with opportunities to generate income and achieve financial stability.

This vision led to the launch of the “Gruhaudyogini” initiative in 2021, supported by the N.G. Paranjape Pratishthan. The program was designed to help women start small-scale household businesses by providing interest-free loans, financial guidance, and mentorship.

The response was overwhelmingly positive. Women who were once confined to their homes began exploring entrepreneurial opportunities. From running bangle shops and tailoring units to managing goat-rearing and poultry farms, participants embraced their new roles with confidence and determination.

To date, 54 women have successfully established their own ventures, contributing to their household income and gaining respect within their communities. In the past year alone, nine additional women joined the program, highlighting its continued growth and relevance.

Beyond financial gains, the initiative has had a profound social impact. Women are no longer seen as dependent but as active contributors and decision-makers in their families. The transition from “homebound” individuals to entrepreneurs has reshaped identities and strengthened communities.`
  },
  {
    id: 5,
    title: "Rejuvenation at the 50th Shibir",
    category: "Capacity Building & Leadership",
    icon: <BookOpen className="w-8 h-8 text-green-700" />,
    content: `At the heart of Vanasthali’s work lies its belief that empowered educators create empowered communities. Recognizing the importance of continuous learning and personal growth, the organization has long conducted residential training camps, known as “Shibirs,” for its teachers.

In June 2023, Vanasthali celebrated a significant milestone—the 50th Personality Development Camp. Held at the Vidyarthi Sahayyak Samiti’s ladies’ hostel in Pune, the four-day event brought together 218 women from 9 districts.

The camp was designed as both a professional training program and a personal retreat. Participants engaged in sessions on the New National Education Policy, inclusive education for visually impaired children, and the role of brain development in early childhood learning. These sessions equipped teachers with updated knowledge and innovative teaching methods.

Equally important were the opportunities for self-expression and creativity. Many participants, who rarely get such exposure in their daily lives, took part in activities like fine arts, drama, and dance. These experiences helped them rediscover their talents, build confidence, and form deeper connections with one another.

The impact of the Shibir extended far beyond the four days. Participants returned to their villages with renewed energy, enhanced skills, and a stronger sense of purpose. The camp reinforced the idea that when teachers grow, entire communities benefit.`
  }
];

const StoriesPage = () => {
  const [donateOpen, setDonateOpen] = useState(false);
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO SECTION */}
      <div
        className="relative h-[50vh] md:h-[70vh] flex items-center justify-center text-white bg-cover bg-[center_25%] bg-no-repeat"
        style={{ backgroundImage: "url('/assets/images/stories_backgroundimage.png')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center px-4 md:px-6 max-w-[900px] z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-center">
            Stories of Change
          </h1>
          <p className="text-base md:text-xl text-gray-200 max-w-[850px] mx-auto px-2">
            Real journeys of courage, growth, and transformation—driven by education, opportunity, and the strength of rural communities.
          </p>
        </div>
      </div>

      {/* SECTION HEADING */}
      <section className="pt-16 pb-8 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 inline-block border-b-4 border-green-600 pb-2 mb-4">
            Stories That Define Our Impact
          </h2>
          <p className="text-gray-700 leading-relaxed text-[1.1rem] md:text-[1.2rem]">
            Each story reflects the power of education, opportunity, and the strength of rural communities coming together to create lasting change.
          </p>
        </div>
      </section>

      {/* STORIES LIST */}
      <section className="pb-20 pt-4 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto space-y-12">
          {stories.map((story) => (
            <div key={story.id} className="bg-gray-50/50 p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <StoryCard story={story} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-700 to-green-800 text-white text-center relative overflow-hidden">
        {/* 🔸 Subtle Background Glow */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_70%)]"></div>

        <div className="relative max-w-[900px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
            Every Story Begins with a Step
          </h2>

          <p className="text-[1.05rem] md:text-lg text-green-100 mb-8 max-w-[650px] mx-auto leading-relaxed">
            Be the catalyst for the next journey of transformation. Your support creates ripples of change across rural Maharashtra.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Primary */}
            <button 
              onClick={() => setDonateOpen(true)}
              className="bg-white text-green-700 px-7 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 hover:scale-105 transition duration-300"
            >
              Donate Now
            </button>

            {/* Secondary */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScIu571TRGETKdjeBrrWgN9CRWTgV3mr681GiFTdg5jTvw3sA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition duration-300 inline-block text-center"
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

export default StoriesPage;

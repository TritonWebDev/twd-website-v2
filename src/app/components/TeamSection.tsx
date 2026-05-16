import React, { useState } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string; 
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Daniel Budidharma",
    role: "President",
    image: "/team-pics/daniel.png",
    bio: "I started Triton Web Developers to solve a problem: many non-engineering clubs want websites but don't have members who can build one. Meanwhile, there are many CS students looking for real full-stack experience working for a client.",
    social: { github: "#", linkedin: "#", email: "#" },
  },
  {
    name: "Jeremy Lim",
    role: "Vice President",
    image: "/team-pics/jeremy.png",
    bio: " I started this club with our president, Daniel, because I observed that while there were many students who wanted practical experiences in software/web development and also many organizations that need this sort of service.",
    social: { github: "#", linkedin: "#", email: "#" },
  },
];

const projectLeads: TeamMember[] = [
  {
    name: "Nicole Sutedja",
    role: "Project Lead",
    image: "/team-pics/nicole.png",
    bio: "I decided to join the club because I have always enjoyed Web Development, and if there's an opportunity to help other clubs at the same time, I wanted to be involved! :)",
    social: { github: "#", linkedin: "#", email: "#" },
  },
  {
    name: "Julie Nguyen",
    role: "Project Lead",
    image: "/team-pics/julie.png",
    bio: "I joined TWD because I wanted to create websites that will have a lasting impact and benefit clubs on campus who may not have the technical experience to build their own site, so I wanted to help fill that gap and gain hands-on experience along the way!",
    social: { github: "#", linkedin: "#", email: "#" },
  },
  {
    name: "Piqim Bin Burhanuddin",
    role: "Project Lead",
    // No image file seen in screenshot — add "/team-pics/piqim.png" once available
    bio: "I want an internship, uh I mean, I love websites and I think it's the best way to start off your CS journey! I joined the club because its an opportunity for me to help so many of my peers get started with CS!",
    social: { github: "#", linkedin: "#", email: "#" },
  },
];

const outreachMembers: TeamMember[] = [
  {
    name: "Varick Janiro Hasim",
    role: "Outreach",
    image: "/team-pics/varick.png",
    bio: "I've always loved talking and meeting new people. Excited to help the club!",
    social: { github: "#", linkedin: "#", email: "#" },
  },
];

function TeamCard({ member, delay }: { member: TeamMember; delay: number }) {
  const [flipped, setFlipped] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.04 }}
      className="cursor-pointer"
      style={{
        perspective: "1000px",
        filter: flipped ? "none" : undefined,
      }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        style={{
          position: "relative",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          height: "320px",
        }}
      >
        {/* FRONT */}
        <div
          style={{ backfaceVisibility: "hidden" }}
          className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col hover:shadow-[0_0_24px_4px_rgba(255,190,80,0.15)] transition-shadow duration-300"
        > 
          <div className="w-40 h-40 rounded-full overflow-hidden mb-4 mx-auto bg-gradient-to-br from-[#0f2341] to-[#1a3a5c] flex items-center justify-center">
            {member.image && !imgError ? (
              <img
                src={member.image}
                alt={member.name}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <span className="text-5xl text-white/30 font-display">
                {member.name.charAt(0)}
              </span>
            )}
          </div>
          <h3 className="text-xl text-white mb-1 tracking-wide">{member.name}</h3>
          <p className="text-[#FFBE50] text-sm">{member.role}</p>
          <p className="text-white/25 text-xs mt-3">Click to learn more</p>
        </div>

        {/* BACK */}
        <div
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className="absolute inset-0 bg-[#0f2341] border border-[#FFBE50] rounded-2xl p-6 flex flex-col justify-between shadow-[0_0_24px_4px_rgba(255,190,80,0.15)]"
        >
          <div>
            <h3 className="text-lg text-white tracking-wide mb-1">{member.name}</h3>
            <p className="text-[#FFBE50] text-sm mb-5">{member.role}</p>
            <p className="text-white/70 text-sm leading-relaxed">{member.bio}</p>
          </div>

          <div className="flex gap-3 mt-4">
            {member.social.github && (
              <a
                href={member.social.github}
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#FFBE50] hover:scale-105 rounded-lg flex items-center justify-center transition-all duration-200"
              >
                <Github className="w-4 h-4 text-white" />
              </a>
            )}
            {member.social.linkedin && (
              <a
                href={member.social.linkedin}
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#FFBE50] hover:scale-105 rounded-lg flex items-center justify-center transition-all duration-200"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
            )}
            {member.social.email && (
              <a
                href={`mailto:${member.social.email}`}
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                className="w-9 h-9 bg-white/10 hover:bg-[#FFBE50] hover:scale-105 rounded-lg flex items-center justify-center transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-white" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <h3 className="text-2xl text-white/80 tracking-wide mb-8 text-center">{title}</h3>
  );
}

export function TeamSection() {
  return (
    <section id="team" className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl text-white tracking-wide mb-4">
            Meet Our <span className="font-display italic text-[#FFBE50]">Team</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Talented student developers passionate about creating exceptional web experiences
          </p>
        </motion.div>

        {/* Leadership */}
        <div className="mb-16">
          <SectionTitle title="Leadership" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.name} member={member} delay={index * 0.05} />
            ))}
          </div>
        </div>

        {/* Project Leads */}
        <div className="mb-16">
          <SectionTitle title="Project Leads" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectLeads.map((member, index) => (
              <TeamCard key={member.name} member={member} delay={index * 0.05} />
            ))}
          </div>
        </div>

        {/* Outreach */}
        <div>
          <SectionTitle title="Outreach" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {outreachMembers.map((member, index) => (
              <TeamCard key={member.name} member={member} delay={index * 0.05} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion } from "motion/react";

interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Daniel Budidharma",
    role: "President",
    image: "/team-pics/daniel.webp",
  },
  {
    name: "Jeremy Lim",
    role: "Vice President",
    image: "/team-pics/jeremy.webp",
  },
];

const projectLeads: TeamMember[] = [
  {
    name: "Nicole Sutedja",
    role: "Project Lead",
    image: "/team-pics/nicole.webp",
  },
  {
    name: "Julie Nguyen",
    role: "Project Lead",
    image: "/team-pics/julie.webp",
  },
  {
    name: "Piqim Bin Burhanuddin",
    role: "Project Lead",
  },
];

const outreachMembers: TeamMember[] = [
  {
    name: "Varick Janiro Hasim",
    role: "Outreach",
    image: "/team-pics/varick.webp",
  },
];

function TeamCard({ member, delay }: { member: TeamMember; delay: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02 }}
      className="bg-glass backdrop-blur-sm border border-glass-border rounded-2xl p-6 flex flex-col items-center hover:shadow-brand-glow transition-shadow duration-300"
    >
      <figure className="m-0 flex flex-col items-center">
        <span className="w-40 h-40 rounded-full overflow-hidden mb-4 bg-navy-deep flex items-center justify-center">
          {member.image && !imgError ? (
            <img
              src={member.image}
              alt={member.name}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <span className="text-5xl text-on-dark-dim font-display">
              {member.name.charAt(0)}
            </span>
          )}
        </span>
        <figcaption className="text-center">
          <h3 className="text-xl text-on-dark mb-1 tracking-wide">{member.name}</h3>
          <p className="text-brand text-sm">{member.role}</p>
        </figcaption>
      </figure>
    </motion.article>
  );
}

function SectionTitle({ title, id }: { title: string; id: string }) {
  return (
    <h3 id={id} className="text-2xl text-on-dark-soft tracking-wide mb-8 text-center">
      {title}
    </h3>
  );
}

export function TeamSection() {
  return (
    <section
      id="team"
      className="min-h-screen flex flex-col items-center px-6 py-24 pt-24 max-w-6xl w-full mx-auto"
    >
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl text-on-dark tracking-wide mb-4">
          Meet Our Team
        </h2>
      </motion.header>

      <section aria-labelledby="leadership-heading" className="mb-16 w-full">
        <SectionTitle id="leadership-heading" title="Leadership" />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto list-none p-0 m-0">
          {teamMembers.map((member, index) => (
            <li key={member.name}>
              <TeamCard member={member} delay={index * 0.05} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="project-leads-heading" className="mb-16 w-full">
        <SectionTitle id="project-leads-heading" title="Project Leads" />
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0 m-0">
          {projectLeads.map((member, index) => (
            <li key={member.name}>
              <TeamCard member={member} delay={index * 0.05} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="outreach-heading" className="w-full">
        <SectionTitle id="outreach-heading" title="Outreach" />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto list-none p-0 m-0">
          {outreachMembers.map((member, index) => (
            <li key={member.name}>
              <TeamCard member={member} delay={index * 0.05} />
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

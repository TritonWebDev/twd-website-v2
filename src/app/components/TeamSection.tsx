import { useState } from "react";
import { motion } from "motion/react";

interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

const teamMembers: TeamMember[] = [
  { name: "Daniel Budidharma", role: "President", image: "/team-pics/daniel.webp" },
  { name: "Jeremy Lim", role: "Vice President", image: "/team-pics/jeremy.webp" },
];

const projectLeads: TeamMember[] = [
  { name: "Nicole Sutedja", role: "Project Lead", image: "/team-pics/nicole.webp" },
  { name: "Julie Nguyen", role: "Project Lead", image: "/team-pics/julie.webp" },
  { name: "Piqim Bin Burhanuddin", role: "Project Lead", image: "/team-pics/piqim.webp" },
];

const outreachMembers: TeamMember[] = [
  { name: "Varick Janiro Hasim", role: "Outreach", image: "/team-pics/varick.webp" },
];

function TeamCard({ member, delay }: { member: TeamMember; delay: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      /* w-full max-w-[340px] combined with h-full guarantees that all cards 
         maintain uniform proportions across rows. 
      */
      className="group relative bg-glass border border-glass-border hover:border-brand/30 transition-colors duration-300 p-6 flex flex-col items-center w-full max-w-[340px] h-full mx-auto"
      style={{ borderRadius: 0 }}
    >
      {/* Accent bar */}
      <span
        aria-hidden
        className="absolute top-0 left-0 w-full h-px bg-brand/0 group-hover:bg-brand/40 transition-colors duration-400"
      />

      <figure className="m-0 flex flex-col items-center w-full">
        <div className="w-28 h-28 overflow-hidden mb-4 bg-navy-deep border border-glass-border flex items-center justify-center shrink-0" style={{ borderRadius: 0 }}>
          {member.image && !imgError ? (
            <img
              src={member.image}
              alt={`${member.name}, ${member.role}`}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top transition-all duration-500"
            />
          ) : (
            <span className="text-3xl text-on-dark-dim font-display">
              {member.name.charAt(0)}
            </span>
          )}
        </div>
        <figcaption className="text-center w-full">
          {/* Forced truncate / line-clamp avoids single multi-line cards pushing dimensions out */}
          <h3 className="text-base text-on-dark mb-1 tracking-wide truncate">{member.name}</h3>
          <p className="text-brand text-xs uppercase tracking-[0.15em] truncate">{member.role}</p>
        </figcaption>
      </figure>
    </motion.article>
  );
}

function SectionLabel({ title, id }: { title: string; id: string }) {
  return (
    <div className="flex items-center gap-4 mb-8 select-none">
      <span aria-hidden className="block h-px flex-1 bg-glass-border" />
      <h3 id={id} className="text-xs text-on-dark-faint uppercase tracking-[0.25em]">
        {title}
      </h3>
      <span aria-hidden className="block h-px flex-1 bg-glass-border" />
    </div>
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
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16 w-full text-center md:text-left"
      >
        <p className="text-brand text-xs uppercase tracking-[0.3em] mb-4">The Team</p>
        <h2 className="font-serif text-4xl md:text-5xl text-on-dark tracking-tight leading-tight">
          People to craft your next{" "}
          <span className="italic text-brand font-light">digital experience.</span>
        </h2>
      </motion.header>

      <div className="w-full space-y-16">
        {/* Leadership Section */}
        <section aria-labelledby="leadership-heading" className="w-full">
          <SectionLabel id="leadership-heading" title="Leadership" />
          <ul className="flex flex-wrap justify-center gap-6 list-none p-0 m-0 w-full">
            {teamMembers.map((member, index) => (
              <li key={member.name} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-[340px]">
                <TeamCard member={member} delay={index * 0.06} />
              </li>
            ))}
          </ul>
        </section>

        {/* Project Leads Section */}
        <section aria-labelledby="project-leads-heading" className="w-full">
          <SectionLabel id="project-leads-heading" title="Project Leads" />
          <ul className="flex flex-wrap justify-center gap-6 list-none p-0 m-0 w-full">
            {projectLeads.map((member, index) => (
              <li key={member.name} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-[340px]">
                <TeamCard member={member} delay={index * 0.06} />
              </li>
            ))}
          </ul>
        </section>

        {/* Outreach Section */}
        <section aria-labelledby="outreach-heading" className="w-full">
          <SectionLabel id="outreach-heading" title="Outreach" />
          <ul className="flex flex-wrap justify-center gap-6 list-none p-0 m-0 w-full">
            {outreachMembers.map((member, index) => (
              <li key={member.name} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-[340px]">
                <TeamCard member={member} delay={index * 0.06} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
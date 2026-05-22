import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, ExternalLink, ImageIcon, BookOpen, X, ArrowRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: "completed" | "in-progress";
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  devBlog?: DevBlogEntry[];
}

interface DevBlogEntry {
  date: string;
  title: string;
  body: string;
}

export function ProjectsPage() {
  const [filter, setFilter] = useState<"all" | "completed" | "in-progress">("all");
  const [blogProject, setBlogProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "1",
      title: "Triton Minecraft",
      description: "A custom-built and community-driven website for Triton Minecraft at UC San Diego. Features a dynamic background.",
      tags: ["JavaScript", "React", "TypeScript", "Tailwind CSS v4"],
      category: "completed",
      liveUrl: "https://tritonmc.com/",
      githubUrl: "https://github.com/TritonWebDev/triton-minecraft",
      imageUrl: "/projects/tritonmc.png",
    },
  ];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);

  const tabs = [
    { id: "all" as const, label: "All" },
    { id: "completed" as const, label: "Completed" },
    { id: "in-progress" as const, label: "In Development" },
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 w-full"
        >
          <p className="text-brand text-xs uppercase tracking-[0.3em] mb-4 font-medium">
            Our Work
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h1 className="text-4xl md:text-5xl text-on-dark leading-tight">
              Projects we've{" "}
              <span className="italic text-brand">shipped.</span>
            </h1>
          </div>
        </motion.header>

        {/* Filter tabs */}
        <div className="flex items-center gap-8 border-b border-glass-border-subtle mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`pb-3 text-xs uppercase tracking-[0.2em] transition-colors duration-200 relative cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                filter === tab.id
                  ? "text-brand"
                  : "text-on-dark-faint hover:text-on-dark-subtle"
              }`}
            >
              {tab.label}
              {filter === tab.id && (
                <motion.span
                  layoutId="filter-underline"
                  className="absolute bottom-0 left-0 right-0 h-px bg-brand"
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0 m-0">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.li
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <article className="group flex flex-col h-full border border-glass-border hover:border-brand/30 transition-colors duration-300">

                  {/* Image */}
                  <div className="h-48 w-full bg-navy-deep relative overflow-hidden border-b border-glass-border-subtle flex items-center justify-center">
                    {project.imageUrl ? (
                      <img
                        src={project.imageUrl}
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-on-dark-dim select-none gap-2">
                        <ImageIcon className="w-6 h-6 stroke-[1.25]" />
                        <span className="text-[10px] tracking-widest uppercase">Coming soon</span>
                      </div>
                    )}
                    <span className="absolute top-3 left-3 bg-page/80 backdrop-blur-sm border border-glass-border text-[10px] uppercase tracking-[0.2em] text-on-dark-faint px-2.5 py-1">
                      {project.category === "completed" ? "Completed" : "Developing"}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="text-lg text-on-dark mb-2 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-on-dark-subtle text-sm leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-glass-border text-on-dark-dim text-[10px] px-2 py-0.5 uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links row */}
                    <div className="flex items-center justify-between border-t border-glass-border-subtle pt-5">
                      <div className="flex items-center gap-4">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-on-dark-faint hover:text-brand transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>GitHub</span>
                          </a>
                        )}
                      </div>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-brand hover:text-brand-dark transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                        >
                          <span>Launch Site</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>

                </article>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 border border-glass-border-subtle"
          >
            <p className="text-on-dark-faint text-sm uppercase tracking-[0.2em]">
              No projects here yet.
            </p>
          </motion.div>
        )}
      </div>
    </main>
  );
}
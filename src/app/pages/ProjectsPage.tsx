import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, ExternalLink, Code2, Globe, Eye, ImageIcon } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: "completed" | "in-progress";
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string; // Route path to your image asset (e.g., "/images/project1.png")
}

export function ProjectsPage() {
  const [filter, setFilter] = useState<"all" | "completed" | "in-progress">("all");

  const projects: Project[] = [
    {
      id: "1",
      title: "Triton Minecraft",
      description: "A custom-built and community-driven website for Triton Minecraft at UC San Diego. Features a dynamic background.",
      tags: ["JavaScript", "React", "TypeScript", "Tailwind CSS v4"],
      category: "completed",
      liveUrl: "https://tritonmc.com/",
      githubUrl: "https://github.com/TritonWebDev/triton-minecraft",
      imageUrl: "/projects/tritonmc.png", // Add paths to your public assets once ready
    },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <main className="min-h-screen bg-page text-on-dark pt-32 pb-24 px-6 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-navy-deep/40 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Block */}
        <header className="max-w-2xl mb-16 text-center md:text-left">
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-on-dark mb-4">
            Projects We've Built
          </h1>
        </header>

        {/* Filter Navigation Links */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 border-b border-glass-border-subtle pb-8 mb-12">
          {([
            { id: "all", label: "All Projects" },
            { id: "completed", label: "Completed" },
            { id: "in-progress", label: "In Development" }
          ] as const).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-lg text-xs font-medium uppercase tracking-wider transition-all duration-200 relative cursor-pointer ${
                filter === tab.id 
                  ? "text-on-brand bg-brand" 
                  : "text-on-dark-subtle hover:text-on-dark hover:bg-glass"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="group relative flex flex-col justify-between bg-navy-deep/20 border border-glass-border rounded-xl overflow-hidden backdrop-blur-md hover:border-brand/30 transition-all duration-200 shadow-lg"
              >
                {/* Image Container Section */}
                <div className="h-44 w-full bg-navy-deep/50 relative overflow-hidden flex items-center justify-center border-b border-glass-border-subtle">
                  {project.imageUrl ? (
                    <img 
                      src={project.imageUrl} 
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  ) : (
                    /* Elegant fallback layout if imageUrl is missing/empty */
                    <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/10 to-navy-deep/40 flex flex-col items-center justify-center text-on-dark-hint select-none">
                      <ImageIcon className="w-8 h-8 mb-2 stroke-[1.25]" />
                      <span className="text-[10px] tracking-widest uppercase font-medium">Image soon to be added...</span>
                    </div>
                  )}

                  {/* Category Status Tag */}
                  <div className="absolute top-4 right-4 bg-navy-deep/80 backdrop-blur-md border border-glass-border px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-on-dark-strong z-10">
                    {project.category === "completed" ? "Completed" : "Developing"}
                  </div>
                </div>

                {/* Info and Descriptions */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-medium tracking-wide text-on-dark mb-2.5 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-on-dark-subtle text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Technology Badges and Actions */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="bg-glass-strong text-on-dark-strong text-[11px] px-2.5 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between border-t border-glass-border-subtle pt-4 mt-auto">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-on-dark-faint hover:text-brand transition-colors duration-200"
                        >
                          <Github className="w-4 h-4" />
                          <span>Github Repo</span>
                        </a>
                      ) : (
                        <div />
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand hover:text-brand-dark transition-colors duration-200"
                        >
                          <span>Launch Site</span>
                          <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                        </a>
                      )}
                      
                    </div>
                  </div>
                </div>

              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State Fallback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-24 border border-dashed border-glass-border rounded-xl bg-navy-deep/10">
            <p className="text-on-dark-muted text-sm">No projects matching this filter criteria at the moment.</p>
          </div>
        )}

      </div>
    </main>
  );
}
import { motion } from "motion/react";
import { useState } from "react";
import { Send } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl text-white tracking-wide mb-4">
            Request a <span className="font-display italic text-[#FFBE50]">Website</span>
          </h2>
          <p className="text-white/70 text-lg">
            Tell us about your vision, constraints, and goals. Our <span className="italic">student-led team</span> is
            ready to bring your digital presence to life.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-white/80 mb-2 tracking-wide text-sm">
                FULL NAME *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#FFBE50] transition-colors duration-200"
              />
            </div>

            <div>
              <label className="block text-white/80 mb-2 tracking-wide text-sm">
                EMAIL ADDRESS *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#FFBE50] transition-colors duration-200"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-white/80 mb-2 tracking-wide text-sm">
              SCHOOL / ORGANIZATION
            </label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              placeholder="UC San Diego Student Org"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#FFBE50] transition-colors duration-200"
            />
          </div>

          <div className="mb-8">
            <label className="block text-white/80 mb-2 tracking-wide text-sm">
              PROJECT DESCRIPTION *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Briefly describe what you want us to build..."
              required
              rows={6}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#FFBE50] transition-colors duration-200 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#FFBE50] to-[#D88C0C] text-[#0a1929] py-4 rounded-lg tracking-wide flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#FFBE50]/20 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 ease-out group"
          >
            <span>Submit Request</span>
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>

          <p className="text-white/40 text-sm text-center mt-6">
            By submitting this form, you agree to our{" "}
            <span className="text-[#FFBE50]">Privacy Policy</span> and{" "}
            <span className="text-[#FFBE50]">Terms of Service</span>
          </p>
        </motion.form>
      </div>
    </section>
  );
}

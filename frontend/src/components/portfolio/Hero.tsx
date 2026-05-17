import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="px-4 py-24">
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <p className="text-[#6E473B] text-sm font-medium tracking-wide uppercase mb-4">
            AI • Data Science • Computer Science
          </p>

          <h1 className="text-5xl sm:text-6xl font-bold text-[#291C0E] leading-tight">
            Hi, I'm Sanjana Shibin
          </h1>

          <p className="mt-6 text-lg text-[#6E473B] leading-relaxed max-w-3xl">
            Computer Science student at NIE Mysore and BS Data Science student at IIT Madras,
            exploring AI, machine learning, generative AI, and data-driven technologies
            through hands-on projects and continuous learning.
          </p>

          <p className="mt-4 text-[#A78D78] leading-relaxed max-w-2xl">
            Currently building AI-powered applications using Python, embeddings,
            Retrieval-Augmented Generation (RAG), and modern full-stack tools while
            actively contributing to student tech communities.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-[#291C0E] text-[#E1D4C2] font-medium hover:bg-[#6E473B] transition-colors"
            >
              View Projects
            </a>

            <a
              href="https://www.linkedin.com/in/sanjana-shibin-49b578398/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-[#6E473B] text-[#291C0E] hover:bg-[#D8C8B8] transition-colors"
            >
              LinkedIn
            </a>

          </div>

        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'

export function Projects() {
  return (
    <section className="py-16 px-4 border-t border-[#BEB5A9]">

      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <h2 className="text-3xl font-semibold text-[#291C0E] mb-10">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* RAG Portfolio */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              className="bg-[#F3ECE3] border border-[#D8C8B8] rounded-2xl p-6 transition-all"
            >

              <h3 className="text-[#291C0E] text-xl font-semibold mb-4">
                AI-Powered RAG Portfolio
              </h3>

              <p className="text-[#6E473B] leading-7">
                Built a full-stack AI portfolio chatbot using Retrieval-Augmented Generation (RAG) to answer questions about my resume, skills, projects, and experience through an interactive conversational interface.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">

                {[
                  'React',
                  'FastAPI',
                  'ChromaDB',
                  'Python',
                  'Gemini API'
                ].map((tech) => (

                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-[#E1D4C2] border border-[#D8C8B8] text-[#6E473B] text-sm"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </motion.div>

            {/* AI Exploration */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              whileHover={{ y: -3 }}
              className="bg-[#F3ECE3] border border-[#D8C8B8] rounded-2xl p-6 transition-all"
            >

              <h3 className="text-[#291C0E] text-xl font-semibold mb-4">
                AI & Data Exploration Projects
              </h3>

              <p className="text-[#6E473B] leading-7">
                Exploring machine learning, generative AI, embeddings, and data analysis through hands-on learning projects focused on experimentation, practical implementation, and continuous skill development.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">

                {[
                  'Python',
                  'Machine Learning',
                  'Generative AI'
                ].map((tech) => (

                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-[#E1D4C2] border border-[#D8C8B8] text-[#6E473B] text-sm"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </motion.div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

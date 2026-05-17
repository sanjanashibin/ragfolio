import { motion } from 'framer-motion'

export function About() {
  return (
    <section className="py-16 px-4 border-t border-[#BEB5A9]">

      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <h2 className="text-3xl font-semibold text-[#291C0E] mb-8">
            About
          </h2>

          <div className="space-y-5 text-[15.5px] leading-8 text-[#6E473B]">

            <p>
              I'm a Computer Science student at NIE Mysore and a BS Data Science student at IIT Madras, passionate about AI, machine learning, and solving real-world problems through technology.
            </p>

            <p>
              I enjoy building practical projects using Python and exploring areas like generative AI, embeddings, and Retrieval-Augmented Generation (RAG), while continuously improving my understanding of data-driven systems and modern AI tools.
            </p>

            <p>
              Alongside academics, I actively contribute to student tech communities including BYTE, Google Student Ambassador initiatives, and volunteer activities at ISSA Club, where I collaborate on events, peer learning, and community-driven initiatives.
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

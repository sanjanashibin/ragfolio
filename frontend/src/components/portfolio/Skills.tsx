import { motion } from 'framer-motion'

const categories = [
  {
    name: 'Languages',
    skills: ['Python', 'C++ (basic)']
  },
  {
    name: 'AI / Data',
    skills: [
      'Generative AI (learning)',
      'Data Analysis (learning)',
      'RAG (project-based)'
    ]
  },
  {
    name: 'Frontend',
    skills: [
      'React (basic)',
      'Tailwind CSS (learning)'
    ]
  },
  {
    name: 'Backend',
    skills: [
      'FastAPI (basic)'
    ]
  },
  {
    name: 'Tools',
    skills: [
      'Git',
      'GitHub',
      'VS Code'
    ]
  }
]

export function Skills() {
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
            Skills & Interests
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {categories.map((category, index) => (

              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-[#F3ECE3] border border-[#D8C8B8] rounded-2xl p-6"
              >

                <h3 className="text-[#291C0E] font-semibold text-lg mb-4">
                  {category.name}
                </h3>

                <div className="flex flex-wrap gap-3">

                  {category.skills.map((skill) => (

                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-[#E1D4C2] text-[#6E473B] text-sm border border-[#D8C8B8]"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  )
}
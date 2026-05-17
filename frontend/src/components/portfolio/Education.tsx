import { motion } from 'framer-motion'

export function Education() {
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
            Education
          </h2>

          <div className="space-y-6">

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#F3ECE3] border border-[#D8C8B8] rounded-2xl p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

                <div>
                  <h3 className="text-[#291C0E] text-xl font-semibold">
                    B.E. in Computer Science Engineering
                  </h3>

                  <p className="text-[#6E473B] mt-1">
                    The National Institute of Engineering, Mysore
                  </p>
                </div>

                <span className="text-sm text-[#A78D78]">
                  2025 – 2029
                </span>

              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="bg-[#F3ECE3] border border-[#D8C8B8] rounded-2xl p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

                <div>
                  <h3 className="text-[#291C0E] text-xl font-semibold">
                    BS in Data Science
                  </h3>

                  <p className="text-[#6E473B] mt-1">
                    IIT Madras
                  </p>
                </div>

                <span className="text-sm text-[#A78D78]">
                  2025 – 2029
                </span>

              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#EFE6DA] border border-[#D8C8B8] rounded-2xl p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

                <div>
                  <h3 className="text-[#291C0E] text-xl font-semibold">
                    PCMB
                  </h3>

                  <p className="text-[#6E473B] mt-1">
                    Innovative Institute of Mathematics and Sciences
                  </p>
                </div>

                <span className="text-sm text-[#A78D78]">
                  2023 – 2025
                </span>

              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-[#EFE6DA] border border-[#D8C8B8] rounded-2xl p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

                <div>
                  <h3 className="text-[#291C0E] text-xl font-semibold">
                    Class 1 – 10
                  </h3>

                  <p className="text-[#6E473B] mt-1">
                    St. Joseph’s Central School
                  </p>
                </div>

                <span className="text-sm text-[#A78D78]">
                  2013 – 2023
                </span>

              </div>
            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  )
}

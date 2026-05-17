import { motion } from 'framer-motion'

export function Experience() {
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
            Experience
          </h2>

          <div className="space-y-8">

            {/* Google Student Ambassador */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#F3ECE3] border border-[#D8C8B8] rounded-2xl p-6"
            >

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

                <div>
                  <h3 className="text-[#291C0E] font-semibold text-xl">
                    Google Student Ambassador
                  </h3>

                  <p className="text-[#6E473B] mt-1">
                    Google Student Ambassadors (India)
                  </p>
                </div>

                <span className="text-sm text-[#A78D78]">
                  May 2026 – Present
                </span>

              </div>

              <p className="mt-5 text-[#6E473B] leading-7">
                Representing Google’s student community initiatives by promoting technology, organizing workshops, encouraging peer learning, and engaging students in developer-focused programs and events.
              </p>

            </motion.div>

            {/* BYTE */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="bg-[#F3ECE3] border border-[#D8C8B8] rounded-2xl p-6"
            >

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

                <div>
                  <h3 className="text-[#291C0E] font-semibold text-xl">
                    Management Core Member
                  </h3>

                  <p className="text-[#6E473B] mt-1">
                    The BYTE Club, NIE Mysore
                  </p>
                </div>

                <span className="text-sm text-[#A78D78]">
                  Mar 2026 – Present
                </span>

              </div>

              <p className="mt-5 text-[#6E473B] leading-7">
                Core member of the management team involved in organizing technical events, coordinating student activities, and contributing to building an active and collaborative tech community within the college.
              </p>

            </motion.div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}
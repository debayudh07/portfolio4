import { GraduationCap } from "lucide-react"
import Image from "next/image"

export function EducationSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              My <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">education</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Building strong foundations in computer science and technology leadership
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-white border-4 border-black rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="flex items-center justify-between mb-4 md:mb-6 pt-6 md:pt-8 px-6 md:px-8">
                <div className="text-base md:text-[22px] leading-tight md:leading-[34px] font-bold text-[#0B0B0B]">
                  2023 - 2027
                </div>
                <div className="rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#6366F1] p-3">
                  <GraduationCap className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
              </div>

              <div className="border-t-[3px] border-black mb-4 md:mb-6"></div>

              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <h3 className="text-xl md:text-[28px] leading-tight md:leading-[40px] font-bold text-[#0B0B0B] mb-2 md:mb-3">
                  Bachelor of Technology in Computer Science
                </h3>
                <p className="text-[#0B0B0B] text-lg md:text-[22px] font-semibold mb-3">
                  RCC Institute of Information Technology, Kolkata
                </p>
                <div className="space-y-2 text-[#393939] text-base md:text-[18px] leading-relaxed md:leading-[30px]">
                  <p className="flex items-start gap-2">
                    <span className="text-[#6366F1] font-bold">•</span>
                    <span>Web3 and Blockchain Lead of Google Developer Group (GDG), RCCIIT</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-[#6366F1] font-bold">•</span>
                    <span>Winner: ACM Eastern India Hackathon 2025</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-[#6366F1] font-bold">•</span>
                    <span>Winner: TechTrek InnoVision 2024</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-[#6366F1] font-bold">•</span>
                    <span>Finalist: ETHGlobal Delhi 2025 & Smart Bengal Hackathon 2024</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-[#6366F1] font-bold">•</span>
                    <span>3rd Runner Up: Build on Aptos Kolkata</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-[#6366F1] font-bold">•</span>
                    <span>Top 10: Udyam Guwahati Hackathon</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-4 border-black rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="flex items-center justify-between mb-4 md:mb-6 pt-6 md:pt-8 px-6 md:px-8">
                <div className="text-base md:text-[22px] leading-tight md:leading-[34px] font-bold text-[#0B0B0B]">
                  2021 - 2023
                </div>
                <div className="rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#2F81F7] p-3">
                  <GraduationCap className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
              </div>

              <div className="border-t-[3px] border-black mb-4 md:mb-6"></div>

              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <h3 className="text-xl md:text-[28px] leading-tight md:leading-[40px] font-bold text-[#0B0B0B] mb-2 md:mb-3">
                  ISC (Class XI-XII)
                </h3>
                <p className="text-[#0B0B0B] text-lg md:text-[22px] font-semibold mb-3">
                  St. Stephen's School, Kolkata
                </p>
                <div className="space-y-2 text-[#393939] text-base md:text-[18px] leading-relaxed md:leading-[30px]">
                  <p className="flex items-start gap-2">
                    <span className="text-[#2F81F7] font-bold">•</span>
                    <span>Percentage: 84%</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-[#2F81F7] font-bold">•</span>
                    <span>Subjects: Physics, Chemistry, Mathematics, Computer Science</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-4 border-black rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="flex items-center justify-between mb-4 md:mb-6 pt-6 md:pt-8 px-6 md:px-8">
                <div className="text-base md:text-[22px] leading-tight md:leading-[34px] font-bold text-[#0B0B0B]">
                  2011 - 2021
                </div>
                <div className="rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#10B981] p-3">
                  <GraduationCap className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
              </div>

              <div className="border-t-[3px] border-black mb-4 md:mb-6"></div>

              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <h3 className="text-xl md:text-[28px] leading-tight md:leading-[40px] font-bold text-[#0B0B0B] mb-2 md:mb-3">
                  ICSE (Class I-X)
                </h3>
                <p className="text-[#0B0B0B] text-lg md:text-[22px] font-semibold mb-3">
                  St. Stephen's School, Kolkata
                </p>
                <div className="space-y-2 text-[#393939] text-base md:text-[18px] leading-relaxed md:leading-[30px]">
                  <p className="flex items-start gap-2">
                    <span className="text-[#10B981] font-bold">•</span>
                    <span>Percentage: 87%</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-[#10B981] font-bold">•</span>
                    <span>Subjects: Mathematics, Science, Computer Applications, English, Hindi</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

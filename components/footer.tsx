import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, Github} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/footer-logo.jpeg"
                    alt="Debayudh Basu Logo"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <span className="text-lg md:text-xl font-bold">Debayudh Basu</span>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Full-Stack & Web3 Developer building the future of decentralized applications and scalable systems.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://x.com/BasuDebayudh"
                  className="w-10 h-10 bg-[#2F81F7] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/debayudh-basu-5280562b2/"
                  className="w-10 h-10 bg-[#FF6B7A] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/debayudh07"
                  className="w-10 h-10 bg-[#E1306C] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

         

            <div>
              <h3 className="font-bold mb-4">Contact us</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:debayudhbasu@gmail.com" className="hover:text-white transition-colors">
                      debayudhbasu@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+917980564380" className="hover:text-white transition-colors">
                    +91-7980564380
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>Made by Debayudh Basu</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

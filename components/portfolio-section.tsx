"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

type TabType = "projects" | "ventures" | "client-work"

export function PortfolioSection() {
  const [activeTab, setActiveTab] = useState<TabType>("projects")
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleTabChange = (newTab: TabType) => {
    if (newTab === activeTab) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveTab(newTab)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 300)
  }

  const allProjects = [
    {
      title: "Dike Protocol - Decentralized Prediction Market",
      description:
        "Built a decentralized prediction market based on Paradigm research with collateral-based chain extensions. Implemented event-driven architecture for leveraged positions and real-time price feeds with sub-second finality using Solidity and Foundry.",
      tag: "Blockchain/DeFi",
      logo: "/dike-logo.jpeg",
      bgColor: "bg-[#6366F1]",
      illustration: "/dike.png",
      status: "Live",
      github: "https://github.com/debayudh07/Dike",
      liveUrl: "https://dike-protocol.vercel.app",
      category: "ventures" as TabType,
    },
    {
      title: "Mediyaga - Health Frontier Protocol",
      description:
        "Co-founded a decentralized health protocol using Computer Vision (OCR) for prescription parsing and dosage verification. Prototyping IoT-integrated autonomous medicine vending units. Secured Runners Up at B-Plan 2025.",
      tag: "HealthTech/AI",
      logo: "/mediyaga-logo.png",
      bgColor: "bg-[#2F81F7]",
      illustration: "/mediyaga.png",
      status: "Active",
      github: "https://github.com/debayudh07",
      liveUrl: "https://mediyaga-frontend.vercel.app/",
      category: "ventures" as TabType,
    },
    {
      title: "DhanSetu - Paper Trading Platform",
      description:
        "Architected a high-frequency trading engine using Next.js Server Architecture with Pyth Price feeds integration. Implemented atomic state management for real-time market data synchronization with MongoDB. Built secure user sessions and complex portfolio tracking logic.",
      tag: "FinTech/Web3",
      logo: "/dhansetu-logo.png",
      bgColor: "bg-[#10B981]",
      illustration: "/dhansetu.png",
      status: "Client Project",
      github: "https://github.com/debayudh07",
      liveUrl: "https://dhansetu.com",
      category: "client-work" as TabType,
    },
    {
      title: "Srijoni - Hospital Management System",
      description:
        "Developed an enterprise-grade monolithic backend using NestJS handling sensitive patient records. Led full-stack integration with Next.js and global state management. Designed RBAC dashboards ensuring HIPAA-compliant data privacy.",
      tag: "HealthTech/Enterprise",
      logo: "/placeholder.svg",
      bgColor: "bg-[#F59E0B]",
      illustration: "/placeholder.svg",
      status: "Client Project",
      github: "https://github.com/debayudh07/hospital-managemenet-backend",
      category: "client-work" as TabType,
    },
    {
      title: "Proof-of-Commitment - DAO Governance Protocol",
      description: "Built a full-stack monorepo featuring conviction-weighted staking and deflationary tokenomics on Lisk blockchain. Engineered Solidity smart contracts (155 test specs), Next.js 14 dApp with governance flows, and published TypeScript SDK. Implemented time-locked staking, soulbound NFTs, and revenue-funded burn mechanics for sustainable DAO treasuries.",
      tag: "Web3/DeFi",
      logo: "/poc-logo.png",
      bgColor: "bg-[#7C3AED]",
      illustration: "/poc.png",
      status: "Lisk Hackathon",
      github: "https://github.com/debayudh07/liskify",
      liveUrl: "https://liskify.vercel.app/",
      category: "projects" as TabType,
    },
    {
      "title": "AniXOP - DeFi Learning Platform",
      "description": "Built a comprehensive mobile-first DeFi education platform with React Native/Expo featuring interactive lessons, on-chain smart contract simulations, and AI-powered explanations. Architected full-stack solution with Express/MongoDB backend, Solidity contracts on Sepolia, and Google Gemini AI integration for personalized learning synthesis across 6 DeFi concepts.",
      "tag": "EdTech/Web3",
      "logo": "/anixop-logo.jpeg",
      "bgColor": "bg-[#10B981]",
      "illustration": "/anixop-image.jpeg",
      "status": "In Progress",
      "github": "https://github.com/debayudh07/AniXOP",
      category: "projects" as TabType,
    }
  ]

  const projects = allProjects.filter(project => project.category === activeTab)

  const tabs = [
    { id: "projects" as TabType, label: "Projects" },
    { id: "ventures" as TabType, label: "Ventures" },
    { id: "client-work" as TabType, label: "Client Work" },
  ]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Take a look at my <br />
            <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">project portfolio</span>
          </h2>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white border-[3px] border-black rounded-[16px] p-1.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-6 md:px-8 py-3 md:py-4 rounded-[12px] font-semibold transition-all duration-300 ease-in-out text-sm md:text-base ${
                  activeTab === tab.id
                    ? "bg-black text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] scale-105"
                    : "text-black hover:bg-gray-100 hover:scale-105"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div 
          className={`space-y-8 mb-12 transition-all duration-500 ease-in-out ${
            isTransitioning 
              ? 'opacity-0 translate-x-8 scale-95' 
              : 'opacity-100 translate-x-0 scale-100'
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-2 bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="p-6 md:p-12 flex flex-col justify-center bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <Image
                    src={project.logo || "/placeholder.svg"}
                    alt={`${project.title} logo`}
                    width={120}
                    height={32}
                    className="h-6 md:h-8 w-auto"
                  />
                </div>

                <div className="flex gap-2 mb-6">
                  <span className="inline-block bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full w-fit">
                    {project.tag}
                  </span>
                  {project.status && (
                    <span className="inline-block bg-[#10B981] text-white text-xs font-semibold px-4 py-1.5 rounded-full w-fit">
                      {project.status}
                    </span>
                  )}
                </div>

                <h3 className="text-xl md:text-[28px] font-bold mb-4 leading-tight md:leading-[40px] text-[#0B0B0B]">
                  {project.title}
                </h3>

                <p className="text-base md:text-[18px] text-[#393939] mb-8 leading-relaxed md:leading-[30px] font-medium">
                  {project.description}
                </p>

                <div className="flex gap-4 flex-wrap">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-semibold text-[#0B0B0B] hover:gap-3 transition-all text-sm md:text-base"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-semibold text-[#0B0B0B] hover:gap-3 transition-all text-sm md:text-base"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>

              <div className={`${project.bgColor} relative overflow-hidden min-h-[250px] md:min-h-[500px]`}>
                <Image
                  src={project.illustration || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

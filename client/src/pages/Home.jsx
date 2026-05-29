import {
  Brain,
  Target,
  Map,
  FileText,
  Sparkles,
  ArrowRight
} from "lucide-react"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="bg-[#F7F4EF] min-h-screen">
      <nav className="flex items-center justify-between px-10 py-6">
        <h1 className="text-2xl font-black text-[#1E1B4B] flex items-center gap-2">
          <Sparkles className="text-[#FF6B4A]" />
          SkillSync AI
        </h1>

        <Link
          to="/login"
          className="bg-[#FF6B4A] hover:scale-105 transition-all duration-300 text-white px-5 py-2 rounded-xl font-semibold shadow-lg"
        >
          Login
        </Link>
      </nav>

      <section className="px-10 py-16 flex flex-col lg:flex-row items-center justify-between gap-14">
        <div className="max-w-2xl">
          <p className="text-[#FF6B4A] font-bold mb-4 text-lg">
            AI Career Intelligence Platform
          </p>

          <h1 className="text-6xl font-black text-[#1E1B4B] leading-tight">
            Build your future career with AI guidance 🚀
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Upload your resume, analyze your skills, discover missing technologies,
            and get a personalized roadmap for your dream job.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <Link
              to="/register"
              className="bg-[#FF6B4A] hover:scale-105 transition-all duration-300 text-white px-7 py-4 rounded-2xl font-bold shadow-lg flex items-center gap-2"
            >
              Start Career Analysis
              <ArrowRight size={20} />
            </Link>

            <button className="bg-white border border-orange-200 hover:bg-orange-50 transition-all duration-300 px-7 py-4 rounded-2xl font-bold text-[#1E1B4B]">
              Explore Features
            </button>
          </div>
        </div>

        <div className="bg-white w-full max-w-md rounded-[30px] p-8 shadow-2xl border border-orange-100 hover:-translate-y-2 transition-all duration-500">
          <div className="flex items-center gap-3">
            <div className="bg-[#FFE7DD] p-3 rounded-2xl">
              <Brain className="text-[#FF6B4A]" />
            </div>

            <h2 className="text-2xl font-black text-[#1E1B4B]">
              Career Report
            </h2>
          </div>

          <div className="mt-8 space-y-6">
            <div>
              <div className="flex justify-between mb-2 font-semibold">
                <span>Resume Score</span>
                <span>82%</span>
              </div>
              <div className="w-full h-3 bg-orange-100 rounded-full">
                <div className="w-[82%] h-3 bg-[#FF6B4A] rounded-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2 font-semibold">
                <span>Frontend Skills</span>
                <span>91%</span>
              </div>
              <div className="w-full h-3 bg-orange-100 rounded-full">
                <div className="w-[91%] h-3 bg-[#1E1B4B] rounded-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2 font-semibold">
                <span>Interview Readiness</span>
                <span>68%</span>
              </div>
              <div className="w-full h-3 bg-orange-100 rounded-full">
                <div className="w-[68%] h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-10 py-16">
        <h2 className="text-4xl font-black text-center text-[#1E1B4B]">
          Everything you need to become job-ready
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          <div className="bg-white p-8 rounded-[28px] shadow-md hover:-translate-y-2 transition-all duration-500">
            <div className="bg-[#FFE7DD] w-fit p-4 rounded-2xl">
              <FileText className="text-[#FF6B4A]" />
            </div>
            <h3 className="text-2xl font-bold text-[#1E1B4B] mt-6">
              Resume Intelligence
            </h3>
            <p className="mt-4 text-gray-600 leading-7">
              AI analyzes your resume and identifies missing skills and ATS weaknesses.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[28px] shadow-md hover:-translate-y-2 transition-all duration-500">
            <div className="bg-[#E8E7FF] w-fit p-4 rounded-2xl">
              <Target className="text-[#1E1B4B]" />
            </div>
            <h3 className="text-2xl font-bold text-[#1E1B4B] mt-6">
              Skill Gap Analysis
            </h3>
            <p className="mt-4 text-gray-600 leading-7">
              Compare your current skills with industry-required technologies.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[28px] shadow-md hover:-translate-y-2 transition-all duration-500">
            <div className="bg-[#DCFCE7] w-fit p-4 rounded-2xl">
              <Map className="text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-[#1E1B4B] mt-6">
              AI Career Roadmap
            </h3>
            <p className="mt-4 text-gray-600 leading-7">
              Get personalized learning paths and interview preparation plans.
            </p>
          </div>
        </div>
      </section>

      <section className="px-10 py-10">
        <div className="bg-[#1E1B4B] rounded-[32px] p-10 grid md:grid-cols-3 gap-8 text-white">
          <div>
            <h1 className="text-5xl font-black">10K+</h1>
            <p className="mt-3 text-gray-300">Career reports generated</p>
          </div>

          <div>
            <h1 className="text-5xl font-black">95%</h1>
            <p className="mt-3 text-gray-300">Resume improvement accuracy</p>
          </div>

          <div>
            <h1 className="text-5xl font-black">500+</h1>
            <p className="mt-3 text-gray-300">AI-generated learning roadmaps</p>
          </div>
        </div>
      </section>

      <footer className="px-10 py-10 text-center text-gray-500">
        <h1 className="text-2xl font-black text-[#1E1B4B]">
          SkillSync AI
        </h1>
        <p className="mt-3">Build smarter careers with AI guidance 🚀</p>
      </footer>
    </div>
  )
}

export default Home
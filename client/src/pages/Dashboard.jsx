import { FileText, Map, Target, Sparkles, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#080014] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(147,51,234,0.35),transparent_32%),radial-gradient(circle_at_15%_85%,rgba(217,70,239,0.22),transparent_30%)]"></div>

      <div className="relative max-w-7xl mx-auto px-10 py-8">
        <nav className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl px-8 py-5 shadow-[0_0_40px_rgba(168,85,247,0.15)]">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-purple-500/20 flex items-center justify-center">
              <Sparkles className="text-purple-300" size={24} />
            </div>
            <h1 className="text-2xl font-semibold">SkillSync AI</h1>
          </div>

          <div className="flex gap-4">
            <Link to="/resume" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold">
              Resume
            </Link>
            <Link to="/interview" className="rounded-2xl bg-gradient-to-r from-purple-500 to-violet-600 px-6 py-3 text-sm font-semibold">
              Interview
            </Link>
          </div>
        </nav>

        <section className="pt-20">
          <div className="max-w-3xl">
            <p className="text-purple-300 text-base font-semibold mb-5">
              Career Command Center
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight">
              Track your career growth
            </h1>

            <p className="mt-7 text-lg leading-8 text-purple-100/70">
              Monitor your resume score, skill match, roadmap progress and AI-powered career readiness.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: <FileText size={28} />, title: "Resume Score", value: "82%" },
              { icon: <Target size={28} />, title: "Skill Match", value: "76%" },
              { icon: <Map size={28} />, title: "Roadmap Progress", value: "42%" }
            ].map((item, index) => (
              <div key={index} className="rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8">
                <div className="h-14 w-14 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-300">
                  {item.icon}
                </div>
                <p className="mt-6 text-base text-purple-100/65">{item.title}</p>
                <h2 className="text-5xl font-bold text-purple-300 mt-3">{item.value}</h2>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-10">
            <FeatureCard
              title="Resume Intelligence"
              text="Upload your resume and let AI analyze your ATS score, missing skills, strong skills and recommended career role."
              button="Open Resume Analyzer"
              link="/resume"
              icon={<FileText size={42} />}
            />

            <FeatureCard
              title="Interview Arena"
              text="Generate role-based interview questions with AI and prepare strong answers for your target job role."
              button="Start Interview Practice"
              link="/interview"
              icon={<Target size={42} />}
            />
          </div>
        </section>
      </div>
    </div>
  )
}

function FeatureCard({ title, text, button, link, icon }) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 min-h-[360px] flex flex-col justify-between">
      <div>
        <div className="h-16 w-16 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-300">
          {icon}
        </div>

        <h2 className="text-3xl font-semibold mt-8">{title}</h2>

        <p className="mt-5 text-base leading-8 text-purple-100/70">
          {text}
        </p>
      </div>

      <Link
        to={link}
        className="w-fit mt-8 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-purple-500 to-violet-600 px-7 py-4 text-sm font-semibold shadow-[0_0_35px_rgba(168,85,247,0.35)]"
      >
        {button}
        <ArrowRight size={18} />
      </Link>
    </div>
  )
}

export default Dashboard
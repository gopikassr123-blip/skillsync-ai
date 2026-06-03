import { Sparkles, Brain, FileText, Target, Map, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="min-h-screen bg-[#090111] text-white overflow-hidden relative">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(147,51,234,0.30),transparent_32%),radial-gradient(circle_at_15%_85%,rgba(217,70,239,0.18),transparent_30%)]"></div>

      <div className="relative max-w-[1400px] mx-auto px-8 py-7">

        <nav className="flex items-center justify-between rounded-[38px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl px-8 py-5 shadow-[0_0_40px_rgba(168,85,247,0.15)]">

          <div className="flex items-center gap-4">

            <div className="h-12 w-12 rounded-2xl bg-purple-500/20 flex items-center justify-center">
              <Sparkles className="text-purple-300" size={24} />
            </div>

            <h1 className="text-2xl font-semibold tracking-tight">
              SkillSync AI
            </h1>

          </div>

          <Link
            to="/login"
            className="rounded-2xl bg-gradient-to-r from-purple-500 to-violet-600 px-6 py-3 text-sm font-semibold shadow-[0_0_30px_rgba(168,85,247,0.35)] hover:scale-105 transition-all"
          >
            Login
          </Link>

        </nav>

        <section className="grid lg:grid-cols-2 gap-20 items-center pt-24 min-h-[85vh]">

          <div>

            <p className="text-purple-300 text-base font-semibold mb-5 tracking-wide">
              AI Career Intelligence Platform
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] max-w-2xl tracking-tight">
              Build your career with smart AI guidance
            </h1>

            <p className="mt-7 text-lg leading-8 text-purple-100/70 max-w-2xl">
              Upload your resume, analyze your skills, discover missing technologies,
              and get a personalized roadmap for your dream job.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                to="/register"
                className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-purple-500 to-violet-600 px-7 py-4 text-sm font-semibold shadow-[0_0_35px_rgba(168,85,247,0.35)] hover:scale-105 transition-all"
              >
                Start Career Analysis
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/dashboard"
                className="rounded-2xl border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-semibold backdrop-blur-xl hover:bg-white/10 transition-all"
              >
                Explore Features
              </Link>

            </div>

          </div>

          <div className="rounded-[38px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-10 shadow-[0_0_70px_rgba(168,85,247,0.18)]">

            <div className="flex items-center gap-4 mb-8">

              <div className="h-14 w-14 rounded-2xl bg-purple-500/20 flex items-center justify-center">
                <Brain className="text-purple-300" size={28} />
              </div>

              <h2 className="text-3xl font-semibold">
                Career Report
              </h2>

            </div>

            {[
              ["Resume Score", "82%", "w-[82%]"],
              ["Frontend Skills", "91%", "w-[91%]"],
              ["Interview Readiness", "68%", "w-[68%]"]
            ].map((item, index) => (
              <div key={index} className="mb-7">

                <div className="flex justify-between text-sm mb-3 text-purple-100/80">
                  <span>{item[0]}</span>
                  <span>{item[1]}</span>
                </div>

                <div className="h-3 bg-white/10 rounded-full overflow-hidden">

                  <div
                    className={`${item[2]} h-full rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-400`}
                  ></div>

                </div>

              </div>
            ))}

          </div>

        </section>

        <section className="pt-24 pb-16">

          <h2 className="text-center text-4xl md:text-5xl font-bold">
            Everything you need to become job-ready
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            {[
              {
                icon: <FileText />,
                title: "Resume Intelligence",
                text: "AI checks your resume score, missing skills, and ATS readiness."
              },
              {
                icon: <Target />,
                title: "Skill Gap Analysis",
                text: "Compare your skills with the technologies required for your target role."
              },
              {
                icon: <Map />,
                title: "Career Roadmap",
                text: "Get a clear step-by-step learning path for your career goal."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 hover:bg-white/10 transition-all"
              >

                <div className="h-14 w-14 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-300">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-semibold mt-6">
                  {item.title}
                </h3>

                <p className="text-base text-purple-100/65 leading-7 mt-4">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </section>

      </div>

    </div>
  )
}

export default Home
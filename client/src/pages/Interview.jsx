import { useState } from "react"
import axios from "axios"
import { Sparkles, Mic, LoaderCircle, ArrowRight } from "lucide-react"

function Interview() {
  const [role, setRole] = useState("")
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState([])
  const [error, setError] = useState("")

  const generateQuestions = async () => {
    if (!role) return

    setLoading(true)
    setError("")
    setQuestions([])

    try {
      const response = await axios.post(
        "https://skillsync-ai-zotx.onrender.com/api/interview",
        { role }
      )

      setQuestions(response.data.questions || [])
      setLoading(false)
    } catch (error) {
      console.log(error)
      setError("Interview questions failed. Please try again.")
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#080014] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(147,51,234,0.35),transparent_32%),radial-gradient(circle_at_15%_85%,rgba(217,70,239,0.22),transparent_30%)]"></div>

      <div className="relative max-w-7xl mx-auto px-10 py-8">
        <nav className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl px-8 py-5">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-purple-500/20 flex items-center justify-center">
              <Sparkles className="text-purple-300" size={24} />
            </div>
            <h1 className="text-2xl font-semibold">SkillSync AI</h1>
          </div>
        </nav>

        <section className="pt-20 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-purple-300 text-base font-semibold mb-5">
              Interview Arena
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight max-w-2xl">
              Practice interviews with AI
            </h1>

            <p className="mt-7 text-lg leading-8 text-purple-100/70 max-w-2xl">
              Enter your target role and generate role-based interview questions with
              structured answer guidance for better preparation.
            </p>
          </div>

          <div className="rounded-[34px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 shadow-[0_0_70px_rgba(168,85,247,0.18)]">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-purple-500/20 flex items-center justify-center">
                <Mic className="text-purple-300" size={28} />
              </div>

              <h2 className="text-3xl font-semibold">
                Choose Your Target Role
              </h2>
            </div>

            <input
              type="text"
              placeholder="Example: Full Stack Developer"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full mt-8 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-white outline-none placeholder:text-purple-100/40"
            />

            <button
              onClick={generateQuestions}
              className="mt-7 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-purple-500 to-violet-600 px-7 py-4 text-sm font-semibold shadow-[0_0_35px_rgba(168,85,247,0.35)]"
            >
              Generate Interview Questions
              <ArrowRight size={18} />
            </button>

            {error && (
              <p className="mt-5 text-red-400 font-semibold text-sm">
                {error}
              </p>
            )}
          </div>
        </section>

        {loading && (
          <section className="pt-12">
            <div className="rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 text-center">
              <LoaderCircle className="animate-spin text-purple-300 mx-auto" size={46} />
              <h2 className="text-2xl font-semibold mt-6">
                AI is preparing your interview...
              </h2>
              <p className="text-purple-100/65 mt-3">
                Generating role-based questions and answers.
              </p>
            </div>
          </section>
        )}

        {questions.length > 0 && (
          <section className="pt-12 pb-10">
            <div className="grid gap-6">
              {questions.map((item, index) => (
                <div
                  key={index}
                  className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8"
                >
                  <h2 className="text-2xl font-semibold">
                    Q{index + 1}. {item.question}
                  </h2>

                  <p className="mt-5 text-purple-100/75 leading-8">
                    <span className="font-semibold text-purple-300">
                      Answer:{" "}
                    </span>
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default Interview
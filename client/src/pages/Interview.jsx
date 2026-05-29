import { useState } from "react"
import axios from "axios"
import { Sparkles, Mic, LoaderCircle } from "lucide-react"

function Interview() {
  const [role, setRole] = useState("")
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState([])

  const generateQuestions = async () => {
    if (!role) return

    setLoading(true)

    try {
      const response = await axios.post("http://localhost:5000/api/interview", {
        role
      })

      setQuestions(response.data.questions)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#F7F4EF] p-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-black text-[#1E1B4B]">
            Interview Arena
          </h1>
          <p className="text-gray-600 mt-4">
            Generate role-based AI interview questions.
          </p>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow-md">
          <Sparkles className="text-[#FF6B4A]" />
        </div>
      </div>

      <div className="bg-white mt-10 p-10 rounded-[30px] shadow-md">
        <div className="flex items-center gap-3">
          <Mic className="text-[#FF6B4A]" />
          <h2 className="text-3xl font-black text-[#1E1B4B]">
            Choose Your Target Role
          </h2>
        </div>

        <input
          type="text"
          placeholder="Example: Full Stack Developer"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full mt-6 p-5 rounded-2xl border border-orange-200 outline-none"
        />

        <button
          onClick={generateQuestions}
          className="mt-6 bg-[#FF6B4A] text-white px-8 py-4 rounded-2xl font-bold"
        >
          Generate Interview Questions
        </button>
      </div>

      {loading && (
        <div className="bg-white mt-10 p-10 rounded-[30px] shadow-md text-center">
          <LoaderCircle className="animate-spin text-[#FF6B4A] mx-auto" size={50} />
          <h2 className="text-3xl font-black text-[#1E1B4B] mt-5">
            AI is preparing your interview...
          </h2>
        </div>
      )}

      {questions.length > 0 && (
        <div className="mt-10 space-y-6">
          {questions.map((item, index) => (
            <div key={index} className="bg-white p-7 rounded-[28px] shadow-md">
              <h2 className="text-2xl font-black text-[#1E1B4B]">
                Q{index + 1}. {item.question}
              </h2>

              <p className="text-gray-700 mt-4 leading-7">
                <span className="font-bold text-[#FF6B4A]">Answer: </span>
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Interview
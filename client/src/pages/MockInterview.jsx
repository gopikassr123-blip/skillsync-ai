import { useState } from "react"
import axios from "axios"
import { Mic, SendHorizonal } from "lucide-react"

function MockInterview() {

  const [role, setRole] = useState("")
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [feedback, setFeedback] = useState("")
  const [loading, setLoading] = useState(false)

  const startInterview = async () => {

    if (!role) return

    setLoading(true)

    try {

      const response = await axios.post(
        "http://localhost:5000/api/mock-interview/question",
        {
          role
        }
      )

      setQuestion(response.data.question)

      setLoading(false)

    } catch (error) {

      console.log(error)

      setLoading(false)

    }

  }

  const submitAnswer = async () => {

    if (!answer) return

    setLoading(true)

    try {

      const response = await axios.post(
        "http://localhost:5000/api/mock-interview/feedback",
        {
          question,
          answer
        }
      )

      setFeedback(response.data.feedback)

      setLoading(false)

    } catch (error) {

      console.log(error)

      setLoading(false)

    }

  }

  return (
    <div className="min-h-screen bg-[#F7F4EF] p-10">

      <div className="flex items-center gap-4">

        <div className="bg-white p-4 rounded-2xl shadow-md">
          <Mic className="text-[#FF6B4A]" />
        </div>

        <div>

          <h1 className="text-5xl font-black text-[#1E1B4B]">
            Mock Interview
          </h1>

          <p className="text-gray-600 mt-2">
            Practice AI-powered mock interviews.
          </p>

        </div>

      </div>

      <div className="bg-white mt-10 rounded-[30px] shadow-md p-8">

        <input
          type="text"
          placeholder="Example: Full Stack Developer"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full border border-orange-200 rounded-2xl p-5 outline-none"
        />

        <button
          onClick={startInterview}
          className="mt-6 bg-[#FF6B4A] text-white px-8 py-4 rounded-2xl font-bold"
        >
          Start Interview
        </button>

      </div>

      {question && (

        <div className="bg-white mt-10 rounded-[30px] shadow-md p-8">

          <h2 className="text-3xl font-black text-[#1E1B4B]">
            Interview Question
          </h2>

          <p className="text-gray-700 mt-6 leading-8">
            {question}
          </p>

          <textarea
            rows="5"
            placeholder="Type your answer..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full border border-orange-200 rounded-2xl p-5 outline-none resize-none mt-8"
          />

          <button
            onClick={submitAnswer}
            className="mt-6 bg-[#1E1B4B] text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3"
          >
            <SendHorizonal size={20} />
            Submit Answer
          </button>

        </div>

      )}

      {loading && (

        <div className="bg-white mt-10 rounded-[30px] shadow-md p-8">

          <h2 className="text-2xl font-black text-[#1E1B4B]">
            Almost there...
          </h2>

        </div>

      )}

      {feedback && (

        <div className="bg-white mt-10 rounded-[30px] shadow-md p-8">

          <h2 className="text-3xl font-black text-[#1E1B4B]">
            AI Feedback
          </h2>

          <p className="text-gray-700 mt-6 leading-8 whitespace-pre-line">
            {feedback}
          </p>

        </div>

      )}

    </div>
  )
}

export default MockInterview
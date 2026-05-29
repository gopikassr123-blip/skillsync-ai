import { useState } from "react"
import axios from "axios"
import { Bot, SendHorizonal } from "lucide-react"

function Chatbot() {

  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [loading, setLoading] = useState(false)

  const askAI = async () => {

    if (!question) return

    setLoading(true)

    try {

      const response = await axios.post(
        "http://localhost:5000/api/chatbot",
        {
          question
        }
      )

      setAnswer(response.data.answer)

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
          <Bot className="text-[#FF6B4A]" />
        </div>

        <div>

          <h1 className="text-5xl font-black text-[#1E1B4B]">
            AI Career Assistant
          </h1>

          <p className="text-gray-600 mt-2">
            Ask anything about career, coding, roadmap, or interviews.
          </p>

        </div>

      </div>

      <div className="bg-white mt-10 rounded-[30px] shadow-md p-8">

        <textarea
          rows="5"
          placeholder="Example: How can I become an AI Engineer?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full border border-orange-200 rounded-2xl p-5 outline-none resize-none"
        />

        <button
          onClick={askAI}
          className="mt-6 bg-[#FF6B4A] text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3"
        >
          <SendHorizonal size={20} />
          Ask AI
        </button>

      </div>

      {loading && (

        <div className="bg-white mt-10 rounded-[30px] shadow-md p-8">

          <h2 className="text-2xl font-black text-[#1E1B4B]">
            Almost there...
          </h2>

        </div>

      )}

      {answer && (

        <div className="bg-white mt-10 rounded-[30px] shadow-md p-8">

          <h2 className="text-3xl font-black text-[#1E1B4B]">
            AI Response
          </h2>

          <p className="text-gray-700 mt-6 leading-8 whitespace-pre-line">
            {answer}
          </p>

        </div>

      )}

    </div>
  )
}

export default Chatbot
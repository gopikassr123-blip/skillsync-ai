import { useState } from "react"
import axios from "axios"
import { Sparkles, MapPinned } from "lucide-react"

function RoadmapGenerator() {

  const [goal, setGoal] = useState("")
  const [loading, setLoading] = useState(false)
  const [roadmap, setRoadmap] = useState(null)

  const generateRoadmap = async () => {

    if (!goal) return

    setLoading(true)

    try {

      const response = await axios.post(
        "http://localhost:5000/api/roadmap",
        {
          goal
        }
      )

      setRoadmap(response.data)

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
            AI Career Roadmap
          </h1>

          <p className="text-gray-600 mt-4">
            Generate personalized learning roadmap with AI.
          </p>

        </div>

        <div className="bg-white p-4 rounded-2xl shadow-md">
          <Sparkles className="text-[#FF6B4A]" />
        </div>

      </div>

      <div className="bg-white mt-10 p-10 rounded-[30px] shadow-md">

        <h2 className="text-3xl font-black text-[#1E1B4B]">
          What's your dream role?
        </h2>

        <input
          type="text"
          placeholder="Example: Full Stack Developer"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="w-full mt-6 p-5 rounded-2xl border border-orange-200 outline-none"
        />

        <button
          onClick={generateRoadmap}
          className="mt-6 bg-[#FF6B4A] text-white px-8 py-4 rounded-2xl font-bold"
        >
          Generate AI Roadmap
        </button>

      </div>

      {loading && (

        <div className="bg-white mt-10 p-10 rounded-[30px] shadow-md text-center">

          <h2 className="text-3xl font-black text-[#1E1B4B]">
            AI is generating roadmap...
          </h2>

        </div>

      )}

      {roadmap && (

        <div className="mt-10 space-y-6">

          <div className="bg-white p-8 rounded-[30px] shadow-md">

            <div className="flex items-center gap-3">

              <MapPinned className="text-[#FF6B4A]" />

              <h2 className="text-3xl font-black text-[#1E1B4B]">
                Career Roadmap
              </h2>

            </div>

            <div className="mt-8 space-y-5">

              {roadmap.steps.map((step, index) => (

                <div
                  key={index}
                  className="bg-[#FFF8F5] border border-orange-100 rounded-2xl p-5"
                >

                  <h3 className="text-xl font-black text-[#1E1B4B]">
                    Step {index + 1}
                  </h3>

                  <p className="text-gray-700 mt-3 leading-7">
                    {step}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      )}

    </div>
  )
}

export default RoadmapGenerator
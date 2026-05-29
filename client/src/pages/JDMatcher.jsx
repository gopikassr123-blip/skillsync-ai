import { useState } from "react"
import axios from "axios"
import { jsPDF } from "jspdf"
import { BriefcaseBusiness } from "lucide-react"

function JDMatcher() {

  const [jobDescription, setJobDescription] = useState("")
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState(null)

  const analyzeJD = async () => {

    if (!file || !jobDescription) return

    setLoading(true)

    const formData = new FormData()

    formData.append("resume", file)
    formData.append("jobDescription", jobDescription)

    try {

      const response = await axios.post(
        "http://localhost:5000/api/jd-match",
        formData
      )

      setResult(response.data)

      setLoading(false)

    } catch (error) {

      console.log(error)

      setLoading(false)

    }

  }

  const downloadPDF = () => {

    const doc = new jsPDF()

    doc.setFontSize(22)

    doc.text("SkillSync AI Report", 20, 20)

    doc.setFontSize(14)

    doc.text(`Match Score: ${result.matchScore}`, 20, 50)

    doc.text(
      `Missing Skills: ${result.missingSkills.join(", ")}`,
      20,
      70
    )

    doc.text(
      `Suggestions: ${result.suggestions}`,
      20,
      100,
      {
        maxWidth: 170
      }
    )

    doc.save("SkillSync_Report.pdf")
  }

  return (
    <div className="min-h-screen bg-[#F7F4EF] p-10">

      <div className="flex items-center gap-4">

        <div className="bg-white p-4 rounded-2xl shadow-md">
          <BriefcaseBusiness className="text-[#FF6B4A]" />
        </div>

        <div>

          <h1 className="text-5xl font-black text-[#1E1B4B]">
            Resume vs JD Match
          </h1>

          <p className="text-gray-600 mt-2">
            Compare resume with job description using AI.
          </p>

        </div>

      </div>

      <div className="bg-white mt-10 rounded-[30px] shadow-md p-8">

        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full border border-orange-200 rounded-2xl p-5"
        />

        <textarea
          rows="7"
          placeholder="Paste job description here..."
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          className="w-full border border-orange-200 rounded-2xl p-5 outline-none resize-none mt-8"
        />

        <button
          onClick={analyzeJD}
          className="mt-6 bg-[#FF6B4A] text-white px-8 py-4 rounded-2xl font-bold"
        >
          Analyze Match
        </button>

      </div>

      {loading && (

        <div className="bg-white mt-10 rounded-[30px] shadow-md p-8">

          <h2 className="text-2xl font-black text-[#1E1B4B]">
            Almost there...
          </h2>

        </div>

      )}

      {result && (

        <div className="bg-white mt-10 rounded-[30px] shadow-md p-8">

          <h2 className="text-3xl font-black text-[#1E1B4B]">
            Match Result
          </h2>

          <div className="mt-8 space-y-6">

            <div>

              <h3 className="font-bold text-xl">
                Match Score
              </h3>

              <p className="text-gray-700 mt-2">
                {result.matchScore}
              </p>

            </div>

            <div>

              <h3 className="font-bold text-xl">
                Missing Skills
              </h3>

              <p className="text-gray-700 mt-2">
                {result.missingSkills.join(", ")}
              </p>

            </div>

            <div>

              <h3 className="font-bold text-xl">
                Suggestions
              </h3>

              <p className="text-gray-700 mt-2 whitespace-pre-line">
                {result.suggestions}
              </p>

            </div>

            <button
              onClick={downloadPDF}
              className="bg-[#1E1B4B] text-white px-8 py-4 rounded-2xl font-bold"
            >
              Download PDF Report
            </button>

          </div>

        </div>

      )}

    </div>
  )
}

export default JDMatcher
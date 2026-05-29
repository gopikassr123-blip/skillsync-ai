import { useState } from "react"
import axios from "axios"
import {
  Upload,
  Sparkles,
  LoaderCircle,
  CheckCircle
} from "lucide-react"

function Resume() {

  const [file, setFile] = useState(null)
  const [fileName, setFileName] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [analysisData, setAnalysisData] = useState(null)

  const handleFileChange = (event) => {

    const selectedFile = event.target.files[0]

    if (selectedFile) {
      setFile(selectedFile)
      setFileName(selectedFile.name)
      setAnalysisData(null)
      setSuccessMessage("")
    }
  }

  const handleAnalyze = async () => {

    if (!file) return

    setIsAnalyzing(true)
    setSuccessMessage("")

    const formData = new FormData()
    formData.append("resume", file)

    try {

      const response = await axios.post(
        "http://localhost:5000/api/resume/upload",
        formData
      )

      setSuccessMessage(response.data.message)

      setAnalysisData(response.data.analysis)

      setIsAnalyzing(false)

    } catch (error) {

      console.log(error)

      setSuccessMessage("Resume upload failed. Please try again.")

      setIsAnalyzing(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#F7F4EF] p-10">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-5xl font-black text-[#1E1B4B]">
            Resume Intelligence
          </h1>

          <p className="text-gray-600 mt-4">
            Upload your resume and get AI-powered ATS analysis.
          </p>

        </div>

        <div className="bg-white p-4 rounded-2xl shadow-md">
          <Sparkles className="text-[#FF6B4A]" />
        </div>

      </div>

      <div className="bg-white mt-10 p-10 rounded-[30px] shadow-md border border-orange-100">

        <div className="border-2 border-dashed border-orange-200 rounded-[24px] p-16 text-center bg-[#FFF8F5]">

          <div className="bg-[#FFE7DD] w-fit mx-auto p-5 rounded-3xl">
            <Upload className="text-[#FF6B4A]" size={40} />
          </div>

          <h2 className="text-3xl font-black text-[#1E1B4B] mt-6">
            Upload Your Resume
          </h2>

          <p className="text-gray-500 mt-3 text-lg">
            Drag & drop your PDF resume here
          </p>

          <input
            type="file"
            className="hidden"
            id="resumeUpload"
            onChange={handleFileChange}
          />

          <label
            htmlFor="resumeUpload"
            className="inline-block mt-8 bg-[#FF6B4A] hover:scale-105 transition-all duration-300 text-white px-8 py-4 rounded-2xl font-bold cursor-pointer"
          >
            Choose Resume
          </label>

          {fileName && (

            <div className="mt-6 bg-white border border-orange-200 rounded-2xl p-4 max-w-md mx-auto">

              <p className="text-[#1E1B4B] font-bold">
                Uploaded File:
              </p>

              <p className="text-gray-600 mt-2 break-all">
                {fileName}
              </p>

              <button
                onClick={handleAnalyze}
                className="mt-5 bg-[#1E1B4B] hover:scale-105 transition-all duration-300 text-white px-6 py-3 rounded-2xl font-bold"
              >
                Analyze Resume
              </button>

            </div>

          )}

          {isAnalyzing && (

            <div className="mt-8 bg-white rounded-3xl p-8 shadow-md max-w-md mx-auto">

              <LoaderCircle
                className="animate-spin text-[#FF6B4A] mx-auto"
                size={50}
              />

              <h2 className="text-2xl font-black text-[#1E1B4B] mt-5">
                AI is analyzing your resume...
              </h2>

              <p className="text-gray-500 mt-3">
                Checking ATS score, missing skills, and career match.
              </p>

            </div>

          )}

          {successMessage && !isAnalyzing && (

            <div className="mt-8 bg-green-50 border border-green-200 rounded-3xl p-5 max-w-md mx-auto flex items-center justify-center gap-3">

              <CheckCircle className="text-green-600" />

              <p className="text-green-700 font-bold">
                {successMessage}
              </p>

            </div>

          )}

        </div>

      </div>

      {analysisData && (

        <div className="mt-10 space-y-6">

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-[28px] shadow-md">

              <p className="text-gray-500">
                ATS Score
              </p>

              <h1 className="text-5xl font-black text-[#FF6B4A] mt-4">
                {analysisData.atsScore}%
              </h1>

            </div>

            <div className="bg-white p-6 rounded-[28px] shadow-md">

              <p className="text-gray-500">
                Recommended Role
              </p>

              <h2 className="text-3xl font-black text-[#1E1B4B] mt-4">
                {analysisData.recommendedRole}
              </h2>

            </div>

            <div className="bg-white p-6 rounded-[28px] shadow-md">

              <p className="text-gray-500">
                Career Summary
              </p>

              <p className="text-[#1E1B4B] font-semibold mt-4 leading-7">
                {analysisData.summary}
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white p-6 rounded-[28px] shadow-md">

              <h2 className="text-2xl font-black text-[#1E1B4B]">
                Missing Skills
              </h2>

              <div className="flex flex-wrap gap-3 mt-5">

                {analysisData.missingSkills.map((skill, index) => (

                  <span
                    key={index}
                    className="bg-orange-100 text-[#FF6B4A] px-4 py-2 rounded-xl font-semibold"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

            <div className="bg-white p-6 rounded-[28px] shadow-md">

              <h2 className="text-2xl font-black text-[#1E1B4B]">
                Strong Skills
              </h2>

              <div className="flex flex-wrap gap-3 mt-5">

                {analysisData.strongSkills.map((skill, index) => (

                  <span
                    key={index}
                    className="bg-green-100 text-green-700 px-4 py-2 rounded-xl font-semibold"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  )
}

export default Resume
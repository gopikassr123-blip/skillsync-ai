import { useState } from "react"
import axios from "axios"
import { Upload, Sparkles, LoaderCircle, CheckCircle } from "lucide-react"

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
        "https://skillsync-ai-zotx.onrender.com/api/resume/upload",
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
              Resume Intelligence
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight max-w-2xl">
              Analyze your resume with AI
            </h1>

            <p className="mt-7 text-lg leading-8 text-purple-100/70 max-w-2xl">
              Upload your PDF resume and get ATS score, missing skills, strong skills,
              career summary and recommended role instantly.
            </p>
          </div>

          <div className="rounded-[34px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 shadow-[0_0_70px_rgba(168,85,247,0.18)]">
            <div className="text-center">
              <div className="h-20 w-20 rounded-3xl bg-purple-500/20 flex items-center justify-center text-purple-300 mx-auto">
                <Upload size={40} />
              </div>

              <h2 className="text-3xl font-semibold mt-8">
                Upload Your Resume
              </h2>

              <p className="mt-4 text-purple-100/70">
                Choose your PDF resume for AI analysis.
              </p>

              <input
                type="file"
                className="hidden"
                id="resumeUpload"
                onChange={handleFileChange}
              />

              <label
                htmlFor="resumeUpload"
                className="inline-block mt-8 rounded-2xl bg-gradient-to-r from-purple-500 to-violet-600 px-8 py-4 text-sm font-semibold cursor-pointer shadow-[0_0_35px_rgba(168,85,247,0.35)]"
              >
                Choose Resume
              </label>

              {fileName && (
                <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="font-semibold">Uploaded File</p>
                  <p className="text-purple-100/65 mt-2 break-all text-sm">
                    {fileName}
                  </p>

                  <button
                    onClick={handleAnalyze}
                    className="mt-6 rounded-2xl bg-white text-[#080014] px-7 py-3 text-sm font-bold"
                  >
                    Analyze Resume
                  </button>
                </div>
              )}

              {isAnalyzing && (
                <div className="mt-8 rounded-2xl bg-white/[0.04] p-6">
                  <LoaderCircle className="animate-spin text-purple-300 mx-auto" size={42} />
                  <h2 className="text-xl font-semibold mt-5">
                    AI is analyzing your resume...
                  </h2>
                  <p className="text-purple-100/65 mt-3 text-sm">
                    Checking ATS score, missing skills and career match.
                  </p>
                </div>
              )}

              {successMessage && !isAnalyzing && (
                <div className="mt-8 rounded-2xl bg-green-500/10 border border-green-400/30 p-5 flex items-center justify-center gap-3">
                  <CheckCircle className="text-green-400" />
                  <p className="text-green-300 font-semibold text-sm">
                    {successMessage}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {analysisData && (
          <section className="pt-14 pb-10">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8">
                <p className="text-purple-100/65">ATS Score</p>
                <h1 className="text-5xl font-bold text-purple-300 mt-4">
                  {analysisData.atsScore}%
                </h1>
              </div>

              <div className="rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8">
                <p className="text-purple-100/65">Recommended Role</p>
                <h2 className="text-3xl font-semibold mt-4">
                  {analysisData.recommendedRole}
                </h2>
              </div>

              <div className="rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8">
                <p className="text-purple-100/65">Career Summary</p>
                <p className="mt-4 text-purple-100/80 leading-7">
                  {analysisData.summary}
                </p>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default Resume
const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const multer = require("multer")
const fs = require("fs")

dotenv.config()

console.log("Gemini Key:", process.env.GEMINI_API_KEY ? "Loaded" : "Missing")

const app = express()

app.use(cors())
app.use(express.json())

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/")
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname)
  }
})

const upload = multer({ storage })

async function extractTextFromPDF(filePath) {

  const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf.mjs")

  const data = new Uint8Array(fs.readFileSync(filePath))

  const pdfDocument = await pdfjsLib.getDocument({
    data
  }).promise

  let fullText = ""

  for (
    let pageNumber = 1;
    pageNumber <= pdfDocument.numPages;
    pageNumber++
  ) {

    const page = await pdfDocument.getPage(pageNumber)

    const content = await page.getTextContent()

    const pageText = content.items
      .map((item) => item.str)
      .join(" ")

    fullText += pageText + "\n"
  }

  return fullText
}

async function getGeminiResponse(prompt) {

  const { GoogleGenAI } = await import("@google/genai")

  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
  })

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt
  })

  return response.text
}

async function analyzeResumeWithAI(resumeText) {

  const prompt = `
Analyze this resume and return ONLY valid JSON.

Resume:
${resumeText}

Return this JSON format:

{
  "atsScore": "80%",
  "recommendedRole": "Full Stack Developer",
  "missingSkills": ["Node.js", "MongoDB"],
  "strongSkills": ["HTML", "CSS", "JavaScript"],
  "summary": "Good frontend skills with growing backend knowledge."
}
`

  const text = await getGeminiResponse(prompt)

  const cleanedText = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim()

  return JSON.parse(cleanedText)
}

async function generateRoadmapWithAI(goal) {

  const prompt = `
Create a roadmap for becoming a ${goal}.

Rules:
- Simple English
- Short steps
- Beginner friendly
- No markdown

Return ONLY valid JSON.

{
  "steps": [
    "Learn basics",
    "Build projects",
    "Practice APIs",
    "Learn deployment",
    "Apply for jobs"
  ]
}
`

  const text = await getGeminiResponse(prompt)

  const cleanedText = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim()

  return JSON.parse(cleanedText)
}

app.get("/", (req, res) => {

  res.json({
    message: "SkillSync AI Backend Running 🚀"
  })

})

app.post(
  "/api/resume/upload",
  upload.single("resume"),
  async (req, res) => {

    try {

      const extractedText = await extractTextFromPDF(
        req.file.path
      )

      const analysis = await analyzeResumeWithAI(
        extractedText.slice(0, 6000)
      )

      res.json({
        message: "Resume analyzed successfully",
        fileName: req.file.filename,
        extractedText: extractedText.slice(0, 1000),
        analysis
      })

    } catch (error) {

      console.log("AI RESUME ERROR:", error)

      res.status(500).json({
        message: "Resume AI analysis failed"
      })

    }

  }
)

app.post("/api/roadmap", async (req, res) => {

  try {

    const { goal } = req.body

    const roadmap = await generateRoadmapWithAI(goal)

    res.json(roadmap)

  } catch (error) {

    console.log("ROADMAP ERROR:", error)

    res.status(500).json({
      message: "Roadmap generation failed"
    })

  }

})

app.post("/api/interview", async (req, res) => {

  try {

    const { role } = req.body

    const prompt = `
Generate 5 interview questions for ${role}.

Rules:
- Simple English
- Short answers
- No markdown

Return ONLY valid JSON.

{
  "questions": [
    {
      "question": "question text",
      "answer": "short answer"
    }
  ]
}
`

    const text = await getGeminiResponse(prompt)

    const cleanedText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim()

    res.json(JSON.parse(cleanedText))

  } catch (error) {

    console.log("INTERVIEW ERROR:", error)

    res.status(500).json({
      message: "Interview generation failed"
    })

  }

})

app.post("/api/chatbot", async (req, res) => {

  try {

    const { question } = req.body

    const prompt = `
You are SkillSync AI Career Assistant.

Rules:
- Short response
- No markdown
- No long paragraphs
- Simple English
- Modern clean response
- Only important points

Question:
${question}
`

    const text = await getGeminiResponse(prompt)

    res.json({
      answer: text
    })

  } catch (error) {

    console.log("CHATBOT ERROR:", error)

    res.status(500).json({
      message: "Chatbot failed"
    })

  }

})

app.post(
  "/api/mock-interview/question",
  async (req, res) => {

    try {

      const { role } = req.body

      const prompt = `
Generate one interview question for ${role}.

Rules:
- Simple English
- No explanation
- One question only
`

      const text = await getGeminiResponse(prompt)

      res.json({
        question: text.trim()
      })

    } catch (error) {

      console.log("MOCK QUESTION ERROR:", error)

      res.status(500).json({
        message: "Question generation failed"
      })

    }

  }
)

app.post(
  "/api/mock-interview/feedback",
  async (req, res) => {

    try {

      const { question, answer } = req.body

      const prompt = `
You are an interview coach.

Question:
${question}

Candidate Answer:
${answer}

Rules:
- Very short response
- Simple English
- No markdown
- No paragraph
- Easy to read

Format:

Score: x/10

Good:
short point

Improve:
short point

Better Answer:
2 short lines only
`

      const text = await getGeminiResponse(prompt)

      res.json({
        feedback: text
      })

    } catch (error) {

      console.log("MOCK FEEDBACK ERROR:", error)

      res.status(500).json({
        message: "Feedback generation failed"
      })

    }

  }
)

app.post(
  "/api/jd-match",
  upload.single("resume"),
  async (req, res) => {

    try {

      const extractedText = await extractTextFromPDF(
        req.file.path
      )

      const { jobDescription } = req.body

      const prompt = `
Compare this resume with the job description.

Resume:
${extractedText}

Job Description:
${jobDescription}

Rules:
- Simple English
- No symbols
- No numbering
- No markdown
- Short suggestions only
- Easy to understand
- Beginner friendly
- Only important points

Return ONLY valid JSON.

{
  "matchScore": "85%",
  "missingSkills": ["Docker", "AWS"],
  "suggestions": "Improve backend skills and add deployment projects."
}
`

      const text = await getGeminiResponse(prompt)

      const cleanedText = text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim()

      res.json(JSON.parse(cleanedText))

    } catch (error) {

      console.log("JD MATCH ERROR:", error)

      res.status(500).json({
        message: "JD Match failed"
      })

    }

  }
)

const PORT = 5000

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`)

})
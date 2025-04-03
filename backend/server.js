
import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

app.post("/chat", async (req, res) => {
  const { message, character } = req.body;

  if (!message || !character) {
    return res.status(400).json({ error: "Message and character are required" });
  }

  const requestPayload = {
    contents: [
      {
        parts: [
          { text: `You are ${character}. Stay in character and respond concisely:` },
          { text: message }
        ],
      },
    ],
  };

  try {
    // Call Gemini API
    const response = await axios.post(GEMINI_API_URL, requestPayload, {
      headers: { "Content-Type": "application/json" },
    });

    let reply = "I'm not sure how to respond to that.";
    if (response.data?.candidates?.length > 0) {
      reply = response.data.candidates[0]?.content?.parts?.map(p => p.text).join(" ") || reply;

      // Limit response to 30 words
      const words = reply.split(" ").slice(0, 30);
      reply = words.join(" ") + (words.length === 30 ? "..." : "");
    }

    res.json({ reply });

  } catch (error) {
    console.error("Gemini API Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch response from Gemini API" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

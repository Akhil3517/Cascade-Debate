
  import express from "express";
import cors from "cors";
import axios from "axios";
import fs from "fs";
import textToSpeech from "@google-cloud/text-to-speech";

const app = express();
app.use(express.json());
app.use(cors());

const GEMINI_API_KEY = "AIzaSyCiKV7r2LSXhZLDkZSDm7KRN1hLahJ3Qeg";
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

const ttsClient = new textToSpeech.TextToSpeechClient();

app.post("/chat", async (req, res) => {
  const { message, character } = req.body;

  if (!message || !character) {
    return res.status(400).json({ error: "Message and character are required" });
  }

  try {
    const requestPayload = {
      contents: [
        {
          parts: [
            {
              text: `You are ${character}. Stay in character, use their personality, and keep responses short (max 2 sentences).`,
            },
          ],
        },
      ],
    };

    const { data } = await axios.post(GEMINI_API_URL, requestPayload, {
      headers: { "Content-Type": "application/json" },
    });

    console.log("Full API Response:", JSON.stringify(data, null, 2));

    let reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response from AI.";

    // Limit response to a max of 2 sentences
    reply = reply.split(". ").slice(0, 2).join(". ") + ".";

    console.log(`${character}:`, reply);
    res.json({ reply });
  } catch (error) {
    console.error("Error with Gemini API:", error.response?.data || error.message);
    res.status(500).json({ error: "Error generating response from Gemini API" });
  }
});

app.post("/tts", async (req, res) => {
  const { text, character } = req.body;

  if (!text || !character) {
    return res.status(400).json({ error: "Text and character are required" });
  }

  try {
    const request = {
      input: { text },
      voice: { languageCode: "en-US", ssmlGender: "NEUTRAL" },
      audioConfig: { audioEncoding: "MP3" },
    };

    const [response] = await ttsClient.synthesizeSpeech(request);
    const filePath = `./audio/${character.replace(/\s+/g, "_")}.mp3`;
    fs.writeFileSync(filePath, response.audioContent, "binary");
    res.json({ audioUrl: `http://localhost:5000/audio/${character.replace(/\s+/g, "_")}.mp3` });
  } catch (error) {
    console.error("Error generating speech:", error.message);
    res.status(500).json({ error: "Error generating speech" });
  }
});

app.use("/audio", express.static("./audio"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

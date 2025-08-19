const axios = require("axios");

async function textToSpeech(text) {
  // const voice_id = "bMxLr8fP6hzNRRi9nJxU";
  // const url = `https://api.elevenlabs.io/v1/text-to-speech/${voice_id}`;
  // const body = {
  //   text,
  //   model_id: "eleven_monolingual_v1",
  //   voice_settings: {
  //     stability: 0,
  //     similarity_boost: 0,
  //     style: 0.5,
  //     use_speaker_boost: true,
  //   },
  // };
  // const headers = {
  //   "Content-Type": "application/json",
  //   accept: "audio/mpeg",
  //   "xi-api-key": process.env.ELEVENLABS_API_KEY,
  // };
  // const response = await axios.post(url, body, {
  //   headers,
  //   responseType: "arraybuffer",
  // });
  const response = await fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini-tts",
      voice: "alloy",
      input: text,
    }),
  });
  return response.data;
}

module.exports = { textToSpeech };

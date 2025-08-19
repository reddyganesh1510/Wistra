const axios = require("axios");

async function textToSpeech(text) {
  const voice_id = "bMxLr8fP6hzNRRi9nJxU";
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${voice_id}`;
  const body = {
    text,
    model_id: "eleven_monolingual_v1",
    voice_settings: {
      stability: 0,
      similarity_boost: 0,
      style: 0.5,
      use_speaker_boost: true,
    },
  };
  const headers = {
    "Content-Type": "application/json",
    accept: "audio/mpeg",
    "xi-api-key": process.env.ELEVENLABS_API_KEY,
  };
  const response = await axios.post(url, body, {
    headers,
    responseType: "arraybuffer",
  });
  return response.data;
}

module.exports = { textToSpeech };

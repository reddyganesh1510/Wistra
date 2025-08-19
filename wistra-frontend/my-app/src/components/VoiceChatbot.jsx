import { useState, useRef } from "react";

export default function VoiceChatbot() {
  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunks = useRef([]);

  const handleRecord = async () => {
    if (!recording) {
      // Start recording
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunks.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunks.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunks.current, { type: "audio/wav" });
        const formData = new FormData();
        formData.append("file", audioBlob, "input.wav");

        // Send to your API
        const response = await fetch("http://localhost:8000/api/audio/talk", {
          method: "POST",
          body: formData,
        });

        // Get back audio response
        const audioResp = await response.blob();
        const audioURL = URL.createObjectURL(audioResp);

        // Play it automatically
        const audio = new Audio(audioURL);
        audio.play();
      };

      mediaRecorderRef.current.start();
      setRecording(true);
    } else {
      // Stop recording
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <button
        onClick={handleRecord}
        className="p-4 rounded-full bg-blue-600 text-white shadow-lg"
      >
        {recording ? "⏹ Stop" : "🎤 Record"}
      </button>
    </div>
  );
}


import { useState } from "react";

export default function Chat() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleChat = async () => {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });
    const data = await res.json();
    setResponse(data.reply);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Chat with AI</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Say something..." />
      <button onClick={handleChat}>Send</button>
      <p><strong>AI:</strong> {response}</p>
    </div>
  );
}

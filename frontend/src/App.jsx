import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [message, setMessage] = useState("Click the button");
  const [loading, setLoading] = useState(false);

  async function getMessage() {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/message`);
      if (!response.ok) {
        throw new Error("Request failed");
      }
      const data = await response.json();
      setMessage(data.message || "No message in response");
    } catch (error) {
      setMessage("Could not reach backend API");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container">
      <button type="button" onClick={getMessage} disabled={loading}>
        {loading ? "Loading..." : "Get Message"}
      </button>
      <p>{message}</p>
    </main>
  );
}

export default App;


import { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("market");
  const [reportGenerated, setReportGenerated] = useState(false);  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#1e293b",
          marginTop: "20px",
          fontSize: "48px",
          fontWeight: "bold",
        }}
      >
        AI Co-Founder
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#64748b",
          marginBottom: "30px",
        }}
      >
        Turn your startup idea into a complete business plan
      </p>

      <div
        style={{
          background: "white",
          maxWidth: "800px",
          margin: "auto",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Describe Your Startup Idea</h2>

        <textarea
          rows="5"
          placeholder="Example: AI-powered campus placement assistant"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "10px",
            marginBottom: "20px",
          }}
        />

        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <select style={{ padding: "10px" }}>
            <option>Healthcare</option>
            <option>Education</option>
            <option>Finance</option>
          </select>

          <select style={{ padding: "10px" }}>
            <option>Students</option>
            <option>Professionals</option>
            <option>Businesses</option>
          </select>

          <select style={{ padding: "10px" }}>
            <option>Idea Stage</option>
            <option>MVP</option>
            <option>Growth</option>
          </select>
        </div>

        <button
          onClick={() => setReportGenerated(true)}
          style={{
            background: "#2563eb",
            color: "white",
            padding: "12px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Generate Report
        </button>
        {reportGenerated && (
        <div style={{ marginTop: "30px" }}>
  <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
    <button
      onClick={() => setActiveTab("market")}
      style={{
        padding: "10px 16px",
        borderRadius: "8px",
        border: "none",
        background: activeTab === "market" ? "#2563eb" : "#e2e8f0",
        color: activeTab === "market" ? "white" : "black",
        cursor: "pointer",
      }}
    >
      Market
    </button>
    <button
      onClick={() => setActiveTab("competitors")}
      style={{
        padding: "10px 16px",
        borderRadius: "8px",
        border: "none",
        background: activeTab === "competitors" ? "#2563eb" : "#e2e8f0",
        color: activeTab === "competitors" ? "white" : "black",
        cursor: "pointer",
      }}
    >
      Competitors
    </button>
    <button
      onClick={() => setActiveTab("swot")}
      style={{
        padding: "10px 16px",
        borderRadius: "8px",
        border: "none",
        background: activeTab === "swot" ? "#2563eb" : "#e2e8f0",
        color: activeTab === "swot" ? "white" : "black",
        cursor: "pointer",
     }}
    >
     SWOT
    </button>
    <button
      onClick={() => setActiveTab("model")}
      style={{
        padding: "10px 16px",
        borderRadius: "8px",
        border: "none",
        background: activeTab === "model" ? "#2563eb" : "#e2e8f0",
        color: activeTab === "model" ? "white" : "black",
        cursor: "pointer",
     }}
    >
      Model
    </button>
    <button
      onClick={() => setActiveTab("pitch")}
      style={{
        padding: "10px 16px",
        borderRadius: "8px",
        border: "none",
        background: activeTab === "pitch" ? "#2563eb" : "#e2e8f0",
        color: activeTab === "pitch" ? "white" : "black",
        cursor: "pointer",
      }}
   >
      Pitch
    </button>
  </div>

  {activeTab === "market" && (
    <div>
      <h2>Market Analysis</h2>

            <div style={{ display: "flex", gap: "20px" }}>
        <div
          style={{
            background: "#eef2ff",
            padding: "15px",
            borderRadius: "10px",
          }}
        >
          <h3>TAM</h3>
          <p>$5 Billion</p>
        </div>

        <div
          style={{
            background: "#ecfdf5",
            padding: "15px",
            borderRadius: "10px",
          }}
        >
          <h3>SAM</h3>
          <p>$500 Million</p>
        </div>
      </div>

      <div style={{ marginTop: "25px" }}>
        <h3>Market Trends</h3>

        <ul>
          <li>Growing adoption of AI tools</li>
          <li>Increase in startup formation</li>
          <li>Demand for automated business planning</li>
        </ul>
      </div>

    </div>
  )}

  {activeTab === "competitors" && (
    <div>
      <h2>Competitors</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Company</th>
            <th>Strength</th>
            <th>Weakness</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ChatGPT</td>
            <td style={{ color: "green" }}>Strong AI</td>
            <td style={{ color: "red" }}>Generic Advice</td>
          </tr>

          <tr>
            <td>Notion AI</td>
            <td style={{ color: "green" }}>Productivity Focus</td>
            <td style={{ color: "red" }}>Limited Business Planning</td>
          </tr>
        </tbody>
      </table>
    </div>
  )}

  {activeTab === "swot" && (
    <div>
      <h2>SWOT Analysis</h2>

      <ul>
        <li><b>Strength:</b> AI-powered insights</li>
        <li><b>Weakness:</b> Early-stage product</li>
        <li><b>Opportunity:</b> Growing AI market</li>
        <li><b>Threat:</b> Strong competitors</li>
      </ul>
    </div>
  )}

  {activeTab === "model" && (
    <div>
      <h2>Business Model</h2>

      <ul>
        <li>Monthly Subscription</li>
        <li>Premium Startup Reports</li>
        <li>Enterprise Consulting Plans</li>
        <li>AWS Marketplace Integration</li>
      </ul>
    </div>
  )}
{activeTab === "pitch" && (
  <div>
    <h2>Investor Pitch</h2>

    <p>
      AI Co-Founder helps entrepreneurs validate startup ideas,
      analyze competitors, identify market opportunities and
      generate investor-ready business plans within minutes.
    </p>
  </div>
)}

</div>
)}
      </div>
    </div>
  );
}

export default App;
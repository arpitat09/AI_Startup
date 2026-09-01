import app from "../server.js";
import { logger } from "../utils/logger.js";

async function runIntegrationVerification() {
  const PORT = 3099;
  const server = app.listen(PORT, async () => {
    logger.info(`Verification Server running on http://localhost:${PORT}`);

    try {
      // Test 1: GET /health
      console.log("\n▶ [TEST 1] Verifying GET /health ...");
      const healthRes = await fetch(`http://localhost:${PORT}/health`);
      const healthData = await healthRes.json();
      console.log("Health Check Response:", JSON.stringify(healthData));
      if (healthData.status !== "ok" && healthData.status !== "healthy") {
        throw new Error("Health check failed!");
      }
      console.log("✔ [TEST 1] /health is 100% HEALTHY!");

      // Test 2: GET /api/projects
      console.log("\n▶ [TEST 2] Verifying GET /api/projects ...");
      const projectsRes = await fetch(`http://localhost:${PORT}/api/projects`);
      const projectsData = await projectsRes.json();
      console.log("Projects Response Status:", projectsData.success, "Count:", projectsData.data?.length);
      if (!projectsData.success) {
        throw new Error("Projects endpoint failed!");
      }
      console.log("✔ [TEST 2] /api/projects is OPERATIONAL!");

      // Test 3: POST /api/chat
      console.log("\n▶ [TEST 3] Verifying POST /api/chat ...");
      const chatRes = await fetch(`http://localhost:${PORT}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: "How can I reduce customer acquisition cost for my SaaS?",
          startupIdea: "AI-powered compliance auditor",
          context: { startupName: "AuditPulse", industry: "HealthTech" }
        })
      });
      const chatData = await chatRes.json();
      console.log("Chat Response Preview:", chatData.data?.reply?.slice(0, 120) + "...");
      if (!chatData.success || !chatData.data?.reply) {
        throw new Error("Chat endpoint failed!");
      }
      console.log("✔ [TEST 3] /api/chat is OPERATIONAL!");

      // Test 4: POST /api/analyze (Full Multi-Agent Pipeline)
      console.log("\n▶ [TEST 4] Verifying Full POST /api/analyze Orchestration Pipeline ...");
      const analyzeRes = await fetch(`http://localhost:${PORT}/api/analyze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          idea: "AI-powered preventive maintenance platform with IoT vibration sensors for mid-sized manufacturing plants",
          industry: "Industrial AI",
          targetCustomer: "Plant maintenance managers",
          geography: "US",
          stage: "Pre-MVP",
          budget: "$50k - $250k",
          goal: "Validate market demand & build MVP"
        })
      });
      const analyzeData = await analyzeRes.json();
      
      if (!analyzeData.success || !analyzeData.data) {
        throw new Error(`Analyze endpoint failed: ${JSON.stringify(analyzeData.error)}`);
      }

      const report = analyzeData.data;
      console.log(`\nReport Generated for: "${report.meta?.startupName}"`);
      console.log(`Viability Score: ${report.score?.overallScore} / 100 (${report.score?.tier})`);
      console.log(`Verdict: ${report.executive?.aiVerdict?.recommendation} - ${report.executive?.aiVerdict?.headline}`);
      console.log(`Market TAM: ${report.market?.tam?.value} | SAM: ${report.market?.sam?.value}`);
      console.log(`Competitors Analyzed: ${report.competitors?.directCompetitors?.length}`);
      console.log(`Financial Model MRR: $${report.financialModel?.metrics?.mrr} | LTV/CAC: ${report.financialModel?.metrics?.ltvCacRatio}x`);
      console.log(`MVP Features: Must-Have (${report.mvp?.moscow?.mustHave?.length})`);
      console.log(`Pitch Deck Slides: ${report.pitch?.slides?.length}`);

      console.log("\n=======================================================");
      console.log("🎉 ALL END-TO-END INTEGRATION TESTS PASSED WITH 100% SUCCESS!");
      console.log("=======================================================\n");

      server.close(() => {
        process.exit(0);
      });
    } catch (err) {
      console.error("\n❌ INTEGRATION TEST FAILED:", err);
      server.close(() => {
        process.exit(1);
      });
    }
  });
}

runIntegrationVerification();

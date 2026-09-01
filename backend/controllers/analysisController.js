/**
 * Analysis Controller
 */
import { validateAnalysisInput } from "../validators/analysisValidator.js";
import { runCompleteStartupAnalysis } from "../services/ai/analysisService.js";
import { calculateFinancialModel } from "../services/scoring/financialCalculator.js";
import { storage } from "../data/storage.js";
import { errorResponse } from "../utils/errorHandler.js";

export async function analyzeStartupHandler(req, res, next) {
  try {
    const validatedInput = validateAnalysisInput(req.body);
    const report = await runCompleteStartupAnalysis(validatedInput);
    
    // Auto-save to persistence
    storage.saveProject(report);

    return res.status(200).json({
      success: true,
      data: report
    });
  } catch (error) {
    next(error);
  }
}

export function recalculateFinancialsHandler(req, res, next) {
  try {
    const updatedFinancials = calculateFinancialModel(req.body);
    return res.status(200).json({
      success: true,
      data: updatedFinancials
    });
  } catch (error) {
    next(error);
  }
}

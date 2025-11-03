import { useState } from "react";
import { HomePage } from "./pages/HomePage/HomePage";
import { InputPage } from "./pages/InputPage/InputPage";
import { ResultsPage } from "./pages/ResultsPage/ResultsPage";
import { TemplatesPage } from "./pages/TemplatesPage/TemplatesPage";
import type { CVResponse } from "./types/resume";

type Page = "home" | "input" | "results" | "templates";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [analysis, setAnalysis] = useState<CVResponse | null>(null);

  const handleAnalyzeComplete = (result: CVResponse, goToTemplates = false) => {
    setAnalysis(result);
    setCurrentPage(goToTemplates ? "templates" : "results");
  };

  return (
    <div className="size-full">
      {currentPage === "home" && (
        <HomePage onStart={() => setCurrentPage("input")} />
      )}
      {currentPage === "input" && (
        <InputPage onBack={() => setCurrentPage("home")} onAnalyzeComplete={handleAnalyzeComplete} />
      )}
      {currentPage === "results" && (
        <ResultsPage onBack={() => setCurrentPage("input")} onViewTemplates={() => setCurrentPage("templates")} analysis={analysis} />
      )}
      {currentPage === "templates" && (
        <TemplatesPage 
          onBack={() => setCurrentPage("results")}
          analysis={analysis}
        />
      )}
    </div>
  );
}
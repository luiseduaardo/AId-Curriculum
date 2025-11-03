import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, FileText, Sparkles, Upload } from "lucide-react";
import { LogoMain } from "../../components/Logo/Logo";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import { PdfUploader } from "../../components/PdfUploader/PdfUploader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { useResumeApi } from "../../hooks/useResume";
import type { CVRequest, CVResponse } from "../../types/resume";
import { toast } from "sonner";
import "./InputPage.css";
import type { InputPageProps } from "./InputPage.types";

export function InputPage({ onBack, onAnalyzeComplete }: InputPageProps) {
  const [step, setStep] = useState("choice");
  const [fromScratchStep, setFromScratchStep] = useState("type-choice");
  const [isTargeted, setIsTargeted] = useState(false);

  // job-specific
  const [jobDescription, setJobDescription] = useState("");

  // CV fields
  const [fullName, setFullName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [experienceText, setExperienceText] = useState("");
  const [skillsText, setSkillsText] = useState("");
  const [educationText, setEducationText] = useState("");

  // improve existing
  const [resumeText, setResumeText] = useState("");

  const { analyze, loading } = useResumeApi();

  async function submitBuiltCv(goToTemplates = false) {
    const payload: CVRequest = {
      full_name: fullName,
      desired_role: title,
      email: email || undefined,
      phone: phone || undefined,
      professional_experience: experienceText,
      education: educationText,
      skills: skillsText,
      target_job_description: isTargeted ? (jobDescription || null) : null,
    };

    try {
      const res = await analyze(payload);
      if (res) onAnalyzeComplete(res, goToTemplates);
    } catch (e: any) {
      toast.error(e?.message || "Falha ao gerar currículo");
    }
  }

  const handleAnalyzeExisting = async () => {
    const payload: CVRequest = {
      full_name: undefined as any,
      desired_role: undefined as any,
      email: undefined,
      phone: undefined,
      professional_experience: resumeText,
      education: "",
      skills: "",
      target_job_description: null,
    };
    try {
      const res = await analyze(payload);
      if (res) onAnalyzeComplete(res, true);
    } catch (e: any) {
      toast.error(e?.message || "Falha na análise");
    }
  };

  function getFromScratchPages(): any[] {
    return isTargeted
      ? ["type-choice", "job-input", "personal", "experience", "skills", "education"]
      : ["type-choice", "personal", "experience", "skills", "education"];
  }

  const fromScratchPages = getFromScratchPages();
  const currentIndex = Math.max(0, fromScratchPages.indexOf(fromScratchStep));

  function gotoNextFromScratch() {
    const pages = fromScratchPages;
    const idx = pages.indexOf(fromScratchStep);
    if (idx === -1) return;
    if (idx < pages.length - 1) {
      setFromScratchStep(pages[idx + 1]);
    }
  }

  function gotoPrevFromScratch() {
    const pages = fromScratchPages;
    const idx = pages.indexOf(fromScratchStep);
    if (idx > 0) setFromScratchStep(pages[idx - 1]);
  }

  const stepLabels: Record<string, string> = {
    'type-choice': 'Tipo',
    'job-input': 'Vaga',
    'personal': 'Pessoal',
    'experience': 'Experiência',
    'skills': 'Habilidades',
    'education': 'Educação',
    'review': 'Revisar'
  };

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: '#F0F7DA' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4 mb-6">
          <button onClick={onBack} className="text-sm text-[#2D6073] flex items-center gap-2"><ArrowLeft /> Voltar</button>
          <LogoMain className="w-10 h-10" />
        </motion.div>

        {/* content omitted for brevity; original content preserved in legacy file */}
      </div>
    </div>
  );
}

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, FileText, Sparkles, Upload } from "lucide-react";
import { LogoMain } from "../components/Logo";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { PdfUploader } from "../components/PdfUploader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { useResumeApi } from "../hooks/useResume";
import type { CVRequest, CVResponse } from "../types/resume";
import { toast } from "sonner";

interface InputPageProps {
  onBack: () => void;
  onAnalyzeComplete: (result: CVResponse) => void;
}

type Step = "choice" | "from-scratch" | "improve-existing";
type FromScratchStep = "job-choice" | "job-input" | "personal" | "experience" | "skills" | "education";

export function InputPage({ onBack, onAnalyzeComplete }: InputPageProps) {
  const [step, setStep] = useState<Step>("choice");
  const [jobDescription, setJobDescription] = useState("");
  const [resumeText, setResumeText] = useState("");
  const { analyze, loading } = useResumeApi();

  const handleAnalyzeFromJob = async () => {
    const payload: CVRequest = {
      full_name: undefined as any,
      desired_role: undefined as any,
      email: undefined,
      phone: undefined,
      professional_experience: "",
      education: "",
      skills: "",
      target_job_description: jobDescription || null,
    };
    try {
      const res = await analyze(payload);
      if (res) onAnalyzeComplete(res);
    } catch (e: any) {
      toast.error(e?.message || "Falha na análise");
    }
  };

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
      if (res) onAnalyzeComplete(res);
    } catch (e: any) {
      toast.error(e?.message || "Falha na análise");
    }
  };

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: '#F0F7DA' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4 mb-6">
          <button onClick={onBack} className="text-sm text-[#2D6073] flex items-center gap-2"><ArrowLeft /> Voltar</button>
          <LogoMain className="w-10 h-10" />
        </motion.div>

        {step === 'choice' && (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl mb-4" style={{ color: '#1F192F' }}>Como você quer começar?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-medium">Gerar a partir da descrição da vaga</h3>
                <p className="text-sm text-gray-600 mb-4">Cole a descrição do trabalho e nós sugerimos um currículo otimizado.</p>
                <Button onClick={() => setStep('from-scratch')}>Usar descrição da vaga</Button>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-medium">Melhorar currículo existente</h3>
                <p className="text-sm text-gray-600 mb-4">Faça upload do seu PDF ou cole o texto do currículo.</p>
                <Button onClick={() => setStep('improve-existing')}>Melhorar meu currículo</Button>
              </div>
            </div>
          </div>
        )}

        {step === 'from-scratch' && (
          <div className="mt-6 bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg mb-2">Descrição da vaga</h3>
            <Textarea value={jobDescription} onChange={(e) => setJobDescription((e.target as HTMLTextAreaElement).value)} placeholder="Cole a descrição da vaga aqui" />
            <div className="flex gap-2 mt-4">
              <Button onClick={() => setStep('choice')} variant="outline">Voltar</Button>
              <Button onClick={handleAnalyzeFromJob} disabled={loading}>{loading ? 'Analisando...' : 'Analisar'}</Button>
            </div>
          </div>
        )}

        {step === 'improve-existing' && (
          <div className="mt-6 bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg mb-2">Upload / Cole seu currículo</h3>
            <PdfUploader label="Seu PDF" placeholder="Arraste ou selecione um PDF" onTextExtracted={(text: string) => setResumeText(text)} />
            <p className="text-sm text-gray-600 mt-2">ou cole o texto abaixo</p>
            <Textarea value={resumeText} onChange={(e) => setResumeText((e.target as HTMLTextAreaElement).value)} placeholder="Cole aqui o texto do seu currículo" />
            <div className="flex gap-2 mt-4">
              <Button onClick={() => setStep('choice')} variant="outline">Voltar</Button>
              <Button onClick={handleAnalyzeExisting} disabled={loading}>{loading ? 'Analisando...' : 'Analisar'}</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
 

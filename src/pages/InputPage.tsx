import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, FileText, Sparkles, Upload } from "lucide-react";
import { LogoMain } from "../components/Logo/Logo";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { PdfUploader } from "../components/PdfUploader/PdfUploader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { useResumeApi } from "../hooks/useResume";
import type { CVRequest, CVResponse } from "../types/resume";
import { toast } from "sonner";

interface InputPageProps {
  onBack: () => void;
  onAnalyzeComplete: (result: CVResponse, goToTemplates?: boolean) => void;
}

type Step = "choice" | "from-scratch" | "improve-existing";
type FromScratchStep = "type-choice" | "job-input" | "personal" | "experience" | "skills" | "education" | "review";

export function InputPage({ onBack, onAnalyzeComplete }: InputPageProps) {
  const [step, setStep] = useState<Step>("choice");
  const [fromScratchStep, setFromScratchStep] = useState<FromScratchStep>("type-choice");
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

  // render wizard pages dynamically depending on whether the CV is targeted
  function getFromScratchPages(): FromScratchStep[] {
    return isTargeted
      ? ['type-choice', 'job-input', 'personal', 'experience', 'skills', 'education']
      : ['type-choice', 'personal', 'experience', 'skills', 'education'];
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

  // Step indicator labels
  const stepLabels: Record<FromScratchStep, string> = {
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

        {step === 'choice' && (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl mb-4" style={{ color: '#1F192F' }}>Como você quer começar?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-medium">Gerar do zero</h3>
                <p className="text-sm text-gray-600 mb-4">Crie um currículo a partir do zero, passo a passo.</p>
                <Button onClick={() => { setStep('from-scratch'); setFromScratchStep('type-choice'); }}>Começar do zero</Button>
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
            {/* Progress indicator */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                {fromScratchPages.map((p, i) => (
                  <div key={p} className="flex-1">
                    <div
                      className={`h-2 rounded ${i <= fromScratchPages.indexOf(fromScratchStep) ? 'bg-[#2D6073]' : 'bg-gray-200'}`}
                      aria-hidden
                    />
                    <div className="text-xs text-center mt-1" style={{ color: '#2D6073' }}>{stepLabels[p]}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* PAGE: type-choice */}
            {fromScratchStep === 'type-choice' && (
              <div>
                <h3 className="text-lg mb-2">Escolha o tipo de currículo</h3>
                <div className="flex gap-3 mb-4">
                  <Button variant={isTargeted ? 'outline' : 'default'} onClick={() => setIsTargeted(false)}>Currículo genérico</Button>
                  <Button variant={isTargeted ? 'default' : 'outline'} onClick={() => setIsTargeted(true)}>Otimizado para uma vaga</Button>
                </div>
                <div className="flex gap-2">
                  <Button onClick={() => { setStep('choice'); }}>Cancelar</Button>
                  <Button onClick={() => gotoNextFromScratch()}>Próximo</Button>
                </div>
              </div>
            )}

            {/* PAGE: job-input */}
            {fromScratchStep === 'job-input' && (
              <div>
                <label htmlFor="job-desc" className="block mb-2">Descrição da vaga</label>
                <Textarea id="job-desc" value={jobDescription} onChange={(e) => setJobDescription((e.target as HTMLTextAreaElement).value)} placeholder="Cole a descrição da vaga aqui" />
                <div className="flex gap-2 mt-4">
                  <Button onClick={() => gotoPrevFromScratch()} variant="outline">Voltar</Button>
                  <Button onClick={() => gotoNextFromScratch()}>Próximo</Button>
                </div>
              </div>
            )}

            {/* PAGE: personal */}
            {fromScratchStep === 'personal' && (
              <div>
                <h3 className="font-medium mb-2">Informações Pessoais</h3>
                <input className="block w-full mb-2 p-2 border rounded" placeholder="Nome completo" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                <input className="block w-full mb-2 p-2 border rounded" placeholder="Título profissional" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input className="block w-full mb-2 p-2 border rounded" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className="block w-full mb-2 p-2 border rounded" placeholder="Telefone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <div className="flex gap-2 mt-4">
                  <Button onClick={() => gotoPrevFromScratch()} variant="outline">Voltar</Button>
                  <Button onClick={() => gotoNextFromScratch()}>Próximo</Button>
                </div>
              </div>
            )}

            {/* PAGE: experience */}
            {fromScratchStep === 'experience' && (
              <div>
                <h3 className="font-medium mb-2">Experiência profissional (texto corrido)</h3>
                <Textarea value={experienceText} onChange={(e) => setExperienceText((e.target as HTMLTextAreaElement).value)} placeholder="Descreva sua experiência profissional" />
                <div className="flex gap-2 mt-4">
                  <Button onClick={() => gotoPrevFromScratch()} variant="outline">Voltar</Button>
                  <Button onClick={() => gotoNextFromScratch()}>Próximo</Button>
                </div>
              </div>
            )}

            {/* PAGE: skills */}
            {fromScratchStep === 'skills' && (
              <div>
                <h3 className="font-medium mb-2">Habilidades (texto corrido)</h3>
                <Textarea value={skillsText} onChange={(e) => setSkillsText((e.target as HTMLTextAreaElement).value)} placeholder="Liste suas habilidades" />
                <div className="flex gap-2 mt-4">
                  <Button onClick={() => gotoPrevFromScratch()} variant="outline">Voltar</Button>
                  <Button onClick={() => gotoNextFromScratch()}>Próximo</Button>
                </div>
              </div>
            )}

            {/* PAGE: education */}
            {fromScratchStep === 'education' && (
              <div>
                <h3 className="font-medium mb-2">Educação (texto corrido)</h3>
                <Textarea value={educationText} onChange={(e) => setEducationText((e.target as HTMLTextAreaElement).value)} placeholder="Descreva sua formação" />
                <div className="flex gap-2 mt-4">
                  <Button onClick={() => gotoPrevFromScratch()} variant="outline">Voltar</Button>
                  <Button onClick={() => submitBuiltCv(isTargeted)} disabled={loading}>{loading ? 'Gerando...' : 'Gerar e Analisar'}</Button>
                </div>
              </div>
            )}
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
 

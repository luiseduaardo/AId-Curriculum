import React from "react";
import { FileText, Sparkles } from "lucide-react";

interface Props {
  onChooseGeneric: () => void;
  onChoosePersonalized: () => void;
}

export function FromScratchChoice({ onChooseGeneric, onChoosePersonalized }: Props) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <h2 className="text-3xl mb-4 text-center" style={{ color: '#1F192F', fontFamily: 'JetBrains Mono, monospace' }}>
        Tipo de Currículo
      </h2>
      <p className="text-center mb-8" style={{ color: '#2D6073' }}>
        Você já tem uma vaga em mente?
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <button
          onClick={onChooseGeneric}
          className="p-8 rounded-xl border-2 transition-all hover:scale-105"
          style={{ borderColor: '#65B8A6', backgroundColor: '#ffffff' }}
        >
          <FileText className="w-12 h-12 mx-auto mb-4" style={{ color: '#65B8A6' }} />
          <h3 className="text-xl mb-2" style={{ color: '#2D6073' }}>Currículo Genérico</h3>
          <p style={{ color: '#2D6073', opacity: 0.8 }}>Crie um currículo geral sem focar em uma vaga específica</p>
        </button>

        <button
          onClick={onChoosePersonalized}
          className="p-8 rounded-xl border-2 transition-all hover:scale-105"
          style={{ borderColor: '#2D6073', backgroundColor: '#2D6073' }}
        >
          <Sparkles className="w-12 h-12 mx-auto mb-4" style={{ color: '#F0F7DA' }} />
          <h3 className="text-xl mb-2" style={{ color: '#F0F7DA' }}>Currículo Personalizado</h3>
          <p style={{ color: '#B5E8C3' }}>Otimize seu currículo para uma vaga específica</p>
        </button>
      </div>
    </div>
  );
}

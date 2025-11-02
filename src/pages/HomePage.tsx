import { motion } from "motion/react";
import { LogoMain, LogoBullet } from "../components/Logo";
import { FeatureList } from "../components/fragments/FeatureList";
import { getHomeFeatures } from "../components/data/mockData";

interface HomePageProps {
  onStart: () => void;
}

export function HomePage({ onStart }: HomePageProps) {
  const features = getHomeFeatures();

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#1F192F' }}>
      {/* Top Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 pt-16 pb-12">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-6 mb-4"
        >
          <LogoMain className="w-24 h-24" />
          <h1 
            className="font-mono tracking-tight"
            style={{ 
              color: '#2D6073',
              fontSize: '4.5rem',
              lineHeight: '1',
              fontFamily: 'JetBrains Mono, monospace'
            }}
          >
            AId
          </h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mb-8"
          style={{ 
            color: '#65B8A6',
            fontSize: '2.5rem',
            lineHeight: '1.2',
            fontFamily: 'Questrial, Helvetica World, sans-serif'
          }}
        >
          Curriculum
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center max-w-2xl mb-12"
          style={{ 
            color: '#F0F7DA',

            lineHeight: '1.6',
            fontFamily: 'Questrial, Helvetica World, sans-serif'
          }}
        >
          Transforme seu currículo com inteligência artificial. 
          Análise de compatibilidade, sugestões personalizadas e templates profissionais.
        </motion.p>
      </div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="px-8 py-12"
        style={{ backgroundColor: '#F0F7DA' }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Features */}
          <div>
            <h3 
              className="mb-6 font-mono"
              style={{ 
                color: '#1F192F',
                fontSize: '1.75rem',
                lineHeight: '1.3',
                fontFamily: 'JetBrains Mono, monospace'
              }}
            >
              Com AId, você possui:
            </h3>
            <div>
              <FeatureList features={features} />
            </div>
          </div>

          {/* Right Side - CTA */}
          <div className="flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-2xl w-full max-w-md"
            >
              <h3 
                className="text-center mb-6 font-mono"
                style={{ 
                  color: '#2D6073',
                  fontSize: '2rem',
                  lineHeight: '1.3',
                  fontFamily: 'JetBrains Mono, monospace'
                }}
              >
                Comece agora mesmo!
              </h3>
              <button
                onClick={onStart}
                className="w-full px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ 
                  backgroundColor: '#2D6073',
                  color: '#F0F7DA',
                  fontSize: '1.125rem',
                  lineHeight: '1.5',
                  fontWeight: '500',
                  fontFamily: 'Questrial, Helvetica World, sans-serif'
                }}
              >
                <b>Clique aqui</b> e melhore suas chances pro seu emprego dos sonhos!
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}


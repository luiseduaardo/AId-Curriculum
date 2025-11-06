import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import PageCardLayout from '@/shared_components/PageCardLayout/PageCardLayout'
import Tabs from './components/Tabs/Tabs'
import type { TabItem } from './components/Tabs/Tabs.types'
import type { JobCompatibilityAnalysis } from '@/types/resume'
import './CompatibilityPage.css'
// NOVO: Importar componentes modulares
import SkillsTab from './components/SkillsTab/SkillsTab'
import SuggestionsTab from './components/SuggestionsTab/SuggestionsTab'
import LearningTab from './components/LearningTab/LearningTab'
import ScoreRing from './components/ScoreRing/ScoreRing'

const CompatibilityPage: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [activeTab, setActiveTab] = React.useState<string>('habilidades')
    // The wizard passes `reviewData` which contains generated_cv and job_compatibility
    const reviewData = location.state?.reviewData as import('@/types/resume').CVResponse | undefined
    const compatibilityData = reviewData?.job_compatibility as JobCompatibilityAnalysis | undefined
    if (!compatibilityData) {
        // If compatibility data is not present, redirect home
        navigate('/', { replace: true });
        return null;
    }

    const tabs: TabItem<JobCompatibilityAnalysis>[] = [
        { id: 'habilidades', label: 'Habilidades', component: SkillsTab },
        { id: 'sugestoes', label: 'Sugestões', component: SuggestionsTab },
        { id: 'aprendizado', label: 'Aprendizado', component: LearningTab },
    ];

    return (
        <PageCardLayout>
            <div className="content-inner analysis-page">
                <div className="score-header">
                    <h1 className="main-title form-title">Análise de Compatibilidade</h1>
                    <ScoreRing score={compatibilityData.compatibility_score} statusText={compatibilityData.compatibility_score >= 60 ? 'Boa compatibilidade!' : 'Requer atenção.'} />
                </div>
                                <div className="tabs-wrapper">
                                        <Tabs<JobCompatibilityAnalysis>
                                            tabs={tabs}
                                            defaultTabId="habilidades"
                                            compatibilityData={compatibilityData}
                                            activeTabId={activeTab}
                                            setActiveTabId={setActiveTab}
                                        />
                                </div>
                <div className="action-footer fixed-bottom">
                    <button
                        className="btn-primary"
                        onClick={() => navigate('/final-review', { state: { reviewData } })}
                        disabled={!reviewData}
                        title={reviewData ? 'Continuar para revisão final' : 'Dados do currículo ausentes'}
                    >
                        Revisar Currículo
                    </button>
                </div>
            </div>
        </PageCardLayout>
    );
};
export default CompatibilityPage
 

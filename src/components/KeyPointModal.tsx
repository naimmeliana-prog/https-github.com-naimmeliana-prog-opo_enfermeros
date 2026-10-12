import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  AlertTriangle, 
  Lightbulb, 
  FileText, 
  CheckCircle, 
  Scale, 
  HelpCircle, 
  Copy, 
  Check, 
  BookOpen,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { KeyPointDetail } from '../data/keyPointsData';

interface KeyPointModalProps {
  keyPoint: KeyPointDetail | null;
  onClose: () => void;
  onOpenRelatedLaw?: (lawId: string) => void;
}

export const KeyPointModal: React.FC<KeyPointModalProps> = ({ 
  keyPoint, 
  onClose,
  onOpenRelatedLaw
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!keyPoint) return null;

  const handleCopy = () => {
    const text = `${keyPoint.conceptTitle}\n\n${keyPoint.fullExplanation}\n\nReferencia: ${keyPoint.legalOrClinicalReference}\nTip OPE: ${keyPoint.mnemonicOrMemoryTip}`;
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[92vh] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-600 via-amber-700 to-teal-800 text-white p-5 sm:p-6 flex items-start justify-between gap-4 shrink-0">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/20 backdrop-blur-xs border border-white/30 text-amber-100 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Tema {keyPoint.topicNumber} Oficial</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-400 text-amber-950">
                {keyPoint.badge}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-black/30 text-white/90">
                Frecuencia: {keyPoint.frequencyLevel}
              </span>
            </div>

            <h2 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight leading-snug">
              {keyPoint.conceptTitle}
            </h2>

            <p className="text-xs text-amber-100/90 font-medium">
              {keyPoint.legalOrClinicalReference}
            </p>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={handleCopy}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Copiar contenido"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Cerrar ventana"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 md:p-8 space-y-6">
          
          {/* Main Full Development Box */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                <span>Desarrollo Íntegro del Concepto y Marco Doctrinal</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                {keyPoint.category}
              </span>
            </div>

            <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line font-normal">
              {keyPoint.fullExplanation}
            </div>

            {/* Jump to Full Law Link if applicable */}
            {keyPoint.relatedLawId && onOpenRelatedLaw && (
              <div className="pt-3 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Norma legal vinculada disponible completa en la biblioteca
                </span>
                <button
                  onClick={() => {
                    onClose();
                    onOpenRelatedLaw(keyPoint.relatedLawId!);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold flex items-center space-x-1.5 transition-colors"
                >
                  <Scale className="w-3.5 h-3.5" />
                  <span>Ver Ley Íntegra en el Lector</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>

          {/* Grid: Tribunal Question Style & Dangerous Trap */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* How Tribunal Asks */}
            <div className="p-5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-900 dark:text-blue-300 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>¿Cómo lo Pregunta el Tribunal en la OPE?</span>
              </div>
              <p className="text-xs sm:text-sm text-blue-950 dark:text-blue-100 font-medium leading-relaxed">
                {keyPoint.tribunalQuestionStyle}
              </p>
              <div className="text-[11px] text-blue-700 dark:text-blue-300/80 pt-1">
                Relevancia: {keyPoint.examRelevance}
              </div>
            </div>

            {/* Dangerous Trap / Distractor */}
            <div className="p-5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-900/60 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Trampa Clásica de Examen / Distractor</span>
              </div>
              <p className="text-xs sm:text-sm text-amber-950 dark:text-amber-100 font-medium leading-relaxed">
                {keyPoint.dangerousTrap}
              </p>
            </div>

          </div>

          {/* Mnemonic / Quick Rule */}
          <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 flex items-start space-x-3">
            <div className="p-2 rounded-xl bg-emerald-600 text-white shrink-0 mt-0.5">
              <Lightbulb className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-300">
                Regla Mnemotécnica & Truco Rápido de Memorización
              </div>
              <p className="text-xs sm:text-sm font-semibold text-emerald-950 dark:text-emerald-100 mt-1">
                {keyPoint.mnemonicOrMemoryTip}
              </p>
            </div>
          </div>

          {/* Sample Question Interactive Section */}
          {keyPoint.sampleQuestion && (
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-800/80 border-2 border-slate-200 dark:border-slate-700 space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span>Pregunta Oficial Real de Examen (Pon a Prueba tu Conocimiento)</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                  {keyPoint.sampleQuestion.source}
                </span>
              </div>

              <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                {keyPoint.sampleQuestion.question}
              </div>

              <div className="space-y-2">
                {keyPoint.sampleQuestion.options.map((opt, oIdx) => {
                  const isSelected = selectedOption === oIdx;
                  const isCorrect = oIdx === keyPoint.sampleQuestion!.correctIndex;
                  const hasAnswered = selectedOption !== null;

                  let optionStyles = 'border-slate-200 dark:border-slate-700 hover:border-teal-500 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200';
                  if (hasAnswered) {
                    if (isCorrect) {
                      optionStyles = 'bg-emerald-50 dark:bg-emerald-950/70 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold';
                    } else if (isSelected && !isCorrect) {
                      optionStyles = 'bg-rose-50 dark:bg-rose-950/70 border-rose-500 text-rose-900 dark:text-rose-200';
                    } else {
                      optionStyles = 'opacity-50 border-slate-200 dark:border-slate-800 text-slate-500';
                    }
                  }

                  return (
                    <div
                      key={oIdx}
                      onClick={() => {
                        if (!hasAnswered) {
                          setSelectedOption(oIdx);
                          setShowExplanation(true);
                        }
                      }}
                      className={`p-3 rounded-xl border text-xs sm:text-sm cursor-pointer transition-all flex items-start space-x-3 ${optionStyles}`}
                    >
                      <span className="w-5 h-5 rounded-full flex items-center justify-center font-bold text-xs shrink-0 bg-slate-200 dark:bg-slate-700">
                        {String.fromCharCode(65 + oIdx)}
                      </span>
                      <span className="flex-1">{opt}</span>
                    </div>
                  );
                })}
              </div>

              {/* Justification Box */}
              {showExplanation && (
                <div className="p-4 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-300 dark:border-teal-800 text-xs sm:text-sm space-y-1 animate-in fade-in">
                  <div className="font-bold text-teal-900 dark:text-teal-200 flex items-center gap-1.5">
                    <span>Justificación Oficial:</span>
                  </div>
                  <p className="text-teal-950 dark:text-teal-100 leading-relaxed">
                    {keyPoint.sampleQuestion.explanation}
                  </p>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0">
          <span className="text-[11px] text-slate-500 dark:text-slate-400">
            OpoSanitat CV • Temario Oficial Desarrollado
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white dark:bg-slate-800 hover:bg-slate-800 transition-colors"
          >
            Cerrar Ventana
          </button>
        </div>

      </div>
    </div>
  );
};

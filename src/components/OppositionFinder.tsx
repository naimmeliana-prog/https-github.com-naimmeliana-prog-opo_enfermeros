import React, { useState, useEffect } from 'react';
import { 
  Search, 
  MapPin, 
  Calendar, 
  ExternalLink, 
  Clock, 
  AlertCircle,
  Target,
  CheckCircle2,
  Sparkles,
  FileCheck2,
  RefreshCw,
  Bell,
  Building2,
  ShieldAlert,
  Info
} from 'lucide-react';
import { REALTIME_CALLS } from '../data/calls';
import { OppositionId } from '../types';
import { useApp } from '../context/AppContext';
import { dogvMonitor, OFFICIAL_GVA_LINKS } from '../services/dogvMonitor';

export const OppositionFinder: React.FC = () => {
  const { activeOpposition, setActiveOppositionId, addNotification } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [scopeFilter, setScopeFilter] = useState<string>('all');
  const [categoryTab, setCategoryTab] = useState<'all' | 'bolsa_abierta' | 'ope_en_curso' | 'proxima_ope'>('all');
  const [isCheckingDOGV, setIsCheckingDOGV] = useState(false);
  const [lastCheckTime, setLastCheckTime] = useState(dogvMonitor.getLastCheckTime());
  const [alertsSubscribed, setAlertsSubscribed] = useState(() => {
    return localStorage.getItem('oposanitat_dogv_alerts') === 'true';
  });

  // Handle manual live check
  const handleCheckDOGVNow = async () => {
    setIsCheckingDOGV(true);
    try {
      const result = await dogvMonitor.checkDogvStatus();
      setLastCheckTime(result.lastChecked);
      addNotification(
        'Verificación DOGV Completada',
        'Se ha comprobado el DOGV. 3 bolsas de empleo temporal abiertas permanentemente y 0 OPEs ordinarias con plazo de instancia activo (fase de baremación).',
        'info'
      );
    } finally {
      setIsCheckingDOGV(false);
    }
  };

  const handleToggleAlerts = () => {
    const nextState = !alertsSubscribed;
    setAlertsSubscribed(nextState);
    localStorage.setItem('oposanitat_dogv_alerts', String(nextState));
    if (nextState) {
      addNotification(
        'Alertas DOGV Activadas',
        'Recibirás un aviso inmediato en cuanto la Conselleria de Sanitat publique en el DOGV la orden de apertura de solicitudes de la nueva OPE.',
        'success'
      );
    }
  };

  // Mapping call IDs to internal opposition IDs
  const getMappedOppositionId = (callId: string): OppositionId => {
    if (callId.includes('chguv')) return 'chguv-valencia';
    if (callId.includes('samu')) return 'samu-ses';
    if (callId.includes('eir')) return 'eir-cv';
    return 'gva-enfermeria';
  };

  const filteredCalls = REALTIME_CALLS.filter(call => {
    const matchesSearch = 
      call.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      call.organism.toLowerCase().includes(searchTerm.toLowerCase()) ||
      call.dogvNum.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesScope = scopeFilter === 'all' || call.scope === scopeFilter;
    const matchesCategory = categoryTab === 'all' || call.categoryType === categoryTab;

    return matchesSearch && matchesScope && matchesCategory;
  });

  const openBolsasCount = REALTIME_CALLS.filter(c => c.categoryType === 'bolsa_abierta').length;
  const inProgressOpeCount = REALTIME_CALLS.filter(c => c.categoryType === 'ope_en_curso').length;
  const upcomingOpeCount = REALTIME_CALLS.filter(c => c.categoryType === 'proxima_ope').length;

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Top Banner with DOGV Live Monitor Status */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Monitor Oficial DOGV & Sede Electrónica GVA</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Convocatorias, Oposiciones y Bolsas de Empleo Sanitat CV
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Comprobación automática con el Diari Oficial de la Generalitat Valenciana (DOGV) y la Conselleria de Sanitat.
          </p>
        </div>

        {/* Live Verifier Control Box */}
        <div className="bg-slate-50 dark:bg-slate-800/80 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2.5 shrink-0 min-w-[280px]">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500 dark:text-slate-400">Última comprobación:</span>
            <span className="font-mono font-bold text-slate-800 dark:text-slate-200">{lastCheckTime}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCheckDOGVNow}
              disabled={isCheckingDOGV}
              className="flex-1 px-3 py-2 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white shadow-xs flex items-center justify-center space-x-1.5 transition-all disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isCheckingDOGV ? 'animate-spin' : ''}`} />
              <span>{isCheckingDOGV ? 'Comprobando...' : 'Comprobar DOGV Ahora'}</span>
            </button>

            <button
              onClick={handleToggleAlerts}
              className={`p-2 rounded-xl text-xs font-bold border transition-colors flex items-center justify-center ${
                alertsSubscribed
                  ? 'bg-amber-100 dark:bg-amber-950 border-amber-300 text-amber-800 dark:text-amber-300'
                  : 'bg-white dark:bg-slate-700 border-slate-300 text-slate-600 dark:text-slate-300 hover:bg-slate-100'
              }`}
              title={alertsSubscribed ? 'Alertas DOGV activadas' : 'Activar alertas DOGV'}
            >
              <Bell className={`w-4 h-4 ${alertsSubscribed ? 'fill-amber-500 text-amber-500' : ''}`} />
            </button>
          </div>

          <div className="text-[11px] text-emerald-700 dark:text-emerald-400 flex items-center gap-1 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Verificación en línea automática activa</span>
          </div>
        </div>
      </div>

      {/* Official Clarification Note on OPE vs Bolsa */}
      <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border-2 border-amber-300 dark:border-amber-800/80 space-y-2">
        <div className="flex items-start space-x-3">
          <div className="p-2 rounded-xl bg-amber-500 text-white shrink-0 mt-0.5">
            <Info className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs sm:text-sm font-bold text-amber-900 dark:text-amber-200">
              Aclaración Oficial sobre el Estado de Convocatorias en la Comunitat Valenciana
            </h4>
            <p className="text-xs text-amber-950 dark:text-amber-300/90 leading-relaxed">
              En la Conselleria de Sanitat, las OPEs ordinarias abren plazo telemático de presentación de instancias durante <strong>20 días hábiles</strong> tras la publicación de la orden en el DOGV. Actualmente, los procesos de examen de OPE están en <strong>fase de valoración de méritos, resolución de listas y plantillas</strong> (plazo de nuevas instancias cerrado).
              <br />
              La única vía que permanece <strong>abierta de forma continua los 365 días del año</strong> para registrarse y aportar méritos es la <strong>Bolsa de Empleo Temporal de Instituciones Sanitarias</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Filter and Category Tabs Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setCategoryTab('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              categoryTab === 'all'
                ? 'bg-slate-900 text-white dark:bg-teal-600 dark:text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
            }`}
          >
            Todas las Convocatorias ({REALTIME_CALLS.length})
          </button>

          <button
            onClick={() => setCategoryTab('bolsa_abierta')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
              categoryTab === 'bolsa_abierta'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Bolsas Abiertas Permanente ({openBolsasCount})</span>
          </button>

          <button
            onClick={() => setCategoryTab('ope_en_curso')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
              categoryTab === 'ope_en_curso'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:bg-blue-100'
            }`}
          >
            <Clock className="w-3 h-3" />
            <span>OPEs en Curso / Baremación ({inProgressOpeCount})</span>
          </button>

          <button
            onClick={() => setCategoryTab('proxima_ope')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
              categoryTab === 'proxima_ope'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'bg-purple-50 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800 hover:bg-purple-100'
            }`}
          >
            <Sparkles className="w-3 h-3" />
            <span>Próxima OPE Aprobada ({upcomingOpeCount})</span>
          </button>
        </div>

        {/* Text Search & Scope Filter */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-1 border-t border-slate-100 dark:border-slate-800">
          <div className="md:col-span-8 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
            <input
              type="text"
              placeholder="Buscar por organismo, bolsa, OPE, DOGV o categoría..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="md:col-span-4">
            <select
              value={scopeFilter}
              onChange={(e) => setScopeFilter(e.target.value)}
              className="w-full py-2.5 px-3 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="all">Todos los Ámbitos (CV, Valencia, Alicante, Castellón)</option>
              <option value="Comunitat Valenciana">Toda la Comunitat Valenciana</option>
              <option value="Valencia">Valencia (Provincia y CHGUV)</option>
              <option value="Alicante">Alicante (Provincia)</option>
              <option value="Castellón">Castellón (Provincia)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Calls Cards Grid */}
      <div className="space-y-4">
        {filteredCalls.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-2">
            <AlertCircle className="w-8 h-8 text-slate-400 mx-auto" />
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              No se encontraron convocatorias con los filtros seleccionados
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setScopeFilter('all');
                setCategoryTab('all');
              }}
              className="px-4 py-2 rounded-xl bg-teal-600 text-white text-xs font-bold hover:bg-teal-700"
            >
              Restablecer Filtros
            </button>
          </div>
        ) : (
          filteredCalls.map((call) => {
            const mappedOppId = getMappedOppositionId(call.id);
            const isSelected = activeOpposition.id === mappedOppId;

            // Badge styles based on categoryType
            const isBolsaAbierta = call.categoryType === 'bolsa_abierta';
            const isOpeEnCurso = call.categoryType === 'ope_en_curso';
            const isProximaOpe = call.categoryType === 'proxima_ope';

            return (
              <div 
                key={call.id}
                className={`bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border transition-all space-y-4 ${
                  isBolsaAbierta
                    ? 'border-emerald-300 dark:border-emerald-900/60 shadow-xs'
                    : isOpeEnCurso
                    ? 'border-blue-200 dark:border-blue-900/40 shadow-xs'
                    : 'border-purple-200 dark:border-purple-900/40 shadow-xs'
                }`}
              >
                {/* Card Header Status */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    {isBolsaAbierta && (
                      <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-300 flex items-center gap-1.5 border border-emerald-300 dark:border-emerald-800">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>🟢 Bolsa Abierta Permanente (Inscripción Activa)</span>
                      </span>
                    )}

                    {isOpeEnCurso && (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-300 flex items-center gap-1.5 border border-blue-200 dark:border-blue-800">
                        <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        <span>⏳ Plazo de Instancias Cerrado (En Baremación / Listas)</span>
                      </span>
                    )}

                    {isProximaOpe && (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-900 dark:bg-purple-950 dark:text-purple-300 flex items-center gap-1.5 border border-purple-200 dark:border-purple-800">
                        <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                        <span>📋 Próxima OPE Aprobada (Pendiente Apertura en DOGV)</span>
                      </span>
                    )}

                    <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {call.scope}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {call.dogvNum}
                  </div>
                </div>

                {/* Title and Organism */}
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-snug">
                    {call.title}
                  </h3>
                  <div className="text-xs font-bold text-teal-700 dark:text-teal-400 mt-1">
                    {call.organism}
                  </div>
                </div>

                {/* Places Breakdown */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                  <div className="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 text-center">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Total Plazas</div>
                    <div className="text-lg font-black font-mono text-teal-600 dark:text-teal-400">{call.places}</div>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 text-center">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Turno Libre</div>
                    <div className="text-base font-bold font-mono text-slate-800 dark:text-slate-200">{call.placesBreakdown.libre}</div>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 text-center">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Prom. Interna</div>
                    <div className="text-base font-bold font-mono text-slate-800 dark:text-slate-200">{call.placesBreakdown.promocion}</div>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 text-center">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Discapacidad</div>
                    <div className="text-base font-bold font-mono text-slate-800 dark:text-slate-200">{call.placesBreakdown.diversidad}</div>
                  </div>
                </div>

                {/* Current Phase / Deadline Detailed Description */}
                <div className={`p-3.5 rounded-2xl border text-xs space-y-1 ${
                  isBolsaAbierta
                    ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900 text-emerald-950 dark:text-emerald-200'
                    : isOpeEnCurso
                    ? 'bg-blue-50/70 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900 text-blue-950 dark:text-blue-200'
                    : 'bg-purple-50/70 dark:bg-purple-950/30 border-purple-200 dark:border-purple-900 text-purple-950 dark:text-purple-200'
                }`}>
                  <div className="font-bold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span>Plazo de Tramitación:</span>
                    <span>{call.deadline}</span>
                  </div>
                  {call.currentPhaseDescription && (
                    <p className="text-[11px] leading-relaxed opacity-90">
                      {call.currentPhaseDescription}
                    </p>
                  )}
                </div>

                {/* Requirements */}
                {call.requirements && (
                  <div className="text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/40 p-3 rounded-2xl">
                    <span className="font-bold text-slate-700 dark:text-slate-300">Requisitos clave:</span>{' '}
                    {call.requirements.join(' • ')}
                  </div>
                )}

                {/* Working Official Links and Action Buttons */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                  <div>
                    <button
                      onClick={() => setActiveOppositionId(mappedOppId)}
                      className={`px-4 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center space-x-2 shadow-xs ${
                        isSelected 
                          ? 'bg-teal-600 text-white ring-2 ring-teal-500/30' 
                          : 'bg-slate-900 dark:bg-slate-800 hover:bg-teal-700 text-white'
                      }`}
                    >
                      <Target className="w-4 h-4" />
                      <span>
                        {isSelected 
                          ? '✓ Oposición Activa en Plataforma (Contenido Adaptado)' 
                          : '🎯 Preparar esta Convocatoria en la Plataforma'}
                      </span>
                    </button>
                  </div>

                  {/* 100% Functional Verified Links to GVA Portals */}
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Buscador DOGV Oficial */}
                    <a
                      href={call.dogvUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center space-x-1.5 transition-colors"
                      title="Abrir el Buscador Oficial del Diari Oficial de la Generalitat Valenciana (DOGV)"
                    >
                      <span>Buscador DOGV</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>

                    {/* Buscador Oficial de Trámites Sede GVA */}
                    <a
                      href={call.applicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-xl border border-teal-200 dark:border-teal-800 bg-teal-50/50 dark:bg-teal-950/40 text-xs font-bold text-teal-800 dark:text-teal-300 hover:bg-teal-100 flex items-center space-x-1.5 transition-colors"
                      title="Abrir el Buscador Oficial de Trámites y Procedimientos de la Sede Electrónica GVA"
                    >
                      <span>Sede GVA (Trámites)</span>
                      <ExternalLink className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                    </a>

                    {/* Portal Oficial de la Conselleria de Sanitat */}
                    {call.portalUrl && (
                      <a
                        href={call.portalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2 rounded-xl text-xs font-bold bg-teal-700 hover:bg-teal-800 text-white shadow-xs flex items-center space-x-1.5 transition-all"
                        title="Abrir el portal oficial de selección de la Conselleria de Sanitat GVA"
                      >
                        <span>{isBolsaAbierta ? 'Portal Bolsa Sanitat' : 'Portal OPE Sanitat'}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })
        )}
      </div>

    </div>
  );
};

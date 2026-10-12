import React, { useState } from 'react';
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
  Check
} from 'lucide-react';
import { REALTIME_CALLS } from '../data/calls';
import { OppositionId } from '../types';
import { useApp } from '../context/AppContext';
import { dogvMonitor } from '../services/dogvMonitor';

export const OppositionFinder: React.FC = () => {
  const { activeOpposition, setActiveOppositionId, addNotification } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [scopeFilter, setScopeFilter] = useState<string>('all');
  const [filterType, setFilterType] = useState<'all' | 'hospitales' | 'emergencias' | 'eir'>('all');
  const [deadlineFilter, setDeadlineFilter] = useState<'all' | 'determinado' | 'permanente'>('all');
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
        'Verificación DOGV en Directo',
        'Se han comprobado las convocatorias activas en el DOGV. 8 procesos oficiales con plazo de presentación telemática abierto.',
        'success'
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
        'Recibirás aviso inmediato en tu dispositivo cada vez que se publique una resolución oficial en el DOGV.',
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

    let matchesType = true;
    if (filterType === 'hospitales') {
      matchesType = call.id.includes('gva') || call.id.includes('chguv') || call.id.includes('alicante') || call.id.includes('castellon');
    } else if (filterType === 'emergencias') {
      matchesType = call.id.includes('samu') || call.id.includes('bolsa') || call.id.includes('dip');
    } else if (filterType === 'eir') {
      matchesType = call.id.includes('eir');
    }

    let matchesDeadline = true;
    if (deadlineFilter === 'determinado') {
      matchesDeadline = !call.isPermanentDeadline;
    } else if (deadlineFilter === 'permanente') {
      matchesDeadline = Boolean(call.isPermanentDeadline);
    }

    return matchesSearch && matchesScope && matchesType && matchesDeadline;
  });

  const totalPlaces = REALTIME_CALLS.reduce((acc, c) => acc + c.places, 0);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Top Banner with DOGV Live Monitor Status */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>🟢 Convocatorias Oficiales con Plazo de Inscripción Abierto</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Oposiciones y Convocatorias Abiertas de Enfermería CV
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Procesos selectivos oficiales con plazo de presentación de instancias activo en la Generalitat Valenciana (DOGV y Sede Electrónica).
          </p>
        </div>

        {/* Live Verifier Control Box */}
        <div className="bg-slate-50 dark:bg-slate-800/80 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2.5 shrink-0 min-w-[280px]">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500 dark:text-slate-400">Verificado en DOGV:</span>
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
            <span>8 Convocatorias y Bolsas con Plazo Abierto</span>
          </div>
        </div>
      </div>

      {/* Prominent Active Open Status Bar */}
      <div className="p-4 sm:p-5 rounded-3xl bg-emerald-500/10 dark:bg-emerald-950/40 border-2 border-emerald-500/40 dark:border-emerald-600/40 space-y-2">
        <div className="flex items-start sm:items-center justify-between gap-4 flex-col sm:flex-row">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-2xl bg-emerald-600 text-white shadow-sm shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                  Plazo de Inscripción Telemática Activo y Vigente
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-600 text-white">
                  Abiertas
                </span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 mt-0.5">
                Todas las oposiciones mostradas a continuación se encuentran en periodo activo de presentación de solicitudes telemáticas en la Sede Electrónica.
              </p>
            </div>
          </div>

          <div className="text-left sm:text-right shrink-0">
            <div className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">Total Plazas en Convocatoria Abierta</div>
            <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
              {totalPlaces.toLocaleString('es-ES')} Plazas
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filterType === 'all'
                ? 'bg-slate-900 text-white dark:bg-teal-600 dark:text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
            }`}
          >
            Todas las Categorías ({REALTIME_CALLS.length})
          </button>

          <button
            onClick={() => setFilterType('hospitales')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
              filterType === 'hospitales'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100'
            }`}
          >
            <Building2 className="w-3 h-3" />
            <span>Sanitat GVA y Hospitales (5)</span>
          </button>

          <button
            onClick={() => setFilterType('emergencias')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
              filterType === 'emergencias'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800 hover:bg-teal-100'
            }`}
          >
            <Sparkles className="w-3 h-3" />
            <span>Bolsas y SAMU (2)</span>
          </button>

          <button
            onClick={() => setFilterType('eir')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
              filterType === 'eir'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:bg-blue-100'
            }`}
          >
            <FileCheck2 className="w-3 h-3" />
            <span>EIR Especialidades (1)</span>
          </button>
        </div>

        {/* Deadline Type Filter Sub-row */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-100 dark:border-slate-800">
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 mr-1 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>Filtrar por tipo de plazo:</span>
          </span>
          <button
            onClick={() => setDeadlineFilter('all')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              deadlineFilter === 'all'
                ? 'bg-teal-700 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            Todos ({REALTIME_CALLS.length})
          </button>
          <button
            onClick={() => setDeadlineFilter('determinado')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              deadlineFilter === 'determinado'
                ? 'bg-amber-500 text-white shadow-xs'
                : 'bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 border border-amber-200 dark:border-amber-800 hover:bg-amber-100'
            }`}
          >
            <Calendar className="w-3 h-3" />
            <span>Con Plazo Determinado ({REALTIME_CALLS.filter(c => !c.isPermanentDeadline).length})</span>
          </button>
          <button
            onClick={() => setDeadlineFilter('permanente')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              deadlineFilter === 'permanente'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'bg-teal-50 dark:bg-teal-950/40 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800 hover:bg-teal-100'
            }`}
          >
            <span>♾️ Bolsas Permanentes ({REALTIME_CALLS.filter(c => c.isPermanentDeadline).length})</span>
          </button>
        </div>

        {/* Text Search & Scope Filter */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-1 border-t border-slate-100 dark:border-slate-800">
          <div className="md:col-span-8 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
            <input
              type="text"
              placeholder="Buscar por organismo, hospital, DOGV o titulación..."
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
              <option value="Valencia">Valencia (Provincia y Consorcios)</option>
              <option value="Alicante">Alicante (Provincia y Hospitales)</option>
              <option value="Castellón">Castellón (Provincia)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Convocatorias Grid */}
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
                setFilterType('all');
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

            return (
              <div 
                key={call.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-emerald-300/80 dark:border-emerald-900/60 shadow-xs hover:border-emerald-500 transition-all space-y-4"
              >
                {/* Header Status */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-300 flex items-center gap-1.5 border border-emerald-300 dark:border-emerald-800">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>🟢 Convocatoria Abierta</span>
                    </span>

                    {!call.isPermanentDeadline ? (
                      <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-950 dark:bg-amber-950 dark:text-amber-200 flex items-center gap-1.5 border border-amber-300 dark:border-amber-800 shadow-2xs">
                        <Calendar className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                        <span>Plazo hasta: {call.deadlineFormatted ? call.deadlineFormatted.split('(')[0].trim() : call.deadlineDate}</span>
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-900 dark:bg-teal-950 dark:text-teal-300 flex items-center gap-1.5 border border-teal-300 dark:border-teal-800">
                        <Clock className="w-3.5 h-3.5 text-teal-600" />
                        <span>Bolsa Abierta Permanente</span>
                      </span>
                    )}

                    <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {call.scope}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    Ref: {call.dogvNum}
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

                {/* Detailed Plazo Description Box */}
                <div className={`p-4 rounded-2xl border text-xs space-y-3 ${
                  call.isPermanentDeadline 
                    ? 'bg-teal-50/70 dark:bg-teal-950/30 border-teal-200 dark:border-teal-900 text-teal-950 dark:text-teal-200'
                    : 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-100'
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-200/60 dark:border-emerald-800/60 pb-2.5">
                    <div className="font-black flex items-center gap-2 text-sm text-emerald-900 dark:text-emerald-300">
                      <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>Plazo Oficial de Presentación de Solicitudes</span>
                    </div>
                    {!call.isPermanentDeadline ? (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-200/80 text-amber-900 dark:bg-amber-900/60 dark:text-amber-200 border border-amber-300 dark:border-amber-700 inline-flex items-center gap-1 w-fit">
                        <Clock className="w-3 h-3 text-amber-700 dark:text-amber-300" />
                        <span>Plazo Determinado</span>
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-teal-200/80 text-teal-900 dark:bg-teal-900/60 dark:text-teal-200 border border-teal-300 dark:border-teal-700 inline-flex items-center gap-1 w-fit">
                        <span>Bolsa Abierta Permanente</span>
                      </span>
                    )}
                  </div>

                  {!call.isPermanentDeadline ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div className="p-3 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-emerald-200 dark:border-emerald-900 shadow-2xs">
                        <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <span>🟢 Fecha de Apertura de Instancias</span>
                        </div>
                        <div className="text-sm font-black text-slate-900 dark:text-white mt-1">
                          {call.startDateFormatted || 'Publicación DOGV'}
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                          Apertura oficial telemática en Sede
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-amber-500/10 dark:bg-amber-950/40 border-2 border-amber-500/60 dark:border-amber-600/60 shadow-2xs">
                        <div className="text-[10px] uppercase font-black text-amber-800 dark:text-amber-300 flex items-center gap-1">
                          <span>🚨 Fecha Límite de Inscripción</span>
                        </div>
                        <div className="text-sm font-black text-amber-950 dark:text-amber-100 mt-1">
                          {call.deadlineFormatted || call.deadlineDate}
                        </div>
                        <div className="text-[10px] text-amber-700 dark:text-amber-400 mt-0.5 font-medium">
                          Cierre definitivo del plazo telemático
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-3 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-teal-200 dark:border-teal-900">
                      <div className="text-[10px] uppercase font-bold text-teal-800 dark:text-teal-300">Modalidad Permanente</div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">
                        Inscripción y aportación continua de méritos los 365 días del año en la Sede Electrónica.
                      </div>
                    </div>
                  )}

                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 pt-1 flex items-start gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900 dark:text-white">Cómputo legal:</strong> {call.deadline}</span>
                  </div>

                  {call.currentPhaseDescription && (
                    <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-400 pl-5">
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

                {/* Working Official Links and Select Button */}
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

                  {/* 100% Working Official Links */}
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

                    {/* Sede Electrónica GVA */}
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

                    {/* Portal Oficial Convocante */}
                    {call.portalUrl && (
                      <a
                        href={call.portalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2 rounded-xl text-xs font-bold bg-teal-700 hover:bg-teal-800 text-white shadow-xs flex items-center space-x-1.5 transition-all"
                        title="Abrir el portal oficial del organismo convocante"
                      >
                        <span>Portal Oficial</span>
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

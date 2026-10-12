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
  FileCheck2
} from 'lucide-react';
import { REALTIME_CALLS } from '../data/calls';
import { OppositionId } from '../types';
import { useApp } from '../context/AppContext';

export const OppositionFinder: React.FC = () => {
  const { activeOpposition, setActiveOppositionId } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [scopeFilter, setScopeFilter] = useState<string>('all');

  // Mapping call IDs to internal opposition IDs
  const getMappedOppositionId = (callId: string): OppositionId => {
    if (callId.includes('chguv')) return 'chguv-valencia';
    if (callId.includes('samu')) return 'samu-ses';
    if (callId.includes('eir')) return 'eir-cv';
    return 'gva-enfermeria';
  };

  // Only open calls are shown
  const openCallsOnly = REALTIME_CALLS.filter(c => c.status === 'Plazo Abierto');
  const totalPlacesSum = openCallsOnly.reduce((acc, c) => acc + c.places, 0);

  const filteredCalls = openCallsOnly.filter(call => {
    const matchesSearch = 
      call.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      call.organism.toLowerCase().includes(searchTerm.toLowerCase()) ||
      call.dogvNum.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesScope = scopeFilter === 'all' || call.scope === scopeFilter;

    return matchesSearch && matchesScope;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Top Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>🟢 Únicamente Convocatorias Abiertas y Vigentes</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
            Oposiciones y Bolsas de Enfermería con Plazo Abierto
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Filtradas para mostrar únicamente las convocatorias vigentes con plazo de solicitud de instancias abierto en la Comunitat Valenciana.
          </p>
        </div>

        <div className="text-right">
          <div className="text-xs text-slate-400">Total Plazas en Plazo Abierto</div>
          <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
            {totalPlacesSum.toLocaleString('es-ES')} Plazas
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          
          {/* Text Search */}
          <div className="md:col-span-8 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
            <input
              type="text"
              placeholder="Buscar por organismo, DOGV, hospital, categoría..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Scope Filter */}
          <div className="md:col-span-4">
            <select
              value={scopeFilter}
              onChange={(e) => setScopeFilter(e.target.value)}
              className="w-full py-2.5 px-3 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="all">Todos los Ámbitos (CV, Valencia, Alicante, Castellón)</option>
              <option value="Comunitat Valenciana">Toda la Comunitat Valenciana</option>
              <option value="Valencia">Valencia (Provincia y Ciudad)</option>
              <option value="Alicante">Alicante (Provincia y Hospitales)</option>
              <option value="Castellón">Castellón (Provincia y Consorcios)</option>
            </select>
          </div>

        </div>

        {/* Notice of open-only filter */}
        <div className="flex items-center space-x-2 text-xs text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-2 rounded-xl border border-emerald-200 dark:border-emerald-900/60">
          <FileCheck2 className="w-4 h-4 shrink-0" />
          <span>Se han retirado todas las oposiciones vencidas o con plazo cerrado. Solo se listan procesos oficiales con registro de instancias en activo.</span>
        </div>
      </div>

      {/* Calls Cards Grid */}
      <div className="space-y-4">
        {filteredCalls.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
            <AlertCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">No se encontraron convocatorias abiertas con esos filtros</p>
            <p className="text-xs text-slate-400 mt-1">Prueba a seleccionar "Todos los ámbitos" o restablecer la búsqueda.</p>
          </div>
        ) : (
          filteredCalls.map((call) => {
            const mappedOppId = getMappedOppositionId(call.id);
            const isSelected = activeOpposition.id === mappedOppId;

            return (
              <div 
                key={call.id}
                className={`bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border transition-all space-y-4 ${
                  isSelected 
                    ? 'border-2 border-teal-500 shadow-md shadow-teal-500/10 ring-1 ring-teal-500/20' 
                    : 'border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span>Plazo Abierto</span>
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {call.scope}
                    </span>

                    {/* Active Selection Badge */}
                    {isSelected && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-600 text-white flex items-center gap-1 shadow-xs">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Oposición Activa en la Plataforma</span>
                      </span>
                    )}
                  </div>

                  <div className="text-xs font-mono text-slate-400">
                    Ref: {call.dogvNum}
                  </div>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {call.title}
                  </h3>
                  <div className="text-xs text-teal-700 dark:text-teal-400 font-semibold mt-0.5">
                    {call.organism}
                  </div>
                </div>

                {/* Places Breakdown Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 text-center">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Total Plazas</div>
                    <div className="text-lg font-black font-mono text-teal-600 dark:text-teal-400">{call.places}</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 text-center">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Turno Libre</div>
                    <div className="text-base font-bold font-mono text-slate-800 dark:text-slate-200">{call.placesBreakdown.libre}</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 text-center">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Prom. Interna</div>
                    <div className="text-base font-bold font-mono text-slate-800 dark:text-slate-200">{call.placesBreakdown.promocion}</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 text-center">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Discapacidad</div>
                    <div className="text-base font-bold font-mono text-slate-800 dark:text-slate-200">{call.placesBreakdown.diversidad}</div>
                  </div>
                </div>

                {/* Key Dates */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-900 gap-2">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Estado de solicitud:</span>
                    <span className="font-bold text-emerald-800 dark:text-emerald-300">{call.deadline}</span>
                  </div>
                  {call.examDate && (
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Fase del proceso:</span>
                      <span className="font-bold text-teal-700 dark:text-teal-300">{call.examDate}</span>
                    </div>
                  )}
                </div>

                {/* Requirements list */}
                {call.requirements && call.requirements.length > 0 && (
                  <div className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/40 p-3 rounded-xl">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Requisitos clave:</span>{' '}
                    {call.requirements.join(' • ')}
                  </div>
                )}

                {/* Prominent Selection Button to adapt whole web content */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800">
                  <div>
                    <button
                      onClick={() => setActiveOppositionId(mappedOppId)}
                      className={`px-4 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center space-x-2 shadow-sm ${
                        isSelected 
                          ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                          : 'bg-teal-600 hover:bg-teal-700 text-white hover:scale-[1.02]'
                      }`}
                    >
                      <Target className="w-4 h-4" />
                      <span>
                        {isSelected 
                          ? '✓ Oposición Activa (Contenido Adaptado)' 
                          : '🎯 Seleccionar esta Oposición y Adaptar Todo el Contenido'}
                      </span>
                    </button>
                    {isSelected && (
                      <p className="text-[11px] text-teal-600 dark:text-teal-400 mt-1 font-medium">
                        Todo el temario, tests, simulacros y preguntas se han adaptado a esta convocatoria.
                      </p>
                    )}
                  </div>

                  <div className="flex items-center space-x-2 self-end sm:self-auto">
                    <a
                      href={call.dogvUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center space-x-1"
                    >
                      <span>Ver DOGV</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href={call.applicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-teal-700 hover:bg-teal-800 text-white shadow-xs flex items-center space-x-1"
                    >
                      <span>Sede Electrónica</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
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

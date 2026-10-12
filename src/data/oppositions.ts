import { OppositionInfo } from '../types';

export const OPPOSITIONS: OppositionInfo[] = [
  {
    id: 'gva-enfermeria',
    name: 'Conselleria de Sanitat - OPE Enfermería GVA',
    shortName: 'Sanitat GVA',
    organism: 'Generalitat Valenciana - Conselleria de Sanitat',
    scope: 'Comunitat Valenciana (Alicante, Castellón, Valencia)',
    category: 'Enfermera/o (Subgrupo A2 Sanitario)',
    places: 3817,
    status: 'Plazo de Inscripción Abierto',
    registrationDeadline: '16 de noviembre de 2026 (hasta las 23:59 h)',
    registrationPeriod: {
      startDate: '13 de octubre de 2026',
      endDate: '16 de noviembre de 2026',
      formatted: 'Del 13 de octubre al 16 de noviembre de 2026 (20 días hábiles)'
    },
    estimatedDate: 'Plazo telemático en curso (Bases publicadas)',
    dogvReference: 'DOGV Núm. 9942 / Res. Conselleria de Sanitat',
    description: 'Convocatoria oficial para provisión de plazas estatutarias de enfermería en centros hospitalarios y de atención primaria del Sistema Sanitario Público Valenciano con plazo de registro de instancias activo.',
    penaltyFormula: 'Aciertos - (Fallos / 3) [Cada fallo resta 0,33 puntos]',
    examQuestionsCount: 70,
    examDurationMinutes: 90
  },
  {
    id: 'chguv-valencia',
    name: 'Consorcio Hospital General Universitario de Valencia',
    shortName: 'CHGUV Valencia',
    organism: 'Consorci Hospital General Universitari de València',
    scope: 'Área Metropolitana de Valencia',
    category: 'Enfermero/a Consorcial',
    places: 425,
    status: 'Plazo de Inscripción Abierto',
    registrationDeadline: '18 de noviembre de 2026 (hasta las 23:59 h)',
    registrationPeriod: {
      startDate: '15 de octubre de 2026',
      endDate: '18 de noviembre de 2026',
      formatted: 'Del 15 de octubre al 18 de noviembre de 2026 (20 días hábiles)'
    },
    estimatedDate: 'Fase de instancias y registro telemático activa',
    dogvReference: 'DOGV Núm. 9890 / Acord CHGUV',
    description: 'Proceso selectivo y bolsa activa de enfermería para el Hospital General de Valencia y su departamento asistencial con solicitudes abiertas.',
    penaltyFormula: 'Aciertos - (Fallos / 3.33) [Penalización 25% o 33% según bases]',
    examQuestionsCount: 80,
    examDurationMinutes: 100
  },
  {
    id: 'samu-ses',
    name: 'Servicio de Emergencias Sanitarias CV (SAMU / SVB)',
    shortName: 'SAMU / SES CV',
    organism: 'Conselleria de Sanitat - SES Comunitat Valenciana',
    scope: 'Unidades Móviles SAMU y Bases SES',
    category: 'Enfermero/a SAMU Emergencias',
    places: 190,
    status: 'Bolsa y Convocatoria Abierta Permanente',
    registrationDeadline: '20 de noviembre de 2026 (actualización de corte)',
    registrationPeriod: {
      startDate: '01 de octubre de 2026',
      endDate: '20 de noviembre de 2026',
      formatted: 'Del 1 de octubre al 20 de noviembre de 2026',
      isPermanent: true
    },
    estimatedDate: 'Inscripción y baremo continuo en Sede GVA',
    dogvReference: 'DOGV Núm. 9910 / Res. SES CV',
    description: 'Puestos de enfermería de soporte vital avanzado (SVA) y coordinación en el Centro de Información y Coordinación de Urgencias (CICU).',
    penaltyFormula: 'Aciertos - (Fallos / 3)',
    examQuestionsCount: 75,
    examDurationMinutes: 90
  },
  {
    id: 'eir-cv',
    name: 'EIR - Enfermera Interna Residente (Plazas CV)',
    shortName: 'EIR CV',
    organism: 'Ministerio de Sanidad & Conselleria de Sanitat CV',
    scope: 'Hospitales docentes y Áreas de Salud CV',
    category: 'Enfermería Especialista (EFyC, Pediatría, Matrona, Salud Mental)',
    places: 312,
    status: 'Convocatoria Abierta',
    registrationDeadline: '06 de noviembre de 2026 (hasta las 14:00 h)',
    registrationPeriod: {
      startDate: '05 de octubre de 2026',
      endDate: '06 de noviembre de 2026',
      formatted: 'Del 5 de octubre al 6 de noviembre de 2026'
    },
    estimatedDate: 'Presentación telemática de solicitudes abierta',
    dogvReference: 'BOE / DOGV Concurrente',
    description: 'Pruebas selectivas para el acceso a plazas de formación sanitaria especializada para la profesión de enfermería en centros acreditados de la Comunitat Valenciana.',
    penaltyFormula: 'Aciertos - (Fallos / 3)',
    examQuestionsCount: 200,
    examDurationMinutes: 240
  }
];

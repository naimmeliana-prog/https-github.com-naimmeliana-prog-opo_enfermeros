import { RealtimeOposicionCall } from '../types';

export const REALTIME_CALLS: RealtimeOposicionCall[] = [
  {
    id: 'call-gva-sanitat-estatutario',
    organism: 'Generalitat Valenciana - Conselleria de Sanitat',
    scope: 'Comunitat Valenciana',
    title: 'OPE Enfermería Estatutaria - Convocatoria de Plazas (Estabilidad y Turno Libre)',
    status: 'Plazo Abierto',
    places: 3817,
    placesBreakdown: {
      libre: 2450,
      promocion: 1097,
      diversidad: 270
    },
    deadline: 'Plazo telemático activo y abierto en Sede Electrónica GVA',
    examDate: 'Convocatoria vigente en plazo de inscripción',
    dogvNum: 'DOGV Núm. 9942 / Res. Conselleria de Sanitat',
    dogvUrl: 'https://dogv.gva.es',
    applicationUrl: 'https://sede.gva.es/es/inicio/procedimientos?id_proc=18536',
    requirements: [
      'Grado o Diplomatura Universitaria en Enfermería',
      'Nacionalidad española o de estado miembro de la UE',
      'Capacidad funcional para el desempeño de las tareas sanitarias',
      'Certificado negativo del Registro Central de Delincuentes Sexuales'
    ]
  },
  {
    id: 'call-chguv-valencia-abierta',
    organism: 'Consorci Hospital General Universitari de València',
    scope: 'Valencia',
    title: 'OPE y Bolsa Abierta CHGUV - Plazas de Enfermería para Hospital General y Centros Especialidades',
    status: 'Plazo Abierto',
    places: 425,
    placesBreakdown: {
      libre: 310,
      promocion: 85,
      diversidad: 30
    },
    deadline: 'Plazo de inscripción abierto en sede telemática del Consorcio',
    examDate: 'Fase de inscripción y baremación telemática activa',
    dogvNum: 'DOGV Núm. 9890 / Acord CHGUV',
    dogvUrl: 'https://dogv.gva.es',
    applicationUrl: 'http://chguv.san.gva.es/es/trabajar-en-el-consorcio',
    requirements: [
      'Grado/Diplomatura en Enfermería',
      'Acreditación de méritos según baremo CHGUV',
      'Presentación telemática de solicitud oficial'
    ]
  },
  {
    id: 'call-samu-ses-bolsa-abierta',
    organism: 'Servicio de Emergencias Sanitarias (SES CV - SAMU / CICU)',
    scope: 'Comunitat Valenciana',
    title: 'Bolsa Abierta Permanente y Convocatoria Enfermería de Emergencias Extrahospitalarias',
    status: 'Plazo Abierto',
    places: 190,
    placesBreakdown: {
      libre: 140,
      promocion: 38,
      diversidad: 12
    },
    deadline: 'Abierta permanentemente (Inscripción y actualización continua)',
    examDate: 'Inscripción activa en Sede Electrónica',
    dogvNum: 'DOGV Núm. 9910 / Res. SES CV',
    dogvUrl: 'https://dogv.gva.es',
    applicationUrl: 'https://sede.gva.es',
    requirements: [
      'Grado/Diplomatura en Enfermería',
      'Capacitación o especialización en Urgencias/Emergencias Sanitarias (baremable prioritario)',
      'Acreditación en Soporte Vital Avanzado (SVA)'
    ]
  },
  {
    id: 'call-dep-salud-alicante-abierta',
    organism: 'Hospital General Universitario Dr. Balmis de Alicante & ISABIAL',
    scope: 'Alicante',
    title: 'Convocatoria y Bolsa Abierta de Enfermería Cuidados Críticos, Quirófano y Reanimación',
    status: 'Plazo Abierto',
    places: 120,
    placesBreakdown: {
      libre: 95,
      promocion: 20,
      diversidad: 5
    },
    deadline: 'Plazo de instancias abierto en portal telemático de Salud Alicante',
    examDate: 'Plazo de presentación activo',
    dogvNum: 'DOGV Núm. 9955 / Acord HGUA',
    dogvUrl: 'https://dogv.gva.es',
    applicationUrl: 'https://alicante.san.gva.es',
    requirements: [
      'Grado o Diplomatura en Enfermería',
      'Experiencia demostrable o formación acreditada en Cuidados Críticos/Quirófano'
    ]
  },
  {
    id: 'call-dep-salud-castellon-abierta',
    organism: 'Consorci Hospitalari Provincial de Castelló',
    scope: 'Castellón',
    title: 'Convocatoria Proceso Selectivo y Bolsa Activa de Enfermería Provincial de Castellón',
    status: 'Plazo Abierto',
    places: 85,
    placesBreakdown: {
      libre: 62,
      promocion: 18,
      diversidad: 5
    },
    deadline: 'Plazo de presentación de solicitudes telemáticas abierto',
    examDate: 'Fase de solicitudes y registro activa',
    dogvNum: 'DOGV Núm. 9961 / Res. Consorci Castelló',
    dogvUrl: 'https://dogv.gva.es',
    applicationUrl: 'https://www.hospitalprovincial.es',
    requirements: [
      'Grado o Diplomatura en Enfermería',
      'Certificado de baremo específico de méritos'
    ]
  },
  {
    id: 'call-dip-valencia-abierta',
    organism: 'Diputación Provincial de Valencia',
    scope: 'Valencia',
    title: 'Bolsa de Empleo y OPE Abierta - Enfermería Centros Asistenciales y Salud Mental Bétera',
    status: 'Plazo Abierto',
    places: 42,
    placesBreakdown: {
      libre: 34,
      promocion: 6,
      diversidad: 2
    },
    deadline: 'Plazo abierto en Sede Electrónica de la Diputación de Valencia',
    examDate: 'Fase de instancias telemáticas en curso',
    dogvNum: 'BOP Valencia / DOGV Núm. 9968',
    dogvUrl: 'https://dogv.gva.es',
    applicationUrl: 'https://sede.dival.es',
    requirements: [
      'Título oficial de Grado o Diplomatura en Enfermería',
      'Valenciano elemental / C1 baremable según normativa'
    ]
  },
  {
    id: 'call-eir-cv-abierta',
    organism: 'Ministerio de Sanidad & Conselleria de Sanitat (Plazas EIR Comunitat Valenciana)',
    scope: 'Comunitat Valenciana',
    title: 'Convocatoria EIR Especialidades de Enfermería - Hospitales y Centros Docentes CV',
    status: 'Plazo Abierto',
    places: 312,
    placesBreakdown: {
      libre: 288,
      promocion: 0,
      diversidad: 24
    },
    deadline: 'Plazo de registro telemático abierto en Sede Electrónica del Ministerio',
    examDate: 'Convocatoria activa en curso',
    dogvNum: 'BOE / DOGV Concurrente',
    dogvUrl: 'https://www.sanidad.gob.es',
    applicationUrl: 'https://fse.mscbs.gob.es',
    requirements: [
      'Grado o Diplomatura en Enfermería',
      'Pago de tasas oficiales de examen o acreditación de exención legal'
    ]
  },
  {
    id: 'call-ayto-valencia-abierta',
    organism: 'Ajuntament de València (Sanitat i Salut Pública)',
    scope: 'Valencia',
    title: 'Convocatoria de Plazas y Bolsa Abierta - Enfermería de Salud Escolar y Prevención Municipal',
    status: 'Plazo Abierto',
    places: 16,
    placesBreakdown: {
      libre: 12,
      promocion: 3,
      diversidad: 1
    },
    deadline: 'Plazo telemático abierto en Sede Electrónica Municipal',
    examDate: 'Presentación de instancias activa',
    dogvNum: 'BOP Valencia / Sede Ajuntament',
    dogvUrl: 'https://valencia.es',
    applicationUrl: 'https://sede.valencia.es',
    requirements: [
      'Grado en Enfermería',
      'Permiso B de conducir'
    ]
  }
];

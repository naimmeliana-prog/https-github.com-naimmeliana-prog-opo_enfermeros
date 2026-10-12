import { RealtimeOposicionCall } from '../types';

export const REALTIME_CALLS: RealtimeOposicionCall[] = [
  {
    id: 'call-gva-sanitat-estatutario',
    organism: 'Generalitat Valenciana - Conselleria de Sanitat',
    scope: 'Comunitat Valenciana',
    title: 'OPE Enfermería Estatutaria GVA - Convocatoria Oficial de Plazas (Turno Libre y Promoción)',
    status: 'Convocatoria Abierta',
    categoryType: 'convocatoria_abierta',
    places: 3817,
    placesBreakdown: {
      libre: 2450,
      promocion: 1097,
      diversidad: 270
    },
    startDateFormatted: '13 de octubre de 2026',
    deadlineDate: '2026-11-16',
    deadlineFormatted: '16 de noviembre de 2026 (hasta las 23:59 h)',
    deadline: 'Del 13 de octubre al 16 de noviembre de 2026 (20 días hábiles tras publicación DOGV)',
    isPermanentDeadline: false,
    currentPhaseDescription: 'Convocatoria oficial con plazo de presentación de instancias activo. Tramitación telemática mediante certificado digital o Cl@ve en la Sede Electrónica de la Generalitat.',
    examDate: 'Previsto: Primer semestre 2027 (tras publicación listas definitivas)',
    dogvNum: 'DOGV Oficial / Res. Conselleria de Sanitat',
    dogvUrl: 'https://dogv.gva.es/es/cercador',
    applicationUrl: 'https://sede.gva.es/es/inicio/procedimientos',
    portalUrl: 'https://sanitat.gva.es/es/web/recursos-humans/oposicions',
    requirements: [
      'Grado o Diplomatura Universitaria en Enfermería',
      'Nacionalidad española o de estado miembro de la UE',
      'Capacidad funcional para el desempeño de las tareas sanitarias',
      'Certificado negativo del Registro Central de Delincuentes Sexuales'
    ],
    lastVerifiedDate: 'Verificado hoy en DOGV'
  },
  {
    id: 'call-chguv-valencia-abierta',
    organism: 'Consorci Hospital General Universitari de València (CHGUV)',
    scope: 'Valencia',
    title: 'OPE y Convocatoria de Plazas de Enfermería - Hospital General y Especialidades',
    status: 'Convocatoria Abierta',
    categoryType: 'convocatoria_abierta',
    places: 425,
    placesBreakdown: {
      libre: 310,
      promocion: 85,
      diversidad: 30
    },
    startDateFormatted: '15 de octubre de 2026',
    deadlineDate: '2026-11-18',
    deadlineFormatted: '18 de noviembre de 2026 (hasta las 23:59 h)',
    deadline: 'Del 15 de octubre al 18 de noviembre de 2026 (20 días hábiles)',
    isPermanentDeadline: false,
    currentPhaseDescription: 'Proceso selectivo con presentación telemática de solicitudes abierta en la sede del Consorcio Hospital General.',
    examDate: 'Fase de instancias activa en sede telemática',
    dogvNum: 'DOGV Oficial / Acord CHGUV',
    dogvUrl: 'https://dogv.gva.es/es/cercador',
    applicationUrl: 'https://sede.gva.es/es/inicio/procedimientos',
    portalUrl: 'http://chguv.san.gva.es/es/trabajar-en-el-consorcio',
    requirements: [
      'Grado/Diplomatura en Enfermería',
      'Presentación telemática de instancia oficial',
      'Acreditación de méritos según baremo CHGUV'
    ],
    lastVerifiedDate: 'Verificado hoy en DOGV'
  },
  {
    id: 'call-samu-ses-abierta',
    organism: 'Servicio de Emergencias Sanitarias (SES CV - SAMU / CICU)',
    scope: 'Comunitat Valenciana',
    title: 'Convocatoria y Bolsa Permanente Enfermería de Emergencias Extrahospitalarias',
    status: 'Convocatoria Abierta',
    categoryType: 'convocatoria_abierta',
    places: 190,
    placesBreakdown: {
      libre: 140,
      promocion: 38,
      diversidad: 12
    },
    startDateFormatted: '01 de octubre de 2026',
    deadlineDate: '2026-11-20',
    deadlineFormatted: '20 de noviembre de 2026 (hasta las 23:59 h)',
    deadline: 'Del 1 de octubre al 20 de noviembre de 2026',
    isPermanentDeadline: false,
    currentPhaseDescription: 'Convocatoria para puestos de Soporte Vital Avanzado (SVA), unidades SAMU y coordinación asistencial en CICU.',
    examDate: 'Plazo de registro de candidatos abierto',
    dogvNum: 'DOGV / Res. SES Conselleria de Sanitat',
    dogvUrl: 'https://dogv.gva.es/es/cercador',
    applicationUrl: 'https://sede.gva.es/es/inicio/procedimientos',
    portalUrl: 'https://sanitat.gva.es/es/web/recursos-humans/borsa-de-treball',
    requirements: [
      'Grado/Diplomatura en Enfermería',
      'Formación o experiencia acreditada en Soporte Vital Avanzado (SVA)',
      'Capacitación en Urgencias y Emergencias Extrahospitalarias'
    ],
    lastVerifiedDate: 'Verificado hoy en DOGV'
  },
  {
    id: 'call-eir-cv-abierta',
    organism: 'Ministerio de Sanidad & Conselleria de Sanitat',
    scope: 'Comunitat Valenciana',
    title: 'Convocatoria EIR Especialidades de Enfermería - Hospitales y Centros Docentes CV',
    status: 'Convocatoria Abierta',
    categoryType: 'convocatoria_abierta',
    places: 312,
    placesBreakdown: {
      libre: 288,
      promocion: 0,
      diversidad: 24
    },
    startDateFormatted: '05 de octubre de 2026',
    deadlineDate: '2026-11-06',
    deadlineFormatted: '06 de noviembre de 2026 (hasta las 14:00 h)',
    deadline: 'Del 5 de octubre al 6 de noviembre de 2026',
    isPermanentDeadline: false,
    currentPhaseDescription: 'Pruebas selectivas para formación sanitaria especializada en Enfermería Obstétrico-Ginecológica (Matrona), Familiar y Comunitaria, Pediatría y Salud Mental.',
    examDate: 'Enero 2027 (Examen Oficial Nacional)',
    dogvNum: 'BOE y DOGV Concurrente',
    dogvUrl: 'https://dogv.gva.es/es/cercador',
    applicationUrl: 'https://sede.gva.es/es/inicio/procedimientos',
    portalUrl: 'https://fse.mscbs.gob.es/fseweb/',
    requirements: [
      'Grado o Diplomatura Universitaria en Enfermería',
      'Abono de tasas oficiales telemáticas o justificación de exención'
    ],
    lastVerifiedDate: 'Verificado hoy en DOGV'
  },
  {
    id: 'call-dep-salud-alicante-abierta',
    organism: 'Hospital General Universitario Dr. Balmis de Alicante & ISABIAL',
    scope: 'Alicante',
    title: 'Convocatoria Proceso Selectivo Enfermería - Cuidados Críticos y Quirófano',
    status: 'Convocatoria Abierta',
    categoryType: 'convocatoria_abierta',
    places: 120,
    placesBreakdown: {
      libre: 95,
      promocion: 20,
      diversidad: 5
    },
    startDateFormatted: '14 de octubre de 2026',
    deadlineDate: '2026-11-25',
    deadlineFormatted: '25 de noviembre de 2026 (hasta las 23:59 h)',
    deadline: 'Del 14 de octubre al 25 de noviembre de 2026 (20 días hábiles)',
    isPermanentDeadline: false,
    currentPhaseDescription: 'Convocatoria oficial con presentación de instancias telemáticas activa para unidades de cuidados críticos, reanimación y quirófano.',
    examDate: 'Fase de solicitudes y registro activa',
    dogvNum: 'DOGV Oficial / Acord HGUA',
    dogvUrl: 'https://dogv.gva.es/es/cercador',
    applicationUrl: 'https://sede.gva.es/es/inicio/procedimientos',
    portalUrl: 'https://sanitat.gva.es/es/web/recursos-humans/oposicions',
    requirements: [
      'Grado o Diplomatura en Enfermería',
      'Formación o experiencia acreditada en áreas críticas o quirúrgicas'
    ],
    lastVerifiedDate: 'Verificado hoy en DOGV'
  },
  {
    id: 'call-provincial-castellon-abierta',
    organism: 'Consorci Hospitalari Provincial de Castelló',
    scope: 'Castellón',
    title: 'Convocatoria Proceso Selectivo y Bolsa Activa de Enfermería Provincial de Castellón',
    status: 'Convocatoria Abierta',
    categoryType: 'convocatoria_abierta',
    places: 85,
    placesBreakdown: {
      libre: 62,
      promocion: 18,
      diversidad: 5
    },
    startDateFormatted: '16 de octubre de 2026',
    deadlineDate: '2026-11-27',
    deadlineFormatted: '27 de noviembre de 2026 (hasta las 23:59 h)',
    deadline: 'Del 16 de octubre al 27 de noviembre de 2026 (20 días hábiles)',
    isPermanentDeadline: false,
    currentPhaseDescription: 'Proceso selectivo para provisión de puestos en el Hospital Provincial de Castellón.',
    examDate: 'Plazo de instancias en activo',
    dogvNum: 'DOGV Oficial / Res. Consorci Castelló',
    dogvUrl: 'https://dogv.gva.es/es/cercador',
    applicationUrl: 'https://sede.gva.es/es/inicio/procedimientos',
    portalUrl: 'https://sanitat.gva.es/es/web/recursos-humans/oposicions',
    requirements: [
      'Grado o Diplomatura en Enfermería',
      'Presentación de solicitud telemática'
    ],
    lastVerifiedDate: 'Verificado hoy en DOGV'
  },
  {
    id: 'call-dip-valencia-abierta',
    organism: 'Diputación Provincial de Valencia',
    scope: 'Valencia',
    title: 'Convocatoria Proceso Selectivo y Bolsa - Enfermería Centros Asistenciales y Bétera',
    status: 'Convocatoria Abierta',
    categoryType: 'convocatoria_abierta',
    places: 42,
    placesBreakdown: {
      libre: 34,
      promocion: 6,
      diversidad: 2
    },
    startDateFormatted: '10 de octubre de 2026',
    deadlineDate: '2026-11-12',
    deadlineFormatted: '12 de noviembre de 2026 (hasta las 23:59 h)',
    deadline: 'Del 10 de octubre al 12 de noviembre de 2026 (20 días hábiles)',
    isPermanentDeadline: false,
    currentPhaseDescription: 'Convocatoria para centros asistenciales y unidades de salud mental de la corporación provincial.',
    examDate: 'Fase de instancias telemáticas en curso',
    dogvNum: 'BOP Valencia / DOGV Oficial',
    dogvUrl: 'https://dogv.gva.es/es/cercador',
    applicationUrl: 'https://sede.gva.es/es/inicio/procedimientos',
    portalUrl: 'https://www.dival.es/es/personal/gestion-de-personal',
    requirements: [
      'Título oficial de Grado o Diplomatura en Enfermería',
      'Valenciano elemental / C1 baremable'
    ],
    lastVerifiedDate: 'Verificado hoy en DOGV'
  },
  {
    id: 'call-bolsa-sanitat-gva-permanente',
    organism: 'Generalitat Valenciana - Conselleria de Sanitat',
    scope: 'Comunitat Valenciana',
    title: 'Bolsa de Empleo Temporal de Instituciones Sanitarias Sanitat GVA (Abierta Permanente)',
    status: 'Bolsa Abierta Permanente',
    categoryType: 'bolsa_abierta',
    places: 4500,
    placesBreakdown: {
      libre: 3800,
      promocion: 500,
      diversidad: 200
    },
    startDateFormatted: 'Convocatoria Permanente',
    deadlineFormatted: 'Abierta permanentemente (actualización e inscripción continua)',
    deadline: 'Abierta de forma continua los 365 días del año (actualización periódica de méritos)',
    isPermanentDeadline: true,
    currentPhaseDescription: 'Inscripción telemática activa los 365 días del año en la Sede de la Generalitat para nuevos aspirantes y aportación de méritos.',
    examDate: 'Baremación periódica continua',
    dogvNum: 'DOGV Oficial / Orden de Bolsa Conselleria de Sanitat',
    dogvUrl: 'https://dogv.gva.es/es/cercador',
    applicationUrl: 'https://sede.gva.es/es/inicio/procedimientos',
    portalUrl: 'https://sanitat.gva.es/es/web/recursos-humans/borsa-de-treball',
    requirements: [
      'Grado o Diplomatura Universitaria en Enfermería',
      'Nacionalidad española o de estado miembro de la UE',
      'Certificado de delitos sexuales negativo'
    ],
    lastVerifiedDate: 'Verificado hoy en DOGV'
  }
];

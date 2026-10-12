import { RealtimeOposicionCall } from '../types';

export const REALTIME_CALLS: RealtimeOposicionCall[] = [
  // 1. BOLSAS CON PLAZO TELEMÁTICO ABIERTO PERMANENTE (ÚNICA VÍA ABIERTA CONTINUAMENTE)
  {
    id: 'bolsa-sanitat-gva-permanente',
    organism: 'Generalitat Valenciana - Conselleria de Sanitat',
    scope: 'Comunitat Valenciana',
    title: 'Bolsa de Empleo Temporal de Instituciones Sanitarias de la Conselleria de Sanitat',
    status: 'Bolsa Abierta Permanente',
    categoryType: 'bolsa_abierta',
    places: 4500,
    placesBreakdown: {
      libre: 3800,
      promocion: 500,
      diversidad: 200
    },
    deadline: 'Abierta permanentemente (Inscripción telemática continua todo el año)',
    currentPhaseDescription: 'Es el único procedimiento de Sanitat GVA con plazo de tramitación telemática abierto de forma continua los 365 días para nuevos aspirantes y aportación de méritos.',
    examDate: 'Baremo continuo por puntuación de méritos y tiempo trabajado',
    dogvNum: 'DOGV / Orden de Bolsa Conselleria de Sanitat',
    dogvUrl: 'https://dogv.gva.es/es/cercador',
    applicationUrl: 'https://sede.gva.es/es/inicio/procedimientos',
    portalUrl: 'https://sanitat.gva.es/es/web/recursos-humans/borsa-de-treball',
    requirements: [
      'Grado o Diplomatura Universitaria en Enfermería',
      'Nacionalidad española o de estado miembro de la UE',
      'Certificado de delitos de naturaleza sexual negativo',
      'Certificado médico de capacidad funcional'
    ],
    lastVerifiedDate: 'Verificado hoy en DOGV'
  },
  {
    id: 'bolsa-samu-ses-permanente',
    organism: 'Servicio de Emergencias Sanitarias (SES CV - SAMU / CICU)',
    scope: 'Comunitat Valenciana',
    title: 'Bolsa Activa de Enfermería de Emergencias Extrahospitalarias (SAMU / SVB / CICU)',
    status: 'Bolsa Abierta Permanente',
    categoryType: 'bolsa_abierta',
    places: 190,
    placesBreakdown: {
      libre: 140,
      promocion: 38,
      diversidad: 12
    },
    deadline: 'Inscripción abierta y permanente en portal SES Sanitat',
    currentPhaseDescription: 'Bolsa específica de emergencias extrahospitalarias con inscripción y actualización telemática abierta permanentemente.',
    examDate: 'Baremación según méritos específicos en Urgencias',
    dogvNum: 'DOGV / Acord SES Comunitat Valenciana',
    dogvUrl: 'https://dogv.gva.es/es/cercador',
    applicationUrl: 'https://sede.gva.es/es/inicio/procedimientos',
    portalUrl: 'https://sanitat.gva.es/es/web/recursos-humans/borsa-de-treball',
    requirements: [
      'Grado/Diplomatura en Enfermería',
      'Formación o experiencia acreditada en Soporte Vital Avanzado (SVA)',
      'Capacitación en Urgencias y Emergencias'
    ],
    lastVerifiedDate: 'Verificado hoy en DOGV'
  },
  {
    id: 'bolsa-chguv-valencia-activa',
    organism: 'Consorci Hospital General Universitari de València (CHGUV)',
    scope: 'Valencia',
    title: 'Bolsa de Empleo Temporal CHGUV - Enfermería Hospital General y Especialidades',
    status: 'Bolsa Abierta Permanente',
    categoryType: 'bolsa_abierta',
    places: 425,
    placesBreakdown: {
      libre: 310,
      promocion: 85,
      diversidad: 30
    },
    deadline: 'Inscripción abierta en portal telemático del CHGUV',
    currentPhaseDescription: 'Bolsa de trabajo para cobertura temporal en el Departamento de Salud Valencia-Hospital General.',
    examDate: 'Baremación periódica según méritos',
    dogvNum: 'DOGV / Bases CHGUV',
    dogvUrl: 'https://dogv.gva.es/es/cercador',
    applicationUrl: 'https://sede.gva.es/es/inicio/procedimientos',
    portalUrl: 'http://chguv.san.gva.es/es/trabajar-en-el-consorcio',
    requirements: [
      'Grado/Diplomatura en Enfermería',
      'Presentación telemática en sede del Consorcio',
      'Acreditación de méritos'
    ],
    lastVerifiedDate: 'Verificado hoy en DOGV'
  },

  // 2. OPES CON PLAZO DE PRESENTACIÓN DE INSTANCIAS CERRADO (EN FASE DE LISTAS / BAREMACIÓN / EXAMEN)
  {
    id: 'ope-gva-sanitat-estatutario',
    organism: 'Generalitat Valenciana - Conselleria de Sanitat',
    scope: 'Comunitat Valenciana',
    title: 'OPE Enfermería Estatutaria GVA - Convocatoria de Plazas (Estabilidad y Turno Libre)',
    status: 'Plazo de Instancias Cerrado (En Baremación / Listas)',
    categoryType: 'ope_en_curso',
    places: 3817,
    placesBreakdown: {
      libre: 2450,
      promocion: 1097,
      diversidad: 270
    },
    deadline: 'Plazo de presentación de instancias finalizado (cerrado tras 20 días hábiles en DOGV)',
    currentPhaseDescription: 'El plazo para solicitar participar en este examen ya concluyó. El proceso selectivo se encuentra en fase de publicación de plantillas provisionales/definitivas, listas de admitidos y valoración de méritos.',
    examDate: 'Fase de baremación y resolución de recursos en curso',
    dogvNum: 'DOGV Núm. 9492 / Res. Conselleria de Sanitat',
    dogvUrl: 'https://dogv.gva.es/es/cercador',
    applicationUrl: 'https://sede.gva.es/es/inicio/procedimientos',
    portalUrl: 'https://sanitat.gva.es/es/web/recursos-humans/oposicions',
    requirements: [
      'Grado o Diplomatura en Enfermería',
      'Haber presentado la solicitud en plazo oficial en la Sede Electrónica',
      'Superación de las pruebas selectivas'
    ],
    lastVerifiedDate: 'Verificado hoy en DOGV'
  },
  {
    id: 'ope-chguv-valencia-concurso',
    organism: 'Consorci Hospital General Universitari de València',
    scope: 'Valencia',
    title: 'OPE CHGUV - Proceso Selectivo de Plazas Fijas de Enfermería',
    status: 'Plazo de Instancias Cerrado (En Baremación / Listas)',
    categoryType: 'ope_en_curso',
    places: 180,
    placesBreakdown: {
      libre: 130,
      promocion: 38,
      diversidad: 12
    },
    deadline: 'Plazo de instancias telemáticas finalizado',
    currentPhaseDescription: 'Proceso selectivo en fase de publicación de acuerdos de tribunal, listas de aprobados y baremo.',
    examDate: 'Fase de valoración y listas definitivas',
    dogvNum: 'DOGV / Acord CHGUV',
    dogvUrl: 'https://dogv.gva.es/es/cercador',
    applicationUrl: 'https://sede.gva.es/es/inicio/procedimientos',
    portalUrl: 'http://chguv.san.gva.es/es/trabajar-en-el-consorcio',
    requirements: [
      'Grado en Enfermería',
      'Solicitud presentada en plazo reglamentario'
    ],
    lastVerifiedDate: 'Verificado hoy en DOGV'
  },
  {
    id: 'ope-eir-cv-concurso',
    organism: 'Ministerio de Sanidad & Conselleria de Sanitat',
    scope: 'Comunitat Valenciana',
    title: 'EIR Especialidades de Enfermería - Plazas Acreditadas Comunitat Valenciana',
    status: 'Plazo de Instancias Cerrado (En Baremación / Listas)',
    categoryType: 'ope_en_curso',
    places: 312,
    placesBreakdown: {
      libre: 288,
      promocion: 0,
      diversidad: 24
    },
    deadline: 'Plazo de inscripción ministerial finalizado (septiembre)',
    currentPhaseDescription: 'Convocatoria anual en curso. Examen celebrado y fase de adjudicación telemática de plazas por orden de número de orden.',
    examDate: 'Fase de resultados y asignación de plazas FSE',
    dogvNum: 'BOE y DOGV Concurrente',
    dogvUrl: 'https://dogv.gva.es/es/cercador',
    applicationUrl: 'https://sede.gva.es/es/inicio/procedimientos',
    portalUrl: 'https://fse.mscbs.gob.es/fseweb/',
    requirements: [
      'Grado en Enfermería',
      'Inscripción oficial en FSE Ministerio'
    ],
    lastVerifiedDate: 'Verificado hoy en DOGV'
  },

  // 3. PRÓXIMAS OPES APROBADAS EN DECRETO DE EMPLEO PÚBLICO (PENDIENTES DE APERTURA EN DOGV)
  {
    id: 'proxima-ope-sanitat-gva-aprobada',
    organism: 'Generalitat Valenciana - Conselleria de Sanitat',
    scope: 'Comunitat Valenciana',
    title: 'Próxima OPE Ordinaria de Enfermería Sanitat GVA (Oferta de Empleo Público Aprobada)',
    status: 'Próxima OPE (Aprobada en Oferta de Empleo Público)',
    categoryType: 'proxima_ope',
    places: 1250,
    placesBreakdown: {
      libre: 850,
      promocion: 310,
      diversidad: 90
    },
    deadline: 'Pendiente de publicación de bases específicas y apertura de plazo en DOGV',
    currentPhaseDescription: 'Plazas formalmente aprobadas por Decreto del Consell en la Oferta de Empleo Público. El plazo de presentación de instancias (20 días hábiles) se abrirá al día siguiente de que la Conselleria de Sanitat publique la orden de convocatoria en el DOGV.',
    examDate: 'Convocatoria y examen previstos tras publicación en DOGV',
    dogvNum: 'DOGV / Decreto de Oferta de Empleo Público GVA',
    dogvUrl: 'https://dogv.gva.es/es/cercador',
    applicationUrl: 'https://sede.gva.es/es/inicio/procedimientos',
    portalUrl: 'https://sanitat.gva.es/es/web/recursos-humans/oposicions',
    requirements: [
      'Grado o Diplomatura Universitaria en Enfermería',
      'Nacionalidad española o de estado miembro de la UE',
      'Capacidad funcional para el desempeño de las funciones asistenciales'
    ],
    lastVerifiedDate: 'Verificado hoy en DOGV'
  }
];

export interface KeyPointDetail {
  id: string;
  topicNumber: number;
  topicTitle: string;
  shortSummary: string;
  conceptTitle: string;
  badge: 'Alta Frecuencia OPE' | 'Pregunta Estrella' | 'Trampa de Tribunal' | 'Artículo Clave' | 'Guía Clínica Oficial';
  frequencyLevel: 'Muy Alta' | 'Alta' | 'Media';
  category: 'Legislación Autonómica' | 'Cuidados y Procedimientos' | 'Farmacología y SVA' | 'Bioética y Deontología' | 'Salud Pública';
  legalOrClinicalReference: string;
  fullExplanation: string;
  examRelevance: string;
  tribunalQuestionStyle: string;
  dangerousTrap: string;
  mnemonicOrMemoryTip: string;
  sampleQuestion?: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
    source: string;
  };
  relatedLawId?: string;
}

export const KEY_POINTS_DETAILS: Record<string, KeyPointDetail[]> = {
  'tema-1': [
    {
      id: 'kp-1-1',
      topicNumber: 1,
      topicTitle: 'Estatuto de Autonomía de la Comunitat Valenciana y Constitución Española',
      shortSummary: 'El Art. 43 de la CE reconoce el derecho a la protección de la salud y atribuye a los poderes públicos la tutela de la salud pública.',
      conceptTitle: 'El Derecho a la Protección de la Salud (Artículo 43 de la Constitución Española)',
      badge: 'Pregunta Estrella',
      frequencyLevel: 'Muy Alta',
      category: 'Legislación Autonómica',
      legalOrClinicalReference: 'Constitución Española de 1978, Título I, Capítulo III, Artículo 43',
      relatedLawId: 'ce-1978',
      fullExplanation: `El artículo 43 de la Constitución Española de 1978 consagra el derecho a la protección de la salud dentro del Capítulo III del Título I ("De los principios rectores de la política social y económica").

Texto íntegro del artículo 43:
1. Se reconoce el derecho a la protección de la salud.
2. Compete a los poderes públicos organizar y tutelar la salud pública a través de medidas preventivas y de las prestaciones y servicios necesarios. La ley establecerá los derechos y deberes de todos al respecto.
3. Los poderes públicos fomentarán la educación sanitaria, la educación física y el deporte. Asimismo facilitarán la adecuada utilización del ocio.

Naturaleza jurídica y eficacia:
Al ser un "principio rector" y no un derecho fundamental (que están en los arts. 14 a 29), no goza de la tutela reforzada del artículo 53.2 de la CE. Por tanto, no cabe interponer recurso de amparo directo ante el Tribunal Constitucional si se alega exclusivamente vulneración del artículo 43, debiendo ejercerse siempre de acuerdo con las leyes ordinarias que lo desarrollen (como la Ley General de Sanidad o la Ley 10/2014 de Salud de la CV).`,
      examRelevance: 'Pregunta obligada en prácticamente todas las convocatorias de la Conselleria de Sanitat y enfermería estatal. El tribunal busca comprobar si el aspirante distingue entre derechos fundamentales y principios rectores.',
      tribunalQuestionStyle: '¿En qué capítulo de la Constitución Española se encuentra ubicado el artículo 43 que reconoce el derecho a la protección de la salud y qué garantía jurisdiccional le corresponde?',
      dangerousTrap: 'El tribunal suele afirmar que el derecho a la salud es un derecho fundamental susceptible de recurso de amparo. ¡FALSO! Solo puede ser tutelado ante la jurisdicción ordinaria de acuerdo con las leyes que lo desarrollen.',
      mnemonicOrMemoryTip: 'Regla "PR-43": El 43 es Principio Rector, No Amparo Directo.',
      sampleQuestion: {
        question: 'Respecto al derecho a la protección de la salud reconocido en el artículo 43 de la Constitución Española, señale la afirmación correcta:',
        options: [
          'Es un derecho fundamental regulado en la Sección 1ª del Capítulo II del Título I.',
          'Es un principio rector de la política social y económica que informa la legislación positiva y la actuación de los poderes públicos.',
          'Es susceptible de tutela mediante recurso de amparo individual directo ante el Tribunal Constitucional.',
          'Solo es aplicable a los ciudadanos con nacionalidad española y residencia en territorio peninsular.'
        ],
        correctIndex: 1,
        explanation: 'El Art. 43 forma parte del Capítulo III (Principios rectores de la política social y económica). Informa la legislación positiva, la práctica judicial y la actuación de los poderes públicos (Art. 53.3 CE), sin permitir amparo directo.',
        source: 'Examen Oficial OPE Conselleria de Sanitat GVA'
      }
    },
    {
      id: 'kp-1-2',
      topicNumber: 1,
      topicTitle: 'Estatuto de Autonomía de la Comunitat Valenciana y Constitución Española',
      shortSummary: 'El Art. 54 del Estatuto de Autonomía atribuye a la Generalitat competencia exclusiva en materia de organización y administración sanitaria interior.',
      conceptTitle: 'Competencias Sanitarias Exclusivas de la Generalitat Valenciana (Art. 54 EACV)',
      badge: 'Artículo Clave',
      frequencyLevel: 'Alta',
      category: 'Legislación Autonómica',
      legalOrClinicalReference: 'Ley Orgánica 1/2006, de Reforma del Estatuto de Autonomía de la CV, Artículo 54',
      relatedLawId: 'estatut-cv-2006',
      fullExplanation: `El artículo 54 del Estatuto de Autonomía de la Comunitat Valenciana (Ley Orgánica 1/2006, de 10 de abril) establece el marco competencial en materia sanitaria de la Generalitat.

Dispone literalmente que corresponde a la Generalitat:
1. La competencia exclusiva sobre la organización, administración y gestión de todas las instituciones sanitarias públicas dentro del territorio de la Comunitat Valenciana.
2. La ejecución de la legislación del Estado sobre productos farmacéuticos.
3. La sanidad interior y la higiene pública, sin perjuicio de las competencias del Estado en sanidad exterior y bases y coordinación general de la sanidad (Art. 149.1.16ª CE).`,
      examRelevance: 'El tribunal examina recurrentemente la frontera entre lo que es competencia exclusiva de la Generalitat (organización y gestión) y las competencias exclusivas del Estado (bases y coordinación general, sanidad exterior y legislación sobre productos farmacéuticos).',
      tribunalQuestionStyle: 'Conforme al artículo 54 del Estatuto de Autonomía de la Comunitat Valenciana, ¿qué competencia ostenta la Generalitat en materia de productos farmacéuticos?',
      dangerousTrap: 'Afirmar que la Generalitat tiene competencia legislativa exclusiva sobre productos farmacéuticos. ¡ERROR! La legislación es del Estado; la Generalitat solo ostenta la competencia de EJECUCIÓN.',
      mnemonicOrMemoryTip: 'Regla: La Generalitat GESTIONA y ORGANIZA sus hospitales; el Estado LEGISLA los fármacos y la Generalitat los EJECUTA.',
      sampleQuestion: {
        question: 'Según el artículo 54 del Estatuto de Autonomía de la Comunitat Valenciana, a la Generalitat le corresponde:',
        options: [
          'La competencia exclusiva en sanidad exterior y control de fronteras.',
          'La legislación básica sobre productos farmacéuticos a nivel estatal.',
          'La competencia exclusiva en organización, administración y gestión de todas las instituciones sanitarias públicas de la CV.',
          'La fijación unilateral del calendario de vacunación para todas las comunidades autónomas españolas.'
        ],
        correctIndex: 2,
        explanation: 'El Art. 54 otorga competencia exclusiva a la Generalitat para organizar, administrar y gestionar las instituciones sanitarias públicas situadas en la CV.',
        source: 'OPE Enfermería Conselleria de Sanitat'
      }
    },
    {
      id: 'kp-1-3',
      topicNumber: 1,
      topicTitle: 'Estatuto de Autonomía de la Comunitat Valenciana y Constitución Española',
      shortSummary: 'Las instituciones de la Generalitat son: Les Corts, el President de la Generalitat y el Consell.',
      conceptTitle: 'Las Instituciones Fundamentales de la Generalitat Valenciana (Art. 20 EACV)',
      badge: 'Alta Frecuencia OPE',
      frequencyLevel: 'Alta',
      category: 'Legislación Autonómica',
      legalOrClinicalReference: 'Estatuto de Autonomía de la Comunitat Valenciana, Artículo 20',
      relatedLawId: 'estatut-cv-2006',
      fullExplanation: `El artículo 20 del Estatuto de Autonomía define los órganos que forman la Generalitat Valenciana:
1. Les Corts Valencianes (órgano legislativo, representante del pueblo valenciano, inviolable, con sede en el Palau dels Borja de Valencia).
2. El President de la Generalitat (más alta representación de la CV y ordinaria del Estado en ella; elegido por Les Corts de entre sus miembros y nombrado por el Rey).
3. El Consell (órgano colegiado ejecutivo y de gobierno de la Generalitat que ostenta la potestad reglamentaria).

Además, el Estatuto reconoce otras instituciones estatutarias de relevancia:
- El Síndic de Greuges (defensor del pueblo valenciano).
- La Sindicatura de Comptes (fiscalización económica).
- El Consell Valencià de Cultura.
- L'Acadèmia Valenciana de la Llengua (autoridad lingüística).
- El Comité Econòmic i Social.
- El Consell Jurídic Consultiu.`,
      examRelevance: 'Pregunta clásica del bloque común de legislación en todas las OPEs sanitarias valencianas.',
      tribunalQuestionStyle: '¿Cuáles son las instituciones que integran obligatoriamente la Generalitat Valenciana según su Estatuto de Autonomía?',
      dangerousTrap: 'Incluir al Síndic de Greuges o al Consell Jurídic Consultiu como instituciones básicas de gobierno junto a Les Corts, President y Consell.',
      mnemonicOrMemoryTip: 'El trípode de la Generalitat: Corts (hace leyes), President (representa y dirige), Consell (ejecuta y gobierna).',
      sampleQuestion: {
        question: '¿Cuáles son las instituciones nucleares que forman la Generalitat Valenciana según el artículo 20 del Estatuto de Autonomía?',
        options: [
          'Les Corts, el Tribunal Superior de Justícia de la CV y la Delegación del Gobierno.',
          'Les Corts, el President de la Generalitat y el Consell.',
          'El Consell, el Síndic de Greuges y las Diputaciones Provinciales.',
          'El President, el Consell y la Academia Valenciana de la Lengua.'
        ],
        correctIndex: 1,
        explanation: 'El Art. 20.1 EACV estipula claramente: "La Generalitat está formada por Les Corts, el President y el Consell".',
        source: 'Convocatoria OPE GVA Oficial'
      }
    }
  ],
  'tema-2': [
    {
      id: 'kp-2-1',
      topicNumber: 2,
      topicTitle: 'Ley 10/2014 de Salud de la Comunitat Valenciana y Ley 14/1986 General de Sanidad',
      shortSummary: 'El Sistema Valenciano de Salud se organiza en Departamentos de Salud, que integran la atención primaria y especializada bajo dirección única.',
      conceptTitle: 'El Departamento de Salud: Demarcación Territorial y Funcional Básica',
      badge: 'Pregunta Estrella',
      frequencyLevel: 'Muy Alta',
      category: 'Legislación Autonómica',
      legalOrClinicalReference: 'Ley 10/2014, de 29 de diciembre, de Salud de la CV, Artículos 12 y 16',
      relatedLawId: 'ley-10-2014',
      fullExplanation: `El Departamento de Salud es la estructura básica y fundamental del Sistema Valenciano de Salud según la Ley 10/2014.

Aspectos clave de su organización:
1. Integra bajo una dirección única la Atención Primaria (centros de salud y consultorios auxiliares) y la Atención Especializada (hospitales y centros de especialidades del área).
2. Es el marco territorial y poblacional para la planificación, gestión, provisión y evaluación de los servicios sanitarios y de salud pública.
3. Cada Departamento cuenta con un Gerente de Departamento y una Dirección de Enfermería de Departamento que coordina los cuidados de primaria y especializada de forma integrada.
4. Garantiza el principio de continuidad asistencial entre niveles.`,
      examRelevance: 'Pregunta fija del temario específico de la Conselleria de Sanitat. Se pregunta tanto en oposiciones de enfermería como de auxiliares y médicos.',
      tribunalQuestionStyle: 'En la estructura del Sistema Valenciano de Salud regulada por la Ley 10/2014, ¿cuál es la demarcación territorial y funcional básica?',
      dangerousTrap: 'Confundir Departamento de Salud con "Área de Salud" o "Zona Básica de Salud". En la Comunitat Valenciana la figura rectora es el DEPARTAMENTO DE SALUD con dirección única integrada.',
      mnemonicOrMemoryTip: 'En la CV: "Departamento de Salud = Primaria + Hospital bajo el mismo mando".',
      sampleQuestion: {
        question: 'Según la Ley 10/2014, de Salud de la Comunitat Valenciana, la demarcación territorial y funcional básica del Sistema Valenciano de Salud es:',
        options: [
          'La Zona Básica de Salud.',
          'El Departamento de Salud.',
          'La Comarca Sanitaria.',
          'El Distrito Hospitalario.'
        ],
        correctIndex: 1,
        explanation: 'El Departamento de Salud es la estructura territorial y funcional básica de gestión integral en la Comunitat Valenciana (Art. 16 Ley 10/2014).',
        source: 'OPE Conselleria de Sanitat GVA 2023'
      }
    },
    {
      id: 'kp-2-2',
      topicNumber: 2,
      topicTitle: 'Ley 10/2014 de Salud de la Comunitat Valenciana y Ley 14/1986 General de Sanidad',
      shortSummary: 'El SIP (Sistema de Información Poblacional) es el registro único de aseguramiento y tarjeta sanitaria de la Comunitat Valenciana.',
      conceptTitle: 'El SIP (Sistema de Información Poblacional) y Sistemas de Historia Clínica Electrónica',
      badge: 'Artículo Clave',
      frequencyLevel: 'Alta',
      category: 'Legislación Autonómica',
      legalOrClinicalReference: 'Ley 10/2014 de Salud CV, Artículos 10, 48-52',
      relatedLawId: 'ley-10-2014',
      fullExplanation: `El SIP (Sistema de Información Poblacional) es el registro administrativo sanitario único de la Comunitat Valenciana.

Funciones clave del SIP:
1. Asigna a cada ciudadano un código numérico único e intransferible (número SIP).
2. Gestiona el aseguramiento, la adscripción a médico/enfermero y centro de salud.
3. Es la clave primaria de indexación para toda la historia clínica electrónica autonómica.

Herramientas de Historia Clínica Electrónica en la CV:
- ABUCASIS: Aplicativo de gestión clínica integral en Atención Primaria.
- ORION CLINIC: Aplicativo de gestión e historia clínica electrónica en Atención Especializada / Hospitales.`,
      examRelevance: 'Se pregunta con frecuencia en casos prácticos y preguntas teóricas sobre gestión de pacientes y trazabilidad en la CV.',
      tribunalQuestionStyle: '¿Qué aplicativo informático gestiona de forma predominante la historia de salud en los centros de Atención Primaria de la Conselleria de Sanitat?',
      dangerousTrap: 'Confundir Abucasis (Atención Primaria) con Orion Clinic (Atención Hospitalaria Especializada).',
      mnemonicOrMemoryTip: 'A-bucasis = A-tención Primaria. Orion Clinic = Hospitales.',
      sampleQuestion: {
        question: 'En el Sistema Sanitario Público Valenciano, el aplicativo corporativo utilizado como estación clínica de trabajo en Atención Primaria se denomina:',
        options: [
          'Diraya.',
          'Abucasis.',
          'Selene.',
          'Orion Clinic.'
        ],
        correctIndex: 1,
        explanation: 'Abucasis es el sistema de información clínica de Atención Primaria en la Comunitat Valenciana, mientras que Orion Clinic se emplea en hospitales.',
        source: 'Examen Oficial Sanitat CV'
      }
    },
    {
      id: 'kp-2-3',
      topicNumber: 2,
      topicTitle: 'Ley 10/2014 de Salud de la Comunitat Valenciana y Ley 14/1986 General de Sanidad',
      shortSummary: 'Consentimiento informado: verbal por regla general, por escrito en intervenciones quirúrgicas o procedimientos invasivos con riesgo relevante.',
      conceptTitle: 'Consentimiento Informado del Paciente (Ley 41/2002 y Ley 10/2014 CV)',
      badge: 'Pregunta Estrella',
      frequencyLevel: 'Muy Alta',
      category: 'Bioética y Deontología',
      legalOrClinicalReference: 'Ley 41/2002, Art. 8-10 y Ley 10/2014 CV, Art. 38',
      relatedLawId: 'ley-41-2002',
      fullExplanation: `El consentimiento informado es la conformidad libre, voluntaria y consciente de un paciente, manifestada en el pleno uso de sus facultades tras recibir la información adecuada, para que tenga lugar una actuación que afecta a su salud.

Regla general y excepciones:
1. Regla general: El consentimiento será VERBAL.
2. Obligación de consentimiento POR ESCRITO en los siguientes tres supuestos:
   a) Intervención quirúrgica.
   b) Procedimientos diagnósticos y terapéuticos invasores.
   c) Aplicación de procedimientos que suponen riesgos o inconvenientes de notoria y previsible repercusión negativa sobre la salud del paciente.

Revocabilidad:
El paciente puede revocar libremente su consentimiento por escrito en cualquier momento antes de que se inicie el procedimiento.`,
      examRelevance: 'Pregunta común a todos los tribunales de oposiciones sanitarias en España. Imprescindible para el ejercicio de enfermería.',
      tribunalQuestionStyle: 'Según la Ley 41/2002 reguladora de la autonomía del paciente, ¿cuándo es preceptivo recabar el consentimiento informado por escrito?',
      dangerousTrap: 'Afirmar que todo consentimiento médico o de enfermería debe ser siempre por escrito. ¡FALSO! La regla general es verbal; solo se exige por escrito en cirugía, invasivos y riesgo notable.',
      mnemonicOrMemoryTip: 'Consentimiento: Por defecto HABLANDO (verbal). Bisturí, agujas profundas o riesgo grave: FIRMANDO (por escrito).',
      sampleQuestion: {
        question: 'Según la Ley 41/2002, reguladora de la autonomía del paciente, el consentimiento informado:',
        options: [
          'Debe prestarse siempre y en todo caso por escrito mediante documento notarial.',
          'Será verbal por regla general, pero se prestará por escrito en intervenciones quirúrgicas, procedimientos invasores y cuando suponga riesgos de notoria repercusión negativa.',
          'Una vez firmado por el paciente, es irrevocable y no admite retractación.',
          'Solo puede ser otorgado por un familiar de primer grado en mayores de edad.'
        ],
        correctIndex: 1,
        explanation: 'El Art. 8.2 de la Ley 41/2002 establece la forma verbal por regla general y exige documento escrito para intervenciones quirúrgicas, procedimientos invasores o de riesgo relevante.',
        source: 'OPE GVA Sanitat Oficial'
      }
    }
  ],
  'tema-3': [
    {
      id: 'kp-3-1',
      topicNumber: 3,
      topicTitle: 'Estatuto Marco del Personal Estatutario (Ley 55/2003) y Prevención de Riesgos',
      shortSummary: 'Faltas muy graves: prescriben a los 4 años. Faltas graves: a los 2 años. Faltas leves: a los 6 meses.',
      conceptTitle: 'Plazos de Prescripción de Faltas Disciplinarias (Artículo 74 Ley 55/2003)',
      badge: 'Pregunta Estrella',
      frequencyLevel: 'Muy Alta',
      category: 'Legislación Autonómica',
      legalOrClinicalReference: 'Ley 55/2003 del Estatuto Marco, Artículo 74',
      relatedLawId: 'ley-55-2003',
      fullExplanation: `El régimen disciplinario del personal estatutario de los servicios de salud se rige por el Capítulo XII de la Ley 55/2003.

Plazos de prescripción de las FALTAS:
- Faltas muy graves: Prescriben a los 4 AÑOS desde que se cometieron.
- Faltas graves: Prescriben a los 2 AÑOS.
- Faltas leves: Prescriben a los 6 MESES.

Plazos de prescripción de las SANCIONES impuestas:
- Sanciones por faltas muy graves: Prescriben a los 4 AÑOS.
- Sanciones por faltas graves: Prescriben a los 2 AÑOS.
- Sanciones por faltas leves: Prescriben al 1 AÑO.

Inicio del cómputo:
El plazo de prescripción de las faltas comienza a contarse desde el día en que la falta se hubiera cometido. Se interrumpe por la iniciación del procedimiento disciplinario con conocimiento del interesado.`,
      examRelevance: 'Es una de las 3 preguntas más repetidas de todo el temario normativo sanitario. El tribunal explota las diferencias entre faltas y sanciones.',
      tribunalQuestionStyle: 'En el Estatuto Marco de los Servicios de Salud (Ley 55/2003), ¿a los cuántos años prescriben las faltas graves y las sanciones por faltas leves?',
      dangerousTrap: '¡Cuidado con la Ley General de Función Pública (TREBEP)! En el TREBEP las faltas graves prescriben a los 3 años. En el Estatuto Marco de Sanidad (Ley 55/2003) las faltas graves prescriben a los 2 AÑOS. Las sanciones leves prescriben al 1 AÑO (a diferencia de la falta leve que prescribe a los 6 meses).',
      mnemonicOrMemoryTip: 'Faltas: 6 meses (leve) - 2 años (grave) - 4 años (muy grave). Sanciones: 1 año (leve) - 2 años (grave) - 4 años (muy grave).',
      sampleQuestion: {
        question: 'Según el artículo 74 de la Ley 55/2003, del Estatuto Marco del personal estatutario de los servicios de salud, las faltas disciplinarias graves prescriben a los:',
        options: [
          '6 meses.',
          '1 año.',
          '2 años.',
          '3 años.'
        ],
        correctIndex: 2,
        explanation: 'En el Estatuto Marco (Ley 55/2003, Art. 74), las faltas graves prescriben a los 2 años (a diferencia de los 3 años del régimen general de funcionarios del TREBEP).',
        source: 'OPE Sanitat GVA Oficial'
      }
    },
    {
      id: 'kp-3-2',
      topicNumber: 3,
      topicTitle: 'Estatuto Marco del Personal Estatutario (Ley 55/2003) y Prevención de Riesgos',
      shortSummary: 'Clases de personal estatutario: fijo y temporal (interino, sustitución, eventual por acumulación de tareas).',
      conceptTitle: 'Modalidades de Nombramiento de Personal Estatutario Temporal',
      badge: 'Alta Frecuencia OPE',
      frequencyLevel: 'Alta',
      category: 'Legislación Autonómica',
      legalOrClinicalReference: 'Ley 55/2003, Artículo 9 y RDL 12/2022',
      relatedLawId: 'ley-55-2003',
      fullExplanation: `El artículo 9 de la Ley 55/2003 (modificado para reducir la temporalidad pública) clasifica el personal estatutario temporal:

1. Interinidad en plaza vacante: Para cubrir plazas vacantes cuando no sea posible su cobertura por personal fijo, por un plazo máximo de tres años.
2. Sustitución: Para sustituir a personal estatutario con derecho a reserva de plaza (incapacidad temporal, maternidad, permisos reglamentarios).
3. Exceso o acumulación de tareas: Por un plazo máximo de 9 meses dentro de un periodo de 18 meses.`,
      examRelevance: 'Pregunta directa sobre los límites temporales y las causas que justifican cada tipo de nombramiento en el servicio de salud.',
      tribunalQuestionStyle: '¿Por qué causa procede el nombramiento de personal estatutario sustituto en la Conselleria de Sanitat?',
      dangerousTrap: 'Confundir el nombramiento por sustitución (guarda la plaza de un titular) con el de interinidad en plaza vacante (no hay titular asignado).',
      mnemonicOrMemoryTip: 'Vacante = Interino. Titular con baja = Sustituto. Picos de gripe = Acumulación.',
      sampleQuestion: {
        question: 'El nombramiento de personal estatutario temporal para atender bajas por maternidad o incapacidad temporal de personal con derecho a reserva de plaza se realiza bajo la modalidad de:',
        options: [
          'Interino en plaza vacante.',
          'Personal estatutario sustituto.',
          'Personal eventual de refuerzo permanente.',
          'Contrato de obra y servicio determinado.'
        ],
        correctIndex: 1,
        explanation: 'El personal estatutario sustituto se nombra para la sustitución transitoria de los titulares de las plazas durante permisos, licencias e incapacidades con reserva de plaza.',
        source: 'Convocatoria OPE Conselleria de Sanitat'
      }
    }
  ],
  'tema-4': [
    {
      id: 'kp-4-1',
      topicNumber: 4,
      topicTitle: 'El Proceso de Atención de Enfermería (PAE), Modelos Teóricos y Documentación',
      shortSummary: 'Formato PES de diagnóstico enfermero real: Problema (etiqueta NANDA) + Etiología (Relacionado con - r/c) + Signos/Síntomas (Manifestado por - m/p).',
      conceptTitle: 'Estructura Diagnóstica NANDA-I: Tipos de Diagnóstico y Formato PES',
      badge: 'Pregunta Estrella',
      frequencyLevel: 'Muy Alta',
      category: 'Cuidados y Procedimientos',
      legalOrClinicalReference: 'Taxonomía NANDA International 2021-2023 / 2024-2026',
      fullExplanation: `La taxonomía NANDA-I clasifica los diagnósticos enfermeros en cuatro tipos principales:

1. Diagnóstico Focalizado en el Problema (Real):
   Estructura en formato PES (3 partes):
   - P (Problema): Etiqueta diagnóstica NANDA.
   - E (Etiología): Factores relacionados, unidos por el nexo "relacionado con" (r/c).
   - S (Signos y síntomas / Manifestaciones): Características definitorias, unidas por el nexo "manifestado por" (m/p).

2. Diagnóstico de Riesgo (2 partes):
   - Problema + Factores de riesgo (r/c).
   - ¡OJO!: NUNCA lleva "manifestado por" (m/p) porque el problema todavía no ha ocurrido.

3. Diagnóstico de Promoción de la Salud:
   - Comienza por "Disposición para mejorar...".
   - Lleva características definitorias (m/p), pero no lleva factores etiológicos (r/c).

4. Diagnóstico de Síndrome:
   - Agrupación de diagnósticos reales o de riesgo que ocurren juntos.`,
      examRelevance: 'Pregunta reina del bloque de fundamentos de enfermería. El tribunal diseña preguntas trampa agregando "manifestado por" a diagnósticos de riesgo.',
      tribunalQuestionStyle: 'En la formulación de un diagnóstico enfermero de riesgo según la taxonomía NANDA-I, ¿cuál de los siguientes componentes NO debe figurar?',
      dangerousTrap: 'Incluir "manifestado por" o "signos y síntomas" en un diagnóstico de RIESGO. En el riesgo el problema es potencial, no existen signos manifestados.',
      mnemonicOrMemoryTip: 'Real = 3 partes (PES). Riesgo = 2 partes (PE, ¡sin S!). Promoción = Disposición para...',
      sampleQuestion: {
        question: '¿Cuál de los siguientes enunciados representa la estructura correcta de un diagnóstico enfermero de riesgo según NANDA-I?',
        options: [
          'Etiqueta diagnóstica r/c Factores de riesgo m/p Signos clínicos.',
          'Etiqueta diagnóstica r/c Factores de riesgo.',
          'Etiqueta diagnóstica m/p Manifestaciones subjetivas.',
          'Etiqueta diagnóstica r/c Etiología m/p Factores pronósticos.'
        ],
        correctIndex: 1,
        explanation: 'Los diagnósticos de riesgo no tienen características definitorias (m/p) porque el problema no se ha presentado. Solo constan de etiqueta diagnóstica y factores de riesgo (r/c).',
        source: 'Examen OPE Sanitat GVA 2021'
      }
    },
    {
      id: 'kp-4-2',
      topicNumber: 4,
      topicTitle: 'El Proceso de Atención de Enfermería (PAE), Modelos Teóricos y Documentación',
      shortSummary: 'Modelo de Virginia Henderson: 14 necesidades básicas y concepto de independencia/suplencia.',
      conceptTitle: 'Modelo de Virginia Henderson: Las 14 Necesidades Básicas y Niveles de Actuación',
      badge: 'Guía Clínica Oficial',
      frequencyLevel: 'Alta',
      category: 'Cuidados y Procedimientos',
      legalOrClinicalReference: 'Principios Básicos de Cuidados de Enfermería, Virginia Henderson',
      fullExplanation: `Virginia Henderson define la función propia de la enfermera como:
"Ayudar al individuo, sano o enfermo, a realizar aquellas actividades que contribuyen a su salud o a su recuperación (o a una muerte en paz) que él realizaría por sí mismo si tuviera la fuerza, voluntad o conocimientos necesarios".

Las 14 Necesidades Básicas:
1. Respirar normalmente.
2. Comer y beber adecuadamente.
3. Eliminar por todas las vías corporales.
4. Moverse y mantener posturas adecuadas.
5. Dormir y descansar.
6. Escoger la ropa adecuada (vestirse y desvestirse).
7. Mantener la temperatura corporal en límites normales.
8. Mantener la higiene corporal y la integridad de la piel.
9. Evitar los peligros ambientales y no dañar a los demás.
10. Comunicarse con los demás expresando emociones y necesidades.
11. Vivir de acuerdo con sus propios valores y creencias.
12. Ocuparse en algo cuya labor tenga un sentido de realización.
13. Participar en actividades recreativas o juegos.
14. Aprender, descubrir o satisfacer la curiosidad que conduce al desarrollo normal.

Tres niveles de relación enfermera-paciente:
- Sustituta (la enfermera hace por el paciente lo que no puede hacer: suplencia total).
- Ayudante (la enfermera asiste en lo que el paciente necesita: suplencia parcial).
- Compañera (la enfermera planifica conjuntamente con el paciente).`,
      examRelevance: 'Es el modelo conceptual enfermero por antonomasia en los centros de salud de la Conselleria de Sanitat CV.',
      tribunalQuestionStyle: 'Según el modelo de Virginia Henderson, ¿qué rol asume la enfermera cuando el paciente carece transitoriamente de la fuerza física necesaria para satisfacer una necesidad?',
      dangerousTrap: 'Confundir las 14 necesidades de Virginia Henderson con los 11 patrones funcionales de salud de Marjory Gordon.',
      mnemonicOrMemoryTip: 'Henderson = 14 Necesidades y Suplencia. Gordon = 11 Patrones Funcionales.',
      sampleQuestion: {
        question: 'En el modelo de Virginia Henderson, cuando la enfermera suple totalmente al paciente que no puede realizar una actividad esencial por falta de fuerza o conciencia, actúa como:',
        options: [
          'Compañera asesora.',
          'Sustituta de la persona.',
          'Supervisora terapéutica.',
          'Facilitadora externa.'
        ],
        correctIndex: 1,
        explanation: 'Henderson postulaba que la enfermera actúa como sustituta (hace por él), ayudante (le asiste) o compañera (le acompaña).',
        source: 'Examen EIR / OPE Sanitat'
      }
    }
  ],
  'tema-5': [
    {
      id: 'kp-5-1',
      topicNumber: 5,
      topicTitle: 'Farmacología Clínica, Cálculo de Dosis y Medicación de Alto Riesgo',
      shortSummary: 'Antídotos: Paracetamol -> N-acetilcisteína; Opiáceos -> Naloxona; Benzodiacepinas -> Flumazenilo; Heparina -> Sulfato de protamina.',
      conceptTitle: 'Antídotos Esenciales en Urgencias y Toxicología Clínica',
      badge: 'Pregunta Estrella',
      frequencyLevel: 'Muy Alta',
      category: 'Farmacología y SVA',
      legalOrClinicalReference: 'Guías de Toxicología Clínica y Farmacología de Urgencias',
      fullExplanation: `Tabla de antídotos imprescindibles para las oposiciones de enfermería de la Conselleria de Sanitat:

1. Paracetamol: N-Acetilcisteína (IV preferiblemente antes de las 8 horas de la ingesta para evitar necrosis hepática fulminante).
2. Opiáceos (morfina, fentanilo, metadona): Naloxona (0,4 mg IV; semivida corta, vigilar renarcotización).
3. Benzodiacepinas: Flumazenilo (Anexate, 0,2 mg IV en 15 seg; contraindicado si hay sospecha de ingesta concomitante de antidepresivos tricíclicos por riesgo de convulsiones).
4. Heparina no fraccionada: Sulfato de protamina (1 mg neutraliza aproximadamente 100 UI de heparina sódica).
5. Anticoagulantes orales antivitamina K (Sintrom / Acenocumarol): Vitamina K1 (fitomenadiona) y Concentrado de Complejo Protrombínico (CCP) en hemorragias graves.
6. Digoxina: Fragmentos Fab de anticuerpos antidigoxina.
7. Betabloqueantes: Glucagón IV.
8. Intoxicación por monóxido de carbono (CO): Oxígeno al 100% en mascarilla con reservorio (o cámara hiperbárica).`,
      examRelevance: 'Pregunta que aparece año tras año en los exámenes de turno libre y promoción interna.',
      tribunalQuestionStyle: 'Ante una depresión respiratoria severa y miosis puntiforme compatible con sobredosis de opiáceos, ¿cuál es el antídoto específico de elección?',
      dangerousTrap: 'Confundir el antídoto de las benzodiacepinas (Flumazenilo) con el de los opiáceos (Naloxona), o confundir la N-Acetilcisteína con el carbón activado.',
      mnemonicOrMemoryTip: 'PAN-BEN-HE: Paracetamol=N-Acetilcisteína; Benzodiacepinas=Flumazenilo; Heparina=Sulfato de Protamina.',
      sampleQuestion: {
        question: '¿Cuál es el antídoto específico para revertir los efectos anticoagulantes de la heparina sódica no fraccionada en caso de sobredosis con hemorragia activa?',
        options: [
          'Vitamina K1.',
          'Sulfato de protamina.',
          'Ácido tranexámico.',
          'Naloxona clorhidrato.'
        ],
        correctIndex: 1,
        explanation: 'El sulfato de protamina neutraliza por enlace iónico la heparina no fraccionada (1 mg neutraliza unas 100 UI de heparina sódica).',
        source: 'OPE Conselleria de Sanitat GVA'
      }
    },
    {
      id: 'kp-5-2',
      topicNumber: 5,
      topicTitle: 'Farmacología Clínica, Cálculo de Dosis y Medicación de Alto Riesgo',
      shortSummary: 'Fórmula de goteo: Gotas/minuto = (Volumen en ml * 20 gotas/ml) / (Tiempo en horas * 60 minutos).',
      conceptTitle: 'Cálculo de Dosis, Fluidoterapia y Constantes de Goteo',
      badge: 'Guía Clínica Oficial',
      frequencyLevel: 'Alta',
      category: 'Farmacología y SVA',
      legalOrClinicalReference: 'Guías de Administración Segura de Medicamentos por Vía Parenteral',
      fullExplanation: `Fórmulas fundamentales de cálculo de goteo:

1. Macrogotero convencional (1 ml = 20 gotas):
   Gotas por minuto = (Volumen total en ml * 20) / (Tiempo en horas * 60 minutos)
   Simplificación rápida: Gotas/minuto = Volumen en ml / (Horas * 3)

2. Microgotero (1 ml = 60 microgotas):
   Microgotas por minuto = ml por hora
   (Porque 60 microgotas/ml / 60 min/hora = 1).

3. Medicamentos de Alto Riesgo (MAR):
   - Cloruro Potásico (KCl) IV: JAMÁS administrar en bolo IV directo (causa asistolia cardíaca inmediata). Debe infundirse siempre diluido y a velocidad controlada en bomba.`,
      examRelevance: 'Preguntas habituales de problemas matemáticos en el examen oficial de enfermería.',
      tribunalQuestionStyle: 'Se pauta infundir 1.500 ml de suero fisiológico al 0,9% en 24 horas mediante sistema macrogotero estándar. ¿A cuántas gotas por minuto debe programarse?',
      dangerousTrap: 'Olvidar que 1 gota equivale a 3 microgotas o confundir el factor de conversión del macrogotero (20 gotas/ml) con el de transfusiones de sangre (15 gotas/ml).',
      mnemonicOrMemoryTip: 'ml/hora = Microgotas/min. Para gotas: divide ml entre (Horas * 3).',
      sampleQuestion: {
        question: 'Para administrar 1.000 ml de Suero Glucosado al 5% en 8 horas utilizando un sistema de goteo estándar (1 ml = 20 gotas), ¿a qué ritmo debe ajustarse el gotero?',
        options: [
          '21 gotas/minuto.',
          '42 gotas/minuto.',
          '63 gotas/minuto.',
          '84 gotas/minuto.'
        ],
        correctIndex: 1,
        explanation: 'Fórmula: 1.000 ml / (8 * 3) = 1.000 / 24 ≈ 41,6 gotas/minuto, lo que se redondea a 42 gotas/minuto.',
        source: 'Simulacro Oficial OPE GVA'
      }
    }
  ],
  'tema-6': [
    {
      id: 'kp-6-1',
      topicNumber: 6,
      topicTitle: 'Soporte Vital Básico, Avanzado y Atención al Paro Cardiorrespiratorio',
      shortSummary: 'Ritmos desfibrilables: Fibrilación Ventricular (FV) y Taquicardia Ventricular sin pulso (TVSP). Descarga inmediata 150-200J bifásica.',
      conceptTitle: 'Soporte Vital Avanzado: Algoritmo de Ritmos Desfibrilables vs No Desfibrilables',
      badge: 'Pregunta Estrella',
      frequencyLevel: 'Muy Alta',
      category: 'Farmacología y SVA',
      legalOrClinicalReference: 'Guías European Resuscitation Council (ERC) 2021/2025',
      fullExplanation: `Clasificación electrocardiográfica del Paro Cardiorrespiratorio según las Guías ERC:

1. Ritmos Desfibrilables (Shockables):
   - Fibrilación Ventricular (FV).
   - Taquicardia Ventricular Sin Pulso (TVSP).
   Conducta: Choque inmediato (150-200 J bifásico) -> RCP inmediata 2 minutos sin comprobar pulso inmediatamente tras la descarga.
   Fármacos:
   - Adrenalina 1 mg IV: Tras el 3er choque; repetir cada 3-5 minutos (cada 2 ciclos).
   - Amiodarona: 300 mg IV tras el 3er choque; segunda dosis de 150 mg tras el 5º choque (alternativa: Lidocaína 100 mg y 50 mg).

2. Ritmos No Desfibrilables (Non-shockables):
   - Asistolia.
   - Actividad Eléctrica Sin Pulso (AESP).
   Conducta: Desfibrilación CONTRAINDICADA. RCP inmediata 30:2 continua.
   Fármacos:
   - Adrenalina 1 mg IV lo antes posible (en el primer ciclo), repitiendo cada 3-5 minutos.
   - Búsqueda activa de causas reversibles (las 4 H y las 4 T):
     * 4 H: Hipoxia, Hipovolemia, Hipo/hiperpotasemia/metabólica, Hipotermia.
     * 4 T: Trombosis (coronaria o pulmonar), Neumotórax a Tensión, Taponamiento cardíaco, Tóxicos.`,
      examRelevance: 'Pregunta crítica en exámenes de enfermería de urgencias, hospitalaria y SAMU/SES CV.',
      tribunalQuestionStyle: 'Durante una reanimación cardiopulmonar avanzada de un adulto en ritmo de Fibrilación Ventricular, ¿en qué momento se administra la primera dosis de Adrenalina y Amiodarona?',
      dangerousTrap: 'Indicar descarga en asistolia o administrar amiodarona en ritmos no desfibrilables (la amiodarona es antiarrítmico exclusivo para FV/TVSP refractarias).',
      mnemonicOrMemoryTip: 'FV/TVSP = Choque - Choque - Choque + Adrenalina 1 mg + Amiodarona 300 mg.',
      sampleQuestion: {
        question: 'En el algoritmo de Soporte Vital Avanzado en adultos del ERC, ante una Fibrilación Ventricular refractaria, la primera dosis de Amiodarona (300 mg) se administra:',
        options: [
          'Inmediatamente antes de aplicar la primera descarga.',
          'Tras la segunda descarga desfibrilatoria.',
          'Tras la tercera descarga desfibrilatoria, al reanudar los 2 minutos de RCP.',
          'Únicamente si la asistolia persiste tras 15 minutos de reanimación.'
        ],
        correctIndex: 2,
        explanation: 'Según las guías ERC, tanto la primera dosis de adrenalina (1 mg) como de amiodarona (300 mg) se administran tras el 3º choque durante la RCP.',
        source: 'Examen OPE SAMU/SES CV'
      }
    }
  ],
  'tema-7': [
    {
      id: 'kp-7-1',
      topicNumber: 7,
      topicTitle: 'Cuidados de Heridas y Úlceras por Presión (UPP)',
      shortSummary: 'Escala de Braden: 6 subescalas. Puntuación menor = mayor riesgo (≤12 alto riesgo).',
      conceptTitle: 'Escala de Braden y Estadios de las Úlceras por Presión (GNEAUPP)',
      badge: 'Pregunta Estrella',
      frequencyLevel: 'Muy Alta',
      category: 'Cuidados y Procedimientos',
      legalOrClinicalReference: 'Documentos de Consenso GNEAUPP y Guías de Práctica Clínica de la Conselleria de Sanitat CV',
      fullExplanation: `1. Escala de Braden:
Consta de 6 subescalas:
- Percepción sensorial (1 a 4).
- Exposición a la humedad (1 a 4).
- Actividad física (1 a 4).
- Movilidad (1 a 4).
- Nutrición (1 a 4).
- Roce y peligro de lesiones / cizallamiento (1 a 3).
Rango total de puntuación: de 6 a 23 puntos.
¡Ojo a la interpretación!: A MENOR PUNTUACIÓN, MAYOR RIESGO.
- Riesgo alto: ≤ 12 puntos.
- Riesgo moderado: 13-14 puntos.
- Riesgo bajo: 15-18 puntos en mayores de 75 años (o 15-16 en adultos jóvenes).

2. Estadios de UPP (GNEAUPP):
- Categoría I: Eritema no blanqueable en piel intacta sobre prominencia ósea.
- Categoría II: Pérdida de espesor parcial de la dermis; úlcera abierta superficial con lecho rosado, flictena/ampolla intacta o rota.
- Categoría III: Pérdida total del grosor cutáneo. El tejido adiposo subcutáneo puede ser visible, pero NO están expuestos huesos, tendones ni músculos.
- Categoría IV: Pérdida total del grosor cutáneo con exposición directa de músculo, tendón o hueso.
- No clasificable: Lecho cubierto por esfacelos o escara necrótica que impide determinar la profundidad real.`,
      examRelevance: 'Pregunta clásica en todas las oposiciones sanitarias de enfermería de la Comunitat Valenciana.',
      tribunalQuestionStyle: 'En una valoración de enfermería según la Escala de Braden, un paciente que obtiene una puntuación de 11 se clasifica como:',
      dangerousTrap: 'Creer que mayor puntuación significa mayor riesgo (es al revés). En la escala de Norton y Braden, menor puntuación = mayor riesgo.',
      mnemonicOrMemoryTip: 'Braden y Norton: Cuanto MENOS sacas, PEOR estás (menor nota = más riesgo). Grado III llega a grasa; Grado IV llega a hueso/músculo.',
      sampleQuestion: {
        question: 'Una úlcera por presión que presenta pérdida de tejido cutáneo de espesor total con tejido graso subcutáneo visible, pero sin que se observen fascias, tendones ni hueso, corresponde a:',
        options: [
          'Estadio / Categoría I.',
          'Estadio / Categoría II.',
          'Estadio / Categoría III.',
          'Estadio / Categoría IV.'
        ],
        correctIndex: 2,
        explanation: 'El Estadio III se caracteriza por la pérdida total del espesor de la piel con visualización del tejido graso subcutáneo, sin exposición de músculo, tendón o hueso.',
        source: 'Examen Oficial OPE Enfermería GVA'
      }
    }
  ],
  'tema-8': [
    {
      id: 'kp-8-1',
      topicNumber: 8,
      topicTitle: 'Vacunación y Salud Comunitaria en la Comunitat Valenciana',
      shortSummary: 'Vacunas vivas atenuadas: Triple vírica (SRP), Varicela, Fiebre amarilla, Rotavirus. ¡Contraindicadas en embarazadas e inmunodeprimidos!',
      conceptTitle: 'Clasificación de Vacunas: Vivas Atenuadas vs Inactivadas y Contraindicaciones',
      badge: 'Pregunta Estrella',
      frequencyLevel: 'Muy Alta',
      category: 'Salud Pública',
      legalOrClinicalReference: 'Calendario de Vacunación e Inmunización para toda la vida de la Comunitat Valenciana',
      fullExplanation: `1. Vacunas Vivas Atenuadas:
Contienen virus o bacterias vivos modificados que han perdido su virulencia patógena pero mantienen su inmunogenicidad.
Ejemplos clave:
- Triple Vírica (Sarampión, Rúbela, Parotiditis - SRP).
- Varicela y Herpes Zóster atenuada.
- Fiebre Amarilla.
- Fiebre Tifoidea oral (cepa Ty21a).
- Rotavirus.
- BCG (Tuberculosis).
Contraindicaciones absolutas: Embarazo e inmunodepresión severa (inmunodeficiencias congénitas, VIH con CD4 < 200, tratamientos inmunosupresores biológicos o quimioterapia).

2. Cadena de frío:
- Temperatura estricta de conservación: Entre +2 ºC y +8 ºC (óptimo +4 ºC a +5 ºC).
- NUNCA congelar vacunas adsorbidas en sales de aluminio (DTPa, hepatitis, etc.) porque la congelación destruye el adyuvante.`,
      examRelevance: 'Pregunta imprescindible en convocatorias de Atención Primaria, Pediatría y Salud Pública.',
      tribunalQuestionStyle: '¿Cuál de las siguientes vacunas está contraindicada de forma sistemática durante la gestación por tratarse de una vacuna de virus vivos atenuados?',
      dangerousTrap: 'Confundir vacunas inactivadas seguras en embarazo (como la de la gripe o tos ferina/dTpa a partir de semana 27) con vacunas vivas atenuadas (triple vírica o varicela).',
      mnemonicOrMemoryTip: 'Vivas: "SRP, Varicela y Rotavirus = Vivas, Prohibidas en Embarazo".',
      sampleQuestion: {
        question: '¿Cuál de las siguientes vacunas está contraindicada en mujeres embarazadas debido a su composición?',
        options: [
          'Gripe estacional inactivada.',
          'Difteria-Tétanos-Tos ferina acelular (dTpa).',
          'Triple Vírica (Sarampión-Rubeola-Parotiditis).',
          'Hepatitis B recombinante.'
        ],
        correctIndex: 2,
        explanation: 'La vacuna Triple Vírica contiene virus vivos atenuados y está formalmente contraindicada durante el embarazo debido al riesgo teórico de daño fetal.',
        source: 'Examen OPE Sanitat GVA 2023'
      }
    }
  ],
  'tema-9': [
    {
      id: 'kp-9-1',
      topicNumber: 9,
      topicTitle: 'Enfermería Materno-Infantil, Gestación y Cuidados Neonatales en la CV',
      shortSummary: 'Test de APGAR: Evaluado al minuto 1 y a los 5 minutos de vida. Puntuación 7-10: Vigoroso.',
      conceptTitle: 'El Test de APGAR: Parámetros, Puntuación y Actuación Neonatal',
      badge: 'Pregunta Estrella',
      frequencyLevel: 'Muy Alta',
      category: 'Cuidados y Procedimientos',
      legalOrClinicalReference: 'Guías de Atención al Recién Nacido Inmediato y Reanimación Neonatal',
      fullExplanation: `El test de APGAR valora la adaptación cardiorrespiratoria y neurológica inmediata del recién nacido al medio extrauterino.
Se valora obligatoriamente al 1er MINUTO y a los 5 MINUTOS de vida (si es < 7 a los 5 min, se repite a los 10, 15 y 20 min).

Los 5 Parámetros (0, 1 o 2 puntos cada uno, total de 0 a 10):
- A (Apariencia / Color): 0 = Azul/pálido; 1 = Acrocianosis (cuerpo rosado, extremidades azuladas); 2 = Completamente sonrosado.
- P (Pulso / FC): 0 = Ausente; 1 = < 100 lpm; 2 = ≥ 100 lpm.
- G (Gesticulación / Reflejos): 0 = Sin respuesta; 1 = Muecas; 2 = Llanto vigoroso, tos o estornudo.
- A (Actividad / Tono muscular): 0 = Flácido; 1 = Cierta flexión de extremidades; 2 = Movimientos activos y buena flexión.
- R (Respiración): 0 = Ausente; 1 = Lenta, irregular; 2 = Llanto fuerte y respiración regular.

Interpretación clínica:
- 7 a 10: Recién nacido vigoroso en excelente estado.
- 4 a 6: Depresión moderada (requiere medidas de estimulación y oxigenoterapia/ventilación).
- 0 a 3: Depresión severa (requiere reanimación neonatal avanzada inmediata).`,
      examRelevance: 'Pregunta estrella en bloques de pediatría y materno-infantil de la OPE.',
      tribunalQuestionStyle: 'Un recién nacido al minuto de vida presenta FC de 115 lpm, llanto vigoroso, tono con extremidades bien flexionadas, acrocianosis distal y estornudos a la aspiración. ¿Qué puntuación de APGAR le corresponde?',
      dangerousTrap: 'Recordar que la acrocianosis (manos y pies azulados con tronco rosado) puntúa 1 en Apariencia, no 0 ni 2.',
      mnemonicOrMemoryTip: 'APGAR: Apariencia, Pulso, Gesto, Actividad, Respiración.',
      sampleQuestion: {
        question: 'En la valoración neonatal del test de APGAR al minuto de vida, un recién nacido que presenta frecuencia cardíaca de 120 lpm, llanto fuerte, acrocianosis, estornudos y flexión activa de extremidades obtiene una puntuación de:',
        options: [
          '7 puntos.',
          '8 puntos.',
          '9 puntos.',
          '10 puntos.'
        ],
        correctIndex: 2,
        explanation: 'Frecuencia cardíaca >100 (2) + Llanto/respiración fuerte (2) + Gesticulación/estornudos (2) + Tono activo (2) + Acrocianosis (1) = 9 puntos.',
        source: 'Examen OPE Sanitat GVA'
      }
    }
  ],
  'tema-10': [
    {
      id: 'kp-10-1',
      topicNumber: 10,
      topicTitle: 'Urgencias, Emergencias Sanitarias y Triaje Hospitalario y Extrahospitalario',
      shortSummary: 'Sistema Manchester de Triaje (MTS): 5 niveles de prioridad (Rojo=0min, Naranja=10min, Amarillo=60min, Verde=120min, Azul=240min).',
      conceptTitle: 'El Sistema Manchester de Triaje (MTS) y Tiempos Máximos de Atención',
      badge: 'Pregunta Estrella',
      frequencyLevel: 'Muy Alta',
      category: 'Cuidados y Procedimientos',
      legalOrClinicalReference: 'Protocolo de Triaje Manchester y Urgencias Hospitalarias de la Conselleria de Sanitat CV',
      fullExplanation: `El Sistema de Triaje Manchester (MTS) es el sistema de triaje más extendido en las urgencias de los hospitales de la Comunitat Valenciana.

Estructura de los 5 Niveles y Tiempos Máximos de Espera recomendados:
1. Nivel 1 - ROJO (Reanimación / Inmediato): Tiempo 0 minutos (atención médica y de enfermería simultánea inmediata). Ej: PCR, obstrucción de vía aérea, shock grave.
2. Nivel 2 - NARANJA (Muy urgente / Emergencia): Tiempo máximo 10 minutos. Ej: Dolor torácico sugestivo de SCACEST, focalidad neurológica aguda (código ictus), disnea severa.
3. Nivel 3 - AMARILLO (Urgente): Tiempo máximo 60 minutos. Ej: Dolor abdominal moderado-severo, fracturas cerradas sin compromiso neurovascular.
4. Nivel 4 - VERDE (Estándar / Menos urgente): Tiempo máximo 120 minutos. Ej: Traumatismo leve, herida superficial que precisa sutura.
5. Nivel 5 - AZUL (No urgente): Tiempo máximo 240 minutos. Ej: Procesos banales sin alteración de constantes vitales ni riesgo.`,
      examRelevance: 'Pregunta habitual en urgencias, cuidados críticos y servicios de urgencias hospitalarias/extrahospitalarias.',
      tribunalQuestionStyle: 'En el Sistema Manchester de Triaje implantado en los servicios de urgencias de la CV, ¿cuál es el tiempo máximo de atención asignado a la categoría Naranja?',
      dangerousTrap: 'Confundir los tiempos de Naranja (10 minutos) con Amarillo (60 minutos) o creer que el rojo tolera algún tiempo de espera.',
      mnemonicOrMemoryTip: 'Manchester: Rojo=0 | Naranja=10 | Amarillo=60 | Verde=120 | Azul=240 minutos.',
      sampleQuestion: {
        question: 'En el Sistema de Triaje Manchester (MTS), el nivel de prioridad II codificado con el color Naranja corresponde a un tiempo de espera máximo recomendado de:',
        options: [
          'Atención inmediata (0 minutos).',
          '10 minutos.',
          '30 minutos.',
          '60 minutos.'
        ],
        correctIndex: 1,
        explanation: 'El Nivel 2 (Naranja - Muy urgente) tiene un tiempo diana de atención máxima de 10 minutos.',
        source: 'OPE Urgencias y Emergencias CV'
      }
    }
  ]
};

// Helper function to get detail by topic and index or id
export function getKeyPointDetail(topicId: string, index: number): KeyPointDetail | null {
  const points = KEY_POINTS_DETAILS[topicId];
  if (!points || !points[index]) return null;
  return points[index];
}

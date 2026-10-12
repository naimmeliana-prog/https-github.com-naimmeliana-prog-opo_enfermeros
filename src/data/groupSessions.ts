import { StudySession } from '../types';

// Helper to get formatted date string for upcoming days
const getUpcomingDateStr = (daysAhead: number) => {
  const d = new Date();
  d.setDate(d.getDate() + daysAhead);
  return d.toISOString().split('T')[0];
};

export const STUDY_SESSIONS: StudySession[] = [
  {
    id: 'ses-1',
    title: 'Simulacro OPE GVA en Vivo (70 Preguntas - 90 Minutos)',
    date: getUpcomingDateStr(2),
    time: '18:00',
    durationMinutes: 90,
    organizer: 'Comunidad OpoSanitat Valencia',
    topic: 'Simulacro Global con Fórmula Oficial (-0.33 fallos)',
    participantsCount: 384,
    isRegistered: true,
    description: 'Simulacro sincronizado en tiempo real con ranking en directo entre los aspirantes a las 3.817 plazas de Sanitat GVA.'
  },
  {
    id: 'ses-2',
    title: 'Masterclass: Legislación Sanitaria CV (Ley 10/2014 & Decreto 74/2007)',
    date: getUpcomingDateStr(5),
    time: '19:30',
    durationMinutes: 60,
    organizer: 'Prof. J. Martínez (Estatutario GVA)',
    topic: 'Normativa Autonómica y Órganos de la Conselleria',
    participantsCount: 215,
    isRegistered: false,
    description: 'Repaso en directo de las preguntas más repetidas y trampas de legislación sanitaria valenciana.'
  },
  {
    id: 'ses-3',
    title: 'Maratón de Casos Clínicos y Cálculo Rápido de Dosis',
    date: getUpcomingDateStr(8),
    time: '17:00',
    durationMinutes: 75,
    organizer: 'Grupo Urgencias SAMU / La Fe',
    topic: 'Farmacología, Fluidoterapia y Shock',
    participantsCount: 167,
    isRegistered: false,
    description: 'Resolución conjunta de casos clínicos de urgencias, triaje Manchester y cálculo matemático de diluciones complejas.'
  },
  {
    id: 'ses-4',
    title: 'Sesión Nocturna Pomodoro: Preguntas Trampa Recurrentes',
    date: getUpcomingDateStr(12),
    time: '21:00',
    durationMinutes: 50,
    organizer: 'Compañeros de Oposiciones',
    topic: '50 Preguntas con mayor tasa de error en la OPE',
    participantsCount: 129,
    isRegistered: true,
    description: 'Sesión intensiva enfocada exclusivamente en trampas de enunciados, excepciones y distractores habituales.'
  }
];

const ramos = [
  {
    nombre: "Biología Celular Básica Enfermería",
    año: 1, semestre: 1, creditos: 3,
    prerequisitos: []
  },
  {
    nombre: "Psicología General Y Evolutiva",
    año: 1, semestre: 1, creditos: 4,
    prerequisitos: []
  },
  {
    nombre: "Socioantropologia I",
    año: 1, semestre: 1, creditos: 2,
    prerequisitos: []
  },
  {
    nombre: "Fundamentos De Enfermería",
    año: 1, semestre: 1, creditos: 2,
    prerequisitos: []
  },
  {
    nombre: "Promoción de la Salud",
    año: 1, semestre: 1, creditos: 3,
    prerequisitos: []
  },
  {
    nombre: "Inglés Comunicativo I",
    año: 1, semestre: 1, creditos: 3,
    prerequisitos: []
  },
  {
    nombre: "Histología Humana - Enfermeria",
    año: 1, semestre: 2, creditos: 3,
    prerequisitos: ["Biología Celular Básica Enfermería"]
  },
  {
    nombre: "Anatomía Descriptiva - Enfermería",
    año: 1, semestre: 2, creditos: 4,
    prerequisitos: ["Biología Celular Básica Enfermería"]
  },
  {
    nombre: "Prevención En Salud",
    año: 1, semestre: 2, creditos: 3,
    prerequisitos: ["Fundamentos De Enfermería", "Promoción de la Salud"]
  },
  {
    nombre: "Socioantropología II",
    año: 1, semestre: 2, creditos: 2,
    prerequisitos: ["Socioantropologia I"]
  },
  {
    nombre: "Química General Y Básica",
    año: 1, semestre: 2, creditos: 6,
    prerequisitos: []
  },
  {
    nombre: "Inglés Comunicativo II",
    año: 1, semestre: 2, creditos: 3,
    prerequisitos: ["Inglés Comunicativo I"]
  },
  {
    nombre: "Fisiología Enfermería",
    año: 2, semestre: 3, creditos: 4,
    prerequisitos: ["Histología Humana - Enfermeria", "Anatomía Descriptiva - Enfermería", "Química General Y Básica"]
  },
  {
    nombre: "Bioquímica - Enfermería",
    año: 2, semestre: 3, creditos: 3,
    prerequisitos: ["Química General Y Básica"]
  },
  {
    nombre: "Enfermería En Salud Familiar Y Comunitaria",
    año: 2, semestre: 3, creditos: 4,
    prerequisitos: ["Prevención En Salud", "Socioantropología II"]
  },
  {
    nombre: "Fundamentos De La Gestión Del Cuidado De Enfermería",
    año: 2, semestre: 3, creditos: 4,
    prerequisitos: ["Prevención En Salud", "Histología Humana - Enfermeria", "Anatomía Descriptiva - Enfermería"]
  },
  {
    nombre: "Fundamentos De Ética En Enfermería",
    año: 2, semestre: 3, creditos: 2,
    prerequisitos: []
  },
  {
    nombre: "Complementaria I",
    año: 2, semestre: 3, creditos: 2,
    prerequisitos: []
  },
  {
    nombre: "Fisiopatología Enfermería",
    año: 2, semestre: 4, creditos: 4,
    prerequisitos: ["Fisiología Enfermería", "Bioquímica - Enfermería"]
  },
  {
    nombre: "Farmacologia - Enfermeria",
    año: 2, semestre: 4, creditos: 3,
    prerequisitos: ["Fisiología Enfermería", "Bioquímica - Enfermería"]
  },
  {
    nombre: "Gestión Del Cuidado De Enfermería En El Adulto I",
    año: 2, semestre: 4, creditos: 4,
    prerequisitos: ["Fisiología Enfermería", "Bioquímica - Enfermería", "Enfermería En Salud Familiar Y Comunitaria", "Fundamentos De La Gestión Del Cuidado De Enfermería", "Fundamentos De Ética En Enfermería"]
  },
  {
    nombre: "Enfermería En El Adulto",
    año: 2, semestre: 4, creditos: 5,
    prerequisitos: ["Fisiología Enfermería", "Fundamentos De La Gestión Del Cuidado De Enfermería"]
  },
  {
    nombre: "Interacción Humana",
    año: 2, semestre: 4, creditos: 2,
    prerequisitos: ["Fundamentos De Ética En Enfermería"]
  },
  {
    nombre: "Microbiología Enfermería Obstetricia",
    año: 2, semestre: 4, creditos: 4,
    prerequisitos: ["Fisiología Enfermería", "Bioquímica - Enfermería"]
  },
  {
    nombre: "Gerencia En Salud Y Enfermería",
    año: 3, semestre: 5, creditos: 3,
    prerequisitos: ["Gestión Del Cuidado De Enfermería En El Adulto I", "Enfermería En El Adulto"]
  },
  {
    nombre: "Gestión Del Cuidado De Enfermería En El Adulto II",
    año: 3, semestre: 5, creditos: 6,
    prerequisitos: ["Fisiopatología Enfermería", "Farmacologia - Enfermeria", "Gestión Del Cuidado De Enfermería En El Adulto I", "Enfermería En El Adulto", "Interacción Humana", "Microbiología Enfermería Obstetricia"]
  },
  {
    nombre: "Metodología De La Investigación Cuantitativa",
    año: 3, semestre: 5, creditos: 3,
    prerequisitos: ["Gestión Del Cuidado De Enfermería En El Adulto I"]
  },
  {
    nombre: "Comunicación Y Liderazgo",
    año: 3, semestre: 5, creditos: 2,
    prerequisitos: ["Interacción Humana"]
  },
  {
    nombre: "Complementaria 2",
    año: 3, semestre: 5, creditos: 2,
    prerequisitos: []
  },
  {
    nombre: "Gestión De Proyectos",
    año: 3, semestre: 6, creditos: 3,
    prerequisitos: ["Gerencia En Salud Y Enfermería", "Gestión Del Cuidado De Enfermería En El Adulto II", "Metodología De La Investigación Cuantitativa"]
  },
  {
    nombre: "Enfermería Y Gestión Del Cuidado En El Adulto Mayor",
    año: 3, semestre: 6, creditos: 5,
    prerequisitos: ["Gerencia En Salud Y Enfermería", "Gestión Del Cuidado De Enfermería En El Adulto II"]
  },
  {
    nombre: "Metodología De La Investigación Cualitativa",
    año: 3, semestre: 6, creditos: 3,
    prerequisitos: []
  },
  {
    nombre: "Enfermería Y Gestión Del Cuidado En El Niño Y Adolescente I",
    año: 3, semestre: 6, creditos: 5,
    prerequisitos: ["Gestión Del Cuidado De Enfermería En El Adulto II"]
  },
  {
    nombre: "Bioética Y Enfermería",
    año: 3, semestre: 6, creditos: 2,
    prerequisitos: []
  },
  {
    nombre: "Enfermería En Salud Mental",
    año: 3, semestre: 6, creditos: 4,
    prerequisitos: ["Comunicación Y Liderazgo"]
  },
  {
    nombre: "Enfermería En Urgencias Y Desastres",
    año: 4, semestre: 7, creditos: 3,
    prerequisitos: ["Enfermería Y Gestión Del Cuidado En El Adulto Mayor", "Enfermería Y Gestión Del Cuidado En El Niño Y Adolescente I", "Enfermería En Salud Mental"]
  },
  {
    nombre: "Enfermería Basada En La Evidencia",
    año: 4, semestre: 7, creditos: 3,
    prerequisitos: ["Metodología De La Investigación Cualitativa"]
  },
  {
    nombre: "Enfermería En Salud Familiar Y Comunitaria II",
    año: 4, semestre: 7, creditos: 4,
    prerequisitos: ["Enfermería Y Gestión Del Cuidado En El Adulto Mayor", "Enfermería Y Gestión Del Cuidado En El Niño Y Adolescente I"]
  },
  {
    nombre: "Enfermería Y Gestión Del Cuidado En El Niño Y Adolescente II",
    año: 4, semestre: 7, creditos: 6,
    prerequisitos: ["Enfermería Y Gestión Del Cuidado En El Niño Y Adolescente I"]
  },
  {
    nombre: "Gestión Del Cuidado De Enfermería En Salud Mental",
    año: 4, semestre: 7, creditos: 3,
    prerequisitos: ["Enfermería En Salud Mental", "Enfermería Y Gestión Del Cuidado En El Adulto Mayor", "Enfermería Y Gestión Del Cuidado En El Niño Y Adolescente I"]
  },
  {
    nombre: "Gestión Del Cuidado De Enfermería En Urgencias Y Desastres",
    año: 4, semestre: 8, creditos: 6,
    prerequisitos: ["Enfermería En Urgencias Y Desastres", "Gestión Del Cuidado De Enfermería En Salud Mental", "Enfermería Y Gestión Del Cuidado En El Niño Y Adolescente II"]
  },
  {
    nombre: "Calidad Y Seguridad En Salud",
    año: 4, semestre: 8, creditos: 3,
    prerequisitos: ["Enfermería Basada En La Evidencia"]
  },
  {
    nombre: "Gestión Del Cuidado De Enfermería En Salud Familiar Y Comunitaria",
    año: 4, semestre: 8, creditos: 6,
    prerequisitos: ["Enfermería En Salud Familiar Y Comunitaria II", "Gestión Del Cuidado De Enfermería En Salud Mental", "Enfermería Y Gestión Del Cuidado En El Niño Y Adolescente II"]
  },
  {
    nombre: "Internado Extramural",
    año: 5, semestre: 9, creditos: 20,
    prerequisitos: []
  },
  {
    nombre: "Internado Intramural",
    año: 5, semestre: 10, creditos: 20,
    prerequisitos: []
  },
  {
    nombre: "Examen De Titulación",
    año: 5, semestre: 10, creditos: 0,
    prerequisitos: []
  }
];

// (Aquí iría la lógica de crear botones, aprobar, desbloquear, filtrar, progreso, exportar,
// como te mostré antes, adaptándola para mostrar "nombre + créditos")

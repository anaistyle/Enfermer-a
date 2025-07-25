// Malla completa con año, semestre y prerrequisitos
const ramos = [
  // Año 1
  { id: "biocel", nombre: "Biología Celular Básica Enfermería", año: 1, semestre: 1, prerequisitos: [] },
  { id: "psicologia", nombre: "Psicología General Y Evolutiva", año: 1, semestre: 1, prerequisitos: [] },
  { id: "socio1", nombre: "Socioantropologia I", año: 1, semestre: 1, prerequisitos: [] },
  { id: "fund_enf", nombre: "Fundamentos De Enfermería", año: 1, semestre: 1, prerequisitos: [] },
  { id: "promo_salud", nombre: "Promoción de la Salud", año: 1, semestre: 1, prerequisitos: [] },
  { id: "ingles1", nombre: "Inglés Comunicativo I", año: 1, semestre: 1, prerequisitos: [] },

  { id: "histo", nombre: "Histología Humana - Enfermeria", año: 1, semestre: 2, prerequisitos: ["biocel"] },
  { id: "anato", nombre: "Anatomía Descriptiva - Enfermería", año: 1, semestre: 2, prerequisitos: ["biocel"] },
  { id: "prev_salud", nombre: "Prevención En Salud", año: 1, semestre: 2, prerequisitos: ["fund_enf", "promo_salud"] },
  { id: "socio2", nombre: "Socioantropología II", año: 1, semestre: 2, prerequisitos: ["socio1"] },
  { id: "quimica", nombre: "Química General Y Básica", año: 1, semestre: 2, prerequisitos: [] },
  { id: "ingles2", nombre: "Inglés Comunicativo II", año: 1, semestre: 2, prerequisitos: ["ingles1"] },

  // Año 2
  { id: "fisiologia", nombre: "Fisiología Enfermería", año: 2, semestre: 3, prerequisitos: ["histo", "anato", "quimica"] },
  { id: "bioquimica", nombre: "Bioquímica - Enfermería", año: 2, semestre: 3, prerequisitos: ["quimica"] },
  { id: "enf_salud_fam", nombre: "Enfermería En Salud Familiar Y Comunitaria", año: 2, semestre: 3, prerequisitos: ["prev_salud", "socio2"] },
  { id: "fund_gestion", nombre: "Fundamentos De La Gestión Del Cuidado De Enfermería", año: 2, semestre: 3, prerequisitos: ["prev_salud", "histo", "anato"] },
  { id: "fund_etica", nombre: "Fundamentos De Ética En Enfermería", año: 2, semestre: 3, prerequisitos: [] },
  { id: "complementaria1", nombre: "Complementaria I", año: 2, semestre: 3, prerequisitos: [] },

  { id: "fisiopato", nombre: "Fisiopatología Enfermería", año: 2, semestre: 4, prerequisitos: ["fisiologia", "bioquimica"] },
  { id: "farmacologia", nombre: "Farmacologia - Enfermeria", año: 2, semestre: 4, prerequisitos: ["fisiologia", "bioquimica"] },
  { id: "gestion_cuidado_adulto1", nombre: "Gestión Del Cuidado De Enfermería En El Adulto I", año: 2, semestre: 4, prerequisitos: ["fisiologia", "bioquimica", "enf_salud_fam", "fund_gestion", "fund_etica"] },
  { id: "enfermeria_adulto", nombre: "Enfermería En El Adulto", año: 2, semestre: 4, prerequisitos: ["fisiologia", "fund_gestion"] },
  { id: "interaccion_humana", nombre: "Interacción Humana", año: 2, semestre: 4, prerequisitos: ["fund_etica"] },
  { id: "microbio_obstetricia", nombre: "Microbiología Enfermería Obstetricia", año: 2, semestre: 4, prerequisitos: ["fisiologia", "bioquimica"] },

  // Año 3
  { id: "gerencia_salud", nombre: "Gerencia En Salud Y Enfermería", año: 3, semestre: 5, prerequisitos: ["gestion_cuidado_adulto1", "enfermeria_adulto"] },
  { id: "gestion_cuidado_adulto2", nombre: "Gestión Del Cuidado De Enfermería En El Adulto II", año: 3, semestre: 5, prerequisitos: ["fisiopato", "farmacologia", "gestion_cuidado_adulto1", "enfermeria_adulto", "interaccion_humana", "microbio_obstetricia"] },
  { id: "metod_invest_cuant", nombre: "Metodología De La Investigación Cuantitativa", año: 3, semestre: 5, prerequisitos: ["gestion_cuidado_adulto1"] },
  { id: "comunicacion_liderazgo", nombre: "Comunicación Y Liderazgo", año: 3, semestre: 5, prerequisitos: ["interaccion_humana"] },
  { id: "complementaria2", nombre: "Complementaria 2", año: 3, semestre: 5, prerequisitos: [] },

  { id: "gestion_proyectos", nombre: "Gestión De Proyectos", año: 3, semestre: 6, prerequisitos: ["gerencia_salud", "gestion_cuidado_adulto2", "metod_invest_cuant"] },
  { id: "enf_gestion_adulto_mayor", nombre: "Enfermería Y Gestión Del Cuidado En El Adulto Mayor", año: 3, semestre: 6, prerequisitos: ["gerencia_salud", "gestion_cuidado_adulto2"] },
  { id: "metod_invest_cual", nombre: "Metodología De La Investigación Cualitativa", año: 3, semestre: 6, prerequisitos: [] },
  { id: "enf_gestion_nino_adol_i", nombre: "Enfermería Y Gestión Del Cuidado En El Niño Y Adolescente I", año: 3, semestre: 6, prerequisitos: ["gestion_cuidado_adulto2"] },
  { id: "bioetica", nombre: "Bioética Y Enfermería", año: 3, semestre: 6, prerequisitos: [] },
  { id: "enf_salud_mental", nombre: "Enfermería En Salud Mental", año: 3, semestre: 6, prerequisitos: ["comunicacion_liderazgo"] },

  // Año 4
  { id: "enf_urgencias", nombre: "Enfermería En Urgencias Y Desastres", año: 4, semestre: 7, prerequisitos: ["enf_gestion_adulto_mayor", "enf_gestion_nino_adol_i", "enf_salud_mental"] },
  { id: "enf_basada_evidencia", nombre: "Enfermería Basada En La Evidencia", año: 4, semestre: 7, prerequisitos: ["metod_invest_cual"] },
  { id: "enf_salud_fam_ii", nombre: "Enfermería En Salud Familiar Y Comunitaria II", año: 4, semestre: 7, prerequisitos: ["enf_gestion_adulto_mayor", "enf_gestion_nino_adol_i"] },
  { id: "enf_gestion_nino_adol_ii", nombre: "Enfermería Y Gestión Del Cuidado En El Niño Y Adolescente II", año: 4, semestre: 7, prerequisitos: ["enf_gestion_nino_adol_i"] },
  { id: "gestion_cuidado_salud_mental", nombre: "Gestión Del Cuidado De Enfermería En Salud Mental", año: 4, semestre: 7, prerequisitos: ["enf_salud_mental", "enf_gestion_adulto_mayor", "enf_gestion_nino_adol_i"] },

  { id: "gestion_cuidado_urgencias", nombre: "Gestión Del Cuidado De Enfermería En Urgencias Y Desastres", año: 4, semestre: 8, prerequisitos: ["enf_urgencias", "gestion_cuidado_salud_mental", "enf_gestion_nino_adol_ii"] },
  { id: "calidad_seguridad", nombre: "Calidad Y Seguridad En Salud", año: 4, semestre: 8, prerequisitos: ["enf_basada_evidencia"] },
  { id: "gestion_cuidado_salud_fam", nombre: "Gestión Del Cuidado De Enfermería En Salud Familiar Y Comunitaria", año: 4, semestre: 8, prerequisitos: ["enf_salud_fam_ii", "gestion_cuidado_salud_mental", "enf_gestion_nino_adol_ii"] },

  // Año 5
  { id: "internado_ext", nombre: "Internado Extramural", año: 5, semestre: 9, prerequisitos: [] },
  { id: "internado_int", nombre: "Internado Intramural", año: 5, semestre: 10, prerequisitos: [] },
  { id: "examen_titulacion", nombre: "Examen De Titulación", año: 5, semestre: 10, prerequisitos: [] }
];

// Estado de los ramos (cargado del localStorage o vacío)
let aprobados = JSON.parse(localStorage.getItem("aprobados")) || [];

// Guarda en localStorage
function guardar() {
  localStorage.setItem("aprobados", JSON.stringify(aprobados));
}

// Crea botón para cada ramo
function crearBoton(ramo) {
  const btn = document.createElement("button");
  btn.textContent = ramo.nombre;
  btn.className = "ramo";
  btn.id = ramo.id;

  // Bloquea si no cumple prerequisitos
  const desbloqueado = ramo.prerequisitos.every(pr => aprobados.includes(pr));
  if (!desbloqueado) btn.classList.add("bloqueado");

  // Marca si aprobado
  if (aprobados.includes(ramo.id)) btn.classList.add("aprobado");

  btn.addEventListener("click", () => {
    if (btn.classList.contains("bloqueado")) return;

    if (aprobados.includes(ramo.id)) {
      aprobados = aprobados.filter(id => id !== ramo.id);
      btn.classList.remove("aprobado");
    } else {
      aprobados.push(ramo.id);
      btn.classList.add("aprobado");
    }
    guardar();
    render();
  });

  return btn;
}

// Renderiza la malla en el DOM
function render() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  // Agrupa por año y semestre
  const agrupado = {};

  ramos.forEach(ramo => {
    const key = `Año ${ramo.año} - Semestre ${ramo.semestre}`;
    if (!agrupado[key]) agrupado[key] = [];
    agrupado[key].push(ramo);
  });

  // Ordenar claves
  const claves = Object.keys(agrupado).sort((a, b) => {
    const [aAño, aSem] = a.match(/\d+/g).map(Number);
    const [bAño, bSem] = b.match(/\d+/g).map(Number);
    if (aAño !== bAño) return aAño - bAño;
    return aSem - bSem;
  });

  claves.forEach(clave => {
    const divAñoSem = document.createElement("div");
    divAñoSem.className = "año";

    const h2 = document.createElement("h2");
    h2.textContent = clave.split(" - ")[0];
    divAñoSem.appendChild(h2);

    const h3 = document.createElement("h3");
    h3.textContent = clave.split(" - ")[1];
    divAñoSem.appendChild(h3);

    agrupado[clave].forEach(ramo => {
      const boton = crearBoton(ramo);
      divAñoSem.appendChild(boton);
    });

    contenedor.appendChild(divAñoSem);
  });

  actualizarProgreso();
  aplicarFiltro();  
}

// Actualiza la barra de progreso
function actualizarProgreso() {
  const barra = document.getElementById("barraProgreso");
  const porcentaje = Math.round((aprobados.length / ramos.length) * 100);
  barra.style.width = porcentaje + "%";
  barra.textContent = porcentaje + "% Completado";
}

// Filtrar por año y semestre
function aplicarFiltro() {
  const filtroAño = document.getElementById("filtroAño").value;
  const filtroSem = document.getElementById("filtroSemestre").value;

  document.querySelectorAll(".año").forEach(div => {
    const añoTexto = div.querySelector("h2").textContent;
    const semestreTexto = div.querySelector("h3").textContent;

    const añoNum = parseInt(añoTexto.replace("Año ", ""));
    const semestreNum = parseInt(semestreTexto.replace("Semestre ", ""));

    const cumpleAño = !filtroAño || filtroAño === "" || filtroAño == añoNum;
    const cumpleSemestre = !filtroSem || filtroSem === "" || filtroSem == semestreNum;

    div.style.display = (cumpleAño && cumpleSemestre) ? "block" : "none";
  });
}

// Reiniciar progreso
document.getElementById("resetear").addEventListener("click", () => {
  if (confirm("¿Quieres reiniciar todo tu progreso?")) {
    aprobados = [];
    guardar();
    render();
  }
});

// Exportar listado de aprobados en TXT (no PDF, para simplicidad)
document.getElementById("exportar").addEventListener("click", () => {
  if (aprobados.length === 0) {
    alert("No hay ramos aprobados para exportar.");
    return;
  }
  const nombres = ramos.filter(r => aprobados.includes(r.id)).map(r => r.nombre);
  const texto = "Ramos aprobados:\n\n" + nombres.join("\n");
  const blob = new Blob([texto], { type: "text/plain" });
  const enlace = document.createElement("a");
  enlace.download = "ramos_aprobados.txt";
  enlace.href = URL.createObjectURL(blob);
  enlace.click();
});

// Detecta cambios en filtros
document.getElementById("filtroAño").addEventListener("change", aplicarFiltro);
document.getElementById("filtroSemestre").addEventListener("change", aplicarFiltro);

// Render inicial
render();

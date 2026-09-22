/* Logica pura del juego (sin DOM). Opera sobre el estado y lo persiste. */

const RONDAS_POR_EQUIPO = 3;

function getStorage() {
  if (typeof Storage !== "undefined" && Storage.defaultState) {
    return Storage;
  }
  return require("./storage.js").Storage;
}

function getData() {
  if (typeof PREGUNTAS !== "undefined") {
    return { PREGUNTAS: PREGUNTAS };
  }
  return require("./data.js");
}

const Game = {
  nuevoId() {
    return "e" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  },

  registrarEquipo(state, datos) {
    const nombre = (datos.nombre || "").trim();
    if (!nombre) {
      return { error: "El nombre del equipo es obligatorio." };
    }
    const integrantes = (datos.integrantes || "")
      .split(",")
      .map(function (s) { return s.trim(); })
      .filter(function (s) { return s !== ""; });

    const instagrams = [datos.instagram1, datos.instagram2]
      .map(function (s) { return (s || "").trim(); })
      .filter(function (s) { return s !== ""; });

    const equipo = {
      id: this.nuevoId(),
      nombre: nombre,
      integrantes: integrantes,
      instagrams: instagrams,
      puntos: 0,
      ronda: 1,
      finalizado: false,
    };
    state.equipos.push(equipo);
    return { ok: true, equipo: equipo };
  },

  quitarEquipo(state, equipoId) {
    state.equipos = state.equipos.filter(function (e) { return e.id !== equipoId; });
    if (state.equipoActualId === equipoId) {
      state.equipoActualId = null;
    }
    return { ok: true };
  },

  iniciarEquipo(state, equipoId) {
    const equipo = state.equipos.find(function (e) { return e.id === equipoId; });
    if (!equipo) {
      return { error: "Equipo no encontrado." };
    }
    state.equipoActualId = equipoId;
    state.seleccion = { tema: null, nivel: null, preguntaId: null };
    return { ok: true, equipo: equipo };
  },

  equipoActual(state) {
    return state.equipos.find(function (e) { return e.id === state.equipoActualId; }) || null;
  },

  seleccionarTema(state, tema) {
    if (tema < 1 || tema > 6) {
      return { error: "Tema invalido." };
    }
    state.seleccion.tema = tema;
    state.seleccion.nivel = null;
    state.seleccion.preguntaId = null;
    return { ok: true };
  },

  preguntasDisponibles(tema, nivel, usadas) {
    return getData().PREGUNTAS.filter(function (p) {
      return p.tema === tema && p.nivel === nivel && usadas.indexOf(p.id) === -1;
    });
  },

  seleccionarNivel(state, nivel) {
    if (state.seleccion.tema === null) {
      return { error: "Primero elige el tema." };
    }
    if (nivel < 1 || nivel > 6) {
      return { error: "Nivel invalido." };
    }
    state.seleccion.nivel = nivel;

    const disponibles = this.preguntasDisponibles(state.seleccion.tema, nivel, state.usadas);
    if (disponibles.length === 0) {
      return { error: "Esta celda ya no tiene preguntas. Elige otra celda." };
    }
    const elegida = disponibles[Math.floor(Math.random() * disponibles.length)];
    state.seleccion.preguntaId = elegida.id;
    return { ok: true, pregunta: elegida };
  },

  preguntaActual(state) {
    if (!state.seleccion.preguntaId) return null;
    return getData().PREGUNTAS.find(function (p) { return p.id === state.seleccion.preguntaId; }) || null;
  },

  responder(state, indice) {
    const pregunta = this.preguntaActual(state);
    const equipo = this.equipoActual(state);
    if (!pregunta || !equipo) {
      return { error: "No hay pregunta o equipo activo." };
    }
    const acierto = indice === pregunta.correcta;

    if (acierto) {
      equipo.puntos += pregunta.nivel;
    }

    if (state.usadas.indexOf(pregunta.id) === -1) {
      state.usadas.push(pregunta.id);
    }
    state.historial.push({
      equipoId: equipo.id,
      tema: pregunta.tema,
      nivel: pregunta.nivel,
      preguntaId: pregunta.id,
      correcta: acierto,
      puntos: acierto ? pregunta.nivel : 0,
    });
    return { ok: true, acierto: acierto, pregunta: pregunta, equipo: equipo };
  },

  siguienteRonda(state) {
    const equipo = this.equipoActual(state);
    if (!equipo) return { error: "No hay equipo activo." };
    equipo.ronda += 1;
    state.seleccion = { tema: null, nivel: null, preguntaId: null };
    return { ok: true, equipo: equipo };
  },

  terminarEquipo(state) {
    const equipo = this.equipoActual(state);
    if (!equipo) return { error: "No hay equipo activo." };
    equipo.finalizado = true;
    state.equipoActualId = null;
    state.seleccion = { tema: null, nivel: null, preguntaId: null };
    return { ok: true, equipo: equipo };
  },

  reiniciar(state) {
    const nuevo = getStorage().defaultState();
    Object.keys(nuevo).forEach(function (k) { state[k] = nuevo[k]; });
    return { ok: true };
  },

  ranking(state) {
    return state.equipos.slice().sort(function (a, b) {
      return b.puntos - a.puntos;
    });
  },
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { Game, RONDAS_POR_EQUIPO };
}
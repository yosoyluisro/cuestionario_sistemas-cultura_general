/* Persistencia en localStorage: equipos, seleccion, usadas, historial. */

const STORAGE_KEY = "concurso_preguntas_v1";

const Storage = {
  _mem: null,

  _getBackend() {
    if (typeof localStorage !== "undefined" && localStorage) {
      return localStorage;
    }
    return null;
  },

  load() {
    const backend = this._getBackend();
    if (backend) {
      try {
        const raw = backend.getItem(STORAGE_KEY);
        if (raw) return JSON.parse(raw);
      } catch (e) {
        return this.defaultState();
      }
    }
    if (this._mem) return this._mem;
    return this.defaultState();
  },

  save(state) {
    const backend = this._getBackend();
    const json = JSON.stringify(state);
    if (backend) {
      backend.setItem(STORAGE_KEY, json);
    }
    this._mem = state;
  },

  clear() {
    const backend = this._getBackend();
    if (backend) {
      backend.removeItem(STORAGE_KEY);
    }
    this._mem = null;
  },

  defaultState() {
    return {
      equipos: [],
      equipoActualId: null,
      seleccion: { tema: null, nivel: null, preguntaId: null },
      usadas: [],
      historial: [],
    };
  },
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { Storage, STORAGE_KEY };
}
/* Controlador DOM: une el flujo con las pantallas. */

(function () {
  "use strict";

  var state = Storage.load();

  function $(id) {
    return document.getElementById(id);
  }

  function showScreen(id) {
    var screens = document.querySelectorAll(".screen");
    for (var i = 0; i < screens.length; i++) {
      screens[i].classList.remove("active");
    }
    var scr = $(id);
    scr.classList.add("active");
    if (scr.scrollTop) {
      scr.scrollTop = 0;
    }
    window.scrollTo(0, 0);
    renderNav(id);
  }

  function pantallaActiva() {
    var screens = document.querySelectorAll(".screen");
    for (var i = 0; i < screens.length; i++) {
      if (screens[i].classList.contains("active")) return screens[i].id;
    }
    return "screen-inicio";
  }

  function renderNav(activeId) {
    var map = {
      "screen-inicio": "nav-inicio",
      "screen-marcador": "nav-marcador",
      "screen-admin": "nav-admin",
    };
    ["nav-inicio", "nav-marcador", "nav-admin"].forEach(function (id) {
      var tab = $(id);
      if (tab) tab.classList.toggle("active", map[activeId] === id);
    });
  }

  function save() {
    Storage.save(state);
  }

  /* ---------- Topbar ---------- */
  function renderTopbar() {
    var equipo = Game.equipoActual(state);
    if (!equipo) {
      $("topbar").classList.add("hidden");
      return;
    }
    $("topbar").classList.remove("hidden");
    var rondas = "Ronda " + equipo.ronda + " / " + RONDAS_POR_EQUIPO;
    $("topbar-info").innerHTML =
      "<span>Equipo: " + esc(equipo.nombre) + "</span> &nbsp;|&nbsp; <span>" + rondas + "</span> &nbsp;|&nbsp; <span class='puntos-inline'>Pts: " + equipo.puntos + "</span>";
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------- Pantalla inicio ---------- */
  function renderInicio() {
    var list = $("lista-equipos");
    var equipos = state.equipos;
    list.innerHTML = "";
    $("msg-sin-equipos").classList.toggle("hidden", equipos.length > 0);

    equipos.forEach(function (e) {
      var li = document.createElement("li");
      var estado = e.finalizado ? " (terminado)" : "";
      li.innerHTML =
        "<div>" +
        "<span class='team-name'>" + esc(e.nombre) + estado + "</span><br>" +
        "<span class='team-meta'>Pts: " + e.puntos + " | Ronda " + e.ronda + " | " +
        (e.integrantes.length ? esc(e.integrantes.join(", ")) : "sin integrantes") +
        "</span>" +
        "</div>" +
        "<div class='btn-row'>" +
        "<button class='btn btn-small btn-jugar' data-id='" + e.id + "'>Jugar</button>" +
        "<button class='btn btn-small btn-quitar' data-id='" + e.id + "'>Quitar</button>" +
        "</div>";
      list.appendChild(li);
    });
  }

  function registrarEquipo(ev) {
    ev.preventDefault();
    var msg = $("msg-registro");
    msg.textContent = "";
    msg.classList.remove("error");

    var res = Game.registrarEquipo(state, {
      nombre: $("input-nombre").value,
      integrantes: $("input-integrantes").value,
      instagram1: $("input-instagram-1").value,
      instagram2: $("input-instagram-2").value,
    });
    if (res.error) {
      msg.textContent = res.error;
      msg.classList.add("error");
      return;
    }
    $("input-nombre").value = "";
    $("input-integrantes").value = "";
    $("input-instagram-1").value = "";
    $("input-instagram-2").value = "";
    save();
    renderInicio();
    renderTopbar();
  }

  /* ---------- Pantalla tema ---------- */
  function renderTemas() {
    var grid = $("grid-temas");
    grid.innerHTML = "";
    for (var t = 1; t <= 6; t++) {
      (function (tema) {
        var btn = document.createElement("button");
        btn.className = "dice-cell";
        btn.innerHTML = "<span class='num'>" + tema + "</span>" + esc(TEMAS[tema]);
        btn.addEventListener("click", function () {
          Game.seleccionarTema(state, tema);
          save();
          renderNiveles();
          showScreen("screen-nivel");
        });
        grid.appendChild(btn);
      })(t);
    }
  }

  /* ---------- Pantalla nivel ---------- */
  function renderNiveles() {
    $("resumen-tema").textContent = "Tema: " + TEMAS[state.seleccion.tema];
    var grid = $("grid-niveles");
    grid.innerHTML = "";
    for (var n = 1; n <= 6; n++) {
      (function (nivel) {
        var btn = document.createElement("button");
        btn.className = "dice-cell";
        btn.innerHTML = "<span class='num'>" + nivel + "</span>" + esc(NIVELES[nivel]);
        btn.addEventListener("click", function () {
          var res = Game.seleccionarNivel(state, nivel);
          if (res.error) {
            alert(res.error);
            return;
          }
          save();
          renderRevelar();
          showScreen("screen-revelar");
        });
        grid.appendChild(btn);
      })(n);
    }
  }

  /* ---------- Pantalla revelar ---------- */
  function renderRevelar() {
    var p = Game.preguntaActual(state);
    var tema = TEMAS[state.seleccion.tema];
    var nivel = NIVELES[state.seleccion.nivel];
    $("resumen-celda").innerHTML =
      "Tema: <strong>" + esc(tema) + "</strong> | Nivel: <strong>" + esc(nivel) + "</strong> | Puntaje: <strong>" + (p ? p.nivel : "?") + " pts</strong>";
  }

  /* ---------- Pantalla pregunta ---------- */
  function renderPregunta() {
    var p = Game.preguntaActual(state);
    if (!p) return;
    var tema = TEMAS[p.tema];
    var nivel = NIVELES[p.nivel];
    $("resumen-pregunta").textContent = "Tema: " + tema + " | Nivel: " + nivel + " | Puntaje: " + p.nivel + " pts";
    $("txt-pregunta").textContent = p.pregunta;

    var cont = $("opciones");
    cont.innerHTML = "";
    var letras = ["A", "B", "C", "D"];
    p.opciones.forEach(function (opcion, i) {
      var btn = document.createElement("button");
      btn.className = "opcion";
      btn.innerHTML =
        "<span class='opcion-letra'>" + letras[i] + "</span>" +
        "<span class='opcion-texto'>" + esc(opcion) + "</span>";
      btn.addEventListener("click", function () {
        var res = Game.responder(state, i);
        save();
        renderResultado(res);
      });
      cont.appendChild(btn);
    });
  }

  /* ---------- Pantalla resultado ---------- */
  function renderResultado(res) {
    if (res.error) {
      alert(res.error);
      return;
    }
    var el = $("txt-resultado");
    var correctaTxt = res.pregunta.opciones[res.pregunta.correcta];

    if (res.acierto) {
      el.textContent = "CORRECTO";
      el.className = "resultado correcto";
      $("txt-correcta").textContent = "Respuesta correcta: " + correctaTxt;
      $("txt-puntos").textContent = res.equipo.nombre + " suma +" + res.pregunta.nivel + " pts (total: " + res.equipo.puntos + ")";
    } else {
      el.textContent = "INCORRECTO";
      el.className = "resultado incorrecto";
      $("txt-correcta").textContent = "La respuesta correcta era: " + correctaTxt;
      $("txt-puntos").textContent = res.equipo.nombre + " no suma puntos (total: " + res.equipo.puntos + ")";
    }

    $("btn-siguiente").disabled = false;
    showScreen("screen-resultado");
    renderTopbar();
  }

  function siguienteRonda() {
    var res = Game.siguienteRonda(state);
    save();
    renderTopbar();
    if (res.equipo && res.equipo.ronda > RONDAS_POR_EQUIPO) {
      alert("El equipo ya completo " + RONDAS_POR_EQUIPO + " rondas. Puedes terminar su juego o continuar.");
    }
    renderTemas();
    showScreen("screen-tema");
  }

  function terminarEquipo() {
    var res = Game.terminarEquipo(state);
    save();
    renderTopbar();
    renderInicio();
    showScreen("screen-inicio");
  }

  /* ---------- Marcador ---------- */
  function renderMarcador() {
    var tbody = $("tbody-marcador");
    tbody.innerHTML = "";
    var ranking = Game.ranking(state);
    if (ranking.length === 0) {
      tbody.innerHTML = "<tr><td colspan='5' class='msg muted'>Sin equipos.</td></tr>";
      return;
    }
    ranking.forEach(function (e, i) {
      var tr = document.createElement("tr");
      if (e.finalizado) tr.className = "finalizado";
      tr.innerHTML =
        "<td>" + (i + 1) + "</td>" +
        "<td>" + esc(e.nombre) + "</td>" +
        "<td><strong>" + e.puntos + "</strong></td>" +
        "<td>" + e.ronda + " / " + RONDAS_POR_EQUIPO + "</td>" +
        "<td>" + (e.finalizado ? "Terminado" : "Activo") + "</td>";
      tbody.appendChild(tr);
    });
  }

  /* ---------- Admin ---------- */
  function renderAdmin() {
    var tbody = $("tbody-admin");
    tbody.innerHTML = "";
    if (state.equipos.length === 0) {
      tbody.innerHTML = "<tr><td colspan='6' class='msg muted'>Sin equipos.</td></tr>";
      return;
    }
    state.equipos.forEach(function (e) {
      var tr = document.createElement("tr");
      tr.innerHTML =
        "<td>" + esc(e.nombre) + "</td>" +
        "<td>" + esc(e.integrantes.join(", ") || "—") + "</td>" +
        "<td>" + esc((e.instagrams || []).join(", ") || "—") + "</td>" +
        "<td>" + e.puntos + "</td>" +
        "<td>" + e.ronda + "</td>" +
        "<td>" + (e.finalizado ? "Terminado" : "Activo") + "</td>";
      tbody.appendChild(tr);
    });
  }

  function reiniciar() {
    if (!confirm("Seguro que quieres reiniciar la partida? Se borran equipos, puntos y preguntas usadas.")) return;
    Game.reiniciar(state);
    save();
    renderInicio();
    renderTopbar();
    showScreen("screen-inicio");
    $("msg-admin").textContent = "Partida reiniciada.";
  }

  /* ---------- Navegacion ---------- */
  function irMarcador(volverA) {
    renderMarcador();
    showScreen("screen-marcador");
    window._volverMarcador = volverA || "screen-inicio";
  }

  function volverDeMarcador() {
    var destino = window._volverMarcador || "screen-inicio";
    showScreen(destino);
  }

  function irAdmin() {
    renderAdmin();
    showScreen("screen-admin");
  }

  /* ---------- Bindings ---------- */
  function bind() {
    $("form-equipo").addEventListener("submit", registrarEquipo);

    $("btn-volver-inicio").addEventListener("click", function () {
      showScreen("screen-inicio");
    });
    $("btn-atras-tema").addEventListener("click", function () {
      Game.seleccionarTema(state, null);
      state.seleccion.tema = null;
      save();
      renderTemas();
      showScreen("screen-tema");
    });
    $("btn-cancelar-celda").addEventListener("click", function () {
      renderNiveles();
      showScreen("screen-nivel");
    });

    $("btn-revelar").addEventListener("click", function () {
      renderPregunta();
      showScreen("screen-pregunta");
    });

    $("btn-siguiente").addEventListener("click", siguienteRonda);
    $("btn-terminar").addEventListener("click", terminarEquipo);

    $("btn-marcador").addEventListener("click", function () { irMarcador(undefined); });
    $("btn-marcador-inicio").addEventListener("click", function () { irMarcador("screen-inicio"); });
    $("btn-marcador-volver").addEventListener("click", volverDeMarcador);

    $("btn-admin").addEventListener("click", irAdmin);
    $("btn-admin-inicio").addEventListener("click", irAdmin);
    $("btn-admin-volver").addEventListener("click", function () {
      showScreen("screen-inicio");
    });
    $("btn-reiniciar").addEventListener("click", reiniciar);

    $("nav-inicio").addEventListener("click", function () {
      showScreen("screen-inicio");
    });
    $("nav-marcador").addEventListener("click", function () {
      irMarcador(pantallaActiva());
    });
    $("nav-admin").addEventListener("click", irAdmin);

    $("lista-equipos").addEventListener("click", function (ev) {
      var target = ev.target;
      if (!target || !target.dataset) return;
      var id = target.dataset.id;
      if (target.classList.contains("btn-jugar")) {
        var res = Game.iniciarEquipo(state, id);
        if (res.error) {
          alert(res.error);
          return;
        }
        save();
        renderTopbar();
        renderTemas();
        showScreen("screen-tema");
      } else if (target.classList.contains("btn-quitar")) {
        if (confirm("Quitar este equipo?")) {
          Game.quitarEquipo(state, id);
          save();
          renderTopbar();
          renderInicio();
        }
      }
    });
  }

  /* ---------- Init ---------- */
  renderInicio();
  renderTopbar();
  renderTemas();
  bind();

  /* Arrancar directamente en una pantalla util si ya habia partida */
  var equipo = Game.equipoActual(state);
  if (equipo && state.seleccion.preguntaId) {
    if (state.historial.length > 0) {
      var ultimo = state.historial[state.historial.length - 1];
      if (ultimo.preguntaId === state.seleccion.preguntaId) {
        renderResultado({
          acierto: ultimo.correcta,
          pregunta: Game.preguntaActual(state),
          equipo: Game.equipoActual(state),
        });
        return;
      }
    }
    renderPregunta();
    showScreen("screen-pregunta");
  } else if (equipo && state.seleccion.nivel) {
    renderRevelar();
    showScreen("screen-revelar");
  } else if (equipo && state.seleccion.tema) {
    renderNiveles();
    showScreen("screen-nivel");
  } else if (equipo) {
    renderTemas();
    showScreen("screen-tema");
  }
})();
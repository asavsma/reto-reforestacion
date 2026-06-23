const especies = [
  {
    id: "anacahuita",
    nombre: "Anacahuita",
    imagen: "assets/anacahuita.png",
    texto: "Aporta valor ecológico y destaca en zonas urbanas y espacios para polinizadores.",
    stats: {
      sequia: "⭐⭐⭐⭐⭐",
      calor: "⭐⭐⭐⭐⭐",
      urbana: "⭐⭐⭐⭐⭐",
      montana: "⭐⭐☆☆☆",
      biodiversidad: "⭐⭐⭐⭐⭐"
    },
    uso: "Ideal para parques, camellones y corredores verdes urbanos."
  },
  {
    id: "mezquite",
    nombre: "Mezquite",
    imagen: "assets/mezquite.png",
    texto: "Es muy resistente a la sequía y al calor.",
    stats: {
      sequia: "⭐⭐⭐⭐⭐",
      calor: "⭐⭐⭐⭐⭐",
      urbana: "⭐⭐⭐⭐☆",
      montana: "⭐⭐☆☆☆",
      biodiversidad: "⭐⭐⭐⭐⭐"
    },
    uso: "Excelente para proyectos en zonas áridas o con poca disponibilidad de agua."
  },
  {
    id: "sabino",
    nombre: "Sabino",
    imagen: "assets/sabino.png",
    texto: "Es ideal para ríos, arroyos y zonas con humedad.",
    stats: {
      sequia: "⭐⭐☆☆☆",
      calor: "⭐⭐⭐⭐☆",
      urbana: "⭐⭐⭐☆☆",
      montana: "⭐⭐☆☆☆",
      biodiversidad: "⭐⭐⭐⭐⭐"
    },
    uso: "Recomendado para restaurar ríos, arroyos y ecosistemas asociados al agua."
  },
  {
    id: "encino",
    nombre: "Encino",
    imagen: "assets/encino.png",
    texto: "Es clave para ecosistemas de montaña y recuperación del bosque.",
    stats: {
      sequia: "⭐⭐⭐⭐☆",
      calor: "⭐⭐⭐⭐☆",
      urbana: "⭐⭐⭐☆☆",
      montana: "⭐⭐⭐⭐⭐",
      biodiversidad: "⭐⭐⭐⭐⭐"
    },
    uso: "Ideal para recuperar bosques de montaña y fortalecer la biodiversidad."
  },
  {
    id: "pino",
    nombre: "Pino piñonero",
    imagen: "assets/pino.png",
    texto: "Se adapta a zonas serranas y contribuye a recuperar la cobertura vegetal.",
    stats: {
      sequia: "⭐⭐⭐⭐☆",
      calor: "⭐⭐⭐☆☆",
      urbana: "⭐⭐☆☆☆",
      montana: "⭐⭐⭐⭐⭐",
      biodiversidad: "⭐⭐⭐☆☆"
    },
    uso: "Muy adecuado para proyectos de restauración en zonas serranas y semiáridas."
  },
  {
    id: "huizache",
    nombre: "Huizache",
    imagen: "assets/huizache.png",
    texto: "Es resistente y valioso para polinizadores.",
    stats: {
      sequia: "⭐⭐⭐⭐⭐",
      calor: "⭐⭐⭐⭐⭐",
      urbana: "⭐⭐⭐☆☆",
      montana: "⭐⭐☆☆☆",
      biodiversidad: "⭐⭐⭐⭐⭐"
    },
    uso: "Ideal para restaurar zonas secas y promover la presencia de polinizadores."
  }
];

const expedientes = [
  {
    titulo: "🔥 Incendio forestal en la Sierra Madre",
    etiqueta: "📂 Expediente 01",
    historia: `
      Hace seis meses, un incendio forestal afectó una zona de la Sierra Madre Oriental en Nuevo León.
      Aunque la vegetación comienza a recuperarse de forma natural, algunas áreas requieren apoyo mediante
      acciones de restauración ecológica.
      <br><br>
      Como parte del Equipo de Restauración Ambiental, tu misión es asignar <strong>3 espacios de plantación</strong>.
      Puedes repetir especies o combinarlas.
    `,
    prioridades: [
      "🏔️ Adaptación a ecosistemas de montaña",
      "🐝 Recuperación de biodiversidad",
      "💧 Resistencia a periodos secos"
    ],
    puntos: {
      anacahuita: 60,
      mezquite: 55,
      sabino: 35,
      encino: 100,
      pino: 95,
      huizache: 50
    }
  },
  {
    titulo: "🏙️ Isla de calor urbana",
    etiqueta: "📂 Expediente 02",
    historia: `
      Durante los últimos años, las zonas urbanas de Nuevo León han registrado temperaturas cada vez más elevadas.
      <br><br>
      La escasez de árboles, la abundancia de superficies de concreto y asfalto, así como la falta de espacios verdes,
      han favorecido el incremento del fenómeno conocido como "isla de calor urbana".
      <br><br>
      Como parte del Equipo de Restauración Ambiental, tu misión es desarrollar un proyecto de reforestación urbana
      para mejorar el confort térmico, incrementar la cobertura vegetal y favorecer la biodiversidad en la ciudad.
    `,
    prioridades: [
      "☀️ Resistencia al calor urbano",
      "💧 Bajo requerimiento de agua",
      "🐝 Beneficio para polinizadores",
      "🏙️ Adaptación a entornos urbanos"
    ],
    puntos: {
      anacahuita: 100,
      mezquite: 90,
      sabino: 45,
      encino: 65,
      pino: 35,
      huizache: 85
    }
  }
];

let expedienteActual = 0;
let seleccion = [];

const contenedorCartas = document.getElementById("cartas");
const contador = document.getElementById("contador");
const botonConfirmar = document.getElementById("confirmar");
const resultado = document.getElementById("resultado");
const bono = document.getElementById("bono");
const espacios = document.querySelectorAll(".espacio");
const modal = document.getElementById("modal");
const modalCarta = document.getElementById("modalCarta");
const cerrarModal = document.getElementById("cerrarModal");

function cargarExpediente(){
  const expediente = expedientes[expedienteActual];

  document.querySelector(".etiqueta").textContent = expediente.etiqueta;
  document.querySelector(".mision h2").textContent = expediente.titulo;

  document.querySelector(".mision").innerHTML = `
    <p class="etiqueta">${expediente.etiqueta}</p>
    <h2>${expediente.titulo}</h2>
    <p>${expediente.historia}</p>

    <div class="prioridades">
      <h3>🎯 Prioridades de esta misión</h3>
      ${expediente.prioridades.map(p => `<div class="prioridad">${p}</div>`).join("")}
    </div>
  `;

  seleccion = [];
  bono.style.display = "none";
  resultado.style.display = "none";
  actualizarEspacios();
}

function renderCartas(){
  contenedorCartas.innerHTML = "";

  especies.forEach((especie, index) => {
    const carta = document.createElement("div");
    carta.classList.add("carta");

    carta.innerHTML = `
      <img src="${especie.imagen}" alt="${especie.nombre}">
      <h2>${especie.nombre}</h2>

      <div class="botones-carta">
        <button class="ver" onclick="verCarta(${index})">
          🔎 Ver detalles
        </button>
      </div>
    `;

    contenedorCartas.appendChild(carta);
  });
}

function agregarEspecie(index){
  if(seleccion.length >= 3){
    alert("Ya ocupaste los 3 espacios de plantación.");
    return;
  }

  seleccion.push(index);
  actualizarEspacios();
}

function actualizarEspacios(){
  espacios.forEach((espacio, i) => {
    if(seleccion[i] !== undefined){
      espacio.innerHTML = `
        <span>${especies[seleccion[i]].nombre}</span>
        <button class="quitar" onclick="quitarEspecie(${i})">✕</button>
      `;
      espacio.classList.add("lleno");
    } else {
      espacio.textContent = "Vacío";
      espacio.classList.remove("lleno");
    }
  });

  contador.textContent = `Espacios ocupados: ${seleccion.length} / 3`;
  botonConfirmar.disabled = seleccion.length !== 3;
}

function quitarEspecie(posicion){
  seleccion.splice(posicion, 1);
  actualizarEspacios();
}

function verCarta(index){
  const especie = especies[index];

  modalCarta.innerHTML = `
    <div class="modal-carta">
      <img src="${especie.imagen}" alt="${especie.nombre}">
      <h2>${especie.nombre}</h2>

      <div class="estadistica"><span>💧 Sequía</span><strong>${especie.stats.sequia}</strong></div>
      <div class="estadistica"><span>☀️ Calor</span><strong>${especie.stats.calor}</strong></div>
      <div class="estadistica"><span>🏙️ Urbana</span><strong>${especie.stats.urbana}</strong></div>
      <div class="estadistica"><span>🏔️ Montaña</span><strong>${especie.stats.montana}</strong></div>
      <div class="estadistica"><span>🐝 Biodiversidad</span><strong>${especie.stats.biodiversidad}</strong></div>

      <div class="uso">
        <strong>💡 Uso recomendado</strong>
        <p>${especie.uso}</p>
      </div>

      <button class="seleccionar-modal" onclick="agregarEspecie(${index}); cerrarVistaCarta();">
        🌱 Seleccionar especie
      </button>
    </div>
  `;

  modal.style.display = "flex";
}

function cerrarVistaCarta(){
  modal.style.display = "none";
}

botonConfirmar.addEventListener("click", () => {
  const expediente = expedientes[expedienteActual];

  let subtotal = 0;
  let detalle = "";

  seleccion.forEach(index => {
    const especie = especies[index];
    const puntos = expediente.puntos[especie.id];

    subtotal += puntos;

    detalle += `
      <div class="detalle">
        <h3>🌳 ${especie.nombre} — ${puntos} puntos</h3>
        <p>${especie.texto}</p>
      </div>
    `;
  });

  const especiesUnicas = new Set(seleccion.map(index => especies[index].id));
  let puntosBono = 0;

  if(especiesUnicas.size === 3){
    puntosBono = 20;
    bono.innerHTML = `
      <h2>🏅 Bono obtenido</h2>
      <h3>🐝 Diversidad Biológica</h3>
      <p>Tu selección incluye tres especies distintas, lo que favorece la resiliencia del ecosistema.</p>
      <strong>+20 puntos</strong>
    `;
    bono.style.display = "block";
  } else if(especiesUnicas.size === 2){
    puntosBono = 10;
    bono.innerHTML = `
      <h2>🌱 Bono obtenido</h2>
      <h3>Diversidad Biológica</h3>
      <p>Combinaste más de una especie, ayudando a fortalecer la diversidad del proyecto.</p>
      <strong>+10 puntos</strong>
    `;
    bono.style.display = "block";
  } else {
    bono.style.display = "none";
  }

  const total = subtotal + puntosBono;

  let nivel = "";

  if(total >= 260){
    nivel = "🥇 Restauración ejemplar";
  } else if(total >= 220){
    nivel = "🥈 Restauración exitosa";
  } else if(total >= 180){
    nivel = "🥉 Restauración aceptable";
  } else {
    nivel = "⚠️ Restauración insuficiente";
  }
let insignia = "";
let descripcionInsignia = "";

if(expedienteActual === 0){
  insignia = "🔥 Bosque Resiliente";
  descripcionInsignia = "Ayudaste a restaurar un ecosistema afectado por incendios forestales.";
}

if(expedienteActual === 1){
  insignia = "🏙️ Ciudad Fresca";
  descripcionInsignia = "Diseñaste una estrategia de arborización para reducir la isla de calor urbana.";
}
  const haySiguiente = expedienteActual < expedientes.length - 1;

  resultado.style.display = "block";
  resultado.innerHTML = `
    <h2>Resultado del ${expediente.etiqueta}</h2>
    <p><strong>Puntuación:</strong> ${total} puntos</p>
    <p><strong>Nivel obtenido:</strong> ${nivel}</p>
    <p><strong>Subtotal por especies:</strong> ${subtotal} puntos</p>
    <p><strong>Bono por diversidad:</strong> ${puntosBono} puntos</p>
    ${detalle}
    <p><strong>Aprendizaje:</strong> La especie adecuada depende del contexto y de los objetivos del proyecto.</p>
    <div class="tarjeta-insignia">
  <h2>🏆 Insignia desbloqueada</h2>

  <h3>${insignia}</h3>

  <p>${descripcionInsignia}</p>
</div>

    ${haySiguiente ? `<button onclick="siguienteExpediente()">Continuar al siguiente expediente</button>` : `<h3>🏆 Juego completado</h3>`}
  `;

  resultado.scrollIntoView({ behavior: "smooth" });
});

function siguienteExpediente(){
  expedienteActual++;
  cargarExpediente();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

if (cerrarModal) {
  cerrarModal.addEventListener("click", cerrarVistaCarta);
}

if (modal) {
  modal.addEventListener("click", function(e){
    if(e.target === modal){
      cerrarVistaCarta();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const inicio = document.getElementById("inicio");
  const juego = document.getElementById("juego");
  const comenzarJuego = document.getElementById("comenzarJuego");

  if (comenzarJuego) {
    comenzarJuego.addEventListener("click", () => {
      inicio.style.display = "none";
      juego.classList.remove("oculto");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  renderCartas();
  cargarExpediente();
});

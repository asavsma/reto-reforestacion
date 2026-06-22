const especies = [
  {
    nombre: "Anacahuita",
    imagen: "assets/anacahuita.png",
    puntos: 60,
    texto: "Aporta valor ecológico y puede apoyar la restauración, aunque destaca más en zonas urbanas y espacios para polinizadores."
  },
  {
    nombre: "Mezquite",
    imagen: "assets/mezquite.png",
    puntos: 55,
    texto: "Es muy resistente a la sequía y al calor, aunque no es la especie más representativa para bosque de montaña."
  },
  {
    nombre: "Sabino",
    imagen: "assets/sabino.png",
    puntos: 35,
    texto: "Es ideal para ríos, arroyos y zonas con humedad, pero no es la mejor opción para esta misión serrana."
  },
  {
    nombre: "Encino",
    imagen: "assets/encino.png",
    puntos: 100,
    texto: "Excelente elección. Es una especie clave para ecosistemas de montaña y favorece la recuperación del bosque."
  },
  {
    nombre: "Pino piñonero",
    imagen: "assets/pino.png",
    puntos: 95,
    texto: "Muy buena elección. Se adapta a zonas serranas y contribuye a recuperar la cobertura vegetal."
  },
  {
    nombre: "Huizache",
    imagen: "assets/huizache.png",
    puntos: 50,
    texto: "Es resistente y valioso para polinizadores, pero se asocia más con zonas áridas o semiáridas."
  }
];

let seleccion = [];

const contenedorCartas = document.getElementById("cartas");
const contador = document.getElementById("contador");
const botonConfirmar = document.getElementById("confirmar");
const resultado = document.getElementById("resultado");
const bono = document.getElementById("bono");
const espacios = document.querySelectorAll(".espacio");

especies.forEach((especie, index) => {
  const carta = document.createElement("div");
  carta.classList.add("carta");

  carta.innerHTML = `
    <img src="${especie.imagen}" alt="${especie.nombre}">
    <h2>${especie.nombre}</h2>
    <p>Agregar especie</p>
  `;

  carta.addEventListener("click", () => agregarEspecie(index));

  contenedorCartas.appendChild(carta);
});

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

botonConfirmar.addEventListener("click", () => {
  let subtotal = 0;
  let detalle = "";

  seleccion.forEach(index => {
    const especie = especies[index];
    subtotal += especie.puntos;

    detalle += `
      <div class="detalle">
        <h3>🌳 ${especie.nombre} — ${especie.puntos} puntos</h3>
        <p>${especie.texto}</p>
      </div>
    `;
  });

  const especiesUnicas = new Set(seleccion);
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

  resultado.style.display = "block";
  resultado.innerHTML = `
    <h2>Resultado del Expediente 01</h2>
    <p><strong>Puntuación:</strong> ${total} puntos</p>
    <p><strong>Nivel obtenido:</strong> ${nivel}</p>
    <p><strong>Subtotal por especies:</strong> ${subtotal} puntos</p>
    <p><strong>Bono por diversidad:</strong> ${puntosBono} puntos</p>
    ${detalle}
    <p><strong>Aprendizaje:</strong> Una reforestación exitosa consiste en elegir especies adecuadas para el sitio y procurar diversidad biológica.</p>
  `;

  resultado.scrollIntoView({ behavior: "smooth" });
});

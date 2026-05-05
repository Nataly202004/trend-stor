// ====================================
//   TECHSTORE – script.js
// ====================================
 
// ------ VARIABLES GLOBALES ------
const cantidades = [0, 0, 0, 0];
const nombreProductos = [
  "Laptop UltraSlim",
  "Auriculares Pro",
  "Smartwatch X10",
  "Cámara 4K Pro"
];
 
// ------ CARRITO: AGREGAR PRODUCTO ------
function agregar(indice) {
  cantidades[indice]++;
 
  const span = document.getElementById("cant-" + indice);
  if (span) {
    span.textContent = cantidades[indice];
 
    // Animación visual del número
    span.style.transform = "scale(1.5)";
    span.style.transition = "transform 0.2s ease";
    setTimeout(() => {
      span.style.transform = "scale(1)";
    }, 200);
  }
 
  actualizarTotal();
  console.log("Producto agregado:", nombreProductos[indice], "| Cantidad:", cantidades[indice]);
}
 
// ------ CARRITO: ACTUALIZAR TOTAL ------
function actualizarTotal() {
  const total = cantidades.reduce(function(suma, c) {
    return suma + c;
  }, 0);
 
  const totalEl = document.getElementById("total-items");
  if (totalEl) {
    totalEl.textContent = total;
  }
}
 
// ------ CARRITO: IR A PAGAR ------
function irAPagar() {
  const total = cantidades.reduce(function(suma, c) {
    return suma + c;
  }, 0);
 
  const msgPago = document.getElementById("msg-pago");
 
  if (total === 0) {
    msgPago.textContent = "⚠️ Agrega al menos un producto al carrito.";
    msgPago.style.color = "#ff5f7e";
    console.log("Carrito vacío. No se puede procesar la compra.");
    return;
  }
 
  msgPago.textContent = "⏳ Procesando compra... Función simulada.";
  msgPago.style.color = "#7c6fff";
 
  setTimeout(function() {
    msgPago.textContent = "✅ ¡Compra realizada con éxito! Gracias por tu pedido.";
    msgPago.style.color = "#4cff91";
    console.log("Compra simulada exitosamente. Total artículos:", total);
  }, 1800);
}
 
// ------ LOGIN: INICIAR SESIÓN ------
function mostrarLogin() {
  alert("🔒 Funcionalidad en desarrollo.\nPronto podrás iniciar sesión.");
  console.log("Botón Iniciar sesión presionado – funcionalidad pendiente.");
}
 
// ------ FORMULARIO: VALIDACIÓN ------
function validarFormulario(event) {
  event.preventDefault();
 
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const edad = parseInt(document.getElementById("edad").value);
  const password = document.getElementById("password").value;
 
  const msgEl = document.getElementById("msg-form");
 
  // Limpiar mensaje anterior
  msgEl.className = "msg-form";
  msgEl.textContent = "";
 
  // Validación: nombre
  if (nombre === "") {
    mostrarMensaje(msgEl, "error", "❌ El nombre no puede estar vacío.");
    console.log("Error: Nombre vacío.");
    return;
  }
 
  // Validación: correo contiene @
  if (!correo.includes("@")) {
    mostrarMensaje(msgEl, "error", "❌ El correo no es válido. Debe contener '@'.");
    console.log("Error: Correo inválido –", correo);
    return;
  }
 
  // Validación: edad
  if (isNaN(edad) || edad < 10) {
    mostrarMensaje(msgEl, "error", "❌ La edad debe ser mayor o igual a 10 años.");
    console.log("Error: Edad inválida –", edad);
    return;
  }
 
  // Validación: contraseña
  if (password.length < 6) {
    mostrarMensaje(msgEl, "error", "❌ La contraseña debe tener al menos 6 caracteres.");
    console.log("Error: Contraseña muy corta –", password.length, "caracteres.");
    return;
  }
 
  // Todo válido
  mostrarMensaje(msgEl, "exito", "✅ ¡Cuenta creada exitosamente! Bienvenido, " + nombre + ".");
  console.log("Registro exitoso:", { nombre, correo, edad });
 
  // Limpiar formulario
  document.getElementById("form-registro").reset();
}
 
// Función auxiliar para mostrar mensajes
function mostrarMensaje(elemento, tipo, texto) {
  elemento.className = "msg-form " + tipo;
  elemento.textContent = texto;
}
 
// ------ MODO OSCURO / CLARO ------
function toggleModo() {
  const body = document.querySelector("body");
  const btnToggle = document.querySelector(".toggle-modo");
 
  body.classList.toggle("modo-claro");
 
  if (body.classList.contains("modo-claro")) {
    btnToggle.textContent = "☀️";
    localStorage.setItem("modo", "claro");
    console.log("Modo cambiado a: Claro");
  } else {
    btnToggle.textContent = "🌙";
    localStorage.setItem("modo", "oscuro");
    console.log("Modo cambiado a: Oscuro");
  }
}
 
// ------ INICIALIZACIÓN ------
document.addEventListener("DOMContentLoaded", function() {
  console.log("TechStore inicializado correctamente.");
 
  // Restaurar modo guardado
  const modoGuardado = localStorage.getItem("modo");
  const btnToggle = document.querySelector(".toggle-modo");
 
  if (modoGuardado === "claro") {
    document.body.classList.add("modo-claro");
    if (btnToggle) btnToggle.textContent = "☀️";
  }
 
  // Evento: botón "Ir a pagar"
  const btnPagar = querySelector(".btn-pagar");
  if (btnPagar) {
    btnPagar.addEventListener("click", irAPagar);
  }
 
  // Evento: formulario submit
  const formulario = document.getElementById("form-registro");
  if (formulario) {
    formulario.addEventListener("submit", validarFormulario);
  }
 
  // Smooth scroll para menú de navegación
  const linksNav = document.querySelectorAll("nav a[href^='#']");
  linksNav.forEach(function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute("href"));
      if (destino) {
        destino.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
 
// Helper: alias de querySelector
function querySelector(selector) {
  return document.querySelector(selector);
}
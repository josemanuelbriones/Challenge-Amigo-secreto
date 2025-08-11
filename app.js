let arregloAmigos = []; // Inicializamos el array de forma más limpia.

function agregarAmigo() {
  const amigo = document.getElementById("amigo").value.trim(); // Obtenemos el valor y eliminamos espacios en blanco.

  if (amigo === "") {
    alert("Por favor, ingresa un nombre de amigo.");
    return;
  }

  arregloAmigos.push(amigo);
  document.getElementById("amigo").value = ""; // Limpiamos el campo después de agregar.
  mostrarAmigos();
}

function mostrarAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpiamos la lista antes de mostrar.

  if (arregloAmigos.length === 0) {
    lista.innerHTML = "<li>No hay amigos agregados.</li>";
    return;
  }

  // Usamos forEach para una iteración más moderna y legible.
  arregloAmigos.forEach(amigo => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (arregloAmigos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * arregloAmigos.length);
  const amigoSorteado = arregloAmigos[indiceAleatorio];

  alert(`El amigo sorteado es: ${amigoSorteado}`);
}
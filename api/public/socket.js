// Invoke a io
/*
 * io() => Enciende la conexion para que mi client
 * pueda emitar y recibir eventos
 */

const server = io();

// * Cliente quiero que emitas un mensaje con el keyword
// * "hello:petter" para que mi servidor pueda reconcer este evento
//? emit => Es el encargado de poder enviar eventos
server.emit("hello:petter", "Spiderman no way home");

//? on => Es el encargado de poder recibir eventos
server.on("bye:petter", (message) => {
  console.log(message);
});

// Capturar los texto de mis inputs
//* Primero capture mi formulario que tiene la clase form-comment
const form = document.querySelector(".form-comment");

//? Cuando detectectes el evento submit de este form haz lo siguiente
form.addEventListener("submit", function (e) {
  //? Evitar que recargue la pagina
  e.preventDefault();

  const comment = e.target[0].value;
  const author = e.target[1].value;
  const body = { comment, author };

  //* Envia el evento al servidor para que este guarde mensaje
  server.emit("new:comment", body);

  let comments_array = [];

  //* Esta a la espera de una respuesta
  server.on("save:comment", (message) => {
    console.log(message);
    comments_array.push(message);

    async function getComments() {
      let url = "http://localhost:8080/api/comments";

      try {
        let res = await fetch(url);
        return await res.json();

      } catch (error) {
        console.log(error);
      }
    }

    async function renderComments() {
      let comments = await getComments();

      document.getElementById("data").innerHTML = "";

      Object.values(comments).forEach(c => {

        for (let i of Object.keys(c)) {

          console.log(c[i].comment);

          let tr = document.createElement("tr");

          let td = document.createElement("td");
          td.innerHTML = c[i].id;

          let td2 = document.createElement("td");
          td2.innerHTML = c[i].comment;

          let td3 = document.createElement("td");
          td3.innerHTML = c[i].author;

          tr.appendChild(td);
          tr.appendChild(td2);
          tr.appendChild(td3);
          document.getElementById("data").appendChild(tr);
        }
      });
    }
    renderComments();
  });

  e.target[0].value = "";
  e.target[1].value = "";

  // ?Quiero guarda estos datos en un array en mi servidor
});
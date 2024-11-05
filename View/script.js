const url = "http://localhost:8080/task/1";

function hideLoader() {
  document.getElementById("loading").style.display = "none";
}

function show(task) {
  let tab = `
      <thead>
          <tr>
              <th scope="col">#</th>
              <th scope="col">Description</th>
              <th scope="col">Username</th>
              <th scope="col">User Id</th>
          </tr>
      </thead>
      <tr>
          <td scope="row">${task.id}</td>
          <td>${task.description}</td>
          <td>${task.user.username}</td>
          <td>${task.user.id}</td>
      </tr>
  `;
  document.getElementById("tasks").innerHTML = tab;
}

async function getAPI(url) {
  try {
      const response = await fetch(url, { method: "GET" });
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Dados recebidos:", data);
      hideLoader();
      show(data); // Passa o objeto único diretamente
  } catch (error) {
      console.error("Erro ao buscar dados da API:", error);
      hideLoader();
  }
}

getAPI(url);

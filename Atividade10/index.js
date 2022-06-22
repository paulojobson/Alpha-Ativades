let produtos = [];
let cont = 0;
let num = 1;
document.getElementById("btao-incluir").addEventListener("click", function () {
  const nome = document.getElementById("nome").value;
  const descricao = document.getElementById("descricao").value;
  const valor = document.getElementById("valor").value;

  const date = new Date();
  let sucesso = document.getElementById("sucesso");
  let fracasso = document.getElementById("falha");

  document.getElementById("sucesso").innerHTML = "";
  document.getElementById("falha").innerHTML = "";

  if (nome != "" || descricao != "" || valor != "") {
    const produto = {
      id: [num],
      nome: [nome],
      descricao: [descricao],
      valor: [valor],
      incluidoEm: [date],
    };

    produtos.push(produto);
    num++;
    sucesso.textContent = `Produto ${produto.nome} cadastrado com sucesso`;
  } else {
    fracasso.textContent = `Falha,o produto não pode ser cadastrado!`;
  }
});

document
  .getElementById("btao-editar")
  .addEventListener("click", () => finishEdit());

let objId;
function editHandler(id) {
  let i = 0;
  objId = id;

  while (i < produtos.length) {
    if (produtos[i]["id"] == id) {
      document.getElementById("btao-editar").style.display = "flex";
      document.getElementById("btao-incluir").style.display = "none";

      const nome = document.getElementById("nome");
      const descricao = document.getElementById("descricao");
      const valor = document.getElementById("valor");

      nome.value = produtos[i]["nome"];
      descricao.value = produtos[i]["descricao"];
      valor.value = produtos[i]["valor"];

      return;
    }

    i++;
  }
}

function finishEdit() {
  document.getElementById("btao-editar").style.display = "none";
  document.getElementById("btao-incluir").style.display = "flex";

  let i = 0;
  console.log(objId);
  while (i < produtos.length) {
    if (produtos[i]["id"] == objId) {
      const nome = document.getElementById("nome");
      const descricao = document.getElementById("descricao");
      const valor = document.getElementById("valor");

      produtos[i]["nome"] = nome.value;
      produtos[i]["descricao"] = descricao.value;
      produtos[i]["valor"] = valor.value;

      return;
    }

    i++;
  }
}

function deleteHandler(id) {
  let i = 0;

  while (i < produtos.length) {
    if (produtos[i]["id"] == id) {
      produtos[i] = undefined;

      return;
    }

    i++;
  }
}

function addRow(table) {
  let i = 1;

  document.getElementById("container").innerHTML = `
    <table id="table">
      <tr>
        <th>Produto</th>
        <th>ID</th>
        <th>Valor</th>
        <th>Editar</th>
        <th>Apagar</th>
      </tr>
    </table>`;

  let tableRef = document.getElementById("table");

  while (i <= produtos.length) {
    if (produtos[i - 1]) {
      tableRef.innerHTML += `
    <tr>
      <td onclick="apresentar(${produtos[i - 1]["id"]})">${
        produtos[i - 1]["nome"]
      }</td>
      <td>${produtos[i - 1]["id"]}</td>
      <td>${produtos[i - 1]["valor"]}</td>
      <td class="icons"><img src="./images/caneta.svg" onclick="editHandler(${
        produtos[i - 1]["id"]
      })" /></td>
      <td class="icons"><img src="./images/lixeira.svg" onclick="deleteHandler(${
        produtos[i - 1]["id"]
      })" /></td>
    </tr>`;
    }
    i++;
  }
}

document.getElementById("btao-listar").addEventListener("click", function () {
  document.getElementById("sucesso").innerHTML = "";
  document.getElementById("falha").innerHTML = "";

  addRow("table");
});

function apresentar(id) {
  let i = 0;

  while (i < produtos.length) {
    if (produtos[i]["id"] == id) {
      document.getElementById("result").style.display = "flex"
      const objT = new Date(produtos[i]["incluidoEm"]);
      document.getElementById("result").innerHTML = `
      <p>id: ${produtos[i]["id"]}</p>
      <p>nome: ${produtos[i]["nome"]}</p>
      <p>descrição: ${produtos[i]["descricao"]}</p>
      <p>valor: ${produtos[i]["valor"]}</p>
      <p>${objT.getDate()}/${objT.getMonth()}/${objT.getFullYear()} – ${objT.getHours()}:${objT.getMinutes()}:${objT.getSeconds()}</p>
      `;
      return;
    }

    i++;
  }
}

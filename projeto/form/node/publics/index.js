let selectedUser

async function cadastro (){
    const nameCadastro = document.getElementById('nome').value
    const emailCadastro = document.getElementById('email').value
    const reqBody = {
        name: nameCadastro,
        email: emailCadastro
    }

    const response = await fetch("http://192.168.15.29:8000/users", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(reqBody)
    })
    const responseJson = await response.json()

    console.log(responseJson)
    lista()
}

async function lista(){
    const response = await fetch ("http://192.168.15.29:8000/users",{
        method: "GET",
        headers: {'Content-Type': 'application/json'},
    })
    const responseJson = await response.json()

    console.log(responseJson)

    const table = document.getElementById("table-body")
    table.innerHTML = ""
    responseJson.users.forEach(user => {
        table.innerHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td><img src="../../images/caneta.svg" onclick="showEdit(${user.id})"/></td>
                <td><img src="../../images/lixeira.svg"onclick="deletar(${user.id})"/></td>
            </tr>
            `
    })
}

async function deletar (id){
    const response = await fetch(`http://192.168.15.29:8000/users/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })
    const responseJson = await response.json()

    console.log(responseJson)
    lista()
    console.log (id)
}
function showEdit(id){
    selectedUser = id
    document.getElementById("edit").style.display = "block"
    document.getElementById("label-edit").innerText = `Editar o usuário ${id}`
}
function closeEdit(){
    document.getElementById("edit").style.display = "none"
}

async function edit (){
    const name = document.getElementById("name-edit").value
    const email = document.getElementById("email-edit").value
    const reqBody = {
        name: name,
        email: email
    }
    const response = await fetch(`http://192.168.15.29:8000/users/${selectedUser}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(reqBody)
    })
    const responseJson = await response.json()

    console.log(responseJson)
    lista()
    closeEdit()
}


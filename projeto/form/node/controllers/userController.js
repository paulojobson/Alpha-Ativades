let users = require('./users')

function create (request, response) {
    const user = request.body
    user.id = `${users.length+1}`
    let userExists = false

    users.forEach((actualUser) => {
        if (actualUser.email === user.email) {
            userExists = true
        }
    })

    if (userExists) {
        response.status(400).send({msg:'User Already Exists!'})
    } else {
        users.push(user)
        response.send({msg:'Success!'})
    }
}

function read (request, response) {
    const id = request.params.id
    let userFound = false

    if (id) {
        const responseUsers = []

        users.forEach((actualUser) => {
            if (actualUser.id === actualUser.id) {
                responseUsers.push(actualUser)
                userFound = true
            }
        })
        
        if (userFound) {
            response.send({responseUsers})
        } else {
            response.status(404).send({msg:'User Not Found!'})
        }

    }

    response.send({users})
}

function update (request, response) {
    const id = request.params.id

    const name = request.body.name
    const email = request.body.email
    response.send({name,email})
    users = users.map((actualUser) => {
        if (actualUser.id === id) {
            actualUser.name = name || actualUser.name
            actualUser.email = email || actualUser.email
            actualUser.id = actualUser.id
        }

        return actualUser
    })

    response.send({msg:'Success!'})
}

function remove (request, response) {
    const id = request.params.id
    users = users.filter((actualUser) => actualUser.id !== id)
    response.send({msg:'Success!'})
}

module.exports = {
    create,
    read,
    update,
    remove
}

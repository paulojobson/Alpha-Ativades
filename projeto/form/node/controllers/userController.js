let users = require('./users')

function create (request, response) {
    const user = request.body
    let userExists = false

    users.forEach((actualUser) => {
        if (actualUser.email === user.email) {
            userExists = true
        }
    })

    if (userExists) {
        response.status(400).send('User Already Exists!')
    } else {
        users.push(user)
        response.send('Success!')
    }
}

function read (request, response) {
    const email = request.params.email
    let userFound = false

    if (email) {
        const responseUsers = []

        users.forEach((actualUser) => {
            if (actualUser.email.includes(email)) {
                responseUsers.push(actualUser)
                userFound = true
            }
        })
        
        if (userFound) {
            response.send(responseUsers)
        } else {
            response.status(404).send('User Not Found!')
        }

    }

    response.send(users)
}

function update (request, response) {
    const userEmail = request.params.userEmail

    const name = request.body.name
    const age = request.body.age
    const email = request.body.email
    const gender = request.body.gender

    users = users.map((actualUser) => {
        if (actualUser.email === userEmail) {
            actualUser.name = name || actualUser.name
            actualUser.age = age || actualUser.age
            actualUser.email = email || actualUser.email
            actualUser.gender = gender || actualUser.gender
        }

        return actualUser
    })

    response.send('Success!')
}

function remove (request, response) {
    const email = request.params.email
    users = users.filter((actualUser) => actualUser.email !== email)
    response.send('Success!')
}

module.exports = {
    create,
    read,
    update,
    remove
}
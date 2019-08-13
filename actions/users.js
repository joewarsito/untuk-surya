const User = require("../models/user")
const { isInteger } = require('lodash')
const { toLower } = require('lodash')
const { toUpper } = require('lodash')

const create = (req) => {
    let { name, email, phone } = req.body
    email = toLower(email)
    console.log(`Emailnya ${email}`)

    var pola = /.+@.+\..+/;
    console.log(email.pola)

    if((pola.email) === false) {
        return "Email salah"
        console.log(pola.email)
    }

    var insert_data = {
        name,
        email,
        phone
    }

    let data = new User(insert_data)
    data.save()

    return data
}

const getAll = async () => {
    let query = await User.find({}).exec()
    console.log(`Result ${query}`)

    return query
}

module.exports = {
    create,
    getAll
}
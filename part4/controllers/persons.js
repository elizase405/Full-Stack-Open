const personsRouter = require("express").Router()
const Person = require("./models/person")

personsRouter.get("/api/persons", (req, res, next) => {
    Person.find({}).then(persons => res.json(persons)).catch(error => next(error))
})

personsRouter.get("/api/persons/:id", (req, res, next) => {
    const id = req.params.id
    Person.findById(id)
        .then(result => result ? res.json(result) : res.status(404))
        .catch(err => next(err))
})

personsRouter.post("/api/persons", (req, res, next) => {
    const { name, number } = req.body

    if (!name || !number) {
        return res.status(400).json({ error: "No content" }).end()
    }

    /*
    if (persons.find(person => person.name === name))
    {
        return res.status(400).json({error: "Name must be unique"})
    }
        */
    const person = new Person({ name, number })
    person.save()
        .then(savedPerson => res.status(201).json(savedPerson))
        .catch(error => next(error))
})

personsRouter.put("/api/persons/:id", (req, res, next) => {
    const { name, number } = req.body

    if (!name || !number)
        return res.status(400).json({ error: "content missing" })

    const updatedPerson = {
        name,
        number
    }
    Person.findByIdAndUpdate(req.params.id, updatedPerson)
        .then(result => res.json(result))
        .catch(error => next(error))
})

personsRouter.delete("/api/persons/:id", (req, res, next) => {
    Person.findByIdAndDelete(req.params.id)
        .then(result => res.status(204).json(result))
        .catch(error => next(error))
})

personsRouter.get("/info", async (req, res) => {
    const len = await Person.countDocuments()
    const text = `<p>Phonebook has info for ${len} people</p><p>${Date()}</p>`
    res.send(text)
})

modules.exports = personsRouter

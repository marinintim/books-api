const Router = require('express').Router
const bodyParser = require('body-parser')

const Cart = require('../cart') 
const Books = require('../books')
const api = Router()

api.use(bodyParser.urlencoded({extended: false}))
api.use(bodyParser.json())

api.get('/books', getBooks)
api.get('/books/:id', getBookById)

api.post('/cart', postCart)
api.get('/cart', getCart)

function getBooks(req, res, next) {
    const books = Books.getAll()
    res.json(books)
}

function getBookById(req, res, next) {
    const book = Books.byId(req.params.id)
    res.json(book)
}

function getCart(req, res, next) {
    const items = Cart.get(req.cookie)
    res.json(items)
}

function postCart(req, res, next) {
   const items = req.body.items
   const result = Cart.add(items)
   res.json(result)
}

module.exports = api

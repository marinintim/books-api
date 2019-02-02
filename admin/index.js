const Router = require('express').Router
const Admin = Router()
const Books = require('../books')
const Cart = require('../cart')

Admin.get('/books', listBooks)
Admin.get('/orders', listOrders)

function listBooks(req, res, next) {
    res.render('admin/books.pug', { books: Books.getAll() })
}

function listOrders(req, res, next) {
    res.render('admin/orders.pug', { orders: Cart.getAllOrders() })
}

module.exports = Admin
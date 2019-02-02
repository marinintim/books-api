const books = require('./books.json')

const index_by_id = books.reduce((map, b, ind) => {
    map[b.id] = ind
    return map
}, {})

const Books = {
    byId(id) {
        if (id in index_by_id) {
            return books[index_by_id[id]]
        }
        return null
    },
    getAll() {
        return books
    }
}

module.exports = Books

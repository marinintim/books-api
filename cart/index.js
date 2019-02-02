const sessionStore = {}

let next_id = 100
const gen_next_id = () => next_id++

const Cart = {
    get(id) {
        if (id in sessionStore) return sessionStore[id]
        else return null
    },
    add(items, id) {
        if (id in sessionStore) {
            let c = sessionStore[id]
            c.concat(items)
        } else {
            let c = items.slice()
            sessionStore[id] = c
        }
        return sessionStore[id]
    },
    getAllOrders() {
        return sessionStore
    }
}

module.exports = Cart

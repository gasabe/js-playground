// Playground para practicar JavaScript

const users = [
  { name: "Ana", active: true },
  { name: "Juan", active: false },
  { name: "Lucía", active: true },
  { name: "Pedro", active: false }
]

// filter() - filtra elementos que cumplen una condición
const activeUsers = users.filter(user => user.active === true)
console.log("Usuarios activos:", activeUsers)

// map() - transforma cada elemento
const names = users.map(user => user.name)
console.log("Nombres:", names)

// find() - encuentra el primer elemento que cumple la condición
const firstActive = users.find(user => user.active)
console.log("Primer activo:", firstActive)

// some() - verifica si al menos uno cumple
const hasInactive = users.some(user => !user.active)
console.log("¿Hay inactivos?:", hasInactive)

// every() - verifica si todos cumplen
const allActive = users.every(user => user.active)
console.log("¿Todos activos?:", allActive)

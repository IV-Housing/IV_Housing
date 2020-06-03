// sortFuncs.js (sort comparison funcions)

export function sortAscendingTotal(h1,h2) { return h1['totalPrice']-h2['totalPrice']; }
export function sortDescendingTotal(h1,h2) { return h2['totalPrice']-h1['totalPrice']; }
export function sortAscendingPerPerson(h1,h2) { return h1['totalPrice']/h1['size']-h2['totalPrice']/h2['size']; }
export function sortDescendingPerPerson(h1,h2) { return h2['totalPrice']/h2['size']-h1['totalPrice']/h1['size']; }

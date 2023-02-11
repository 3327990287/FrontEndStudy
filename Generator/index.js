function* Gen() {
  yield 1
  yield 2
  yield 3
}

const g1 = Gen()
console.log(g1)
console.log(g1.next())
console.log(g1.next())
console.log(g1.next())
console.log(g1.next())

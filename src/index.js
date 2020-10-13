module.exports = function towelSort (matrix) {
  let evenBoolean = false
  const result = []

  if (matrix === undefined) return result

  matrix.forEach(array => {
    if (evenBoolean) {
      array.reverse().forEach(n => result.push(n))
      evenBoolean = false
    } else {
      array.forEach(n => result.push(n))
      evenBoolean = true
    }
  })
  return result
}

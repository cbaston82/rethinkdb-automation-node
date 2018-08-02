function resolveIt (query) {
  const res = Promise.resolve(query)
  return res
    .then((item) => {
      return item
    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = { resolveIt }

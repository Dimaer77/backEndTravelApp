function findHandler(query) {
  const queryName = Object.keys(query)[0];
  return Array.isArray(query[queryName])
    ? query[queryName].map((el) => ({
        [queryName]: el,
      }))
    : [{ [queryName]: query[queryName] }];
}

module.exports = { findHandler };

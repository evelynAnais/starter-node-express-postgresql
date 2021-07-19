const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const categoriesService = require("./categories.service");

async function list(req, res) {
  const data = await categoriesService.list();
  res.json({ data });
}

// for error handling
// async function list(req, res, next) {
//   try {
//     const data = await categoriesService.list();
//     res.json({ data });
//   } catch (error) {
//     next(error);
//   }
// }

// function list(req, res, next) {
//   categoriesService
//     .list()
//     .then((data) => res.json({ data }))
//     .catch(next);
// }

module.exports = {
  list: asyncErrorBoundary(list),
};
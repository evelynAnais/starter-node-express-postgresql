const asyncErrorBoundary = require('../errors/asyncErrorBoundary');
const productsService = require('./products.service');

// function productExists(req, res, next) {
//   productsService
//     .read(req.params.productId)
//     .then((product) => {
//       if (product) {
//         res.locals.product = product;
//         return next();
//       }
//       next({ status: 404, message: `Product cannot be found.` });
//     })
//     .catch(next);
// }

async function productExists(req, res, next) {
  const product = await productsService.read(req.params.productId);
  if (product) {
    res.locals.product = product;
    return next();
  }
  next({ status: 404, message: `Product cannot be found.` });
}

function read(req, res) {
  const { product: data } = res.locals;
  res.json({ data });
}

async function list(req, res, next) {
  const data = await productsService.list();
  res.json({ data });
}

// function list(req, res, next) {
//   productsService
//     .list()
//     .then((data) => res.json({ data }))
//     .catch(next);
// }

module.exports = {
  read: [asyncErrorBoundary(productExists), read],
  list: asyncErrorBoundary(list),
};

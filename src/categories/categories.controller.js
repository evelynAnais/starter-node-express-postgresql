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


async function getSlogan(request) {
  try {
  let bob = await generateSlogan(request)
    console.log(`Your request was: ${request}`);
    console.log(`Your slogan is: ${bob}`);
  } catch (error) {
    console.log(error)
  }
}

async function fullSession(request) {
  try{
  await generateMessage()
  console.log(await generateMessage())
    let getlogan = await getSlogan(request)
    console.log(getlogan)
    let gooodbye = await goodbye()
    console.log(gooodbye);
  } catch (error) {
    console.log(error)
  }
}

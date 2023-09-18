const whitelist = ["http://localhost:5000"];

const corsOptions = (req, callback) => {
  let corsOptions;
  if (whitelist.indexOf(req.header("origin")) !== -1)
    corsOptions = { origin: true };
  else corsOptions = { origin: true };

  callback(null, corsOptions);
};
module.exports = corsOptions;

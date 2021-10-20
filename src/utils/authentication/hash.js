const bcrypt = require('bcrypt');


bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
  return hash
});
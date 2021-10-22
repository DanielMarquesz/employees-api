const app = require('../index')
const chai = require('chai');
const chaiHttp = require('chai-http');

// const userMock = new user()

chai.should()

chai.use(chaiHttp)

describe("Should cover all the routes of userController", async () => {
  it("Should Get all the users", (done) => {
    chai.request(app)
      .get("/users")
      .end((err, res) => {
        res.should.have.status(200)
        done()
      })
  })
})


// {
//   "users": [
//     {
//       "id": 1,
//       "name": "Daniel",
//       "email": "daniel@marques.com",
//       "password": "123456",
//       "createdAt": "2021-03-04T13:02:13.000Z",
//       "updatedAt": "2021-03-04T13:02:13.000Z"
//     },
//     {
//       "id": 2,
//       "name": "Ana Júlia",
//       "email": "julia@julia.com",
//       "password": "123456",
//       "createdAt": "2021-03-18T16:17:43.000Z",
//       "updatedAt": "2021-03-18T16:17:43.000Z"
//     }
//   ]
// }
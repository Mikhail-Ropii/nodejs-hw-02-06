const request = require("supertest");

const app = require("../../app");
const { User } = require("../../models/user");
const mongoose = require("mongoose");

const { DB_TEST_HOST, PORT } = process.env;

describe("test singin module", () => {
  let server;
  beforeAll(() => (server = app.listen(PORT)));
  afterAll(() => server.close());

  beforeEach((done) => {
    mongoose.connect(DB_TEST_HOST).then(() => done());
  });
  afterEach(() => {
    mongoose.connection.db.dropCollection("users", () => {
      mongoose.connection.close();
    });
  });
  test("login route", async () => {
    const newUser = {
      name: "mik",
      email: "qwe@qwe.com",
      password: "123456",
      avatarURL: "qwe",
    };

    const user = await User.create(newUser);

    const loginUser = {
      email: "qwe@qwe.com",
      password: "123456",
    };

    const response = await request(app)
      .post("/api/users/singin")
      .send(loginUser);
    expect(response.statusCode).toBe(200);
    const { body } = response;
    expect(body.token).toBeTruthy();
    const { token } = await User.findById(user._id);
    expect(body.token).toBe(token);
    expect(body.user).toEqual({
      email: expect.stringMatching(""),
      subscription: expect.stringMatching(""),
    });
  });
});

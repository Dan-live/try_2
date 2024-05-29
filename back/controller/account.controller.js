const db = require("../db");
class AccountController {
  async createAccount(req, res) {
    const { name, lastName, email, password } = req.body;
    console.log(name, lastName, email, password);
    const newAcc = await db.query(
      'INSERT INTO account (name, "lastName", email, password) values ($1, $2, $3, $4) RETURNING *',
      [name, lastName, email, password]
    );
    res.json(newAcc.rows[0]);
  }
  async getAccount(req, res) {
    const { email, password } = req.query;
    console.log(req.query);
    const acc = await db.query(
      "SELECT * FROM account where email = $1 AND password = $2",
      [email, password]
    );
    res.json(acc.rows[0]);
  }
  async getAccountById(req, res) {
    const id = req.params.id;
    const acc = await db.query("SELECT * FROM account where id = $1", [id]);
    res.json(acc.rows[0]);
  }
}

module.exports = new AccountController();

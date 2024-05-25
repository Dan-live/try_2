const db = require("../db");
class ToDoController {
  async createTask(req, res) {
    const { accId, task } = req.body;
    console.log(accId, task);
    const newTask = await db.query(
      'INSERT INTO "toDoList" ("accId", task) values ($1, $2) RETURNING *',
      [accId, task]
    );
    res.json(newTask.rows[0]);
  }
  async getTask(req, res) {
    const { accId } = req.body;
    console.log(accId);
    const rows = await db.query(
      'SELECT * FROM "toDoList" where "accId" = $1 ',
      [accId]
    );
    res.json(rows.rows);
  }
  async delTask(req, res) {
    const id = req.params.id;
    console.log(req.params.id);
    const rows = await db.query('DELETE FROM "toDoList" where "id" = $1', [id]);
    res.json(rows.rows[0]);
  }
  // async getAccountById(req, res){
  //     const id = req.params.id
  //     const acc = await db.query('SELECT * FROM account where id = $1', [id])
  //     res.json(acc.rows[0])
  // }
}

module.exports = new ToDoController();

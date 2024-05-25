const Router = require("express");
const router = new Router();
const ToDoController = require("../controller/todo.controller");

router.post("/todo", ToDoController.createTask);
//router.get('/contact/:id', ToDoController.getOneContacts)
router.get("/todo", ToDoController.getTask);
//router.put('/contact/:id', contactController.updateContacts)
router.delete("/todo/:id", ToDoController.delTask);

module.exports = router;

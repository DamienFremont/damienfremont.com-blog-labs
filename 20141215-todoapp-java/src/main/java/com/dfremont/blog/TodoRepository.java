package com.dfremont.blog;

public class TodoRepository {

	// datas
	private static TodoModel[] todos = new TodoModel[] { //
	//
			new TodoModel("task 1 from backend", false), //
			new TodoModel("task 2 from backend", false) };

	// methods

	public TodoModel[] findAll() {
		return todos;
	}

	public void updateAll(TodoModel[] updatedTodos) {
		todos = updatedTodos;
	}

}

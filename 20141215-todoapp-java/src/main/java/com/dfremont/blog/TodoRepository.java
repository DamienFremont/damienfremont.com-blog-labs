package com.dfremont.blog;

public class TodoRepository {

	// datas
	private static TodoModel[] todos = new TodoModel[] { //
	//
			new TodoModel("linge", false), //
			new TodoModel("vaisselle", false) };

	// methods

	public TodoModel[] findAll() {
		return todos;
	}

	public void updateAll(TodoModel[] updatedTodos) {
		todos = updatedTodos;
	}

}

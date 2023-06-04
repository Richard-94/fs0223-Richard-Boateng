import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { List } from 'src/app/Models/list';
import { TodoListService } from 'src/app/todo-list.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  todos: List[] = [];
  newTodo:List = new List("", false, 0);
  inputError: boolean | undefined;

  constructor(
    private showTodo: TodoListService,
    private router: ActivatedRoute){}

  ngOnInit(): void {
    const completedTodos = localStorage.getItem('completedTodos');
    if (completedTodos) {
      this.todos = JSON.parse(completedTodos);
    } else {
      this.getList();
    }
  }

  getList() {
    this.showTodo.getList()
      .then(res => this.todos = res);
  }

  switchTask(todo: List): void {
    this.showTodo.switchTask(todo);
    const index = this.todos.findIndex(task => task.id === todo.id);
    if (index !== -1) {
      this.todos.splice(index, 1);
      localStorage.setItem('completedTodos', JSON.stringify(this.todos));
    }
  }

  elaborate() {
    if (this.newTodo.title.trim() === '') {
      this.inputError = false;
    } else {
      this.inputError = true;
      this.showTodo.showList(this.newTodo)
        .then(res => {
          console.log(res)
          this.newTodo = new List('', false, 0);
          this.getList();
        });
    }
  }



}

import { Component } from '@angular/core';
import { List } from 'src/app/Models/list';
import { TodoListService } from 'src/app/todo-list.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent {
  todos: List[] = [];
  newTodo:List = new List("", false, 0);
  inputError: boolean | undefined;

  constructor(private showTodo:TodoListService){}

  ngOnInit():void {
    this.getCompletedTodos();

  }
  getCompletedTodos() {
    this.showTodo.getList()
      .then(res => this.todos = this.showTodo.showTask(true));
  }


  switchTask(todo: List): void {
    todo.completed = !todo.completed;
    this.showTodo.switchTask(todo);
    this.getCompletedTodos();
  }

  eliminate(id?:number){
    this.showTodo.eliminateTask(id)
    .then(res =>{
      //alert("task eliminated");
      this.getCompletedTodos()
    })

  }

}

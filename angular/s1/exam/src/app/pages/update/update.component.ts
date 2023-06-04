import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { List } from 'src/app/Models/list';
import { TodoListService } from 'src/app/todo-list.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  newTodo:List = new List("", false, 0);

  constructor(
    private showTodo: TodoListService,
    private router: ActivatedRoute){}

    ngOnInit(){
      this.router.params
      .subscribe((params:any)=>{
        this.showTodo.singleTask(params.id)
        .then(res => {
          this.newTodo = res
        })
      })
    }

      changes(){
    this.showTodo.changesToTask(this.newTodo)
    .then(res => console.log(res));
    this.newTodo = new List('', false, 0);
  }

}

import { Injectable } from '@angular/core';
import { List } from './Models/list';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  showActivePost(arg0: boolean): any {
    throw new Error('Method not implemented.');
  }
 private task:List[]=[]

  address:string = 'http://localhost:3000/todo'


  constructor() { }
  async getList():Promise<List[]>{
    const response = await fetch(this.address);
    return await response.json();
  }

  async showList(myList: List): Promise<List> {
    const response = await fetch(this.address, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(myList)
    });
    return await response.json();
  }


 async singleTask(id:number):Promise<List>{
    const response = await fetch(this.address + '/' + id);
   return await response.json();
  }


 showTask(status:boolean):List[]{
  return this.task.filter(tod => tod.completed === status);
 }

 switchTask(newTask: List): void {
  newTask.completed = !newTask.completed;
  this.task.push(newTask);
}


  async changesToTask(work:List){
  const response = await fetch(this.address + '/' + work.id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(work)
  });
  return await response.json();
}

  async eliminateTask(id:number = 0){
  const response = await fetch(this.address + '/' + id, {
    method: 'DELETE',
  });
  return await response.json();

}

}

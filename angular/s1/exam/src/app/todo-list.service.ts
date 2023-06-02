import { Injectable } from '@angular/core';
import { List } from './Models/list';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

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

}

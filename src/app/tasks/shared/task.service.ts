import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Task[]>(`${environment.apiUrl}/tasks`);
  }

  getById(id: string) {
    return this.http.get<Task>(`${environment.apiUrl}/tasks/${id}`);
  }

  save(task: Task) {
 const taskBody = {
   description: task.description,
   completed: task.completed
 };
 if ( task._id) {
   return this.http.put<Task>(`${environment.apiUrl}/tasks/${task._id}`, taskBody);
 } else {
  console.log(taskBody);
  return this.http.post<Task>(`${environment.apiUrl}/tasks/`, taskBody);
 }
  }

  delete(id: string) {
    return this.http.delete(`${environment.apiUrl}/tasks/${id}`);
  }
}

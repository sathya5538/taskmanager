import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = 'http://localhost:8086/api/tasks'; // your Spring Boot API endpoint

  constructor(private http: HttpClient) {}

  // ✅ Get all tasks
  getAllTasks(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  // ✅ Get a task by ID
  getTaskById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // ✅ Add new task
  addTask(task: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, task);
  }

  // ✅ Update task
  updateTask(id: number, task: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, task);
  }

  // ✅ Delete task
  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}

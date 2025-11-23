import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.http.get<any[]>('http://localhost:8086/api/tasks').subscribe({
      next: (data) => (this.tasks = data),
      error: (err) => console.error('Error loading tasks:', err)
    });
  }

 deleteTask(id: number): void {
  if (confirm('🗑️ Are you sure you want to delete this task?')) {
    this.http.delete(`http://localhost:8086/api/tasks/${id}`).subscribe({
      next: () => {
        alert('✅ Task deleted successfully!');
        this.loadTasks(); // refresh list instantly
      },
      error: (err) => {
        console.error('Error deleting task:', err);
        alert('⚠️ Failed to delete task.');
      }
    });
  }
}

    }


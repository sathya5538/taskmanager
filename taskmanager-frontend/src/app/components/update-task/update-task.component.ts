import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-task',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  taskId!: number;
  task = {
    name: '',
    description: '',
    completed: false
  };

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.taskId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadTask();
  }

  loadTask(): void {
    this.http.get<any>(`http://localhost:8086/api/tasks/${this.taskId}`).subscribe({
      next: (data) => {
        this.task = data;
      },
      error: (err) => {
        console.error('Error loading task:', err);
      }
    });
  }

  onSubmit(): void {
    this.http.put(`http://localhost:8086/api/tasks/${this.taskId}`, this.task).subscribe({
      next: () => {
        alert('✅ Task updated successfully!');
        this.router.navigate(['/tasks']);
      },
      error: (err) => {
        console.error('Error updating task:', err);
        alert('⚠️ Failed to update task.');
      }
    });
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  task = {
    name: '',
    description: '',
    completed: false
  };

  // 🧠 Inject Router & HttpClient here
  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(): void {
    if (!this.task.name.trim() || !this.task.description.trim()) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    this.http.post('http://localhost:8086/api/tasks', this.task).subscribe({
      next: () => {
        alert('✅ Task added successfully!');
        this.router.navigate(['/tasks']);
      },
      error: (err) => {
        console.error('Error adding task:', err);
        alert('⚠️ Failed to add task. Please check backend connection.');
      }
    });
  }
}


import { Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';

export const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'tasks', component: TaskListComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'update-task/:id', component: UpdateTaskComponent }
];

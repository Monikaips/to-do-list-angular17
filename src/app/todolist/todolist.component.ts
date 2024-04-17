import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  taskArray = [{ taskName: 'Brush teeth', isCompleted: false }];
  completedTasks: any[] = [];

  onSubmit(form: NgForm) {
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    });
    form.reset();
  }

  onDeleteTask(index: number) {
    this.taskArray.splice(index, 1);
  }

  onDeleteCompletedTask(task: any) {
    const index = this.completedTasks.indexOf(task);
    if (index !== -1) {
      this.completedTasks.splice(index, 1);
    }
  }

  onCheck(index: number) {
    const task = this.taskArray[index];
    task.isCompleted = !task.isCompleted;

    if (task.isCompleted) {
      this.completedTasks.push(task);
      this.taskArray.splice(index, 1);
    } else {
      const completedIndex = this.completedTasks.indexOf(task);
      if (completedIndex !== -1) {
        this.completedTasks.splice(completedIndex, 1);
      }
    }
  }
}
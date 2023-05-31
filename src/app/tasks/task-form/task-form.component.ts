import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../shared/task';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task: Task = new Task();
  title: string = 'Nova Tarefa';

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) { }

  ngOnInit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    if (id) {
      // tslint:disable-next-line: radix
      this.taskService.getById(id).subscribe(task => {
        this.task = task;
        this.title = 'Editando Tarefa';
      });
    }
  }
  onSubmit() {
    this.taskService.save(this.task).subscribe(() => {
      console.log(this.task);
      this.router.navigate(['']);
    });
  }
}

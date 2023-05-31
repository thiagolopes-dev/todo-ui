import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';
import { Task } from '../shared/task';
import { TaskService } from '../shared/task.service';


@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit {

  @Input()
  task: Task = new Task;
  visibleDialogExcluir: boolean = false;
  @Output()
  ondDeleteTask = new EventEmitter();

  constructor(
    private taskService: TaskService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }


  ngOnInit() {
  }

  confirmDelete(task: Task) {
    this.confirmationService.confirm({
      message: 'Você tem certeza que deseja excluir?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.remove(task);
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Removido com sucesso!' });
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Você rejeitou' });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'VocÊ cancelou' });
            break;
        }
      }
    });
  }


  remove(task: Task) {
    this.taskService.delete(task._id).subscribe(() => {
      this.ondDeleteTask.emit(task);
    });
  }

  onCheckChange(task: Task) {
    this.taskService.save(task).subscribe(() => {
    });
  }
}

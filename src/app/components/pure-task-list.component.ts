import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-pure-task-list',
  template: `
  <div class="list-items">
    <app-task
      *ngFor="let task of tasksInOrder"
      [task]="task"
      (onArchiveTask)="onArchiveTask.emit($event)"
      (onPinTask)="onPinTask.emit($event)">
    </app-task>

    <div
      *ngIf="tasksInOrder.length === 0 && !loading"
      class="wrapper-message">
      <span class="icon-check"></span>
      <p class="title-message">You have no tasks</p>
      <p class="subtitle-message">Sit back and relax</p>
    </div>

    <div *ngIf="loading">
      <div
        *ngFor="let i of [1, 2, 3, 4, 5, 6]"
        class="loading-item">
        <span class="glow-checkbox"></span>
        <span class="glow-text">
          <span>Loading</span><span>cool</span><span>state</span>
        </span>
      </div>
    </div>
  </div>`
})
export default class PureTaskListComponent {

  /**
   * @ignore
   * Component property to defin ordering of tasks
   */
  tasksInOrder: Task[] = [];

  @Input()
  loading = false;

  @Output()
  onPinTask = new EventEmitter<string>();

  @Output()
  onArchiveTask = new EventEmitter<string>();

  @Input()
  set tasks(arr: Task[]) {
    const initialTasks = [
      ...arr.filter(t => t.state === 'TASK_PINNED'),
      ...arr.filter(t => t.state !== 'TASK_PINNED'),
    ];
    const filteredTasks = initialTasks.filter(
      t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
    );
    this.tasksInOrder = filteredTasks.filter(
      t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
    );
  }
}

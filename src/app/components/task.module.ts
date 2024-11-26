import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgxsModule } from "@ngxs/store";

import { TasksState } from "../state/task.state";

import TaskComponent from "./task.component";
import TaskListComponent from "./task-list.component";
import PureTaskListComponent from "./pure-task-list.component";
import PureInboxScreenComponent from './pure-inbox-screen.component';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature([TasksState]),
  ],
  exports: [
    TaskComponent,
    TaskListComponent
  ],
  declarations: [
    TaskComponent,
    TaskListComponent,
    PureTaskListComponent
  ],
  providers: [],
})
export class TaskModule { }

import { Component, OnInit } from '@angular/core';
import { TaskResponse } from 'src/app/common/services/tasks/task.response';
import { TasksService } from 'src/app/common/services/tasks/tasks.service';

@Component({
  selector: 'task-list',
  templateUrl: 'task-list.component.html'
})

export class TaskListComponent implements OnInit {
  public list?: TaskResponse[];

  constructor(private _tasksService: TasksService) {
    this.refresh();
  }

  ngOnInit() { }

  public refresh(): void {
    this._tasksService.getList().subscribe(list => this.list = list);
  }

  public handleTaskRemoved(task: TaskResponse): void {
    this.list = this.list?.filter(item => item.id != task.id);
  }
}
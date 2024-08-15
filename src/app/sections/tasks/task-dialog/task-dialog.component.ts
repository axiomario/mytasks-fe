import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskResponse } from 'src/app/common/services/tasks/task.response';

@Component({
  selector: 'task-dialog',
  templateUrl: 'task-dialog.component.html'
})

export class TaskDialogComponent implements OnInit {
  public task: TaskResponse;
  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: { task: TaskResponse },
    private _matDialogRef: MatDialogRef<TaskDialogComponent>
  ) {
    this.task = this._data.task;
  }

  ngOnInit() { }

  public handleClose(task?: TaskResponse): void {
    this._matDialogRef.close(task);
  }
}
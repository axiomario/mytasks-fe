import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertService } from 'src/app/common/services/alert.service';
import { TaskResponse } from 'src/app/common/services/tasks/task.response';
import { TasksService } from 'src/app/common/services/tasks/tasks.service';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from '../../task-dialog/task-dialog.component';

@Component({
  selector: 'task',
  templateUrl: 'task.component.html'
})

export class TaskComponent implements OnInit {
  @Input() task?: TaskResponse;
  @Output() removed: EventEmitter<void> = new EventEmitter();
  public over: boolean = false;

  constructor(
    private _alertService: AlertService,
    private _tasksService: TasksService,
    private _matDialog: MatDialog
  ) { }

  ngOnInit() { }

  public edit(): void {
    this._matDialog.open(TaskDialogComponent, {
      data: { task: this.task }
    }).beforeClosed().subscribe((task: TaskResponse) => {
      if (task && this.task) {
        this.task.title = task.title;
        this.task.description = task.description;
      }
    });
  }

  public remove(): void {
    this._alertService.confirm('¿Estás seguro de borrar la tarea?', '', () => this._removeTask());
  }

  public handleCheck(value: boolean): void {
    if (this.task) {
      this.task.check = value;
      this._tasksService.updateTask(this.task).subscribe();
    }
  }

  private _removeTask(): void {
    if (this.task) {
      this._alertService.loading('Borrando tarea...');
      this._tasksService.remove(this.task.id).subscribe(() => {
        this.removed.emit();
        this._alertService.close();
        this._alertService.success('Tarea borrada correctamente');
      });
    }
  }
}
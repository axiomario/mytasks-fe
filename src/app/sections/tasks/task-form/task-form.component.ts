import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/common/services/alert.service';
import { TaskResponse } from 'src/app/common/services/tasks/task.response';
import { TasksService } from 'src/app/common/services/tasks/tasks.service';

@Component({
  selector: 'task-form',
  templateUrl: 'task-form.component.html'
})

export class TaskFormComponent implements OnInit {
  @Input() task?: TaskResponse;
  @Output() taskSaved: EventEmitter<TaskResponse> = new EventEmitter();
  public form: FormGroup;
  public saving: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _tasksService: TasksService,
    private _alertService: AlertService
  ) {
    this.form = this._formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit() {
    if (this.task) {
      this.form.get('title')?.setValue(this.task.title);
      this.form.get('description')?.setValue(this.task.description);
    }
  }

  public get buttonLabel(): string {
    return !this.task ? 'Agregar tarea' : 'Editar tarea';
  }

  public addEdit(): void {
    if (this.form.valid) {
      let title: string = this.form.get('title')?.value;
      let description: string = this.form.get('description')?.value;

      this.saving = true;
      if (this.task) {
        this._tasksService.updateTask({
          ...this.task,
          title,
          description
        }).subscribe(task => {
          this.taskSaved.emit(task);
          this.saving = false;
          this._alertService.success('Tarea editada correctamente');
        });
      } else {
        this.form.reset();
        this._tasksService.createTask(title, description).subscribe(task => {
          this.taskSaved.emit(task);
          this.saving = false;
          this._alertService.success('Tarea agregada correctamente');
        });
      }
    }
  }
}
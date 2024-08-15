import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionService } from '../../common/services/session.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/common/services/user/user.service';
import { AlertService } from 'src/app/common/services/alert.service';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _sessionService: SessionService,
    private _router: Router,
    private _userService: UserService,
    private _alertService: AlertService
  ) {
    this.form = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() { }

  public get emailError(): string | void {
    if (this.form.get('email')?.hasError('email')) {
      return 'Ingresa un correo electrónico válido';
    }
    if (this.form.get('email')?.hasError('required')) {
      return 'El correo electrónico es requerido';
    }
  }

  public signIn(): void {
    if (this.form.valid) {
      const email: string = this.form.get('email')?.value;

      this._alertService.loading('Iniciando...');
      this._userService.getOne(email).subscribe(user => {
        this._alertService.close();
        if (user) {
          this._initSession(email);
        } else {
          this._alertService.confirm(
            'Nuevo usuario',
            'Tu correo electrónico no está registrado en esta aplicación. ¿Deseas crear el usuario para ingresar?',
            () => this._createUser(email),
            "Si", "No"
          );
        }
      });
    }
  }

  private _createUser(email:string): void {
    this._alertService.loading('Creando usuario...');
    this._userService.createUser(email).subscribe(() => {
      this._alertService.close();
      this._initSession(email);
    });
  }

  private _initSession(email: string): void {
    this._sessionService.createSession(email);
    this._router.navigate(['/tasks']);
  }
}
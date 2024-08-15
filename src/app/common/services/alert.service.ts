import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({providedIn: 'root'})
export class AlertService {
  constructor(private _matSnackBar: MatSnackBar) { }

  public success(text: string): void {
    this._matSnackBar.open(text, '', {
      panelClass: ['snackbar-bg'],
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    });
  }

  public confirm(
    title: string, text: string,
    okAction: () => void,
    confirmButtonText: string = 'Aceptar', cancelButtonText: string = 'Cancelar'
  ): void {
    Swal.fire({
      title, text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText,
      cancelButtonText,
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        okAction();
      }
    });
  }

  public loading(text: string = 'Cargando...'): void {
    Swal.fire({
      text,
      allowOutsideClick: false
    });
    Swal.showLoading();
  }

  public close(): void {
    Swal.close();
  }

  public error(title: string, text: string): void {
    Swal.fire(title, text, 'error');
  }
}

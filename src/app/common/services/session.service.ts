import { Injectable } from '@angular/core';

const EMAIL = 'email';

@Injectable({providedIn: 'root'})
export class SessionService {
  constructor() { }

  public get isLogged(): boolean {
    return !!this.email;
  }

  public get email(): string | null {
    return localStorage.getItem(EMAIL);
  }
  
  public createSession(value: string | null) {
    if (!value) {
      this.deleteSession();
    } else {
      localStorage.setItem(EMAIL, value);
    }
  }

  public deleteSession(): void {
    localStorage.removeItem(EMAIL);
  }
}
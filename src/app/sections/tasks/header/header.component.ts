import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/common/services/session.service';

@Component({
  selector: 'header',
  templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {
  constructor(
    private _sessionService: SessionService,
    private _router: Router
  ) { }

  ngOnInit() { }

  public get email(): string | null {
    return this._sessionService.email;
  }

  public signOut(): void {
    this._sessionService.deleteSession();
    this._router.navigate(['/']);
  }
}
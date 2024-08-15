import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TaskResponse } from './task.response';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SessionService } from '../session.service';

@Injectable({providedIn: 'root'})
export class TasksService {
  constructor(
    private _httpClient: HttpClient,
    private _sessionService: SessionService
  ) { }

  public createTask(title: string, description: string): Observable<TaskResponse> {
    return this._httpClient.post<TaskResponse>(`${ environment.apiURL }tasks`, {
      email: this._sessionService.email,
      title,
      description
    });
  }

  public getList(): Observable<TaskResponse[]> {
    let params = new HttpParams();

    params = params.append('email', this._sessionService.email || '');

    return this._httpClient.get<TaskResponse[]>(`${ environment.apiURL }tasks`, { params }).pipe(
      map(list => list.sort((a, b) => new Date(a.created).getTime() - new Date(b.created).getTime()))
    );
  }

  public remove(taskId: string): Observable<void> {
    return this._httpClient.delete<void>(`${ environment.apiURL }tasks/${ taskId }`);
  }

  public updateTask(task: TaskResponse): Observable<TaskResponse> {
    return this._httpClient.put<TaskResponse>(`${ environment.apiURL }tasks/${ task.id }`, task);
  }
}
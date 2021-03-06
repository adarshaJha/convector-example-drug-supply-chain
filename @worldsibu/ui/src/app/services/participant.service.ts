import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ParticipantService {
  urlParticipants = `${environment.serverUrl}/participants`;
  // canActivate$ = new BehaviorSubject(this.canActivate());

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  get(){
    return this.http.get(`${this.urlParticipants}`).toPromise();
  }
}

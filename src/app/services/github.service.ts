import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { Repository } from '../interfaces/repository';
import { Organization } from '../interfaces/organization';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  readonly username = 'Bheeman1234';
  private userUrl = 'https://api.github.com/users/' + this.username;

  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.userUrl}`)
  }

  getRepos(): Observable<Repository[]> {
    return this.http.get<Repository[]>(`${this.userUrl}/repos`)
  }

  getOrganization(): Observable<Organization[]> {
    return this.http.get<Organization[]>(`${this.userUrl}/orgs`)
  }


}

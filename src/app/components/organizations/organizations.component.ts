import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Organization } from '../../interfaces/organization';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrl: './organizations.component.scss'
})
export class OrganizationsComponent implements OnInit {
  orgs$: Observable<Organization[]> | undefined;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
      this.orgs$ = this.githubService.getOrganization();
  }

}

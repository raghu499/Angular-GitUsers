import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-user-repo-list',
  templateUrl: './user-repo-list.component.html',
  styleUrls: ['./user-repo-list.component.scss']
})
export class UserRepoListComponent implements OnInit {
  public userData: any;
  public loading = true;
  public repoList: any = [];
  public user: any;
  public isUserNotFind = false;
  public columns = [{ name: 'Name', 'prop': 'name' }, { name: 'Description', 'prop': 'description' }, { name: 'Link', 'prop': 'html_url' }]
  constructor(public activatedRoute: ActivatedRoute, public apiService: ApiService) { }

  ngOnInit() {
    this.loading = true;
    this.isUserNotFind = false;
    this.activatedRoute.paramMap.subscribe(res => {
      if (res) {
        this.user = '';
        this.userData = null;
        this.repoList = [];
        console.log('----------------', res)
        this.loading = true;
        this.isUserNotFind = false;
        this.user = res.get('name')
        this.apiService.getData(`users/${this.user}`).then(result => {
          if (result && result['name']) {
            this.userData = result;
          } else {
            this.isUserNotFind = true;
            this.loading = false;
          }

        }).catch(error => {
          this.isUserNotFind = true;
          this.loading = false;
        })
        if (!this.isUserNotFind) {
          this.apiService.getData(`users/${this.user}/repos`).then(resdata => {
            if (res) {
              this.repoList = resdata;
              this.loading = false;
            }
          }).catch(err => {
            console.log(err)
          })
        }

      }
    })
  }
  openLink(link) {
    window.open(link)
  }

}

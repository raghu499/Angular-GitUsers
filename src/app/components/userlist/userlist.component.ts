import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  public users: any = [];
  public tempUsers: any = [];
  public loading = true;
  public userFilter = new FormControl();

  constructor(public apiService: ApiService, public router: Router) { }

  ngOnInit() {
    this.userFilter.valueChanges.subscribe(res => {
      if (res) {
        this.users = this.tempUsers.filter(user => user['login'].toLowerCase().match(res))
      } else {
        this.users = this.tempUsers;
      }
    })
    this.loading = true;
    this.apiService.getData('users').then(res => {
      if (res) {
        console.log(res)
        this.users = res;
        this.tempUsers = res;
        this.loading = false;
      }
    }).catch(err => {
      this.loading = false;
    })
  }
  userDetials(name) {
    this.router.navigate(['repos', name])
  }
}

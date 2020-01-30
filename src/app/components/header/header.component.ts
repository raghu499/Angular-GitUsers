import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public search: any;
  constructor(public router: Router) { }

  ngOnInit() {
  }
  searchUser() {
    this.router.navigate(['repos', this.search])
    this.search = '';
  }
}

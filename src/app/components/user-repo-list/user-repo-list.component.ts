import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-user-repo-list',
  templateUrl: './user-repo-list.component.html',
  styleUrls: ['./user-repo-list.component.scss']
})
export class UserRepoListComponent implements OnInit {
  public userData = [];
  public loading = true;
  public repoList: any = [];
  public columns = [{ name: 'UPC', 'prop': 'upc' }, { name: 'Product Short Name', 'prop': 'productShortName' }, { name: 'No of Facings', 'prop': 'facing' }, { name: 'Brand', 'prop': 'brandName' }, { name: 'Shelf Level', 'prop': 'shelfLevel' }]
  testObject = {};
  // finalData = {"upc":'', "productShortName": '', "facing": 0 , "brandName":'', "shelfLevel": ''};
  count = 0;
  constructor( public apiService: ApiService) { }

  ngOnInit() {
    this.loading = true;
    this.repoList = [];
        this.apiService.getData().then((result: any) => {
          if (result) {
            this.repoList = result.ResultSet.row;
            this.repoList.map((item) => {
              // this.count = 0;
              // item['id']= 25;
              // this.userData.push(item)
              var itemPropertyName = item["upc"]; 
              if (itemPropertyName in this.testObject) {
                this.testObject[itemPropertyName].duplicate = true;
                item['facing'] =this.count++;
              }
              else {
                this.testObject[itemPropertyName] = item;
                item['facing'] = 0;
              }
              
            });
            console.log(this.userData);
            console.log(this.count);

            this.loading = false;
          } else {
            this.loading = true;
          }
        }).catch(error => {
          this.loading = false;
        })
       
      }
 
}

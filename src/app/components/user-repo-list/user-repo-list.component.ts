import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormControl } from '@angular/forms';
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
  tempList: any;
  constructor(public apiService: ApiService) { }
  filterGroup = new FormGroup({
    upc: new FormControl(''),
    productShortName: new FormControl(''),
    facing: new FormControl(''),
    brandName: new FormControl(''),
    shelfLevel: new FormControl(''),
}); 


  ngOnInit() {
    this.loading = true;
    this.repoList = [];
    this.apiService.getData().then((result: any) => {
      if (result) {
        this.tempList = result.ResultSet.row;
        this.repoList = result.ResultSet.row;
        this.repoList.map((item) => {
          // if(!item['facing'])
        item['facing'] = 0;
         let itemPropertyName = item["upc"];
          if (itemPropertyName in this.testObject) {
            if(this.testObject[itemPropertyName].duplicate =  true)
            item['facing']+=1
          }
          else {
            this.testObject[itemPropertyName] = item;
          }

        });
        this.loading = false;
      } else {
        this.loading = true;
      }
      this.tempList = [...this.repoList ]
    }).catch(error => {
      this.loading = false;
    })

  }

  applyFiters() {
    const filters= this.filterGroup.value;
    this.repoList = [];
    this.tempList.forEach( item =>{
      let include = true;
      Object.keys(filters).forEach(key =>{
        if(filters[key] && filters[key].length > 0 ){
          if(!item[key]){
            include = false;
          }else if(typeof item[key]  === 'string'){
            if(!item[key].toLowerCase().includes(filters[key].toLowerCase())){
              include = false;
            }
          }
        } 
      })

      if(include){
        this.repoList.push(item);
      }

    })


    // console.log(filters);


    //   const val = value.toLowerCase();
    //   this.repoList = this.tempList.filter(index => {
    //    return (index.upc.toLowerCase().indexOf(val) !== -1 ||
    //      index.productShortName.toLowerCase().indexOf(val) !== -1 ||
    //      index.brandName.toLowerCase().indexOf(val) !== -1 ||
    //      index.shelfLevel.toLowerCase().indexOf(val) !== -1 ||
    //      !val);
    //  });
    //  this.repoList.offset = 0;
   
   
  }



  // applyFiters(value, num) {
  //   console.log(value);
  //     const val = value.toLowerCase();
  //     this.repoList = this.tempList.filter(index => {
  //      return (index.upc.toLowerCase().indexOf(val) !== -1 ||
  //        index.productShortName.toLowerCase().indexOf(val) !== -1 ||
  //        index.brandName.toLowerCase().indexOf(val) !== -1 ||
  //        index.shelfLevel.toLowerCase().indexOf(val) !== -1 ||
  //        !val);
  //    });
  //    this.repoList.offset = 0;
   
   
  // }
}



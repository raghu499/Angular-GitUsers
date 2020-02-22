import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-data',
  templateUrl: './graph-data.component.html',
  styleUrls: ['./graph-data.component.scss']
})
export class GraphDataComponent implements OnInit {
  vData = [ { data: [500, 300, 260,500,270,190] } ];
  vcolor = [{ backgroundColor: ['#3D6DFF','#E51746','#FFFF00','#0A37BF','#EB20B4','#FF9900'],
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(103, 58, 183, .8)'
  }];
  vLabels = ['Started', 'Processing', 'Underwrilling','Approval','CTC','Docs Signed'];
  vOptions = {  responsive: true,
    legend: { position: 'right',labels : { boxWidth:5, usePointStyle: true ,padding:7} }
  };

  // chartType='doughnut';
  public chartType: string = 'doughnut';
  constructor() { }

  ngOnInit() {
  }

}

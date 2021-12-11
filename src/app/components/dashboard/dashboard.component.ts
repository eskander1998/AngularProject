import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChartComponent } from 'ng-apexcharts';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions;

  public doughnutChartLabels: any[] = [];
  public doughnutChartData: any = [];
  public typeData: Array<Customer> = [];

  nbClientOrdinaire:number=0;
  nbClientFidele:number=0;
  nbClientPremium:number=0;

  constructor(private cs:CustomerService,private modalService: NgbModal ,private ac:ActivatedRoute,private router: Router) 
{

}
  ngOnInit(): void {

    
    this.cs.getNumberCustomerFidele().subscribe(res=> {this.nbClientFidele = res
      console.log("client fidele "+this.nbClientFidele);

  this.cs.getNumberCustomerOrdinaire().subscribe(res=> {this.nbClientOrdinaire = res,
        console.log("client nbClientOrdinaire "+this.nbClientOrdinaire);

       this.cs.getNumberCustomerPremium().subscribe(res=> {this.nbClientPremium = res,
        console.log("client nbClientPremium "+this.nbClientPremium);
       
          //charts
          
     this.chartOptions = {
      series: [this.nbClientFidele,this.nbClientOrdinaire,this.nbClientPremium],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Fidele", "Ordinaire", "Premium"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };  }) }) })
  }

}

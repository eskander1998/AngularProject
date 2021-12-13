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

  list:Customer[]= [];
  listInitial: Customer[]= [];

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions;

  @ViewChild("chartProfession") chartProfession: ChartComponent;
  public chartOptionsProfession;

  public doughnutChartLabels: any[] = [];
  public doughnutChartData: any = [];
  public typeData: Array<Customer> = [];

  nbClientOrdinaire:number=0;
  nbClientFidele:number=0;
  nbClientPremium:number=0;


  DOCTEUR :number=0;
  INGENIEUR:number=0;
  ETUDIANT:number=0;
  COMMERCIAL:number=0;
  CADRE:number=0;
  AUTRE:number=0;

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
      series: [this.nbClientOrdinaire,this.nbClientFidele,this.nbClientPremium],
      chart: {
        width: 350,

        type: "pie",

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




    //stat Profession

    this.cs.getAllCustomersFromDB().subscribe(res=> {this.list = res,
      this.listInitial=this.list;
     console.log(this.list);

     for(let k in this.list){
       if(this.list[k].profession=="DOCTEUR")
       { this.DOCTEUR=this.DOCTEUR+1;
       console.log("DOCTEUR"+this.DOCTEUR);
       }
        if(this.list[k].profession=="INGENIEUR")
      { this.INGENIEUR=this.INGENIEUR+1;
       console.log("INGENIEUR"+this.INGENIEUR);
      }
        if(this.list[k].profession=="ETUDIANT")
       {this.ETUDIANT=this.ETUDIANT+1;
       console.log("ETUDIANT"+this.ETUDIANT);
      }
        if(this.list[k].profession=="COMMERCIAL")
       {this.COMMERCIAL=this.COMMERCIAL+1;
       console.log("COMMERCIAL"+this.COMMERCIAL);
      }
        if(this.list[k].profession=="CADRE")
       {this.CADRE=this.CADRE+1;
       console.log("CADRE"+this.CADRE);
      }
        if(this.list[k].profession=="AUTRE")
       {this.AUTRE=this.AUTRE+1;
       console.log("AUTRE"+this.AUTRE);
      }

     }


     
this.chartOptionsProfession = {
  series: [{
    name: '',
    data:[this.DOCTEUR,this.INGENIEUR,this.ETUDIANT,this.COMMERCIAL,this.CADRE,this.AUTRE]
  }],
  chart: {
    height: 250,
    type: 'bar',
    barWidth:100,

  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      barWidth:100,
      dataLabels: {
        position: 'center', // top, center, bottom
      },
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val;
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ["#304758"]
    }
  },
  
  xaxis: {
    categories: ["DOCTEUR", "INGENIEUR", "ETUDIANT", "COMMERCIAL", "CADRE", "AUTRE"],
    position: 'top',
    axisBorder: {
      show: true
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#c6ffdd',
          colorTo: '#f7797d',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        }
      }
    },
    tooltip: {
      enabled: true,
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val ;
      }
    }
  
  },

  };

    })
  }

}


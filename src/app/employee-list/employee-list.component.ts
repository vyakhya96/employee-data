import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})




export class EmployeeListComponent implements OnInit {



  candidate_data:any=[ 
    
{"id": 11, "name": "Ash","department": "Finance","joining_date": '08/10/2016'},
{"id": 12,"name": "John","department": "HR","joining_date": '18/01/2011'},
{ "id": 13, "name": "Zuri", "department": "Operations", "joining_date": '28/11/2019'},
{"id": 14,  "name": "Vish",  "department": "Development",   "joining_date": '07/07/2017'},
{ "id": 15, "name": "Barry",  "department": "Operations", "joining_date": '19/08/2014'},
{"id": 16,"name": "Ady",  "department": "Finance",  "joining_date": '05/10/2014'}, 
{ "id": 17,"name": "Gare","department": "Development",  "joining_date": '06/04/2014'},
{ "id": 18,  "name": "Hola",  "department": "Development",  "joining_date": '08/12/2010'}, 
{"id": 19,  "name": "Ola",  "department": "HR",  "joining_date": '07/05/2011'},
{ "id": 20,  "name": "Kim",  "department": "Finance",  "joining_date": '20/10/2010'}

]


expArr:any=[]

deleteDeptartment:any=[];

countDept:any={};

searchText:string;

flag1:boolean=true;
flag2:boolean=false;




  constructor() { }

  ngOnInit() {
    this.dateTransform();
    console.log(this.flag1);
    this.flag2=false;
   }



  dateTransform(){
    for(let i=0; i<this.candidate_data.length; i++){
      var dateParts = this.candidate_data[i].joining_date.split("/");
      var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
      this.candidate_data[i].joining_date=dateObject;
    }
   
    return this.candidate_data;
  }


  sortByName(){
  this.flag1=true;
    this.candidate_data.map(x=>new Date(x.joining_date))
   this.candidate_data.sort(function(a,b){
     if(a.name > b.name) return 1;
     else return -1;
   })
 
  }


  sortByDate(){
    this.flag1=true;
    this.candidate_data.sort(function(a,b){
      if(new Date(a.joining_date) > new Date(b.joining_date)) return 1;
      else return -1;
    })
    
  }
  
  
  distinctDept(){
    this.countDept={};
this.flag2=true;
    for(let i=0; i<this.candidate_data.length; i++){
          if(!this.countDept.hasOwnProperty(this.candidate_data[i].department)){
            this.countDept[this.candidate_data[i].department]=1
          }else{
            this.countDept[this.candidate_data[i].department]++;
          } 
    }

  console.log(this.countDept);

  }



  filterExp(){
  this.flag1=false;
  this.expArr=this.candidate_data.filter(x=>Math.floor((Date.now()-x.joining_date) / (1000 * 60 * 60 * 24 *365))>2)
  
  }



  deleteDept(){
    
this.deleteDeptartment=this.candidate_data.filter(x=>x.department != "Development");

  }


  


}

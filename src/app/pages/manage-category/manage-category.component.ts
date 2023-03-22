import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.scss'],
  providers:[]
})
export class ManageCategoryComponent implements OnInit {

  constructor(private router:Router){

  }
  ngOnInit(): void {
   
  }
  public goToModifyCate():void {
      this.router.navigate(['manage-category','modify-category'])
  }
}

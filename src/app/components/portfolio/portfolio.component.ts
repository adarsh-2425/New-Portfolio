import { Component, OnInit } from '@angular/core';
import { slideInOut } from 'src/app/animations/animations';
import { fade } from 'src/app/animations/fade';
import { ProjectsComponent } from 'src/app/dialogs/projects/projects.component';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { Project2Component } from 'src/app/dialogs/project2/project2.component';
import { Project3Component } from 'src/app/dialogs/project3/project3.component';
import { Project4Component } from 'src/app/dialogs/project4/project4.component';
import { Project5Component } from 'src/app/dialogs/project5/project5.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [
    slideInOut,
    fade
  ]
})
export class PortfolioComponent implements OnInit {
  visible: any;

  constructor(
    private Router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  // Promote User Dialog
 openproject1(): void {
  let dialogRef = this.dialog.open(ProjectsComponent, { disableClose: true });
  height :'40%'
  width : '60%'
 }

 openproject2(): void {
  let dialogRef = this.dialog.open(Project2Component, { disableClose: true });
  height :'40%'
  width : '60%'
 }

 openproject3(): void {
  let dialogRef = this.dialog.open(Project3Component, { disableClose: true });
  height :'40%'
  width : '60%'
 }

 openproject4(): void {
  let dialogRef = this.dialog.open(Project4Component, { disableClose: true });
  height :'40%'
  width : '60%'
 }

 openproject5(): void {
  let dialogRef = this.dialog.open(Project5Component, { disableClose: true });
  height :'40%'
  width : '60%'
 }
 
}



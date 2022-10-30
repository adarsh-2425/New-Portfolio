import { Component, OnInit } from '@angular/core';
import skills from '../../../assets/json/skills.json';
import { slideInOut } from 'src/app/animations/animations';
import { fade } from 'src/app/animations/fade';

interface Skills{
  id: Number,
  name: string,
  percentage: number
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    slideInOut,
    fade
  ]
})
export class AboutComponent implements OnInit {
visible: any;
skills: Skills[] = skills; 
  constructor() { }

  ngOnInit(): void {
  }

}

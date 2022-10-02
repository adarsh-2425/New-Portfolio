import { Component, OnInit } from '@angular/core';
import { slideInOut } from 'src/app/animations/animations';
import { fade } from 'src/app/animations/fade';

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

  constructor() { }

  ngOnInit(): void {
  }

}

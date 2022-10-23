import { Component, OnInit } from '@angular/core';
import { slideInOut } from 'src/app/animations/animations';
import { fade } from 'src/app/animations/fade';

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

  constructor() { }

  ngOnInit(): void {
  }

}

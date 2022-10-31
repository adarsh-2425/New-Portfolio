import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { slideInOut } from 'src/app/animations/animations';
import { fade } from 'src/app/animations/fade';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  animations: [
    slideInOut,
    fade
  ]
})
export class WelcomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  about(){
    console.log('lol');
    
    // this.router.navigate(['/about'])
  }
}

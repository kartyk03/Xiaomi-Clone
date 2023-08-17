import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dinox';
  tv32 = 'https://www.mi.com/in/product/redmi-smart-tv-32-fire-tv/?';


  openTv(tv32:any){
    return window.open(tv32)
  }
}


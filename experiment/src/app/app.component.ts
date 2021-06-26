import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'experiment';
  public helloObj !: any;

  ngOnInit(): void{
    this.helloObj = {
      name: Date.now()
    }
  }

  onClick() {
    // this.helloObj = {
    //   name: Date.now()
    // }//here it changes the reference of the object, because it creates a new object every time
    this.helloObj.name = Date.now() //here it doesn't change the reference of the object 
  }
}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'experiment';
  public helloObj !: any;
  public appCounter!: number;
  ngOnInit(): void{
    this.helloObj = {
      name: Date.now()
    };
    this.appCounter = 0;
  }

  onClick() {
    // this.helloObj = {
    //   name: Date.now()
    // }//here it changes the reference of the object, because it creates a new object every time
    this.helloObj.name = Date.now() //here it doesn't change the reference of the object 
  }

  get runChangeDetectionForApp(){
    return ++this.appCounter;
  }
}

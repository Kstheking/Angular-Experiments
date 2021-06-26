import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  @Input() obj!: any;
  public name!: number;
  constructor() { }

  ngOnInit(): void {
    this.name = this.obj.name;
  }

  get runChangeDetection(){
    console.log("Checking the view");
    return true;
  }

}

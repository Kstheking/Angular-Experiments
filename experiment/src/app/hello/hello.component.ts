import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

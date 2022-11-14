import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  disabled:boolean = false;
  selectedCity!:string;
  constructor() { }

  ngOnInit() {
  }

  onInput(event:any){
    if(event.target.value.length > 20)
      this.disabled = true;
    else
      this.disabled = false;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.page.html',
  styleUrls: ['./check-box.page.scss'],
})
export class CheckBoxPage implements OnInit {
  data=[
    {
      name: 'primary',
      selected:true
    },{
      name: 'secondary',
      selected:false
    }, {
      name: 'tertiary',
      selected:true
    }, {
      name: 'success',
      selected:true
    },

  ]
  constructor() { }

  ngOnInit() {
  }

}

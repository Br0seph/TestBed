import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  $activeSection: any[];

  menuItems: any[] = [
    {
      SectionName: 'First Section',
      Route: 'content/first'
    },
    {
      SectionName: 'Second Section',
      Route: 'content/second'
    }
  ];

  ngOnInit() {
  }

  showSubSections(sectionName) {
    this.$activeSection = sectionName;
  }
}

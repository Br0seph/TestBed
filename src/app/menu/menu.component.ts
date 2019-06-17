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
      SubSections: [
        {
          Name: 'First Sub Section',
          Route: 'content/first'
        },
        {
          Name: 'Second Sub Section',
          Route: 'content/second'
        }
      ]
    },
    {
      SectionName: 'Second Section',
      SubSections: [
        {
          Name: 'First Sub Section'
        },
        {
          Name: 'Second Sub Section'
        },
        {
          Name: 'Third Sub Section'
        },
        {
          Name: 'Fourth Sub Section'
        }
      ]
    }
  ];

  ngOnInit() {
  }

  showSubSections(sectionName) {
    this.$activeSection = sectionName;
  }
}
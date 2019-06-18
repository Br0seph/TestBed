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
      SectionName: 'Home',
      Route: 'content/second',
      Icon: 'home'
    },
    {
      SectionName: 'Favourites',
      Route: 'content/first',
      Icon: 'rss_feed'
    },
    {
      SectionName: 'Feed',
      Route: 'content/second',
      Icon: 'rss_feed'
    },
    {
      SectionName: 'Payment Details',
      Route: 'content/second',
      Icon: 'payment'
    },
    {
      SectionName: 'Invoices',
      Route: 'content/second',
      Icon: 'receipt'
    },
    {
      SectionName: 'Contact Settings',
      Route: 'content/second',
      Icon: 'settings'
    },
    {
      SectionName: 'Support',
      Route: 'content/second',
      Icon: 'face'
    }
  ];

  ngOnInit() {
  }

  showSubSections(sectionName) {
    this.$activeSection = sectionName;
  }
}

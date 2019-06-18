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
      Route: 'home',
      Icon: 'home'
    },
    {
      SectionName: 'Feed',
      Route: 'feed',
      Icon: 'notification_important'
    },
    {
      SectionName: 'Favourites',
      Route: 'favorites',
      Icon: 'favorite'
    },
    {
      SectionName: 'Discover',
      Route: 'discover',
      Icon: 'arrow_right_alt'
    },
    {
      SectionName: 'Products',
      Route: 'products',
      Icon: 'dashboard'
    },
    {
      SectionName: 'Payment Details',
      Route: 'products',
      Icon: 'payment'
    },
    {
      SectionName: 'Invoices',
      Route: 'products',
      Icon: 'receipt'
    },
    {
      SectionName: 'Contact Settings',
      Route: 'products',
      Icon: 'settings'
    },
    {
      SectionName: 'Support',
      Route: 'products',
      Icon: 'face'
    }
  ];

  ngOnInit() {
  }

  showSubSections(sectionName) {
    this.$activeSection = sectionName;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h1 [innerHTML]="title"></h1>
      <h1>{{ title }}</h1>
      <img [src]="logo">
    </div>
  `
})
export class AppComponent {
  title: string;
  logo: string = 'img/logo.svg'
  constructor() {;
    this.title = 'Ultimate Angular';
  }
}
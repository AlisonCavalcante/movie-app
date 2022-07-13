import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  lightTheme: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  changeTheme() {
    this.lightTheme = !this.lightTheme;
    document.body.classList.toggle('light-theme');
  }

}

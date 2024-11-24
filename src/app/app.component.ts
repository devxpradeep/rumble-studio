import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'rumble-studio';
  isLobbyPage: boolean = false;
  constructor(private router: Router){}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      const currentRoute = this.router.url;
      this.isLobbyPage = currentRoute.startsWith('/lobby');
    });
  }
}

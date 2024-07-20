import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular-17-Basic';
  public currentRoute: string = '';
  constructor(private router: Router) {}
  goToHome(): void {
    this.currentRoute = 'Home';
    this.router.navigateByUrl('/Home');
  }
  goToProducts(): void {
    this.currentRoute = 'Product';
    this.router.navigateByUrl('/Product');
  }
}

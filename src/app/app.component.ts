import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const wait: number = 1000
    setInterval(() => {
      this.isActive = !this.isActive;
    }, wait);
  }
  title = 'directives';
  userName: FormControl = new FormControl('userrrrr');
  age: FormControl = new FormControl(0);
  password: FormControl = new FormControl(null);
  isActive: boolean = false;
}

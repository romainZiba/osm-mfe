import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '@osm-mfe/shared/data-access-user';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'osm-shell-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoggedIn$ = this.userService.isUserLoggedIn$;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.isLoggedIn$
      .pipe(distinctUntilChanged())
      .subscribe(async (loggedIn) => {
        if (!loggedIn) {
          this.router.navigateByUrl('login');
        } else {
          this.router.navigateByUrl('');
        }
      });
  }
}

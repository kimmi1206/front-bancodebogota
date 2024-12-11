import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  user: User = {} as User;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly userService: UserService
  ) {
    this.userService.queryData.subscribe(async (data: any) => {
      if (data?.data) {
        this.user = data.data;
      }
    });
  }

  goBack() {
    this.router.navigate(['/search']);
  }
}

import { Component, NgModule } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NumberPipe } from '../../../shared/pipes/number-pipe';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-search',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NumberPipe],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  showMsg: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly userService: UserService
  ) {}

  documentForm = new FormGroup({
    docType: new FormControl('', Validators.required),
    docNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(11),
      Validators.pattern('^[0-9]*$'),
    ]),
  });

  setNumber(event: any) {
    if (event) {
      this.documentForm
        .get('docNumber')
        ?.setValue(event.target.value.replace(/\D/g, ''));
    }
  }

  searchDocumentNumber() {
    this.showMsg = false;
    let docNumber = this.documentForm.get('docNumber')?.value ?? '';
    let docType = this.documentForm.get('docType')?.value ?? '';
    
    let user = this.userService.getDocumentMock(docNumber, docType);
    if (!user) {
      this.showMsg = true;
      return;
    }
    this.userService.queryData.next({ data: user });
    this.navigate(['/home']);
  }

  navigate = (route: any[]) => {
    setTimeout(() => {
      this.router.navigate(route);
    }, 100);
  };
}

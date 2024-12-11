import { Component, NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { NumberPipe } from '../../../shared/pipes/number-pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NumberPipe,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {}

  documentForm = new FormGroup({  
    docType: new FormControl('', Validators.required),  
    docNumber: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(11), Validators.pattern('^[0-9]*$')]),
  });

  setNumber(event: any) {
    if (event) {
      this.documentForm.get('docNumber')?.setValue(event.target.value.replace(/\D/g, ''));
      console.log(this.documentForm.get('docNumber')?.value);
    }
  }

  searchDocumentNumber() {
    this.router.navigate(['/home']);
  }

}

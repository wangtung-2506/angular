import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { lastValueFrom } from 'rxjs';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  formBuilder = inject(FormBuilder);
  authService = inject(AuthService);
  route = inject(Router)

  form = this.formBuilder.group({
    email: [''],
    password: [''],
    confirmPassword: ['']
  }, {
    validator: (form: FormGroup) => {
      const password = form.get('password')?.value || '';
      const confirmPassword = form.get('confirmPassword')?.value || '';

      return password === confirmPassword ? null : { notMatch: true };
    }
  });

  async onSubmit() {
    const user = await lastValueFrom(this.authService.signup(this.form.value));
    localStorage.setItem('user', JSON.stringify(user));
    alert('ban da dang ki thanh cong')
    this.route.navigate(['/']);
  }
}
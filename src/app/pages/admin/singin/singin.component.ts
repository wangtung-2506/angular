import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';


import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-singin',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './singin.component.html',
  styleUrl: './singin.component.css'
})
export class SinginComponent {
  formBuilder = inject(FormBuilder);
  authService = inject(AuthService);
  route = inject(Router)

  form = this.formBuilder.group({
    email: [''],
    password: [''],
   
  });

  async onSubmit() {
    if(this.form.invalid) return;
    this.authService.signin(this.form.value as {email:string, password:string}).subscribe((user)=>{
        alert("dang nhap thanh cong");
        localStorage.setItem('user', JSON.stringify(user));
        this.route.navigate(['/'])
    })
  }
}

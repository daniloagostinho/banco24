import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      cpf: [],
      senha: [],
      idade: [this.initialDate]
    })

    console.log('idade>> ', this.form.get('idade').value);
    
  }

  entrar() {
    if(this.validAcess()) {
      this.router.navigate(['/painel'])
    } else {
      return;
    }
    
  }

  validAcess() {
    if(this.form.get('cpf').value === '03357064367' && this.form.get('senha').value === '091011') {
      return true;
    } else {
      return false;
    }
  }

  get initialDate() {
    const defaultDateRange = {
      rangeType: -5,
      initialDate: new Date(),
      finalDate: new Date()
    }
    return {...defaultDateRange}
  }
}

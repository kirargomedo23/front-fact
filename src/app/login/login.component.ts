import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '@app/services/localStorage/local-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  loading: boolean = false;


  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly localStorageService: LocalStorageService,
  ){
    this.formLogin = this.formBuilder.group({
      usuario:[null, [Validators.required]],
      contraseña:[null, [Validators.required]],
    });

  }



  ngOnInit(): void {

  }

  getFormLogin(control: string) {
    return this.formLogin.get(control);
  }

  startSession(){

  }

  navigateToPageEntidad(){
    this.router.navigate(["app/entidad-list"]);
  }

}

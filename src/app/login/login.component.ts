import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthEventService } from '@services/events/auth/auth-event.service';
import { LocalStorageService } from '@services/localStorage/local-storage.service';
import { UtilService } from '@services/util/util.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({});
  loading: boolean = false;


  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly utilService: UtilService,
    private readonly localStorageService: LocalStorageService,
    private readonly authEventService: AuthEventService
  ){
    this.startFormLogin();

  }



  ngOnInit(): void {

  }

  startFormLogin(){
    this.formLogin = this.formBuilder.group({
      usuario:[null, [Validators.required]],
      contrasenia:[null, [Validators.required,
         Validators.pattern(/^[a-z]*$/)]  ],
    });
  }

  getFormLogin(control: string) {
    return this.formLogin.get(control);
  }

  startSession(){
    const isInvalidForm = this.formLogin.invalid;

    if(isInvalidForm){
      this.utilService.openMessageError('Formulario inválido. Por favor, verifique.');
      return;
    }

    const usuario = this.getFormLogin('usuario')?.value;
    const contrasenia = this.getFormLogin('contrasenia')?.value;

    if(usuario !== 'master' || contrasenia !== 'master'){
      this.utilService.openMessageError('Credenciales inválidas');
      return;
    }

    this.authEventService.setCurrentLogin(true);
    this.navigateToPageEntidad();

  }

  navigateToPageEntidad(){
    this.router.navigate(["app/entidad-list"]);
  }

}

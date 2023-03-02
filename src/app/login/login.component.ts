import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '@app/services/localStorage/local-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly localStorageService: LocalStorageService,
  ){

  }

  ngOnInit(): void {

  }

}

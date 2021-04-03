import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/auth/auth.service";
import { PlataformDetectorService } from "src/app/core/plataform-detector/plataform-detector.service";

@Component({
    selector: 'ap-singin',
    templateUrl: './singin.component.html'
})
export class SingInComponent implements OnInit{

    

    loginForm: FormGroup;
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private route: Router,
        private platformDetectorService: PlataformDetectorService
        ){

    }
    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required], 
            password: ['', Validators.required]
        })
    }
 
    login(){
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;

        this.authService
        .authenticate(userName, password)
        .subscribe(
            () => this.route.navigate(['user', userName]),
            err => {
                console.log('cainho delicia');
                console.log(err);
                this.loginForm.reset();
                // O && indica que se o isPlatformBrowser for válido executa o codigo abaixo, se 
                //retornar um error ou um falso o focus() nem será executado
                this.platformDetectorService.isPlatformBrowser() &&
                    this.userNameInput.nativeElement.focus();
            }
        );
        
    }
}
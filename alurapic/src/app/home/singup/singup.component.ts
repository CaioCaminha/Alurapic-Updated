import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { lowerCaseValidator } from "src/app/shared/validators/lowerCaseValidator";
import { SingUpService } from "./singup.service";
import { UserNotTakenValidatorService } from "./user-not-taken.validator.service";
import { UserName } from "./username";

@Component({
    templateUrl: './singup.component.html'
})
export class SingUpComponent implements OnInit{

    signupForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private userNotTakenValidatorService: UserNotTakenValidatorService,
        private signupService: SingUpService,
        private router: Router){}

    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            email: ['', [
                Validators.required,
                Validators.email 
            ]],
            fullName: ['', [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(40)
            ]],
            userName: ['', [
                Validators.required,
                lowerCaseValidator,
                Validators.minLength(2),
                Validators.maxLength(30)
            ],
            [
                this.userNotTakenValidatorService.checkUserNameTaken()
            ]],
            password: ['', [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(14)
            ]]
        })
    }

    signUp(){
        //objeto do tipo username
        const newUser = this.signupForm.getRawValue() as UserName;
        this.signupService
        .signup(newUser)
        .subscribe(
            () => this.router.navigate(['']),
            err => console.log(err)
        );

    }

}
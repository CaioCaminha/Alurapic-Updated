import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { debounceTime, first, map, switchMap } from "rxjs/operators";
import { SingUpService } from "./singup.service";

@Injectable({ providedIn: 'root'})
export class UserNotTakenValidatorService{

    constructor(private singUpService: SingUpService){}


    checkUserNameTaken(){   
        return (control: AbstractControl) => {
            return control
                .valueChanges
                .pipe(debounceTime(300))
                .pipe(switchMap(userName => 
                    this.singUpService.checkUserNameTaken(userName)    
                ))
                .pipe(map(isTaken => isTaken ? { userName: true } : null ))
                .pipe(first())
        }
    }
}
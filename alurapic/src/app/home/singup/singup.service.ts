import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserName } from "./username";

const API_URL = "http://localhost/3000";

@Injectable({ providedIn: 'root'})
export class SingUpService{
    
    constructor(private http: HttpClient){}

    checkUserNameTaken(userName: string){
        return this.http.get(API_URL + '/user/exists/' + userName)
    }

    signup(newUser: UserName){
        return this.http.post(API_URL + '/user/signup', newUser);
    }

}
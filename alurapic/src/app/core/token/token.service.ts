import { Injectable } from "@angular/core";

const KEY = 'authToken';

@Injectable({
    providedIn: 'root'
})
export class TokenService{
    hasToken(){
//o exclamação serve para tornar o retorno um booleano, se tiver retorno == true se nao tiver == false
        return !!this.getToken();
    }
    setToken(token){
        window.localStorage.setItem(KEY, token);
    }
    getToken(){
        return window.localStorage.getItem(KEY)
    }
    removeToken(){
        window.localStorage.removeItem(KEY);
    }
}
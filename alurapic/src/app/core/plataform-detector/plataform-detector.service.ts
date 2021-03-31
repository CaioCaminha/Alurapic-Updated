import { isPlatformBrowser } from "@angular/common";
import { Injectable, PLATFORM_ID, Inject } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class PlataformDetectorService{
    constructor(@Inject(PLATFORM_ID) private plataformId: string){}

    isPlatformBrowser(){
        return isPlatformBrowser(this.plataformId);
    }
}
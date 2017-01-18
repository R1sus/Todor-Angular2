import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';

@Directive({
    selector: '[validateEmail][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useValue: validateEmail, multi: true }
    ]
})
export class EmailValidator {}




/**
 * Created by D on 18.01.2017.
 */


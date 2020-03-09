import { MatSnackBar } from '@angular/material';
import { ComponentRef, Component } from '@angular/core';


export class Helpers {
    
    public displaySnackBar(snackbar: MatSnackBar, action, message: string = ""){
        snackbar.open(message,action, {
            duration: 3000,
            panelClass: ['style-snackbar']

        });
    }

}
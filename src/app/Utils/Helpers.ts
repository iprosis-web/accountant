import { MatSnackBar } from '@angular/material';
import { ComponentRef, Component } from '@angular/core';


export class Helpers {
    
    public displaySnackBar(snackbar: MatSnackBar, message: string, action = "אישור"){
        snackbar.open(message,action, {
            duration: 3000,
        });
    }

}
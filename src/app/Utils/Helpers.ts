import { MatSnackBar } from '@angular/material';
import { ComponentRef, Component } from '@angular/core';


export class Helpers {
    statuses = [
        {
            id: 1,
            name: "בעבודה"
        },
        {
            id: 2,
            name: "לא הותחל"
        },
        {
            id: 3,
            name: "הסתיים"
        }];
    public displaySnackBar(snackbar: MatSnackBar, action, message: string = "") {
        snackbar.open(message, action, {
            duration: 3000,
            panelClass: ['style-snackbar']

        });
    }


    public getSatusNameById(statusId) {
        return this.statuses.find(s => s.id == statusId);
    }

}
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import {MAT_DIALOG_DATA,  MatDialog,  MatDialogConfig,  MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrl: './confirmation-modal.component.scss'
})
export class ConfirmationModalComponent {
  public title = 'Por favor, confirma los datos ingresados:'
  @Output() action = new EventEmitter<string>();

  constructor(
    public dialogRef: MatDialogRef<ConfirmationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    console.log(data);
  }

  confirmar(){
    this.action.emit('confirm');
    this.dialogRef.close(true);
  }
  editar(){
    this.action.emit('cancel');
    this.dialogRef.close(false);
  }
}

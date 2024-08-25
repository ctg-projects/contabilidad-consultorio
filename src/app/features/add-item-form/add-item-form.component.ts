import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationModalComponent } from '../../shared/components/confirmation-modal/confirmation-modal.component';
import { PROCEDIMIENTOS, PROFESIONALES, METODOS_PAGO } from "../../shared/constants/app-helpers-constants";

@Component({
  selector: 'add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrl: './add-item-form.component.scss'
})
export class AddItemFormComponent implements OnInit {
  @ViewChild(MatStepper) stepper!: MatStepper;
  public personalInfoFormGroup: FormGroup;
  public procedureInfoFormGroup: FormGroup;
  public profesionales = PROFESIONALES;
  public procedimientos = PROCEDIMIENTOS;
  public metodosPago = METODOS_PAGO;


  constructor(private fb: FormBuilder, public dialog: MatDialog){
    this.personalInfoFormGroup = this.fb.group({
      fecha: ['', Validators.required],
      nombreCompleto: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
      documentoIdentidad: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
    });

    this.procedureInfoFormGroup = this.fb.group({
      fecha_procedimiento: ['', Validators.required],
      procedimiento: ['', Validators.required],
      profesional: ['', Validators.required],
      metodoPago: ['', Validators.required],
    });

  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.personalInfoFormGroup.valid && this.procedureInfoFormGroup.valid) {
      const formData = {
        ...this.personalInfoFormGroup.value,
        ...this.procedureInfoFormGroup.value,
      };
      this.openModalDialog(formData);
    } else {
      console.log('Formulario no válido');
    }
  }

  openModalDialog(data:any = {}){

    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '400px',
      data: {
        title: '',
        subtitle: '',
        footer: {
          confirmCta: '',
          cancelCta: '',
          alignFooter:''
        },
        data
      }
    });

    dialogRef.afterClosed().subscribe(resp => {
      console.log(resp);
      if (resp) {
        // Si se confirmó, resetea el formulario y el stepper
        this.personalInfoFormGroup.reset();
        this.procedureInfoFormGroup.reset();
        this.stepper.reset();
      }
    });
  }
}

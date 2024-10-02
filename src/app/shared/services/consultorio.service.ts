import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Paciente } from '../models/paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  constructor(private firestore: AngularFirestore) { }

  addPaciente(paciente: any): Promise<void> {
    const id = this.firestore.createId();
    console.log('Añadiendo paciente:', paciente);
    return this.firestore.collection('pacientes').doc(id).set({ ...paciente, id })
    .then(() => console.log('Paciente añadido con éxito'))
    .catch((error) => console.error('Error al añadir paciente: ', error));
  }

  getPacientes(): Observable<Paciente[]> {
    return this.firestore.collection<Paciente>('pacientes').valueChanges();
  }

  addInsunmo(insumo:any):Promise<void>{
    const id = this.firestore.createId();
    console.log('Añadiendo insumo:', insumo);
    return this.firestore.collection('insumos').doc(id).set({ ...insumo, id })
    .then(() => console.log('Insumo añadido con éxito'))
    .catch((error) => console.error('Error al añadir insumo: ', error));
  }

  getInsumos(): Observable<any>{
    return this.firestore.collection<any>('insumos').valueChanges();
  }
}

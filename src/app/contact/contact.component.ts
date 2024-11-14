import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  formularioContacto: FormGroup 
  usuarioActivo: string = "Ivonne"  

  constructor( private form: FormBuilder) {
      this.formularioContacto = this.form.group({
        nombre: ['', Validators.required], //El nombre es requerido
        email: ['', [Validators.required, Validators.email]] //El mail es requerido

      })
  }


  hasErrors(controlName: string, errorType: string){
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched
  }

  enviar(){
    console.log(this.formularioContacto)
  }  
}

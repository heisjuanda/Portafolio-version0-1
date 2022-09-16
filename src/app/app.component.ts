import { Component, VERSION } from '@angular/core';
import { Proyectos } from './proyectos';
import { Comentario } from './comentario';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  Mostrar: boolean = false;
  campo1: string = '';
  campo2: string = '';
  campo3: string = 'Hola!';
  w_b: boolean = true;
  See:boolean = false;

  proyecto: Proyectos[] = [
    {
      name: 'Program Language',
      fecha: '20/06/2022',
      imagen:
        'https://user-images.githubusercontent.com/63882053/190664312-0f6b3e64-1b50-4eba-85a2-6cac60463095.png',
      link: 'https://github.com/jdma253/Program-language',
    },

    {
      name: 'Angular Portafolio',
      fecha: '02/09/2022',
      imagen:
        'https://user-images.githubusercontent.com/63882053/190665599-dd2db218-0db6-4b6d-bc4b-3a64276c01e2.png',
      link: 'https://github.com/jdma253/Portafolio-version0-1',
    },

    {
      name: 'Otros',
      fecha: '20/09/2022',
      imagen: 'https://pic.onlinewebfonts.com/svg/img_330888.png',
      link: 'https://github.com/jdma253/',
    },
  ];

  comentarios: Comentario[] = [
    {
      name: 'Juan David Moreno Alfonso',
      email: 'jdma253@gmail.com',
      coment: '¿qué más pues?',
    },
  ];

  validarEmail = (email: string) => {
    if (
      email.length >= 4 &&
      email.includes('@') &&
      email.includes('.') &&
      (email.includes('com') ||
        email.includes('gov') ||
        email.includes('co') ||
        email.includes('edu'))
    ) {
      return true;
    } else {
      return false;
    }
  };

  addComment(name: string, email: string, comentario: string) {
    if (this.validarEmail(email) && name.length >= 1) {
      let coment = new Comentario(name, email, comentario);
      this.comentarios.push(coment);
    } else {
      return 'El Correo o el Nombre no es válido';
    }
  }
  
  mostrar = () => {
    this.Mostrar = !this.Mostrar;
  };

a =() =>{
  if (this.w_b) {
    return "linear-gradient(135deg,#2cf0cf,#3bb0e6,#267ee2,#1859d3,#543be2,#267ee2,#3bb0e6,#2cf0cf)";
  } else {
    return "linear-gradient(135deg,rgb(47, 44, 231),#7331dd,#a022d1,#e83bee,#e23baa,#e83bee,#a022d1,#7331dd)";
  }
}

Sees = () => {
  if (this.See) {
    return 'Hide';
  } else {
    return 'See';
  }
};
Seeees(){
  this.See =!this.See;
}

  claroOscur = () => {
    this.w_b = !this.w_b;
    if (this.w_b) {
      return this.w_b;
    } else {
      return this.w_b;
    }
  };
  cambiar = () => {
    if (this.Mostrar) {
      return 'Ignore';
    } else {
      return 'View';
    }
  };
}

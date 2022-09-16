export class Proyectos {
  name: string;
  fecha: string;
  imagen: string;
  link: string;

  constructor(name: string, fecha: string, imagen: string, link: string) {
    this.name = name;
    this.fecha = fecha;
    this.imagen = imagen;
    this.link = link;
  }
}

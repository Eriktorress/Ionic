import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-especialistas',
  templateUrl: './especialistas.page.html',
  styleUrls: ['./especialistas.page.scss'],
})
export class EspecialistasPage implements OnInit {

  private especialistas = [
    {
      id:'1',
      nombre:'Patrick Shepard',
      url:"https://i.pinimg.com/originals/39/76/49/3976494e8c4b8a5e7f98925a94bf1483.jpg",
      especialidad: 'Doctor cirujano',
      informacion: ["comentarios","comentario 2"]

    },
    {
      id:'2',
      nombre:'Meredith Grey',
      url:"https://upload.wikimedia.org/wikipedia/en/5/53/Greys-Anatomy-Season-7-Promo-9.jpg",
      especialidad: 'Doctor cirujano',
      informacion: ["comentarios","comentario 2"]

    }


  
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.especialistas)
  }

}

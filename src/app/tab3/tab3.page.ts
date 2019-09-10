import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  mostrarCategoria = true;
  categoria = null;

  onClickFunction(page: number){
    this.mostrarCategoria = false;
    this.categoria = page;
  }

  back(){
    this.mostrarCategoria = true;
  }

  data = 
    [
      {
        "id": 0,
        "name": "Gastronomia",
        "imagen": 'assets/image/gastronomia.png', 
        "card": [ 
                  {
                    nombre : 'card1',
                    // tslint:disable-next-line: max-line-length
                    descripcion : 'Según la historia el pueblo se llamaba Porto Rico (puerto rico), hasta que el 1850 se convirtió en un paraje donde se desembarcaban y comer',
                    imagen: 'assets/image/cartagena.jpg'
                  },
                  {
                    nombre : 'card2',
                    // tslint:disable-next-line: max-line-length
                    descripcion : 'Según la historia el pueblo se llamaba Porto Rico (puerto rico), hasta que el 1850 se convirtió en un paraje donde se desembarcaban y comer',
                    imagen: 'assets/image/cartagena.jpg'
                  },         
                ]
      },
      {
        "id": 1,
        "name": "Playas",
        "imagen": 'assets/image/playas.png',
        "card": [ {
            nombre : 'card2',
            // tslint:disable-next-line: max-line-length
            descripcion : 'Según la historia el pueblo se llamaba Porto Rico (puerto rico), hasta que el 1850 se convirtió en un paraje donde se desembarcaban y comer',
            imagen: 'assets/image/cartagena.jpg'
          }
        ]
      },
      {
        "id": 2,
        "name": "Gastronomia 2",
        "imagen": 'assets/image/gastronomia2.png',
        "card": [ {
            nombre : 'card3',
            // tslint:disable-next-line: max-line-length
            descripcion : 'Según la historia el pueblo se llamaba Porto Rico (puerto rico), hasta que el 1850 se convirtió en un paraje donde se desembarcaban y comer',
            imagen: 'assets/image/cartagena.jpg'
          }
        ]
      },
      {
        "id": 3,
        "name": "Tendencias",
        "imagen": 'assets/image/tendencias.png',
        "card": [ {
            nombre : 'card4',
            // tslint:disable-next-line: max-line-length
            descripcion : 'Según la historia el pueblo se llamaba Porto Rico (puerto rico), hasta que el 1850 se convirtió en un paraje donde se desembarcaban y comer',
            imagen: 'assets/image/cartagena.jpg'
          }
        ]
      },
    ]
}
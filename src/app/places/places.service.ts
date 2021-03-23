import { Injectable } from "@angular/core";
import { Place } from "../places/place.model";

@Injectable({
  providedIn: "root"
})
export class PlacesService {
  private places: Place[] = [
    {
      id: '1',
      title: "Rafting",
      imageURL:
        "https://upload.wikimedia.org/wikipedia/commons/a/ac/Rio_Salvaje_Jalcomulco.jpeg",
       comment1: ["Diversion", "Deporte extremo"],
        imageURL2:
        "https://www.ngenespanol.com/wp-content/uploads/2018/08/%C2%A1Al-agua-Rafting-en-Veracruz.jpg",
        comment2: ["Peligro", "Aguas bravas"],
        comments: ["Deporte acuático que se realiza en ríos caudalosos, también llamados “rápidos”"]
    },
    {
      id: "2",
      title: "Campamento",
      imageURL:
        "https://faros.hsjdbcn.org/sites/default/files/styles/shareimg/public/campamento-de-verano.jpg?itok=v2DBBDp3",
        comment1: ["Descanso"],
        imageURL2:
        "https://www.turismo.gob.ec/wp-content/uploads/2013/10/sinchi-3.jpg",
        comment2: ["Aire puro"],
        comments: ["El camping es una actividad recreativa o educativa."]
    },
    {
      id: "3",
      title: "Territorio Waorani",
      imageURL:
        "https://www.iagua.es/sites/default/files/styles/thumbnail-830x455/public/amazonas_nacimiento.jpg?itok=78__N_oB",
        comment1: [],
        imageURL2:
        "https://www.salvalaselva.org/photos/article/wide/xl/huette-regenwald-amazonas-yanayacu-peru.jpg",
        comment2: [],
        comments: ["Son un pueblo amerindio que habita al noroccidente de la Amazonia, al oriente de Ecuador. "]
    },
    {
      id: "4",
      title: "Caminatas",
      imageURL:
        "https://q-fa.bstatic.com/xdata/images/xphoto/500x375/74969126.jpg?k=3804d7a0cfe27a823d4ba203b4da8b59c5fc020e625194a4c77525b8fef5df59&o=",
        comment1: ["Aire  puro"],
        imageURL2:
        "https://turismoi.ec/uploads/ec/photo/photo_file/8101/home_WhatsApp_Image_2019-08-02_at_3.56.11_PM.jpg",
        comment2: ["Tranquilidad y paz"],
        comments: ["La caminata es una posibilidad más para hacer ejercicio y perfecta para distintas personas"]
    },
    {
      id: "5",
      title: "Misahualli",
      imageURL:
        "https://4.bp.blogspot.com/-KScMh54P-MM/XEtLHFwkltI/AAAAAAAAFW0/80gtU8SA0gM2aLu2KZOT9NdHJ81W9BmrwCLcBGAs/s1600/28156240_597304710661926_7546845790677762048_n-640x450.jpg",
        comment1: ["Descanso"],
        imageURL2:
        "https://i1.wp.com/www.chokotrip.info/wp-content/uploads/2020/04/Puerto-Misahualli-Amazonia.jpg?fit=1620%2C800&ssl=1",
        comment2: ["Diversión"],
        comments: ["Es una parroquia rural perteneciente al cantón Tena, capital de la provincia de Napo en el Ecuador."]
    }
  ];

  constructor() {}

  getPlaces(): Place[] {
    return [...this.places];
  }

  getPlace(placeId: string) {
    return {
      ...this.places.find(place => {
        return place.id === placeId;
      })
    };
  }

  deletePlace(placeId: string) {
    this.places = this.places.filter(place => {
      return place.id !== placeId;
    });
  }

  addPlace(title, imageURL, imageURL2) {
    this.places.push({
      title,
      imageURL,
      comment1: [],
      imageURL2,
      comment2: [],
      comments: [],
      id: this.places.length + 1 + ""
    });
  }

}

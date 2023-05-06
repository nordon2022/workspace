import { Component, OnInit } from '@angular/core';

interface PlacemarkConstructor {
  geometry: number[];
  properties: ymaps.IPlacemarkProperties;
  options: ymaps.IPlacemarkOptions;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  options: any;

  public pieChart: PlacemarkConstructor = {
    geometry: [55.792561, 35.714044],
    properties: {
      balloonContent: '<strong>Товарищество собственников недвижимости «ИСКОНА»</strong>',
      iconCaption: 'ТСН Искона',
    },
    options: {
      preset: 'islands#blueHomeIcon'
    }
  };


  constructor() { }

  ngOnInit(): void {
    this.options = {
      center: {lat: 55.78153768613558, lng: 335.732668362185215},
      zoom: 12
    };
  }

}

import { NgModule } from '@angular/core';
import {MapComponent} from "./map.component";
import {AngularYandexMapsModule, YaConfig} from "angular8-yandex-maps";

const mapConfig: YaConfig = {
  apikey: 'API_KEY',
  lang: 'ru_RU',
};

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    AngularYandexMapsModule.forRoot(mapConfig)
  ],
  exports: [
    MapComponent
  ],
  providers: []
})
export class MapModule { }

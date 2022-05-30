import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { Component, OnInit, ViewChild } from '@angular/core';
// eslint-disable-next-line max-len
import { Environment, GoogleMap, GoogleMapOptions, GoogleMaps, GoogleMapsAnimation, GoogleMapsEvent, MyLocation } from '@ionic-native/google-maps';
import { LoadingController, Platform } from '@ionic/angular';


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  @ViewChild('map', {static:true}) mapElement: any;
  private loading: any;
  private map: GoogleMap;

  private lat: number;
  private lng: number;

  constructor(
    private platform: Platform,
    private loadingController: LoadingController,
    private geolocation: Geolocation
  ) { }

  ngOnInit() {
    this.setLocation();
    this.mapElement = this.mapElement.nativeElement;
    this.mapElement.style.width = this.platform.width() + 'px';
    this.mapElement.style.height = this.platform.height() + 'px';

    this.loadMap();
  }

  setLocation() {
      this.geolocation.getCurrentPosition().then((resp) => {
        this.lat = resp.coords.latitude;
        this.lng = resp.coords.longitude;
       }).catch((error) => {
         console.log('Error getting location', error);
       });
  }

  async loadMap() {
    this.loading = await this.loadingController.create({ message: 'Por Favor, aguarde...' });
    await this.loading.present();

    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBm0U3FbqXvrrJn8Uq0-xJf3ANghN8rf_A',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBm0U3FbqXvrrJn8Uq0-xJf3ANghN8rf_A'
    });

    const mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: this.lat,
          lng: this.lng
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create(this.mapElement, mapOptions);

    try {
      await this.map.one(GoogleMapsEvent.MAP_READY);
      this.addOriginMarker();
    } catch (error) {
      console.error(error);
    }
  }

  async addOriginMarker() {
    try {
      const myLocation: MyLocation = await this.map.getMyLocation();

      await this.map.moveCamera({
        target: {
          lat: this.lat,
          lng: this.lng
        },
        zoom: 18
      });

      this.map.addMarkerSync({
        title: 'Origem',
        icon: '#000',
        animation: GoogleMapsAnimation.DROP,
        position: {
          lat: this.lat,
          lng: this.lng
        }
      });
    } catch (error) {
      console.error(error);
    } finally {
      this.loading.dismiss();
    }
  }
}

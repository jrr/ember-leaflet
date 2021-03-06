import Controller from '@ember/controller';
import { A } from '@ember/array';
import { setProperties, computed } from '@ember/object';

export default Controller.extend({
  lat: 45.528178,
  lng: -122.670059,
  zoom: 14,

  restaurants: A([
    {
      name: 'Sinju Restaurant',
      rating: 4,
      lat: 45.528531,
      lng: -122.681682
    },
    {
      name: 'Burgerville',
      rating: 3.8,
      lat: 45.530970,
      lng: -122.661968
    },
    {
      name: 'Le Pigeon',
      rating: 4.5,
      lat: 45.522752,
      lng: -122.657979,
      isOpen: true
    }
  ]),

  dangerZone: computed('restaurants.@each.lat', 'restaurants.@each.lng', function() {
    return this.get('restaurants').map((r) => ({ lat: r.lat, lng: r.lng }));
  }),

  actions: {
    updateLocation(r, e) {
      let location = e.target.getLatLng();
      setProperties(r, {
        lat: location.lat,
        lng: location.lng
      });
    }
  }

});

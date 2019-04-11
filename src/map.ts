class Map {
  map: google.maps.Map;
  constructor() {
    console.log("Map Loaded")
    this.map = this.init()
    // this.listen('click');
  }

  init(): google.maps.Map {
    let map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: { lat: 40.90791, lng: 29.17695 }
    });

    map.data.loadGeoJson(
      "https://storage.googleapis.com/mapsdevsite/json/google.json"
    );
    return map;
  }

  listen(eventName: string, fn : Function) {
    this.map.addListener(eventName, (function(event, _fn){
      console.log("inside 2")
      _fn(event)
      return <any>[1]
    })(event, fn));
  }

  // mapClickHandler(e) {
  //   console.log("mapClickHandler")
  //   this.MarkerObject.closeInfoWindow();
  //   this.MarkerObject.setAllMarkersDefault();
  // }
}

export default Map;

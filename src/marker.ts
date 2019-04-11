import InfoWindowObject from "./window";

class Marker {
  public marker: google.maps.Marker;
  public markers: [google.maps.Marker] = <any>[];
  public map: google.maps.Map = null;
  public lastWindow: google.maps.InfoWindow;
  public InfoWindow;
  constructor() {
    console.log("Marker Loaded");
    this.InfoWindow = new InfoWindowObject();
    this.lastWindow = this.InfoWindow.lastWindow;
    // this.lastWindow = this.createInfoWindow("loading");)
  }

  public create({ map, position, unvan, ruhsatNo }) {
    // Create a marker
    let marker = new google.maps.Marker({
      map,
      position,
      title: unvan,
      animation: google.maps.Animation.DROP,
      opacity: 0.9
      // optimized : false
    });
    marker.setValues({
      ruhsatNo: ruhsatNo.trim()
    });
    if (!this.map) {
      this.map = map;
    }
    let that = this;

    marker.addListener("mouseover", function() {
      this.setZIndex(100);
      this.setOpacity(1);
    });

    marker.addListener("mouseout", function() {
      // this.setZIndex(100);
      this.setOpacity(0.9);
    });

    // Set click handler to the Marker
    marker.addListener("click", function(e) {
      // Close last InfoWindow
      that.closeInfoWindow();

      let windowContentHtml = `
            <div style="width:250px;min-height:300px">
              <h4>${this.getTitle()}</h4>
              İçerik
            </div>
        `;

      // selectBayiFromList(this.ruhsatNo);

      // Create new InfoWindow for clicked marker
      that.InfoWindow.setInfoWindow(`${windowContentHtml}`, this.getPosition());
      // Listen for InfoWindow change event
      that.InfoWindow.listen(that.setAllMarkersDefault);
      // Open the InfoWindow for clicked marker
      that.lastWindow.open(that.map, this);
      // Set 0 to all markers
      that.setAllMarkersPassive();
      // Set high index to the marker
      this.setZIndex(100);
      this.setOpacity(0.9);
    });

    this.markers.push(marker);
  }

  closeInfoWindow() {
    if (this.lastWindow) this.lastWindow.close();
  }

  clickOutsideOfMarker(context) {
    console.log("clickOutsideOfMarker");
    this.closeInfoWindow();
    this.setAllMarkersDefault();
  }

  setAllMarkersPassive() {
    this.markers.map(_m => {
      _m.setZIndex(100);
      _m.setOpacity(0.5);
    });
  }

  setAllMarkersDefault() {
    this.markers.map(_m => {
      _m.setOpacity(0.9);
    });
  }
}

export default Marker;

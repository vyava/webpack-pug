class InfoWindowObject {
  public lastWindow;
  constructor() {
      console.log("InfoWindow Loaded")
      this.setInfoWindow();
  }
  // Create InfoWindow instance for marker
  public setInfoWindow(content?: string, position?: any) {
    if (!this.lastWindow) {
      this.lastWindow = new google.maps.InfoWindow({
        content
      });
    }
  }

  public listen(fn: Function) {
    this.lastWindow.addListener("closeclick", e => fn);
  }
}

export default InfoWindowObject;

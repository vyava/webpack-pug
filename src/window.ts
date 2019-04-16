class InfoWindowObject {
  public lastWindow: google.maps.InfoWindow;
  constructor() {
    console.log("InfoWindow Loaded");
    this.setInfoWindow();
  }
  // Create InfoWindow instance for marker
  public setInfoWindow(message?: string) {
    const content = `
      <div style="width:250px;min-height:300px">
        <h4>${message}</h4>
        <table class="table">
          <tbody>
              <tr>
                <th>#</th>
                  <td>1</td>
              </tr>
              <tr>
                <th>Bayi Adı</th>
                  <td>John</td>
              </tr>
              <tr>
                <th>İl</th>
                  <td>Carter</td>
              </tr>
              <tr>
                <th>İlçe</th>
                  <td>johncarter@mail.com</td>
              </tr>
          </tbody>
      </table>
      </div>
    `;

    if (!this.lastWindow) {
      this.lastWindow = new google.maps.InfoWindow({
        content
      });
    } else {
      this.lastWindow.setContent(content);
    }
  }

  private setInfoWindowHtml(marker: google.maps.Marker) {}

  public listen(fn: Function) {
    this.lastWindow.addListener("closeclick", e => fn);
  }
}

export default InfoWindowObject;

class InfoWindowObject {
  public lastWindow: google.maps.InfoWindow;
  constructor() {
    this.setInfoWindow();
  }
  // Create InfoWindow instance for marker
  public setInfoWindow(message?: string) {
    const content = `
      <div style="width:300px;min-height:270px">
        <h5>${message}</h5>
        <table class="table">
          <tbody>
              <tr>
                <th>Adı Soyadı</th>
                  <td>Mehmet Genç</td>
              </tr>
              <tr>
                <th>İl</th>
                  <td>İSTANBUL</td>
              </tr>
              <tr>
                <th>İlçe</th>
                  <td>KADIKÖY</td>
              </tr>
              <tr>
                <th>Ruhsat No</th>
                  <td>3435867PT</td>
              </tr>
              <tr>
                <th>TİP</th>
                  <td>BAKKAL</td>
              </tr>
              <tr>
                <th>TİP DSD</th>
                  <td>01BAK</td>
              </tr>
              <tr>
                <th>Adres</th>
                  <td>Atalar Mah Köroğlu Cad No:46 D:7</td>
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

  // private setInfoWindowHtml(marker: google.maps.Marker) {}

  public listen(fn: Function) {
    this.lastWindow.addListener("closeclick", e => fn);
  }
}

export default InfoWindowObject;

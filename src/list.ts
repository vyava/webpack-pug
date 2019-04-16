// import Marker from "./marker";

class List {
  MarkerObject;
  constructor() {
    // this.MarkerObject = new Marker();
  }
  lastSelectedElement;
  selectBayiFromList(ruhsatNo: string) {
    this.removeActiveElement();
    let el = document.getElementById(ruhsatNo);
    el.classList.add("active");

    this.lastSelectedElement = el;
  }

  removeActiveElement() {
    if (this.lastSelectedElement) {
      this.lastSelectedElement.classList.remove("active");
    }
  }
  getElementList() {
    return [].slice.call(document.getElementsByClassName("list-group-item"));
  }

  addClickHandler(fn) {
    const listWrapper = document.getElementById("list");
    listWrapper.addEventListener("click", (e: any) => {
      let target: HTMLElement = e.target;
      if (target.classList.contains("list-group-item")) {
        let ruhsatNo = target.getAttribute("id");
        fn(ruhsatNo)
      }
    });
  }
}

export default List;

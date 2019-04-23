// import Marker from "./marker";

class List {
  MarkerObject;
  elementList : [HTMLElement];
  headerList : [HTMLElement];
  constructor() {
    // this.MarkerObject = new Marker();
    this.headerList = this.getHeaderList();
    this.headerList.map(el => el.addEventListener('click', this.headerClick))
  }
  lastSelectedElement;
  selectBayiFromList(ruhsatNo: string) {
    this.removeActiveElement();
    let el = document.getElementById(ruhsatNo);
    el.classList.add("active");

    this.lastSelectedElement = el;
  }

  setPassiveHeadersByClassName(className : string){
    console.log("dsfsdf")
    // this.headerList.map(el => {
    //   if(el.classList.contains(className)){
    //     el.classList.add("d-none")
    //   }
    // })
  }

  headerClick(e){
    let header : HTMLElement = e.target;
    console.log(this.headerList)
    // this.headerList.map(el => {
    //   if(el.classList.contains(header.getAttribute("id"))){
    //     el.classList.add("d-none")
    //   }
    // })
    // this.setPassiveHeadersByClassName("")
  }

  

  removeActiveElement() {
    if (this.lastSelectedElement) {
      this.lastSelectedElement.classList.remove("active");
    }
  }
  getElementList() {
    this.elementList = [].slice.call(document.getElementsByClassName("list-group-item"));
    return this.elementList;
  }

  getHeaderList(){
    this.elementList = [].slice.call(document.getElementsByClassName("nav-link"));
    return this.elementList;
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

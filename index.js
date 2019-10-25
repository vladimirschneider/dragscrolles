class Dragscrolles {
  constructor(element) {
    this.element = element;
    this.scroller = this.element.parentElement;

    this.start = false;
    this.startMousePositionX = 0;
    this.startMousePositionY = 0;
    this.startScrollPositionX = 0;
    this.startScrollPositionY = 0;

    this.element.addEventListener('mousedown', (e) => {
      e.preventDefault();

      this.startMousePositionX = e.screenX;
      this.startMousePositionY = e.screenY;
      this.startScrollPositionX = this.scroller.scrollLeft;
      this.startScrollPositionY = this.scroller.scrollTop;

      this.start = true;
    });

    document.documentElement.addEventListener('mouseup', (e) => {
      e.preventDefault();

      this.startMousePositionX = 0;
      this.startMousePositionY = 0;
      this.startScrollPositionX = 0;
      this.startScrollPositionY = 0;

      this.start = false;
    });

    this.element.addEventListener('mousemove', (e) => {
      if (this.start) {
        e.preventDefault();

        this.scroller.scrollTo(
          this.startScrollPositionX + (this.startMousePositionX - e.screenX),
          this.startScrollPositionY + (this.startMousePositionY - e.screenY),
        );
      }
    });
  }
}

export default Dragscrolles;

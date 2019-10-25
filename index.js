class Dragscrolles {
  constructor(element) {
    this.element = element;
    this.listener = true;

    this.start = false;
    this.startMousePositionX = 0;
    this.startMousePositionY = 0;
    this.startScrollPositionX = 0;
    this.startScrollPositionY = 0;

    this.element.addEventListener('mousedown', (e) => {
      e.preventDefault();

      this.startMousePositionX = e.screenX;
      this.startMousePositionY = e.screenY;
      this.startScrollPositionX = this.element.scrollLeft;
      this.startScrollPositionY = this.element.scrollTop;

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
      if (this.listener && this.start) {
        e.preventDefault();

        this.element.scrollTo(
          this.startScrollPositionX + (this.startMousePositionX - e.screenX),
          this.startScrollPositionY + (this.startMousePositionY - e.screenY),
        );
      }
    });
  }

  enable() {
    this.listener = true;
  }

  disable() {
    this.listener = false;
  }
}

export default Dragscrolles;

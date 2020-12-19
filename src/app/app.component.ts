import { Component, ElementRef, HostListener } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private elRef: ElementRef) {}

  @HostListener("window:scroll", ["$event"])
  scrollHandler() {
    const topDistance = window.pageYOffset;
    const layers = this.elRef.nativeElement.querySelectorAll(
      "[data-type='parallax']"
    );
    layers.forEach(layer => {
      const depth = layer.getAttribute("data-depth");
      const translate3d = "translate3d(0, " + -(topDistance * depth) + "px, 0)";
      layer.style["-webkit-transform"] = translate3d;
      layer.style["-moz-transform"] = translate3d;
      layer.style["-ms-transform"] = translate3d;
      layer.style["-o-transform"] = translate3d;
      layer.style.transform = translate3d;
    });
  }
}

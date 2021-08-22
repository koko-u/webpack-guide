import "@/css/styles.css";
import { hello } from "@/js/greeting";
import { insertImage } from '@/js/insert-image'
import { activateNavbar } from '@/js/activate-navbar'

console.log("Hello Webpack");
hello();

window.onload = function () {
  insertImage();
  activateNavbar();
}

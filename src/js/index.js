import "@/css/styles.css";
import { hello } from "@/js/greeting";
import { insertImage } from '@/js/insert-image'

console.log("Hello Webpack");
hello();

window.onload = insertImage;

import thumbnail from "@/img/thumbnail.jpg";

export function insertImage() {
  const div = document.getElementById("thumbnail");
  const img = document.createElement("img")
  img.src = thumbnail
  div.appendChild(img)
}

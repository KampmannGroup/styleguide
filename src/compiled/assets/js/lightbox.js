import baguetteBox from "baguettebox.js";

export const lightbox = (target = document) => {
  const test = baguetteBox.run('.gallery')
  console.log(test)
}
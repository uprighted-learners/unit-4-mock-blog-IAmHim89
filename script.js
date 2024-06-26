async function render(fi, si) {
  let response = await fetch(
    `https://rickandmortyapi.com/api/character/${fi},${si}`
  );
  let data = await response.json();
  console.log(data);
  // Your code goes here
  //queryselector for both images
  let firstImage = document.querySelector("#firstImage");
  let secondImage = document.querySelector("#secondImage");

  firstImage.src = "https://rickandmortyapi.com/api/character/avatar/181.jpeg";
  secondImage.src = "https://rickandmortyapi.com/api/character/avatar/532.jpeg";
}

render(20, 35);

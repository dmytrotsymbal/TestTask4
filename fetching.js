const fetchImagesContainer = document.getElementById("fetchImages");

let currentCount = 9;

async function fetchImages() {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=s2iDMNtNY-yGTP-Q8T1X3dNDY8Dw3vzuBE6T1ia07hg&count=${currentCount}`
  );
  const data = await response.json();
  return data;
}

function createPhotoElement(photo) {
  const img = document.createElement("img");
  img.src = photo.urls.small;
  img.alt = photo.alt_description;
  img.classList.add("photo");

  img.addEventListener("load", () => {
    new Masonry(fetchImagesContainer, {
      itemSelector: ".photo",
      columnWidth: fetchImagesContainer.offsetWidth * 0.32,
      gutter: 25,
    });
  });

  return img;
}

async function displayImages() {
  try {
    const images = await fetchImages();
    images.forEach((photo) => {
      const photoElement = createPhotoElement(photo);
      fetchImagesContainer.appendChild(photoElement);
    });
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

//loadmore--------------------------------------------------------------------

const loadMoreButton = document.getElementById("loadMore");

loadMoreButton.addEventListener("click", () => {
  currentCount = currentCount + 3;
  displayImages();
});

displayImages();

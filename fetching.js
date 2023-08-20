//if you have promblems with the fetching images - its probably becouse of the "Rate Limit Exceeded",
//please copy and paste another client id and try again

// first - 896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043
// second - s2iDMNtNY-yGTP-Q8T1X3dNDY8Dw3vzuBE6T1ia07hg

const fetchImagesContainer = document.getElementById("fetchImages");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const closePopup = document.getElementById("closePopup");

let currentCount = 10;
async function fetchImages() {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043&count=${currentCount}`
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
      columnWidth: ".photo",
      gutter: 0,
    });
  });

  img.addEventListener("click", () => {
    openPopup(photo.urls.full);
  });

  return img;
}

function openPopup(imageUrl) {
  popupImage.src = imageUrl;
  popup.style.display = "flex";
}

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

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

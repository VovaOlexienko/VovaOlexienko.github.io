const API_PRODUCT = 'data/products.json';

const getProduct = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  return await response.json();
};

// NEW VERSION CREATES CARDS FOR CLASS
const cardWrapper = document.querySelector('.cards__wrapper');

class Cards {
  constructor(image, description, price) {
    this.image = image;
    this.description = description;
    this.price = price;
  }

  render() {
    const div = document.createElement('div');

    div.classList.add('card');

    div.innerHTML = `
      <img src=${this.image} alt="image-product" class="image-product" />
      <p class="description-product">${this.description}</p>
      <p class="price-product">${this.price}₴</p>
      <button>add to cart</button>
    `;
    cardWrapper.appendChild(div);
  }
}

getProduct(API_PRODUCT).then((data) => {
  data.map(({ image, description, price }) => {
    new Cards(image, description, price).render();
  });
});

import { useNotification } from "@kyvg/vue3-notification";
const { notify }  = useNotification()

const userCart = []


export const addToCart = (item) => {
  notify({
    text: "Добавлено в корзину",
  });

  const itemInCart = userCart.find(cartItem => cartItem.name === item.name)

  if (itemInCart) {
    itemInCart.count = (itemInCart.count + 1) || 1
    localStorage.setItem('userCart', JSON.stringify(userCart))
  } else {
    item.count = 1
    userCart.push(item)
    localStorage.setItem('userCart', JSON.stringify(userCart))
  }

}


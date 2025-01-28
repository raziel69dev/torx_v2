import { useNotification } from "@kyvg/vue3-notification";
import {reactive} from "vue";
const { notify }  = useNotification()

export const userCart = reactive({
  cart: []
})

export const counter = reactive({
  cartCount: 0
})

export const updateCounter = () => {
  counter.cartCount = 0
  for (const item of userCart.cart) {
    counter.cartCount += item.count
  }
}
export const addToCart = (item) => {
  notify({
    text: "Добавлено в корзину",
  });

  const itemInCart = userCart.cart.find(cartItem => cartItem.name === item.name) || null

  if (itemInCart) {
    itemInCart.count = (itemInCart.count + 1) || 1
    localStorage.setItem('userCart', JSON.stringify(userCart.cart))
  } else {
    item.count = 1
    userCart.cart.push(item)
    localStorage.setItem('userCart', JSON.stringify(userCart.cart))
  }

  updateCounter()

}


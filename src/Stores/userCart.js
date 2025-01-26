import { useNotification } from "@kyvg/vue3-notification";
const { notify }  = useNotification()

export const addToCart = (item) => {
  notify({
    text: "Добавлено в корзину",
  });

  userCart.push(item)
  console.log(userCart)
}


const userCart = []

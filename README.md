# Gif showing page interaction

![gif](https://github.com/sovejero/ecom/blob/8-router/public/pageInteraction.gif)

Pequeño ecommerce de granos de cafe.

No se incluyeron librerias de estilos o ui para mantener la simpleza. El unico asset usado (svg) se mantuvo en la carpeta del componente por la misma razon pero solo de manera temporal.
Si bien en una directiva de rutas se requiere '/category/:id' luego se mencion useParams(:catId), lo cual no es del todo claro. A pesar de esto se mantuvo el id como parametro a pesar de hacer referencia a category. Se incluyo category como propiedad del elemento Item a pesar de no estar en el signature original.
ItemCount se agrego stock y initial por default para poder visualizarlo bien en esta instancia.
## Luxor Ecommerce - React

Este proyecto trata sobre un ecommerce de bebidas con y sin alcohol. En el mismo se muestran los productos disponibles, con su respectivo detalle, precio y cantidad disponible.
Tambien se cuenta con un formulario y carrito para confirmar la compra y generacion de orden.

Acontinuacion, se explica muy breve y simple la funcionalidad de cada componente:

# [ItemListContainer]

Es el encargado de traer los productos alojados en la base de datos y renderizarlos de acuerdo a una condicion, si la categoria en la que se encuentra el usuario es la misma que la categoria
que tiene el producto, si es asi, solo contendra los produtos que tengan dicha categoria. Este componente le pasa los prodcutos a ItemList.

# [ItemList]

Este componente es el encargado de recibir todos los items, a su vez los almacena en un container y los mapea pasandole las propiedades de cada producto al componente Item.

# [Item]

Como dije, este recibe los items y sus propiedades mapeados. Se encaarga de generan la vista principal de cada prodcuto, su nombre, imagen y un texto para mostrar los detalles, esto
lo hace pasandole el id del producto que se selecciono al componente ItemDetailContainer.

# [ItemDetailContainer]

Este componente recibe un id del componente Item, al recibirlo, debe buscar y traer el producto desde la base de datos y crear el contenedor para poder mostrarlo. Ese producto que consiguio
con su id, es pasado al componente ItemDetail.

# [ItemDetail]

Se encarga de renderizar toda la vista del detalle del producto seleccionado, nombre, imagen, precio, etc. Tiene una funcion que almacena la cantidad del producto seleccionado mediante el
boton ItemCount, esa cantidad es pasada al contexto addItem, que se encarga de agregar el producto al carrito. Tambien tiene un boton de finalizar, que lo llevara al carrito.

# [ItemCount]

Este boton contiene toda la logica para agregar un producto al carrito, con los respectivos boton para sumar o disminuir la cantidad, dicha cantidad no puede superar el stock del producto
o no puede ser menor a 0. Al hacer click, la cantidad seleccionada es pasada a la funcion onAdd, si la cantidad es mayor a 0, le pasara la cantidad al contexto y este lo almacenara.

# [CartContext]

Este componente contexto es el encargado de recibir una cantidad de un producto y por supuesto, el producto en si. Tiene 4 funciones altamente necesarias para el funcionamiento:

1. calcPriceTot: esta funcio recibe un precio, ese mismo es el precio de cada producto almacenado en el contexto cartList, suma todos los precios y ese es el total de todo el carrito junto.
2. addItem: esta funcion es la que almacena el producto dentro de cartList, pero para eso debemos ver si el producto ya esta agregado o no. Primero, hace una copia de esa variable, para no modificar la original. Luego se crear una variable que contiene, a su vez, la variable de copia, se recorre dicha variable para encontrar el indice del producto existente, si el indice existe, nos devolvera un numero (el indice) que es el que almacenamos en la variable. Creamos una condicion, si el indice es diferente a -1 (existe, si es -1, no existe), accedemos a la copia del cartList, mas precisamente al indice que encontramos, y en lugar de sobreescribirlo, accedemos a la propiedad de cantidad del producto y se la sumamos, sino, si ese indice no existe, hacemos una copia del producto seleccionado y le pasamos la cantidad seleccionada a la variable copia (updateCart). Finalmente, seteamos esa variable al estado setCartList.
3. removeItem: esta funcion filtra el cartList omitiendo el producto que tenga un id igual que le pasamos, esto quiere decir que todos los demas productos van a estar denntro del cartList, menos el producto que tenga el mismo id. Esto es util para eliminar un solo producto del carrito.
4. clearList: vuelve el cartList a un array vacio, simulando la eliminacion de todos los productos dentro del carrito.

# [Cart]

Este componente utiliza todos los contextos creados en el anterior, se encarga de generar el carrito con todos los productos en el. Tiene un efecto que calcula el precio total a medida que el cartList cambia, si el carrito esta vacio muestra un mensaje. Al mapear los productos, mostramos un boton con una imagen de un tacho de basura, esto es, respectivamente, el boton que le pasa el id del producto a la funcion removeItem() y la misma utiliza dicho id para eliminarlo de la lista. Tambien esta el boton para vaciar el carrito, como ya se explico, llama a la funcion clearList(). El boton de confirmar productos nos llevan al checkout.

# [Checkout]

Renderiza un formulario donde ingresaremos nuestro nombre, email y telefono, esos valores se guardan en un estado. A su vez, los productos agregados al carrito son utilizados para crear la orden de compra. Mapeamos todos los producto seleccionados para almanecarlos en una variable cada uno, obtenemos la base de datos, creamos la referencia y agregamos un nuevo documento, este documento parara en la coleccion de ordenes y el documento sera la orden creada anteriormente. El boton de finalizar compra dara la orden al formulario para que llame a la funcion createOrder para poder hacer todo el proceso anterior. Una vez finalizada la compra, se genera un id, ese id es guardao en un estado y mostrado por pantalla.

# [CartWidget]

Este componente renderiza la imagen del carrito, dicha imagen, si no hay productos agregaos al carrito (0), no se mostrara.

# [NavBar]

Como su nombre lo indica, se encarga de renderizar la navbar de la pagina.

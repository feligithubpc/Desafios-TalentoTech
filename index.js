     let nombreProducto = "Short de futbol"; 
     let precioUnitario = 100.000; 
     let cantidadDeseada; 

   
     cantidadDeseada = prompt(`¿Cuántos ${nombreProducto} deseas comprar?`, 1);

   
     let costoTotal = precioUnitario * cantidadDeseada;

   
     alert(`Seleccionaste ${cantidadDeseada} unidades de ${nombreProducto}. El costo total es $${costoTotal.toFixed(2)}.`);
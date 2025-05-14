let cantidad = parseInt(document.getElementById("cantidad_entradas").value);

function mostrar_datos(){
    
}
function descuento(){
    let descuento = 0.2*((500000+350000)* cantidad);
    let boleta = (document.getElementById("localidad").value);
    if (boleta == 'AMBAS'){
        alert('el descuento es ', + descuento )
    }
    else{
        alert('no se obtiene descuento')
    }
    console.log(descuento)
}
function Visualizacion(){

}
function Confirmacion(){
    let total = 0;
    let boleta = (document.getElementById("localidad").value);
    if (boleta == 'VIP'){
        total += 500000* cantidad;
        
    }
    if (boleta == 'GENERAL'){
        total += 350000* cantidad;
    }
    if (boleta == 'AMBAS'){
        total += 500000+350000* cantidad;

    }
    alert('el valor total de su compra es ' + total)



}
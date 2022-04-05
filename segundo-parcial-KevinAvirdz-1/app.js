const formReceta=document.getElementById("formRec");
const nombre=document.getElementById("nombre");
const imagen=document.getElementById("Imagen");
const  descripcion=document.getElementById("descripcion");
const keyList = "RecetaList";


document.addEventListener("DOMContentLoaded", function() {
    formReceta.addEventListener("submit",submitRecetas);
    
});

function submitRecetas(e){
    e.preventDefault();
    e.stopPropagation();

    let Receta={
        id: Date.now,
        text: formReceta["Receta"].value

    }
    let list = getRecetas();

    list.push(Receta);

    localStorage.setItem(keyList, JSON.stringify(list));

}

function display_imagen(imagen,){
    var img = document.createElement("img");
    a.imagen = imagen;
    document.body.appendChild(a)
}

 function verification(){
   let  nombre=document.getElementById("nombre").focus;
    let imagen=document.getElementById("Imagen").focus;
    let  descripcion=document.getElementById("descripcion").focus;
    if(nombre==null || imagen== null || descripcion==null)
    {
        console.log("Prolemas al guardar lo datos ");
    }else{
        console.log(nombre+" "+imagen+" "+descripcion);
    }

 }


function newIng(){
        Element.appendChild(ingredient-temp-list)
        {
        html+=
        <li class="[ bg-white color-gray ]">
                          <input type="text" id="ingredient-name" class="[ form-control ] [ color-gray ]"/>
                        <button class="close" type="button" >X </button>
        </li>
        }       
}


function getRecetas()
{
    let list = JSON.parse(localStorage.getItem(keyList));

    if (list === null) {
        return [];
    }
    else {
        return list;
    }
}
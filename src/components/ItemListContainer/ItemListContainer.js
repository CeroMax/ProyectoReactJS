
import { productosFerreteria } from "../../assets/baseDatos/baseDatos";
//import { useParams } from "react-router-dom";

export const ItemListContainer= () =>{
    const promesa = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(productosFerreteria);
        }, 2000);
    })
    console.log(promesa);
}
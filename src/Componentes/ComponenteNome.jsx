import { useEffect, useState } from "react";

function ComponenteNome(){
    const [nome, setnome] = useState("Arielle");
    return (
        <div>
           <button onDoubleClick={() => setnome("Ari")}>apelido</button>
           <button onDoubleClick={() => setnome("Arielle")}>nome</button>

           <p>ola:{nome}</p>
        </div>
    );
    // useEffect(()=>{
    //     alert (`alterando  nome para ${nome}`)
    // }

//     )
}

export {ComponenteNome};
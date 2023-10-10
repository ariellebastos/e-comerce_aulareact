function ComponenteResumoSobreVoce(props) {
    return (
        <div
        style={{
             
        }}
        >
            <div>resumo</div>
            <p>nome: {props.nome}</p>
            <p>Idade {props.idade}</p>

            <div>
                <p><b>SOBRE <br /></b>{props.children}</p>
            </div>
        </div>
    );
}

export {ComponenteResumoSobreVoce};
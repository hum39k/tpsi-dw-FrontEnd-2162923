

const localidades = ["Funchal","Santa Cruz", "Ribeira Brava", "Calheta", "Porto Moniz"];



function ListGroup(){
    if (localidades.length == 0)
        return <h1>Array está vazio!</h1>
    
    // return localidades.length === 0 ? <h1>Array Vazio</h1> : null

    return(
<>
<h1>Titulo da lista</h1>
<ul className="list-group">
    {
    localidades.map((item) => (<li className="list-group-item" key={item}>{item}</li>))
    }
</ul>
</>

    );

}

export default ListGroup;
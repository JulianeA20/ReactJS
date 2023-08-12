import "./EventCard.css"

//props = {img, data, descricao, deletarEvento, nome}

export function EventCard({img, data, descricao, deletarEvento, nome, id}) {
    return (
        <div className='card-evento'>
            <img src={img} alt='' />

            <div className='infos-evento'>
                <div>
                    <h2>{nome}</h2>
                    <p>{descricao}</p>
                    <span>{data}</span>
                </div>
                <div>
                    <button onClick={() => deletarEvento(id)}>
                        Deletar
                    </button>
                    <button>Editar</button>
                </div>
            </div>
        </div>
    )
}
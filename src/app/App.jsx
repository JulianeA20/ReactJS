import './App.css';
import { Header } from '../components/Header/header';
import { EventCard } from '../components/EventCard/EventCard';
import { useState } from 'react';

const eventosEstaticos = [
  {
    id: 1,
    nome: "Protesto por férias",
    img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdissenso.org%2Fdireito-fundamental-ao-protesto%2F&psig=AOvVaw36EWwaqtMo3EZeEAYqqIPN&ust=1690117531323000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCNiohauwooADFQAAAAAdAAAAABAD',
    data: "16/07/2023, 12:00"
  },
  {
    id: 2,
    nome: "Dia do surto",
    img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gruporecanto.com.br%2Fblog%2Fsurto-psicotico%2F&psig=AOvVaw2DNvd2ZFhAp8OTRvoX4aTy&ust=1690117564400000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCOivvbywooADFQAAAAAdAAAAABAQ',
    data: "20/07/2023, 18:00"
  },
  {
    id: 3,
    nome: "Workshop de Git e GitHub",
    img: ('./assets/workshop.png'),
    data: "22/07/2023, 10:30"
  }
]

function App() {
  const [eventos, setEventos] = useState(eventosEstaticos)
  const [nome, setNome] = useState("")
  const [data, setData] = useState("")
  const [imagem, setImagem] = useState("")

  function converterImagem(evento) {
    const reader = new FileReader()
    reader.readAsDataURL(evento.target.files[0])

    reader.onload = () => {
      setImagem(reader.result)
    }
  }

  function criarEvento(e) {
    e.preventDefault()

    const id = eventos.length + 1
    const dataFormatada = new Date(data).toLocaleDateString('pt-br', {
      weekday: 'short',
      day: "numeric",
      year: "numeric",
      month: "long"
    })

    const novoEvento = {
      id,
      nome,
      data: dataFormatada,
      img: imagem
    }

    setEventos([...eventos, novoEvento])
  }

  return (
    <>
      <Header />
      <div className="App">
        <h1 className='home-title'>Bem-vindo ao site de eventos</h1>

        <div className='container'>
          <form onSubmit={criarEvento}>
            <div className='group'>
              <div id='nome'>
                <label htmlFor='nome'>Nome</label>
                <input onChange={(e) => setNome(e.target.value)} type='text' id='nome'/>
              </div>
              <div id='descricao'>
                <label htmlFor='descricao'>Descrição</label>
                <input type='text' id='descricao'/>
              </div>
            </div>
            <div className='data'>
              <label htmlFor='data'>Data</label>
              <input onChange={(e) => setData(e.target.value)} type='datetime-local' id='data' />
            </div>
            <div className='label-imagem'>
              <label htmlFor='imagem'>Selecione a imagem</label>
              <input onChange={converterImagem} type='file' id='imagem' />
            </div>
            
            <div
              style={{display: imagem ? "block" : "none"}}
              className='preview-imagem'
              >
              <img src={imagem} alt=""/>
            </div>

            <button>Cadastrar</button>
          </form>
        </div>

        <div className='container-eventos'>
          {
            eventos.map((evento, index) => {
              return (
                  <EventCard
                    key={evento.id}
                    nome={evento.nome}
                    data={evento.data}
                    img={evento.img}
                  />
              )
            })}
        </div>
      </div>
    </>
  );
}

export default App;
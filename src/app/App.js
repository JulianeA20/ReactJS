import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Crie momentos que vão ficar na memória</h1>

      <section>
        <form>
          <div>
            <label htmlFor='nome'>Nome</label>
            <input type='text' id='nome' placeholder='Digite o nome do evento...'></input>
          </div>
          <div>
            <label htmlFor='data'>Data</label>
            <input type='datetime-local' id='data'></input>
          </div>
          <div>
            <label htmlFor='img'>Selecione a imagem</label>
            <input type='file' id='img'/>
          </div>
          <button>Cadastrar</button>
        </form>

        <div className='eventos'></div>
      </section>
    </div>
  );
}

export default App;

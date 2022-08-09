import React from 'react';

const App = ({ name }) => {

    return (
      <article>
        <div>
          <section>
            <h1> {name} </h1>
            <h1> Bem vindo a pagina de testes de Micro Frontends </h1>
            <div> 
                Esta página foi criada com o objetivo de realizar a demonstração
                da criação de uma aplicação utilizando micro frontends para a
                disciplina de Programação avançada.
            </div>

          </section>
        </div>
      </article>
    );
}


export default App;
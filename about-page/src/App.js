import React from 'react';

const App = ({ name }) => {

    return (
      <article>
        <div>
          <section>
            <h1> {name} </h1>
            <h1> bem vindo ao About </h1>
            <div> 
                Este projeto foi desenvolvido por: Iverton, Felipe, Bianca, Yuri, Beatriz
            </div>

          </section>
        </div>
      </article>
    );
}


export default App;
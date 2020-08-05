import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
                <header>
                    <img src="https://avatars2.githubusercontent.com/u/16058480?s=460&u=1cb397f631583fb16bc9c31af81f8279ba767dbe&v=4" alt="Carlos Guttemberg"/>
                    <div>
                        <strong>Carlos Guttemberg</strong>
                        <span>Programação</span>
                    </div>
                </header>

                <p>
                    teste
                    <br/><br/>
                    teste
                </p>

                <footer>
                    <p>
                        Preço/hora
                        <strong>R$ 80,00</strong>
                    </p>

                    <button type="button">
                        <img src={whatsappIcon} alt="whatsapp"/>
                        Entrar em contato
                    </button>
                </footer>
            </article>
    );

}

export default TeacherItem;
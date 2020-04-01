import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import logoImg  from '../../assets/logo.svg';

export default function NewProduct(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const history = useHistory()

    
    async function handleNewProduct(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value
        }

        try{
            await api.post('products', data)

            history.push('/');
            alert('O produto foi cadastrado com sucesso!')

        } catch {
            alert('Por favor, verifique se preencheu todos os campos de forma correta e tente novamente.')
        }
    }

    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Virtual Store"/>
                    <h1>Cadastrar novo produto</h1>
                    <p>Coloque uma breve descrição sobre o produto que colocará à venda.</p>

                    <Link className="back-link" to="/"> 
                        <FiArrowLeft size={16} color="#e63a27"/>
                        Voltar para home
                    </Link>                    
                </section>

                <form onSubmit={handleNewProduct}>
                    <input 
                        placeholder="Nome do produto"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição do produto"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input type="number" 
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar Produto</button>
                </form>
            </div>
        </div>
    );
}
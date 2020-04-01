import React, { useState, useEffect } from 'react';
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
    const productId = localStorage.getItem('productId');
    

    useEffect(() => {
        api.get('product/' + productId ).then( response => {
            setTitle(response.data.title);
            setDescription(response.data.description);
            setValue(response.data.value);
        })
    }, [productId])
    
    
    async function handleEditProduct(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value
        }

        try{
            await api.put('products/' + productId, data)

            history.push('/');
            alert('O produto foi editado com sucesso!')

        } catch {
            alert('Por favor, verifique se preencheu todos os campos de forma correta e tente novamente.')
        }
    }

    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Virtual Store"/>
                    <h1>Editar produto</h1>
                    <p>Edite as informações do produto ao lado.</p>

                    <Link className="back-link" to="/"> 
                        <FiArrowLeft size={16} color="#e63a27"/>
                        Voltar e cancelar edições
                    </Link>                    
                </section>

                <form onSubmit={handleEditProduct}>
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

                    <button className="button" type="submit">Salvar Edição</button>
                </form>
            </div>
        </div>
    );
}
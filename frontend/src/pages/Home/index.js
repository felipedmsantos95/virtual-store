import React, {useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2, FiEdit } from 'react-icons/fi';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import logoImg  from '../../assets/logo.svg';

import api from '../../services/api'
import './styles.css'

export default function Home(){
    const [products, setProducts] = useState([])
    const history = useHistory();

    useEffect(() => {
        api.get('products').then( response => {
            setProducts(response.data);
        })
    }, [])

    async function handleDeleteProduct(id) {
        try{
            await api.delete('products/' + id );
            setProducts(products.filter(product => product.id != id));

        } catch(err){
            alert('Erro ao deletar o produto, tente novamente.')
        }
    }

    async function modalDeleteProduct(id){
        const options = {
            customUI: ({ onClose }) => { 
                return(
                    <div className='custom-modal'>
                    <p className='modal-question' >Deseja realmente excluir este produto?</p>
                    <div className='modal-buttons'>
                        <button className='modal-button-no' onClick={onClose}>Não</button>
                        <button className='modal-button-yes'
                        onClick={async () => {
                            await handleDeleteProduct(id)
                            onClose();
                        }}
                        >
                        Sim
                        </button>
                    </div>
                  </div>
            )},
            closeOnEscape: true,
            closeOnClickOutside: true,
            willUnmount: () => {},
            afterClose: () => {},
            onClickOutside: () => {},
            onKeypressEscape: () => {}
        };

        confirmAlert(options);

    }

    function handleEditProduct(id) {
        localStorage.setItem('productId', id);
        history.push('/products/edit')
    }

    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Virtual Store"/>
                <span>Bem vindo(a) à nossa loja virtual!</span>
                <Link className="button" to="/products/new">Cadastrar Produto</Link>
            </header>

            <h1>Produtos</h1>

            <ul>
                {products.map( product => (
                    <li key={product.id} >
                        
                        <div>
                            <strong>{product.title}</strong>
                            <p>{product.description}</p>

                            <strong>Valor:</strong>
                            <p> { Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(product.value) } </p>
                        </div>
                                                
                        <button className="button-edit" onClick={() => handleEditProduct(product.id)} >
                            <FiEdit size={20} color="#a8a8b3"/>
                            {/* <span className="button-texts">Editar</span> */}
                        </button>
                        
                        <button className="button-delete" onClick={() => modalDeleteProduct(product.id)} >
                            <FiTrash2 size={20} color="#a8a8b3"/>
                            {/* <span className="button-texts" >Apagar</span> */}
                        </button>
                                        
                        
                        
                       
                    </li>
                ))}
            </ul>
        </div>

    );
}
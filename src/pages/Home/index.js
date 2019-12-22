import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-attract/20/D22-1787-120/D22-1787-120_zoom1.jpg"
          alt="tenis"
        />
        <strong>Tênis legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-attract/20/D22-1787-120/D22-1787-120_zoom1.jpg"
          alt="tenis"
        />
        <strong>Tênis legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-attract/20/D22-1787-120/D22-1787-120_zoom1.jpg"
          alt="tenis"
        />
        <strong>Tênis legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-attract/20/D22-1787-120/D22-1787-120_zoom1.jpg"
          alt="tenis"
        />
        <strong>Tênis legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-attract/20/D22-1787-120/D22-1787-120_zoom1.jpg"
          alt="tenis"
        />
        <strong>Tênis legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}

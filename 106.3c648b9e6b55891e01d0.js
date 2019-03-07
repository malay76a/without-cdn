(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{413:function(i,t,r){"use strict";r.r(t);var s=r(269);customElements.define("uc-plp-item",class extends s.a{static get properties(){return{typed:{type:String,reflect:!0},quickview:{type:Boolean},rating:{type:Boolean}}}static get styles(){return s.b`:host {
        display: -ms-grid;
        display: grid;
        background-color: #fff;
        border: 1px solid #efeeee;
      }

      .plp-item-buttons {
        display: -ms-grid;
        display: grid;
      }

      @media (max-width: 767px) {
        .plp-item-link,
        .plp-item-link * {
          font-size: 0.85714em;
          line-height: normal;
        }

        :host {
          height: 21.42857em;
          -ms-grid-columns: 1.42857em 1fr 1.42857em 1fr 1.42857em;
          grid-template-columns: 1.42857em 1fr 1.42857em 1fr 1.42857em;
          -ms-grid-rows: 1.07143em 0.35714em 4.78571em 0.35714em 1.71429em 0.35714em 3.57143em
            0.35714em 1fr 0.35714em 3.64286em;
          grid-template-rows: 1.07143em 4.78571em 1.71429em 3.57143em 1fr 3.64286em;
          grid-row-gap: 0.35714em;
        }

        :host > *:nth-child(1) {
          -ms-grid-row: 1;
          -ms-grid-column: 1;
        }

        :host > *:nth-child(2) {
          -ms-grid-row: 1;
          -ms-grid-column: 2;
        }

        :host > *:nth-child(3) {
          -ms-grid-row: 1;
          -ms-grid-column: 3;
        }

        :host > *:nth-child(4) {
          -ms-grid-row: 1;
          -ms-grid-column: 4;
        }

        :host > *:nth-child(5) {
          -ms-grid-row: 1;
          -ms-grid-column: 5;
        }

        :host > *:nth-child(6) {
          -ms-grid-row: 3;
          -ms-grid-column: 1;
        }

        :host > *:nth-child(7) {
          -ms-grid-row: 3;
          -ms-grid-column: 2;
        }

        :host > *:nth-child(8) {
          -ms-grid-row: 3;
          -ms-grid-column: 3;
        }

        :host > *:nth-child(9) {
          -ms-grid-row: 3;
          -ms-grid-column: 4;
        }

        :host > *:nth-child(10) {
          -ms-grid-row: 3;
          -ms-grid-column: 5;
        }

        :host > *:nth-child(11) {
          -ms-grid-row: 5;
          -ms-grid-column: 1;
        }

        :host > *:nth-child(12) {
          -ms-grid-row: 5;
          -ms-grid-column: 2;
        }

        :host > *:nth-child(13) {
          -ms-grid-row: 5;
          -ms-grid-column: 3;
        }

        :host > *:nth-child(14) {
          -ms-grid-row: 5;
          -ms-grid-column: 4;
        }

        :host > *:nth-child(15) {
          -ms-grid-row: 5;
          -ms-grid-column: 5;
        }

        :host > *:nth-child(16) {
          -ms-grid-row: 7;
          -ms-grid-column: 1;
        }

        :host > *:nth-child(17) {
          -ms-grid-row: 7;
          -ms-grid-column: 2;
        }

        :host > *:nth-child(18) {
          -ms-grid-row: 7;
          -ms-grid-column: 3;
        }

        :host > *:nth-child(19) {
          -ms-grid-row: 7;
          -ms-grid-column: 4;
        }

        :host > *:nth-child(20) {
          -ms-grid-row: 7;
          -ms-grid-column: 5;
        }

        :host > *:nth-child(21) {
          -ms-grid-row: 9;
          -ms-grid-column: 1;
        }

        :host > *:nth-child(22) {
          -ms-grid-row: 9;
          -ms-grid-column: 2;
        }

        :host > *:nth-child(23) {
          -ms-grid-row: 9;
          -ms-grid-column: 3;
        }

        :host > *:nth-child(24) {
          -ms-grid-row: 9;
          -ms-grid-column: 4;
        }

        :host > *:nth-child(25) {
          -ms-grid-row: 9;
          -ms-grid-column: 5;
        }

        :host > *:nth-child(26) {
          -ms-grid-row: 11;
          -ms-grid-column: 1;
        }

        :host > *:nth-child(27) {
          -ms-grid-row: 11;
          -ms-grid-column: 2;
        }

        :host > *:nth-child(28) {
          -ms-grid-row: 11;
          -ms-grid-column: 3;
        }

        :host > *:nth-child(29) {
          -ms-grid-row: 11;
          -ms-grid-column: 4;
        }

        :host > *:nth-child(30) {
          -ms-grid-row: 11;
          -ms-grid-column: 5;
        }
        .plp-item-img {
          -ms-grid-column: 2;
          grid-column: 2;
          -ms-grid-row: 2;
          -ms-grid-row-span: 3;
          grid-row: 2 / span 3;
        }

        .plp-item-link {
          -ms-grid-column: 4;
          grid-column: 4;
          -ms-grid-row: 2;
          grid-row: 2;
        }

        .plp-item-buttons {
          -ms-grid-column: 1;
          -ms-grid-column-span: 5;
          grid-column: 1 / span 5;
          -ms-grid-row: 6;
          grid-row: 6;
          -ms-grid-columns: (1fr) [3];
          grid-template-columns: repeat(3, 1fr);
        }

        ::slotted([slot='plp-item-descriptions']) {
          -ms-grid-column: 2;
          -ms-grid-column-span: 3;
          grid-column: 2 / span 3;
          -ms-grid-row: 5;
          grid-row: 5;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
        }

        ::slotted([slot='plp-item-price']) {
          -ms-grid-column: 4;
          grid-column: 4;
          -ms-grid-row: 4;
          grid-row: 4;

          display: -webkit-box;

          display: -ms-flexbox;

          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
        }

        ::slotted([slot='plp-item-rating']),
        .plp-item-rating {
          -ms-grid-column: 4;
          grid-column: 4;
          -ms-grid-row: 3;
          grid-row: 3;
        }

        ::slotted([slot='plp-item-link']) {
          font-size: calc((12 / 10) * 1em);
        }
      }

      @media (min-width: 768px) {
        :host([typed='list']) {
          height: 193px;
          width: 100%;
          -ms-grid-rows: 38px 5px 19px 5px 1fr 5px 60px;
          grid-template-rows: 38px 19px 1fr 60px;
          grid-row-gap: 5px;
        }

        :host([typed='list']) .plp-item-img {
          padding: 5px 0 5px 5px;
          -ms-grid-column: 1;
          grid-column: 1;
          -ms-grid-row: 1;
          -ms-grid-row-span: 4;
          grid-row: 1 / span 4;
        }

        :host([typed='list']) .plp-item-link {
          padding-top: 5px;
          -ms-grid-column: 2;
          -ms-grid-column-span: 2;
          grid-column: 2 / span 2;
          -ms-grid-row: 1;
          grid-row: 1;
        }

        :host([typed='list']) .plp-item-buttons {
          -ms-grid-column: 4;
          grid-column: 4;
          -ms-grid-row: 1;
          -ms-grid-row-span: 4;
          grid-row: 1 / span 4;
        }

        :host([typed='list']) ::slotted([slot='plp-item-descriptions']) {
          -ms-grid-column: 2;
          -ms-grid-column-span: 2;
          grid-column: 2 / span 2;
          -ms-grid-row: 3;
          grid-row: 3;
          display: -ms-grid;
          display: grid;
          -ms-grid-columns: 1fr 1fr;
          grid-template-columns: 1fr 1fr;
          -ms-grid-rows: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
        }

        :host([typed='list']) ::slotted([slot='plp-item-descriptions']) > *:nth-child(1) {
          -ms-grid-row: 1;
          -ms-grid-column: 1;
        }

        :host([typed='list']) ::slotted([slot='plp-item-descriptions']) > *:nth-child(2) {
          -ms-grid-row: 1;
          -ms-grid-column: 2;
        }

        :host([typed='list']) ::slotted([slot='plp-item-descriptions']) > *:nth-child(3) {
          -ms-grid-row: 2;
          -ms-grid-column: 1;
        }

        :host([typed='list']) ::slotted([slot='plp-item-descriptions']) > *:nth-child(4) {
          -ms-grid-row: 2;
          -ms-grid-column: 2;
        }

        :host([typed='list']) ::slotted([slot='plp-item-price']) {
          -ms-grid-column: 2;
          grid-column: 2;
          -ms-grid-row: 4;
          grid-row: 4;

          display: -webkit-box;

          display: -ms-flexbox;

          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
        }

        :host([typed='list']) ::slotted([slot='plp-item-rating']),
        :host([typed='list']) .plp-item-rating {
          -ms-grid-column: 2;
          grid-column: 2;
          -ms-grid-row: 2;
          grid-row: 2;
        }

        :host([typed='card']) {
          -ms-grid-columns: 10px 1fr 10px;
          grid-template-columns: 10px 1fr 10px;
          grid-row-gap: 5px;
          height: 532px;
          max-width: 280px;
        }

        :host([typed='card']) .plp-item-img {
          -ms-grid-column: 2;
          grid-column: 2;
          -ms-grid-row: 2;
          grid-row: 2;
        }

        :host([typed='card']) .plp-item-link {
          -ms-grid-column: 2;
          grid-column: 2;
          -ms-grid-row: 3;
          grid-row: 3;
        }

        :host([typed='card']) ::slotted([slot='plp-item-rating']),
        :host([typed='card']) .plp-item-rating {
          -ms-grid-column: 2;
          grid-column: 2;
          -ms-grid-row: 4;
          grid-row: 4;
        }

        :host([typed='card']) ::slotted([slot='plp-item-descriptions']) {
          -ms-grid-column: 2;
          grid-column: 2;
          -ms-grid-row: 5;
          grid-row: 5;
          display: -ms-grid;
          display: grid;
          -ms-grid-rows: (1fr) [4];
          grid-template-rows: repeat(4, 1fr);
        }

        :host([typed='card']) ::slotted([slot='plp-item-price']) {
          -ms-grid-column: 2;
          grid-column: 2;
          -ms-grid-row: 6;
          grid-row: 6;

          display: -webkit-box;

          display: -ms-flexbox;

          display: flex;
          -webkit-box-pack: space-evenly;
          -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
        }

        :host([typed='card']) .plp-item-buttons {
          -ms-grid-column: 1;
          -ms-grid-column-span: 3;
          grid-column: 1 / span 3;
          -ms-grid-row: 7;
          grid-row: 7;
        }

        :host([typed='list']) .plp-item-buttons {
          -ms-grid-rows: (1fr) [3];
          grid-template-rows: repeat(3, 1fr);
        }

        :host([typed='card']) .plp-item-buttons {
          -ms-grid-columns: (1fr) [3];
          grid-template-columns: repeat(3, 1fr);
        }
      }

      @media (max-width: 991px) and (min-width: 768px) {
        :host([typed='list']) {
          -ms-grid-columns: 152px 10px 1fr 10px 1fr 10px 58px;
          grid-template-columns: 152px 1fr 1fr 58px;
          grid-column-gap: 10px;
        }

        :host([typed='card']) {
          -ms-grid-rows: 7px 236px 64px 20px 1fr 55px 62px;
          grid-template-rows: 7px 236px 64px 20px 1fr 55px 62px;
        }

        .plp-item-link,
        .plp-item-link * {
          font-size: 14px;
          line-height: 1.36;
        }
      }

      @media (max-width: 1199px) and (min-width: 992px) {
        :host([typed='list']) {
          -ms-grid-columns: 180px 10px 1fr 10px 1fr 10px 130px;
          grid-template-columns: 180px 1fr 1fr 130px;
          grid-column-gap: 10px;
        }

        :host([typed='card']) {
          -ms-grid-rows: 7px 236px 64px 20px 1fr 55px 62px;
          grid-template-rows: 7px 236px 64px 20px 1fr 55px 62px;
        }

        .plp-item-link,
        .plp-item-link * {
          font-size: 17px;
          line-height: 1.12;
        }
      }

      @media (min-width: 1200px) {
        :host([typed='list']) {
          -ms-grid-columns: 194px 20px 1fr 20px 1fr 20px 191px;
          grid-template-columns: 194px 1fr 1fr 191px;
          grid-column-gap: 20px;
        }

        :host([typed='card']) {
          -ms-grid-rows: 7px 236px 64px 20px 1fr 37px 62px;
          grid-template-rows: 7px 236px 64px 20px 1fr 37px 62px;
        }

        .plp-item-link,
        .plp-item-link * {
          font-size: 17px;
          line-height: 1.12;
        }
      }

      .plp-item-img {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .plp-item-link {
        overflow: hidden;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: end;
        -ms-flex-align: end;
        align-items: flex-end;
        max-height: 100%;
        position: relative;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
      }

      .plp-item-link * {
        text-decoration: none;
        color: #333333;
      }

      ::slotted([slot='plp-item-img']) {
        max-height: 100%;
        max-width: 100%;
      }

      ::slotted([slot='plp-item-link']) {
        text-decoration: none;
        color: #333;
        max-height: 100%;
      }

      ::slotted([slot='plp-item-descriptions']) {
      }

      ::slotted([slot='plp-item-price']) {
      }`}constructor(){super(),this.typed="list",this.quickview=!1,this.rating=!1}render(){return s.c`<div class="plp-item-img"><slot name="plp-item-img"></slot></div><div class="plp-item-link"><slot name="plp-item-link"></slot></div><slot name="plp-item-descriptions"></slot><slot name="plp-item-price"></slot><div class="plp-item-buttons"><uc-plp-button typebutton="compare">Сравнить</uc-plp-button><uc-plp-button typebutton="shoping-list">В список</uc-plp-button><uc-plp-button typebutton="buy">В корзину</uc-plp-button></div>`}})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{345:function(t,e,i){"use strict";i.r(e);var s=i(269);customElements.define("uc-header-list-popup",class extends s.a{static get properties(){return{dataType:{type:String},dataList:{type:Array}}}static get styles(){return s.b`:host {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        padding: 10px 20px;
        border: 1px solid #eee;
        background-color: #fff;
        width: 400px;
      }

      .header {
        font-weight: 700;
        font-size: 18px;
        text-align: center;
      }

      .text {
        margin-top: 12px;
        font-size: 14px;
        text-align: left;
        font-style: italic;
      }`}constructor(){super(),this.dataType="",this.dataList=[]}render(){var t;if(this.dataList.length<1)switch(this.dataType){case"shop-list":t=s.c`<div class="header">Список покупок пуст</div><div class="text">Просто добавьте сюда товары, распечатайте список и пользуйтесь им в магазине.</div><div class="text">Список покупок не является резервом заказа в Магазине!</div>`;break;case"buy-list":t=s.c`<div class="header">Корзина пуста</div><div class="text">Просто добавьте сюда товары</div>`}return t}})}}]);
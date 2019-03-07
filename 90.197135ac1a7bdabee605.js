(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{342:function(e,o,t){"use strict";t.r(o);var d=t(269);customElements.define("uc-header",class extends d.a{static get styles(){return d.b`:host {
        background-color: #ffffff;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
      }

      .header-wrapper {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        height: 100%;
        width: 100%;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
      }

      uc-container {
        height: 100%;
      }

      @media (max-width: 991px) and (min-width: 768px) {
        :host {
          height: 57px;
          -webkit-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
          box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
        }

        ::slotted(uc-header-logo) {
          width: 58px;
          height: 36px;
        }
      }

      @media (max-width: 767px) {
        :host {
          height: 3.5em;
          -webkit-box-shadow: 0 0.14286em 0.42857em 0 rgba(0, 0, 0, 0.1);
          box-shadow: 0 0.14286em 0.42857em 0 rgba(0, 0, 0, 0.1);
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -ms-flex-direction: row;
          flex-direction: row;
        }

        ::slotted(uc-header-logo) {
          width: 3.5em;
          height: 2.14286em;
        }
      }

      @media (min-width: 1200px) {
        ::slotted(uc-header-search) {
          width: 580px;
          height: 40px;
        }

        ::slotted(uc-header-logo) {
          width: 80px;
          height: 49px;
        }
      }

      @media (max-width: 1199px) and (min-width: 992px) {
        ::slotted(uc-header-search) {
          width: 420px;
          height: 40px;
        }

        ::slotted(uc-header-logo) {
          width: 60px;
          height: 37px;
        }
      }

      @media (min-width: 992px) {
        :host {
          height: 80px;
        }
        ::slotted(uc-header-login) {
          display: none;
        }
        ::slotted(uc-header-shop-map) {
          display: none;
        }
      }

      @media (max-width: 991px) {
        ::slotted(uc-header-shop-map) {
          -webkit-box-ordinal-group: 4;
          -ms-flex-order: 3;
          order: 3;
        }

        ::slotted(uc-header-login) {
          -webkit-box-ordinal-group: 8;
          -ms-flex-order: 7;
          order: 7;
        }

        ::slotted(uc-header-basket) {
          -webkit-box-ordinal-group: 7;
          -ms-flex-order: 6;
          order: 6;
        }

        ::slotted(uc-header-shop-list) {
          -webkit-box-ordinal-group: 6;
          -ms-flex-order: 5;
          order: 5;
        }

        ::slotted(uc-header-search) {
          -webkit-box-ordinal-group: 3;
          -ms-flex-order: 2;
          order: 2;
        }

        ::slotted(uc-header-catalog) {
          -webkit-box-ordinal-group: 2;
          -ms-flex-order: 1;
          order: 1;
        }

        ::slotted(uc-header-logo) {
          -webkit-box-ordinal-group: 5;
          -ms-flex-order: 4;
          order: 4;
        }
      }`}render(){return d.c`<uc-container><div class="header-wrapper"><slot></div></uc-container>`}})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{270:function(t,e,i){"use strict";i.d(e,"b",function(){return g}),i.d(e,"a",function(){return r});var n=992,a=768,c=n-1,o=a-1;function d(t){return window.matchMedia(t).matches}function g(){return d(`(max-width: ${o}px)`)}function r(){return d(`(max-width: ${c}px) and (min-width: ${a}px)`)||g()}},344:function(t,e,i){"use strict";i.r(e);var n=i(269),a=i(270);customElements.define("uc-header-catalog",class extends n.a{static get styles(){return n.b`:host {
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
      @media (min-width: 1200px) {
        :host {
          width: 180px;
          height: 40px;
        }
      }
      @media (max-width: 1199px) and (min-width: 992px) {
        :host {
          width: 142px;
          height: 35px;
        }
      }
      @media (max-width: 991px) and (min-width: 768px) {
        :host {
          width: 24px;
          height: 15px;
        }
      }
      @media (max-width: 767px) {
        :host {
          width: 1.71429em;
          height: 1.07143em;
        }
      }
      @media (min-width: 992px) {
        :host {
          background-color: #66c05d;
        }
      }
      @media (max-width: 991px) {
        :host {
          cursor: pointer;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDI0IDE1Ij4gICAgPGcgZmlsbD0iIzJBMkEyQSIgZmlsbC1ydWxlPSJub256ZXJvIj4gICAgICAgIDxwYXRoIGQ9Ik0uNzUgMmgyMi41Yy40MTQgMCAuNzUtLjQ0OC43NS0xcy0uMzM2LTEtLjc1LTFILjc1Qy4zMzYgMCAwIC40NDggMCAxcy4zMzYgMSAuNzUgMXpNMjMuMjUgNkguNzVDLjMzNiA2IDAgNi40NDggMCA3cy4zMzYgMSAuNzUgMWgyMi41Yy40MTQgMCAuNzUtLjQ0OC43NS0xcy0uMzM2LTEtLjc1LTF6TTIzLjI3MyAxM0g4LjcyN0M4LjMyNiAxMyA4IDEzLjQ0OCA4IDE0cy4zMjYgMSAuNzI3IDFoMTQuNTQ2Yy40MDEgMCAuNzI3LS40NDguNzI3LTFzLS4zMjYtMS0uNzI3LTF6Ii8+ICAgIDwvZz48L3N2Zz4=);
        }

        ::slotted(a) {
          display: none;
        }

        .triangle {
          display: none;
        }
      }

      ::slotted(a) {
        font-size: 14px;
        font-weight: bold;
        color: #ffffff;
        text-decoration: none;
        text-transform: uppercase;
        width: 100%;
        height: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
      }

      ::slotted(a)::after {
        content: '';
        width: 10px;
        height: 5px;
        margin-left: 26px;
        margin-right: -10px;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSI1IiB2aWV3Qm94PSIwIDAgMTAgNSI+ICAgIDxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTUgNUwwIDBoMTB6Ii8+PC9zdmc+);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }`}render(){return Object(a.a)()?n.c`<div class="hamburger"></div>`:n.c`<slot><a>каталог</a></slot>`}})}}]);
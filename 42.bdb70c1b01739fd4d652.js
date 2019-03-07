(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{320:function(e,t,o){"use strict";o.r(t);var i=o(269);customElements.define("uc-breadcrumb-item",class extends i.a{static get styles(){return i.b`:host {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        border-radius: 3px;
        background-color: #ffffff;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        color: #000000;
        -webkit-transition: color 0.3s ease-in-out;
        -o-transition: color 0.3s ease-in-out;
        transition: color 0.3s ease-in-out;
        margin-right: 3px;
      }

      ::slotted(span) {
        text-transform: uppercase;
        color: #000000;
      }

      :host(:hover) {
        color: #66c05d;
      }

      ::slotted(a) {
        text-transform: uppercase;
        text-decoration: none;
        color: inherit;
      }

      ::slotted(a)::after {
        content: '';
        height: 0;
        display: inline-block;
        width: 0;
        margin-bottom: 1px;
      }
      :host([icon='house']) ::slotted(a)::before {
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDEyIDEwIj4gICAgPHBhdGggZmlsbD0iIzY2NiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNiAwTDAgNC45OTloMS45OTlWMTBoMlY3SDd2M2gzVjQuOTk5aDEuOTk5eiIvPjwvc3ZnPg==);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        content: '';
        display: inline-block;
      }

      @media (min-width: 768px) {
        ::slotted(a) {
          font-size: 11px;
          padding: 4px 7px;
        }
        ::slotted(span) {
          font-size: 11px;
          padding: 4px 7px;
        }
        ::slotted(a)::after {
          margin-left: 5px;
          border-left: 5px solid #66c05d;
          border-top: 3px solid transparent;
          border-bottom: 3px solid transparent;
        }
        :host([icon='house']) ::slotted(a)::before {
          width: 12px;
          height: 10px;
          margin-right: 5px;
        }
      }
      @media (max-width: 767px) {
        ::slotted(a) {
          font-size: 0.64286em;
          padding: 0.28571em 0.5em;
        }
        ::slotted(span) {
          font-size: 0.64286em;
          padding: 0.28571em 0.5em;
        }
        ::slotted(a)::after {
          margin-left: 0.35714em;
          border-left: 0.35714em solid #66c05d;
          border-top: 0.21429em solid transparent;
          border-bottom: 0.21429em solid transparent;
        }
        :host([icon='house']) ::slotted(a)::before {
          width: 0.85714em;
          height: 0.71429em;
          margin-right: 0.35714em;
        }
      }`}render(){return i.c`<slot></slot>`}})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{274:function(I,g,i){"use strict";function M(){var I=Date.now(),g=M.last||I;return M.last=I>g?I:g+1,M.last}g.a=function(){return`${arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}${M().toString(36)}`}},360:function(I,g,i){"use strict";i.r(g);var M=i(269),e=i(274);customElements.define("uc-plp-button",class extends M.a{static get properties(){return{typeButton:{type:String},checked:{type:Boolean,reflect:!0},buttonId:{type:String},type:{type:String}}}static get styles(){return M.b`:host {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        position: relative;
        cursor: pointer;
        width: 100%;
        height: 100%;
      }
      label {
        width: 100%;
        height: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        cursor: pointer;
      }
      label::before {
        content: '';
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
      :host-context([typed='card']) label {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
      }
      .styled-checkbox {
        position: absolute;
        opacity: 0;
      }
      :host([typebutton='compare']) {
        background-color: #fff;
        -webkit-box-shadow: 0 0 0 1px #eeeeee inset;
        box-shadow: 0 0 0 1px #eeeeee inset;
      }
      :host([typebutton='compare']) label {
        color: #464646;
      }
      :host([typebutton='compare']) .styled-checkbox:checked + label::before {
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIyIDIwIj4gICAgPGcgZmlsbD0iI0VDQTI0NyIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxwYXRoIGQ9Ik0xMSA2YTMgMyAwIDEgMSAwLTYgMyAzIDAgMCAxIDAgNnptMC0yYTEgMSAwIDEgMCAwLTIgMSAxIDAgMCAwIDAgMnoiLz4gICAgICAgIDxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjIiIHg9IjIiIHk9IjIiIHJ4PSIxIi8+ICAgICAgICA8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSIyIiB4PSIxMiIgeT0iMiIgcng9IjEiLz4gICAgICAgIDxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjE1IiB4PSIxMCIgeT0iNSIgcng9IjEiLz4gICAgICAgIDxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIyIiB4PSIzIiB5PSIxOCIgcng9IjEiLz4gICAgICAgIDxwYXRoIGQ9Ik0wIDExaDhhNCA0IDAgMSAxLTggMHpNMTQgMTFoOGE0IDQgMCAxIDEtOCAweiIvPiAgICAgICAgPHBhdGggZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMy41OSA1LjcxM2EuNS41IDAgMSAxIC44Mi41NzRsLTMuNSA1YS41LjUgMCAwIDEtLjgyLS41NzRsMy41LTV6TTE3LjU5IDUuNzEzYS41LjUgMCAwIDEgLjgyLjU3NGwtMy41IDVhLjUuNSAwIDAgMS0uODItLjU3NGwzLjUtNXoiLz4gICAgICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTQuNDEgNS43MTNhLjUuNSAwIDEgMC0uODIuNTc0bDMuNSA1YS41LjUgMCAwIDAgLjgyLS41NzRsLTMuNS01ek0xOC40MSA1LjcxM2EuNS41IDAgMCAwLS44Mi41NzRsMy41IDVhLjUuNSAwIDAgMCAuODItLjU3NGwtMy41LTV6Ii8+ICAgIDwvZz48L3N2Zz4=);
      }
      :host([typebutton='compare']) .styled-checkbox:checked + label .icon-check {
        border-top-color: #eca247;
      }
      :host([typebutton='compare']) .styled-checkbox:checked + label .icon-check::after {
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMSIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgMTEgOCI+ICAgIDxnIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+ICAgICAgICA8cGF0aCBkPSJNLjU4NiA0TDIgMi41ODYgNS40MTQgNiA0IDcuNDE0eiIvPiAgICAgICAgPHBhdGggZD0iTTQuNSA3LjkxNEwzLjA4NiA2LjUgOS41LjA4NiAxMC45MTQgMS41eiIvPiAgICA8L2c+PC9zdmc+);
      }
      :host([typebutton='compare']) .styled-checkbox:not(:checked) + label::before {
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIzIDIwIj4gICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSguNTY4KSI+ICAgICAgICA8cGF0aCBmaWxsPSIjRDRENEQ0IiBkPSJNMTEgNmEzIDMgMCAxIDEgMC02IDMgMyAwIDAgMSAwIDZ6bTAtMmExIDEgMCAxIDAgMC0yIDEgMSAwIDAgMCAwIDJ6Ii8+ICAgICAgICA8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSIyIiB4PSIyIiB5PSIyIiBmaWxsPSIjRDRENEQ0IiByeD0iMSIvPiAgICAgICAgPHJlY3Qgd2lkdGg9IjgiIGhlaWdodD0iMiIgeD0iMTIiIHk9IjIiIGZpbGw9IiNENEQ0RDQiIHJ4PSIxIi8+ICAgICAgICA8cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIxNSIgeD0iMTAiIHk9IjUiIGZpbGw9IiNENUQ1RDUiIHJ4PSIxIi8+ICAgICAgICA8cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMiIgeD0iMyIgeT0iMTgiIGZpbGw9IiNENEQ0RDQiIHJ4PSIxIi8+ICAgICAgICA8cGF0aCBmaWxsPSIjRDRENEQ0IiBkPSJNMCAxMWg4YTQgNCAwIDEgMS04IDB6TTE0IDExaDhhNCA0IDAgMSAxLTggMHoiLz4gICAgICAgIDxwYXRoIGZpbGw9IiNENEQ0RDQiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTMuNTkgNS43MTNhLjUuNSAwIDEgMSAuODIuNTc0bC0zLjUgNWEuNS41IDAgMCAxLS44Mi0uNTc0bDMuNS01ek0xNy41OSA1LjcxM2EuNS41IDAgMCAxIC44Mi41NzRsLTMuNSA1YS41LjUgMCAwIDEtLjgyLS41NzRsMy41LTV6Ii8+ICAgICAgICA8cGF0aCBmaWxsPSIjRDRENEQ0IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik00LjQxIDUuNzEzYS41LjUgMCAxIDAtLjgyLjU3NGwzLjUgNWEuNS41IDAgMCAwIC44Mi0uNTc0bC0zLjUtNXpNMTguNDEgNS43MTNhLjUuNSAwIDAgMC0uODIuNTc0bDMuNSA1YS41LjUgMCAwIDAgLjgyLS41NzRsLTMuNS01eiIvPiAgICA8L2c+PC9zdmc+);
      }
      :host([typebutton='shoping-list']) {
        background-color: #fff;
        -webkit-box-shadow: 0 0 0 1px #eeeeee inset;
        box-shadow: 0 0 0 1px #eeeeee inset;
      }
      :host([typebutton='shoping-list']) label {
        color: #464646;
      }
      :host([typebutton='shoping-list']) .styled-checkbox:checked + label::before {
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSI+ICAgIDxkZWZzPiAgICAgICAgPHBhdGggaWQ9ImEiIGQ9Ik0yMi43OCAyMi4xOTZIMFYwaDIyLjc4eiIvPiAgICA8L2RlZnM+ICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgICAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+ICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPiAgICAgICAgPC9tYXNrPiAgICAgICAgPHBhdGggZmlsbD0iIzdFNUQ5MSIgZD0iTTYuNDc1IDEwLjM5di0uNDUyYzAtLjI3Ni4yNDItLjUuNTQzLS41aDMuMjNjLjMgMCAuNTQzLjIyNC41NDMuNXYuNDUzYzAgLjI3Ni0uMjQzLjUtLjU0My41aC0zLjIzYy0uMyAwLS41NDMtLjIyNC0uNTQzLS41em00LjMxNi0yLjkwNGMwIC4yNzctLjI0My41LS41NDMuNWgtMy4yM2MtLjMgMC0uNTQzLS4yMjMtLjU0My0uNXYtLjQ1M2MwLS4yNzYuMjQyLS40OTkuNTQzLS40OTloMy4yM2MuMyAwIC41NDMuMjIzLjU0My40OTl2LjQ1M3ptLS41NDMtMi40MDRoLTMuMjNjLS4zIDAtLjU0My0uMjI0LS41NDMtLjVWNC4xM2MwLS4yNzYuMjQyLS41LjU0My0uNWgzLjIzYy4zIDAgLjU0My4yMjQuNTQzLjV2LjQ1M2MwIC4yNzUtLjI0My41LS41NDMuNXptMi40NDctMS43NDdhMS42MiAxLjYyIDAgMCAwLTEuNjEtMS42MjZoLTcuNzhjLS44OSAwLTEuNjExLjcyOS0xLjYxMSAxLjYyNnY3Ljg1YzAgLjg5OC43MiAxLjYyNiAxLjYxIDEuNjI2aDYuOTc2YTYuMTU4IDYuMTU4IDAgMCAwLS4zOTkgMS43MUgzLjA0M0MxLjM2MyAxNC41MiAwIDEzLjE0NCAwIDExLjQ0OFYzLjA3QzAgMS4zNzUgMS4zNjMgMCAzLjA0MyAwaDguMzAzYzEuNjggMCAzLjA0MiAxLjM3NSAzLjA0MiAzLjA3MXY2LjA1YTUuOTk3IDUuOTk3IDAgMCAwLTEuNjkzLjc0NlYzLjMzNXptLTcuNjYgNC4xNTFjMCAuMjc3LS4yMi41LS40OTQuNWgtLjQ0OWEuNDk3LjQ5NyAwIDAgMS0uNDk1LS41di0uNDUzYzAtLjI3Ni4yMjEtLjQ5OS40OTUtLjQ5OWguNDQ5Yy4yNzQgMCAuNDk1LjIyMy40OTUuNDk5di40NTN6bS0uNDk0LTIuNDA0aC0uNDQ5YS40OTcuNDk3IDAgMCAxLS40OTUtLjVWNC4xM2MwLS4yNzYuMjIxLS41LjQ5NS0uNWguNDQ5Yy4yNzQgMCAuNDk1LjIyNC40OTUuNXYuNDUzYzAgLjI3NS0uMjIxLjUtLjQ5NS41em0uNDk1IDUuMzA5YzAgLjI3Ni0uMjIxLjUtLjQ5NS41aC0uNDQ5YS40OTcuNDk3IDAgMCAxLS40OTUtLjV2LS40NTNjMC0uMjc2LjIyMS0uNS40OTUtLjVoLjQ0OWMuMjc0IDAgLjQ5NS4yMjQuNDk1LjV2LjQ1M3ptMTIuNDM4IDQuMzRIMTYuMzR2LTEuMTQ3YS41MTQuNTE0IDAgMCAwLS41MTItLjUxNi41MTQuNTE0IDAgMCAwLS41MTIuNTE2djEuMTQ3aC0xLjEzNmEuNTE0LjUxNCAwIDAgMC0uNTEyLjUxNmMwIC4yODYuMjI5LjUxNy41MTIuNTE3aDEuMTM2djEuMTQ0YzAgLjI4NS4yMy41MTYuNTEyLjUxNmEuNTE0LjUxNCAwIDAgMCAuNTEyLS41MTZ2LTEuMTQ0aDEuMTMzYS41MTQuNTE0IDAgMCAwIC41MTEtLjUxNy41MTQuNTE0IDAgMCAwLS41MTEtLjUxNnptLTEuNjQ3IDUuNTk3Yy0yLjc4IDAtNS4wMzYtMi4yNzUtNS4wMzYtNS4wODJzMi4yNTUtNS4wODIgNS4wMzYtNS4wODJjMi43ODIgMCA1LjAzNiAyLjI3NSA1LjAzNiA1LjA4MnMtMi4yNTQgNS4wODItNS4wMzYgNS4wODJ6IiBtYXNrPSJ1cmwoI2IpIi8+ICAgIDwvZz48L3N2Zz4=);
      }
      :host([typebutton='shoping-list']) .styled-checkbox:checked + label .icon-check {
        border-top-color: #7e5d91;
      }
      :host([typebutton='shoping-list']) .styled-checkbox:checked + label .icon-check::after {
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMSIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgMTEgOCI+ICAgIDxnIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+ICAgICAgICA8cGF0aCBkPSJNLjU4NiA0TDIgMi41ODYgNS40MTQgNiA0IDcuNDE0eiIvPiAgICAgICAgPHBhdGggZD0iTTQuNSA3LjkxNEwzLjA4NiA2LjUgOS41LjA4NiAxMC45MTQgMS41eiIvPiAgICA8L2c+PC9zdmc+);
      }
      :host([typebutton='shoping-list']) .styled-checkbox:not(:checked) + label::before {
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAyNCAyMyI+ICAgIDxkZWZzPiAgICAgICAgPHBhdGggaWQ9ImEiIGQ9Ik0yMy4wNyAyMS45NDhIMFYwaDIzLjA3eiIvPiAgICA8L2RlZnM+ICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAuNSkiPiAgICAgICAgPG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2EiLz4gICAgICAgIDwvbWFzaz4gICAgICAgIDxwYXRoIGZpbGw9IiNENEQ0RDQiIGQ9Ik03LjI5MSAxMS4yMTZ2LS41NGMwLS4zMjguMjY2LS41OTUuNTk1LS41OTVoMy41NGMuMzMgMCAuNTk1LjI2Ny41OTUuNTk1di41NGEuNTk1LjU5NSAwIDAgMS0uNTk1LjU5NWgtMy41NGEuNTk1LjU5NSAwIDAgMS0uNTk1LS41OTV6bTQuNzMtMy4wMTZhLjU5NS41OTUgMCAwIDEtLjU5NS41OTVoLTMuNTRhLjU5NS41OTUgMCAwIDEtLjU5NS0uNTk1di0uNTRjMC0uMzI4LjI2Ni0uNTk0LjU5NS0uNTk0aDMuNTRjLjMzIDAgLjU5NS4yNjYuNTk1LjU5NHYuNTR6bS0uNTk1LTIuNDIxaC0zLjU0YS41OTUuNTk1IDAgMCAxLS41OTUtLjU5NXYtLjU0YzAtLjMyOC4yNjYtLjU5NS41OTUtLjU5NWgzLjU0Yy4zMyAwIC41OTUuMjY3LjU5NS41OTZ2LjUzOWEuNTk1LjU5NSAwIDAgMS0uNTk1LjU5NXptMi42NS0yLjExNmMwLS45ODYtLjgtMS43ODYtMS43ODctMS43ODZIMy42NjNjLS45ODcgMC0xLjc4Ni44LTEuNzg2IDEuNzg2djguNjJjMCAuOTg3LjggMS43ODYgMS43ODYgMS43ODZoNy43MzRhNi43MDkgNi43MDkgMCAwIDAtLjQ0MiAxLjg3N0gzLjM3M0EzLjM3NCAzLjM3NCAwIDAgMSAwIDEyLjU3M3YtOS4yQTMuMzc0IDMuMzc0IDAgMCAxIDMuMzczIDBoOS4yMDZhMy4zNzMgMy4zNzMgMCAwIDEgMy4zNzMgMy4zNzN2Ni42NDRhNi42ODEgNi42ODEgMCAwIDAtMS44NzcuODE5VjMuNjYzek01LjgyIDguMmEuNTk1LjU5NSAwIDAgMS0uNTk1LjU5NWgtLjUzOWEuNTk1LjU5NSAwIDAgMS0uNTk1LS41OTV2LS41NGMwLS4zMjguMjY2LS41OTQuNTk1LS41OTRoLjU0Yy4zMjggMCAuNTk0LjI2Ni41OTQuNTk0di41NHptLS41OTUtMi40MjFoLS41MzlhLjU5NS41OTUgMCAwIDEtLjU5NS0uNTk1di0uNTRjMC0uMzI4LjI2Ni0uNTk1LjU5NS0uNTk1aC41NGMuMzI4IDAgLjU5NC4yNjcuNTk0LjU5NnYuNTM5YS41OTUuNTk1IDAgMCAxLS41OTUuNTk1em0uNTk1IDUuNDM3YS41OTUuNTk1IDAgMCAxLS41OTUuNTk1aC0uNTM5YS41OTUuNTk1IDAgMCAxLS41OTUtLjU5NXYtLjU0YzAtLjMyOC4yNjYtLjU5NS41OTUtLjU5NWguNTRjLjMyOCAwIC41OTQuMjY3LjU5NC41OTV2LjU0em0xMy43IDQuNzU5aC0xLjI3MlYxNC43YS41NzQuNTc0IDAgMCAwLTEuMTQ5IDB2MS4yNzVoLTEuMjc1YS41NzQuNTc0IDAgMSAwIDAgMS4xNDlIMTcuMXYxLjI3MmEuNTc0LjU3NCAwIDAgMCAxLjE1IDB2LTEuMjcyaDEuMjdhLjU3NC41NzQgMCAwIDAgMC0xLjE1em0tMS44NDkgNS45NzNhNS40IDUuNCAwIDAgMS01LjM5Ny01LjQgNS4zOTggNS4zOTggMCAwIDEgMTAuNzk0IDBjMCAyLjk4Mi0yLjQxNiA1LjQtNS4zOTcgNS40eiIgbWFzaz0idXJsKCNiKSIvPiAgICA8L2c+PC9zdmc+);
      }
      :host([typebutton='buy']) {
        background-color: #ce4139;
      }
      :host([typebutton='buy']) label {
        color: #ffffff;
      }
      :host([typebutton='buy']) label::before {
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDIyIDE2Ij4gICAgPGcgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxyZWN0IHdpZHRoPSIxMC41IiBoZWlnaHQ9IjIiIHg9IjciIHk9IjgiIHJ4PSIxIi8+ICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xNi41IDE2YTIuNSAyLjUgMCAxIDEgMC01IDIuNSAyLjUgMCAwIDEgMCA1ek04LjUgMTZhMi41IDIuNSAwIDEgMSAwLTUgMi41IDIuNSAwIDAgMSAwIDV6Ii8+ICAgICAgICA8cmVjdCB3aWR0aD0iNiIgaGVpZ2h0PSIyIiByeD0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjY2KSIvPiAgICAgICAgPHJlY3Qgd2lkdGg9IjgiIGhlaWdodD0iMiIgcng9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0IDEpIi8+ICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik00Ljg2MiAxLjI0M2ExIDEgMCAwIDEgMS45NC0uNDg2bDIgOGExIDEgMCAwIDEtMS45NC40ODZsLTItOHpNMjAuMTU5IDEuNDZhMSAxIDAgMSAxIDEuNjgyIDEuMDhsLTQuNDc3IDYuOTdhMSAxIDAgMCAxLTEuNjgzLTEuMDgybDQuNDc4LTYuOTY5eiIvPiAgICA8L2c+PC9zdmc+);
      }
      :host([typebutton='buy']) .styled-checkbox:checked + label .icon-check {
        border-top-color: #ffffff;
      }
      :host([typebutton='buy']) .styled-checkbox:checked + label .icon-check::after {
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMSIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgMTEgOCI+ICAgIDxnIGZpbGw9IiNDRTQxMzkiIGZpbGwtcnVsZT0ibm9uemVybyI+ICAgICAgICA8cGF0aCBkPSJNLjU4NiA0TDIgMi41ODYgNS40MTQgNiA0IDcuNDE0eiIvPiAgICAgICAgPHBhdGggZD0iTTQuNSA3LjkxNEwzLjA4NiA2LjUgOS41LjA4NiAxMC45MTQgMS41eiIvPiAgICA8L2c+PC9zdmc+);
      }
      .icon-check {
        position: absolute;
        top: 0;
        right: 0;
        width: 0;
        height: 0;
      }
      .icon-check::after {
        content: '';
        display: block;
        position: absolute;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
      }
      @media (max-width: 767px) {
        .icon-check {
          border-top: 2.14286em solid transparent;
          border-left: 2.14286em solid transparent;
        }
        .icon-check::after {
          height: 0.57143em;
          width: 0.78571em;
          top: -1.78571em;
          right: 0.21429em;
        }
        .text {
          font-size: 0.85714em;
        }
        label::before {
          font-size: 0.85714em;
          height: 1.83333em;
          width: 1.83333em;
        }
      }
      @media (min-width: 768px) {
        .icon-check {
          border-top: 30px solid transparent;
          border-left: 30px solid transparent;
        }

        .icon-check::after {
          height: 8px;
          width: 11px;
          top: -25px;
          right: 3px;
        }
        .text {
          font-size: 12px;
        }
        label::before {
          height: 22px;
          width: 22px;
          font-size: 12px;
        }
      }
      @media (min-width: 992px) {
        :host-context([typed='card']) label::before {
          margin-bottom: 2px;
        }
      }

      @media (max-width: 991px) {
        .text {
          display: none;
        }
      }

      @media (min-width: 1200px) {
        :host-context([typed='list']) label::before {
          margin-right: 20px;
        }
      }

      @media (max-width: 1199px) and (min-width: 992px) {
        :host-context([typed='list']) label::before {
          margin-right: 15px;
        }
      }`}constructor(){super(),this.checked=!1,this.buttonId=Object(e.a)("styled-checkbox-"),this.type={compare:{false:"Сравнить",true:"В сравнении"},"shoping-list":{false:"В список",true:"Добавлено"},buy:{false:"В корзину",true:"Добавлено"}}}changeChecked(){this.checked=!this.checked}buttonClickedHandler(){this.changeChecked()}render(){var I=this.type[this.typeButton][this.checked];return M.c`<input class="styled-checkbox" id="${this.buttonId}" type="checkbox" ?checked="${this.checked}" @change="${this.buttonClickedHandler}"> <label for="${this.buttonId}"><span class="text">${I}</span> <span class="icon-check"></span></label>`}})}}]);
/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class RegisterLogin extends PolymerElement {
  static get template() {
    return html`
      <custom-style>
        <style include="shared-styles">
          :host {
            display: block;

            padding: 10px;
          }

          .wrapper-btns {
            margin-top: 15px;
          }

          paper-button.link {
              color: #757575;
          }

        </style>
      </custom-style>
            
      <div class="card">
        <div id="unauthenticated">
        <h1>Log In</h1>

        <paper-loginscreen title="Login to" subtitle="webcomponents.org"></paper-loginscreen>
      </div>

    `;
  }

  static get is() { return 'register-login'; }

  static get properties() {
    return {
      formData: {
        type: Object,
        value: {}
      }
    }
  }

  
}

window.customElements.define('register-login', RegisterLogin);

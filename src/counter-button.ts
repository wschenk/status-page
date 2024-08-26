import {LitElement, html,css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

console.log("Are you there?")
@customElement('counter-button')
export class CounterButton extends LitElement {
  static styles = css`
  button {
  padding: .5em 1em;
  border-radius: 5px;
  }
`;

  @property()
  count = 0;

  render() {
    return html`
    <button @click=${this.click}>${this.count} times</button>
    `;
  }

  click(event:Event) {
    console.log("Clicked");
this.count +=1 ;
  }
}

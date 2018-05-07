// Select the current element with his DOM
const currentDocument = document.currentScript.ownerDocument;

class LoaderBar extends HTMLElement {
  constructor() {
    super();   // Always calls super().
  }

  // Called when element is inserted in DOM
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });

    // Select the template and clone it. Finally attach the cloned node to the shadowDOM's root.
    // Current document needs to be defined to get DOM access to imported HTML
    const template = currentDocument.querySelector('#loader');
    const instance = template.content.cloneNode(true);
    shadowRoot.appendChild(instance);

    /**
    * Extract the "mode" property from our element.
    * Note that we are going to specify our loader like:
    * <loader-bar mode="1"></loader-bar>
    * note: mode="1" is a random button,
    *       mode="2" is three speeds buttons,
    *       mode="3" is a both modes is mode is default mode also.
    */
    const mode = this.getAttribute('mode');
    this.render(mode); // render the mode of loader-bar
  }

  // with this function render our module with the mode chosen
  render(mode) {
    if (mode==='1') { // mode 1, only random buttons.
      this.shadowRoot.querySelector('.content__speed-buttons').classList.add('hide');
      this.configComponent(); // config js functions
    }
    else if (mode==='2') { // mode 2, only speed select buttons.
      this.shadowRoot.querySelector('.content__speed-button--random').classList.add('hide');
      this.configComponent(); // config js functions
    }
    else if(mode==='3') { // mode 3, union of mode 1 & 2.
      this.configComponent(); // config js functions
    }
    else { // default log warnning & config mode 3.
      console.warn('No se ha seleccionado un modo de trabajo correcto para <loader-bar>, por default mode="3"');
      this.configComponent();
    }
  }

  // this funtion loads the event listener functions and load-bar js functions
  configComponent() {
    // vars
    const INCREMENT = 1;
    const $bar = this.shadowRoot.getElementById('myBar');
    const $buttonSpeedSlow = this.shadowRoot.querySelector('.button__speed--slow');
    const $buttonSpeedNormal = this.shadowRoot.querySelector('.button__speed--normal');
    const $buttonSpeedFast = this.shadowRoot.querySelector('.button__speed--fast');
    const $buttonSpeedRandom = this.shadowRoot.querySelector('.button__speed--random');

    let scrolled = 0;
    let speed = 0;
    let loader = 0;

  // array funtions
    const loadding = () => {
      loader =  setInterval(() => {  // interval with speed value of button
        scrolled += INCREMENT;
        $bar.style.width = scrolled + '%';
        if (scrolled >= 100) { // when the scroll load bar is full clear this set interval
          clearTimeout(loader);
        }
      }, speed);
    }
    const randomSpeed = () => Math.round((Math.random() * 60) + 1); // random func for random speed

    // main
    $buttonSpeedSlow.addEventListener('click', () => {  // slow speed
      clearTimeout(loader); // stop current loadding and init this
      scrolled = 0;
      speed = $buttonSpeedSlow.value;
      loadding();
    });

    $buttonSpeedNormal.addEventListener('click', () => { // normal speed
      clearTimeout(loader);
      scrolled = 0;
      speed = $buttonSpeedNormal.value;
      loadding();
    });

    $buttonSpeedFast.addEventListener('click', () => { // fast speed
      clearTimeout(loader);
      scrolled = 0;
      speed = $buttonSpeedFast.value;
      loadding();
    });

    $buttonSpeedRandom.addEventListener('click', () => { // random speed
      clearTimeout(loader);
      scrolled = 0;
      speed = randomSpeed();
      loadding();
    });
  }
}

// create a customElement <loader-bar> with class LoaderBar
customElements.define('loader-bar', LoaderBar);

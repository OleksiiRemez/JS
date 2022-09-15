console.log('Sample JavaScript #5 HW #17');

let container = null;
let prevIndicator = null;
let body = document.querySelector('body');

const createContainer = () => {
    elem = document.createElement('div');

    elem.setAttribute('id', 'carousel');
    elem.setAttribute('class', 'carousel');
    document.querySelector('.container').appendChild(elem);

    container = document.querySelector('#carousel');
}

const createSlides = (n) => {
    slidesContainer = document.createElement('ul');
    slidesContainer.setAttribute('class', 'slides');

    for (i = 0; i < n; i++) {
        let slideItem = document.createElement('li');
        let slideLink = document.createElement('a');
        let slideImg = document.createElement('img')

        slideItem.setAttribute(
            'class',
            i === 0 ? 'slides__item active' : 'slides__item'
        );
        slideLink.setAttribute('href', `./img/img_${i + 1}.png`);
        slideImg.setAttribute('src', `./img/img_${i + 1}.png`);
        slideImg.classList.add('slides__img')
        slideLink.appendChild(slideImg);
        slideItem.appendChild(slideLink);
        slidesContainer.appendChild(slideItem);
    }
    container.appendChild(slidesContainer)
}

const createStyle = () => {
    styleContainer = document.createElement('style');
    let styleCode = `
      .controls,
      .slides {
        position: relative;
        padding-inline-start: 0;
      }
      .controls {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        gap: 1rem;
      }
      .indicators {
        display: flex;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 9rem;
        justify-content: center;
      }
      .slides__item {
        display: none;
      }
      .slides__img {
        width: 100%;
        border-radius: 1rem;
      }
      .indicators__item {
        display: block;
        width: 20px;
        height: 20px;
        background-color: #0000003f;
        margin: 5px;
        border-radius: 10px;
      }
      .active {
        display: block;
        background-color: #000000df;
      }`;

    styleContainer.innerHTML = styleCode;
    body.appendChild(styleContainer);
}


const createIndicators = (n) => {
    indicatorsContainer = document.createElement('div');
    indicatorsContainer.setAttribute('class', 'indicators');

    for (i = 0; i < n; i++) {
        let indicatorsItem = document.createElement('span');

        indicatorsItem.setAttribute(
            'class',
            i === 0 ? 'indicators__item active' : 'indicators__item'
        );
        indicatorsItem.setAttribute('data-slide-to', i);
        indicatorsContainer.appendChild(indicatorsItem);
    }

    container.appendChild(indicatorsContainer);
}

const indicatorsHandler = (e) => {
    let target = e.target;

    if (target.classList.contains('indicators__item')) {
        target.style.backgroundColor = 'red';

        if (prevIndicator !== null) prevIndicator.removeAttribute('style');

        prevIndicator = target;
    }
}

const setListener = () => {
    let indicatorsContainer = document.querySelector('div.indicators');

    indicatorsContainer.addEventListener('click', indicatorsHandler);
}

const createControls = () => {
    controlsContainer = document.createElement('div');
    controlsContainer.setAttribute('class', 'controls');

    for (i = 0; i < 3; i++) {
        let controlItem = document.createElement('div');
        let controlIcon = document.createElement('i');
        const defItemClass = 'controls__item';
        const defIconClass = 'fas';

        switch (i) {
            case 0:
                controlItem.className = (`${defItemClass} controls__prev`);
                controlIcon.className = (`${defIconClass} fa-chevron-left`);
                break;
            case 1:
                controlItem.className = (`${defItemClass} controls__next`);
                controlIcon.className = (`${defIconClass} fa-chevron-right`);
                break;
            case 2:
                controlItem.className = (`${defItemClass} controls__pause`);
                controlIcon.className = (`${defIconClass} fa-play`);
                break;
        }
        controlItem.appendChild(controlIcon);
        controlsContainer.appendChild(controlItem);
    }
    container.appendChild(controlsContainer);
}

const createCarousel = (slidesCount = 5) => {
    // createContainer();

    container = document.querySelector('#carousel');
    createSlides(slidesCount);
    createIndicators(slidesCount);
    createStyle();
    createControls();
    setListener();

}
createCarousel(4);

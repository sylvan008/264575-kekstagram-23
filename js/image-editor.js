const scale = document.querySelector('.scale');
const smallerButton = scale.querySelector('.scale__control--smaller');
const biggerButton = scale.querySelector('.scale__control--bigger');
const controlValueElement = scale.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');
const effectsList = document.querySelector('.effects__list');
const sliderElement = document.querySelector('.effect-level__slider');
const effectValueElement = document.querySelector('.effect-level__value');

const MAXIMUM_SCALE = 100;
const MINIMUM_SCALE = 25;
const SCALE_STEP = 25;
const INITIAL_SCALE = 55;
const EFFECT_DEFAULT = 'none';

const SliderDefaultOptions = {
  connect: 'lower',
};

const SliderEffectsOptions = {
  chrome: {
    settings: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    filter: 'grayscale',
    unit: '',
  },
  sepia: {
    settings: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    filter: 'sepia',
    unit: '',
  },
  marvin: {
    settings: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    },
    filter: 'invert',
    unit: '%',
  },
  phobos: {
    settings: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    filter: 'blur',
    unit: 'px',
  },
  heat: {
    settings: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    filter: 'brightness',
    unit: '',
  },
};

let currentEffect = EFFECT_DEFAULT;
let imagePreviewStyles = {};

function calcScale(step) {
  const currentValue = controlValueElement.value.substring(0, controlValueElement.value.length - 1);
  const scaleValue = +currentValue + step;
  if (scaleValue > MAXIMUM_SCALE) {
    return MAXIMUM_SCALE;
  }
  if (scaleValue < MINIMUM_SCALE) {
    return MINIMUM_SCALE;
  }
  return scaleValue;
}

function onEffectChangeHandler(element) {
  imagePreview.classList.remove(`effects__preview--${currentEffect}`);
  currentEffect = element.value;
  imagePreview.classList.add(`effects__preview--${currentEffect}`);
}

function updatePreviewImageStyles(styleObj) {
  imagePreviewStyles = {...imagePreviewStyles, ...styleObj};
  const keys = Object.keys(imagePreviewStyles);
  imagePreview.style = keys.reduce(
    (acc, value) => `${acc + imagePreviewStyles[value]};`,
    '');
}

function setScale(value) {
  controlValueElement.value = `${value}%`;
  updatePreviewImageStyles({transform: `transform: scale(${value / 100})`});
}

function resetImageEditor() {
  currentEffect = EFFECT_DEFAULT;
  setScale(INITIAL_SCALE);
}

function setPreviewFilter(filter, value, unit) {
  updatePreviewImageStyles({ filter: `filter: ${filter}(${value}${unit});` });
}

// eslint-disable-next-line id-length
function onSliderHandler(_, handle, unencoded) {
  effectValueElement.value = unencoded[handle];
  const {filter, unit} = SliderEffectsOptions[currentEffect];
  setPreviewFilter(filter, effectValueElement.value, unit);
}

function initSlider(options={}) {
  const startValue = options.start;
  noUiSlider.create(sliderElement, {...SliderDefaultOptions, ...options});
  effectValueElement.value = startValue;

  sliderElement.noUiSlider.on('update', onSliderHandler);
}

function destroySlider(slider) {
  if (slider.noUiSlider) {
    slider.noUiSlider.destroy();
    effectValueElement.value = '';
    delete imagePreviewStyles['filter'];
    updatePreviewImageStyles(imagePreviewStyles);
  }
}

function initImageEditor() {
  resetImageEditor();
}

smallerButton.addEventListener('click', () => {
  setScale(calcScale(-SCALE_STEP));
});

biggerButton.addEventListener('click', () => {
  setScale(calcScale(SCALE_STEP));
});

effectsList.addEventListener('change', (evt) => {
  if (evt.target.matches('[type=radio]')) {
    onEffectChangeHandler(evt.target);
    destroySlider(sliderElement);
    if (currentEffect !== EFFECT_DEFAULT) {
      const {settings} = SliderEffectsOptions[currentEffect];
      initSlider(settings);
    }
  }
});

export {initImageEditor};

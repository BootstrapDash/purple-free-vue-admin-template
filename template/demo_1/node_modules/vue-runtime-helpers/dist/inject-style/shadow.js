'use strict';

function createInjector(context, shadowRoot) {
  return function (id, style) {
    return addStyle(style, shadowRoot);
  };
}

function createStyleElement(shadowRoot) {
  var styleElement = document.createElement('style');
  styleElement.type = 'text/css';
  shadowRoot.appendChild(styleElement);
  return styleElement;
}

function addStyle(css, shadowRoot) {
  var styleElement = createStyleElement(shadowRoot);
  if (css.media) styleElement.setAttribute('media', css.media);

  if ('styleSheet' in styleElement) {
    styleElement.styleSheet.cssText = css.source;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css.source));
  }
}

module.exports = createInjector;
//# sourceMappingURL=shadow.js.map

// test.js
const assert = require('assert');

describe('Página de inicio', function() {
  it('debería mostrar "Hola Hermoso Mundo"', function() {
    assert.strictEqual(document.querySelector('h1').textContent, 'Hola Hermoso Mundo');
  });
});

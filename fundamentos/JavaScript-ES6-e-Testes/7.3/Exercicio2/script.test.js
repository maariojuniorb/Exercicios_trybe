const sum = require('./script.js');

describe('A função sum retorna uma soma de 2 parametros', () => {
  it('Funcao retorna 9 se receber 4 e 5', () => {
    expect(sum(4,5)).toBe(9);
  });
  it('Funcao retorna 0 se receber 0 e 0', () => {
    expect(sum(0,0)).toBe(0);
  });
  it('Funcao retorna ERRO se receber string', () => {
    expect(() => sum(4,'5')).toThrow('parameters must be numbers');
  });
});

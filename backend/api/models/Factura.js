/**
 * Factura.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

 module.exports = {

  attributes: {

    consecutivo: {
      type: 'number',
      required: true
    },

    fecha: {
      type: 'string',
      required: true
    },

    valorTotal: {
      type: 'string',
      required: true
    },

    facturaTercero: {
      model: 'tercero'
    },

    facturaModulo: {
      model: 'modulo'
    },

    

  },

};

'use strict';

const Ajv = require('ajv');
const ajv = new Ajv();
const Service = require('egg').Service;

class ValidatorService extends Service {
  static start(schema, data) {
    const validate = ajv.compile(data);
    return validate(schema);
  }
}

module.exports = ValidatorService;
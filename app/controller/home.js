'use strict';

const Controller = require('egg-cloud').Controller;

class HomeController extends Controller {
  async index() {
    const ctx = this.ctx;
    ctx.service.validator.begin({
      properties: {
        q: { type: 'string' }
      }
    })
    ctx.body = { message: 'hello world' };
  }
}

module.exports = HomeController;

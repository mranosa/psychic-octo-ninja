'use strict';

describe('Service: CookieIDService', function () {

  // load the service's module
  beforeEach(module('psychicOctoNinjaApp'));

  // instantiate service
  var CookieIDService;
  beforeEach(inject(function(_CookieIDService_) {
    CookieIDService = _CookieIDService_;
  }));

  it('should do something', function () {
    expect(!!CookieIDService).toBe(true);
  });

});

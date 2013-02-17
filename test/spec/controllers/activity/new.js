'use strict';

describe('Controller: Activity/NewCtrl', function() {

  // load the controller's module
  beforeEach(module('psychicOctoNinjaApp'));

  var Activity/NewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    Activity/NewCtrl = $controller('Activity/NewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var scope={};
      var view1Ctrl = $controller('View1Ctrl',{$scope:scope});
      expect(view1Ctrl).toBeDefined();
    }));
    
   
  });

  describe('filter', function(){

    it('filter should be defined', inject(function($filter) {
      
      var view1Ctrl = $filter('filter');
      expect(view1Ctrl).toBeDefined();
    }));
    
   
  });

  describe('akanName', function(){
    it('should show the right akan name male',inject(function(){
      expect(akanName("MONDAY","MALE")).toEqual("Kwadwo");
    }));
  });

describe('akanName', function(){
    it('should show the right day',inject(function(){
      expect(akanName("TUESDAY","FEMALE")).toEqual("Abena");
    }));
  });
describe('gettheday', function(){
    it('should show the right akan name',inject(function(){
      expect(getTheDay("16 September 2014")).toEqual("Tuesday");
    }));
  });


});
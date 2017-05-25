(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.returnExports = factory();
  }
}(this, function () {

  var RiotControl = {
    _stores: [],
    addStore: function(store) {
      this._stores.push(store);
    }
  };

  ['on','one','off','trigger'].forEach(function(api){
    RiotControl[api] = function() {
      var args = [].slice.call(arguments);
      this._stores.forEach(function(el){
        el[api].apply(null, args);
      });
    };
  });

  return RiotControl;
}));
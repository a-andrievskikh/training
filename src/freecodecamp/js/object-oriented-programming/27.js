const funModule = (function () {
  return {
    isCuteMixin(obj) {
      obj.isCute = function () {
        return true;
      };
    },
    singMixin(obj) {
      obj.sing = function () {
        console.log('Singing to an awesome tune');
      };
    },
  };
})();

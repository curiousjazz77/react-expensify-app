'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*Making website that sells cars
Each car has a make, model, and vin
We also want to have a getDescription()
 */

var Person = function Person() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';

    _classCallCheck(this, Person);

    this.name = name;
};

var me = new Person('Idrin ELba');
console.log(me);

var other = new Person();
console.log(other);

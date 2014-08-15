//
// assert
//

function assert(guard) {
  if (guard !== true) {
    var args = slice.call(arguments, 1);
    var message = args[0] ? print.apply(null, args) : 'assert(): failed';
    options.onFail(message); 
  }
}


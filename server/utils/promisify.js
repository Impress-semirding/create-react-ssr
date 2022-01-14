import Promise from "bluebird";

function promisify (func, context) {
  return () => {
    const  ctx = context || this;
    return new Promise((resolve, reject) => {
      func.call(ctx, ...arguments, function() {
        let args = Array.prototype.map.call(arguments, item => item);
        const err = args.shift();
        if (err) {
          reject(err)
        } else {
          args = args.length > 1 ? args : args[0];
          resolve(args);
        }
      });
    })
  };
};

export default promisify;

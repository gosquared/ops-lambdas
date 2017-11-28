export function createHandler(fn) {
  return async function(event, context, cb) {
    let result;

    try {
      result = await fn(event, context, cb);
    } catch (e) {
      console.error({ error: e, event, context });
      return cb(e);
    }

    return cb(null, result);
  };
}

export function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

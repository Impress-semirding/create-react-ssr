function createResStatus(getFiled) {
  return async function status(ctx, next) {
    await next();
    if (!getFiled(ctx)) {
      ctx.response.status = 500;
    } else {
      ctx.response.status = 200;
    }
  }
}

export default createResStatus;

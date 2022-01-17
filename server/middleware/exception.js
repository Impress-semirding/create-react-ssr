const catchError = async (ctx, next) => {
  console.log(ctx.url);
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
  }
}

module.exports = catchError

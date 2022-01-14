function cookieStr(cookie) {
  if (cookie && typeof cookie === 'object') {
    const keys = Object.keys(cookie);
    return keys.reduce((target, current, index) => {
      if (index !== 0) {
        return `${target}; ${current}=${cookie[current]}`;
      }
      return `${target}${current}=${cookie[current]}`;
    }, '')
  }
  return cookie
}


export default cookieStr;

import fetch from 'node-fetch';

async function request(url, params) {
  let res;
  const options = {
    method: params?.method || 'GET',
    credentials: 'include',
    headers: {
      // 'cache-control': 'no-cache',
      'content-type': 'application/json',
    },
  };

  if (params?.token) {
    options.headers = {
      ...options.headers,
      'X-TOKEN': params?.token
    }
  }

  if (params?.body) {
    options.body = params.body
  }

  try {
    res = await fetch(url, options);
  } catch (e) {
    throw e;
  }
  const body = await res.json();
  return { status: res.status, body };
}

export default request;

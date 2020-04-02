import { StatusResponse } from 'shared/status/model';

const url = '/api/status';

const get = async () => {
  const response = await fetch(url);
  const body = await response.json();
  if (response.status !== 200) {
    throw Error(body.message);
  }
  return new StatusResponse(body);
};

export default { get };
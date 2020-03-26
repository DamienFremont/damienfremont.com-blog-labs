import { StatusResponse } from 'shared/status/model';

class StatusAPI {

  static async get() {
    const response = await fetch('/api/status');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return new StatusResponse(body);
  };

}
export default StatusAPI;
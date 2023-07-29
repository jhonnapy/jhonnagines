export interface IAPIResponse<Data, Error = null | any> {
  ok: boolean;
  data: Data
  error?: Error
}

function APIResponseOK<Data>(data: Data): IAPIResponse<Data, null> {
  return {
    ok: true,
    data
  }
}

function APIResponseError<Data, Error>(error: Error): IAPIResponse<null, Error> {
  return {
    ok: false,
    data: null,
    error
  }
}

export const APIResponse = {
  ok: APIResponseOK,
  error: APIResponseError
}
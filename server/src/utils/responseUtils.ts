/* eslint-disable @typescript-eslint/no-explicit-any */
export const createResponse = (data: any) => {
  return {
    data,
  };
};

export const createError = (details: any) => {
  return {
    details,
  };
};

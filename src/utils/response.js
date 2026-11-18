const response = (res, statusCode, message, data) => {
  return res.status(statusCode).json({
    code: statusCode,
    status: statusCode < 400 ? 'success' : 'failed',
    message: message,
    data: data
  }).end();
};

export default response;
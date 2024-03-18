// appResponse.js

// Function to send a success response
const sendSuccess = (res, data) => {
  res.status(200).json({
      success: true,
      data
  });
};

// Function to send an error response
const sendError = (res, statusCode, message) => {
  res.status(statusCode).json({
      success: false,
      error: {
          code: statusCode,
          message
      }
  });
};

// Function to send a custom response
const sendCustom = (res, statusCode, data) => {
  res.status(statusCode).json(data);
};

module.exports = { sendSuccess, sendError, sendCustom };

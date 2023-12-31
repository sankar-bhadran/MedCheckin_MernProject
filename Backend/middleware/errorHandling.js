const errorHandling=((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "somthing went wrong";
    return res.status(status).json({
      success: false,
      status: status,
      message: message,
    });
  });

  export default errorHandling
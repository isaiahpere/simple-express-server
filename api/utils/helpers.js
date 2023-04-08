/**
 * wrapper function with error catch
 *  used as wrapper in route callbacks
 *
 */
exports.asyncWrapper = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((e) => next(e));
  };
};

/**
 * Wrapper to handle async route errors without needing try/catch blocks in every controller.
 * @param {Function} fn - The asynchronous Express middleware/controller function
 * @returns {Function} Express middleware function
 */
export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

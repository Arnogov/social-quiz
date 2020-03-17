module.exports = (req, res, next) => {
    res.locals.messages = req.session.messages || [];
    next();
};
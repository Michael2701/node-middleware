const middleware = {
    requireAuthentication: (req, res, next) => {
        console.log('Privet rout hit');
        next();
    },
    logger: (req, res, next) => {
        console.log(`Request: ${new Date().toString()} ${req.method} ${req.originalUrl} `);
    }
}

module.exports = middleware;
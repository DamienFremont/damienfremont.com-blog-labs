const cacheControl = {
    noStore: () => (req, res, next) => {
        res.setHeader('Cache-Control', 'no-store');
        next();
    },
    noStoreCache: () => (req, res, next) => {
        res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
        next();
    }
};

const pragma = {
    noCache: () => (req, res, next) => {
        res.setHeader('Pragma', 'no-cache');
        next();
    }
};

const expires = {
    zero: () => (req, res, next) => {
        res.setHeader('Expires', '0');
        next();
    }
};

export { cacheControl, pragma, expires };
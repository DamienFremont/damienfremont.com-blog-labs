const cache = {
    noStore: () => (req, res, next) => {
        res.setHeader('Cache-Control', 'no-store');
        next();
    }
};

export default cache;
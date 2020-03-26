export default {

    noStore: () => (req, res, next) => {
        res.setHeader('Cache-Control', 'no-store');
        next();
    }
};
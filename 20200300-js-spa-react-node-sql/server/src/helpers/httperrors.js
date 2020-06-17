
const err_unique303_else_throw = (res) => (err) => {
    console.log(err);
    if (err.message.includes('unique'))
        return res.status(303).send('already exist');
    throw err;
}

const err_unique303_else_500 = (res) => (err) => {
    console.log(err);
    if (err.message.includes('unique'))
        return res.status(303).send('already exist');
    return res.status(500).send('Unknown server error');
}

export { err_unique303_else_throw, err_unique303_else_500 }
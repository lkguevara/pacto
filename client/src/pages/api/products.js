

export default function handler(req, res) {

    const {filter, orderBy, page} = req.body

    res.status(200).json(filter);
}
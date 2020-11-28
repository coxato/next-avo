import DB from '@database';


const getAvo = async (req, res) => {
    const db = new DB();
    const { id } = req.query;
    const avo = await db.getById(id);

    res.status(200).json(avo);
}

export default getAvo;
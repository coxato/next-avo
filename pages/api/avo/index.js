import DB from '@database';
 
const allAvos = async (req, res) => {
    const db = new DB();
    const avos = await db.getAll();
    const length = avos.length;

    res.status(200).json({
        length,
        data: avos,
    });
}

export default allAvos;
import book from "../models/book.js";//importamos role de la base de datos 


const registerBook = async (req, res) => {

    if (!req.body.name_book || !req.body.tipe)
        return res.status(400).send("incomplete data");


    const existingBook = await book.findOne({ name_book: req.body.name_book });
    if (existingBook) return res.status(400).send("The book already exist");

    const bookSchema = new book({
        name_book: req.body.name_book,
        tipe: req.body.tipe,
        dbStatus: true,

    });

    const result = await bookSchema.save();

    if (!result) return res.status(400).send("failed to register role")

    res.status(200).send({ result });
};


export default { registerBook };

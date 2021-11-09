import  mongoose  from "mongoose";

const bookSchema = new mongoose.Schema({
name_book:String,  
tipe:String,
registerDate:{type:Date, default: Date.now},
dbstatus:Boolean,
});

const book = mongoose.model("book",bookSchema); //model los modelos de bases de datos son colecciones 

export default book;
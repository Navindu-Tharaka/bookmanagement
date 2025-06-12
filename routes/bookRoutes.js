

const { 
    createBooks, 
    getBooksById, 
    getBooks, 
    updateBooks, 
    deleteBooks,
    login 
} = require( "../controllers/bookController");

const router = require("express").Router();
const { checkToken } = require("../auth/token_validation");

router.post("/",checkToken, createBooks);
router.get('/:id',checkToken, getBooksById);
router.get('/',checkToken, getBooks);
router.patch('/',checkToken, updateBooks);
router.delete('/',checkToken, deleteBooks);
router.post("/login",login);

module.exports = router;
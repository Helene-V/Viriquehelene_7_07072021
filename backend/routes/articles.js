const express = require('express');
const articleControllers = require('../controllers/articleControllers');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');


router.get("/", auth, articleControllers.getAllArticles);
router.post("/", auth, multer, articleControllers.createNewArticle);
    

router.get("/:id", auth, articleControllers.getArticleById);
router.put("/:id", auth, multer, articleControllers.modifyArticle);
router.delete("/:id", auth, articleControllers.deleteArticle);

module.exports = router;

/*
router
    .route("/", auth)
    .get(articleControllers.getAllArticles)
    .post(articleControllers.createNewArticle);
    

router
    .route("/:id", auth)
    .get(articleControllers.getArticleById)
    .put(articleControllers.modifyArticle)
    .delete(articleControllers.deleteArticle);
*/
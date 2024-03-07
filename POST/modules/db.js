
const mongoose = require('mongoose')
const articleSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true,
        minlength: [2, 'Title must be at least 25 characters long'],
    },
    Article: {
        type: String,
        required: true,
        minlength: [2, 'Title must be at least 25 characters long']
    },
    creatAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    }
})

const ArticleModel = mongoose.model('Article', articleSchema);

module.exports = ArticleModel;
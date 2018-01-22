const express = require('express')
const router = express.Router()
const marked = require('marked')

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line

router.post('/admin/plan-types/create/todo/main-content-preview', function (req, res){

  req.session.data['todoRendered'] = marked(req.session.data['todo-main-content'])

  res.redirect('/admin/plan-types/create/todo/main-content-preview')

})

module.exports = router

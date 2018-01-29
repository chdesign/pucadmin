const express = require('express')
const router = express.Router()
const marked = require('marked')

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line


router.get('/admin', function (req, res) {
  res.redirect('/admin/plan-types')
})





router.get('/deletedraftplan', function (req, res) {
  req.session.destroy()
  res.redirect('/admin/plan-types')
})

router.get('/canceltodo', function (req, res) {
  // var clear = req.session.data['ref']

  // req.session.destroy()
  res.redirect('/admin/plan-types/create/draft')
})






router.post('/admin/plan-types/create/todo/main-content-preview', function (req, res){

  req.session.data['todoRendered'] = marked(req.session.data['todo-main-content'])

  res.redirect('/admin/plan-types/create/todo/main-content-preview')

})


router.post('/admin/plan-types/create/todo/stepped/main-content-preview', function (req, res){

  req.session.data['todoRendered'] = marked(req.session.data['todo-main-content'])

  res.redirect('/admin/plan-types/create/todo/stepped/main-content-preview')

})


router.post('/admin/plan-types/create/todo/stepped/add-task-preview', function (req, res){

  req.session.data['taskRendered'] = marked(req.session.data['task-content'])

  res.redirect('/admin/plan-types/create/todo/stepped/add-task-preview')

})

router.post('/admin/plan-types/create/todo/stepped/release-preview', function (req, res){

  req.session.data['releaseRendered'] = marked(req.session.data['release-content'])

  res.redirect('/admin/plan-types/create/todo/stepped/release-preview')

})

module.exports = router

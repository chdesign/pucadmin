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



router.get('/assign', function (req, res) {
  var assign = req.session.data['assign']

  if ( assign == 'new' ) {
    res.redirect('/admin/sites/addsite')
  } else {
    res.redirect('/admin/sites/upgrade')
  }
})





router.get('/deletedraftplan', function (req, res) {
  req.session.destroy()
  res.redirect('/admin/plan-types')
})

router.get('/canceltodo', function (req, res) {
  delete req.session.data['todo-title']
  delete req.session.data['todo-start']
  delete req.session.data['todo-end']
  delete req.session.data['todo-priority']
  delete req.session.data['todo-main-lede']
  delete req.session.data['todo-main-content']
  delete req.session.data['task-content']
  delete req.session.data['link-title']
  delete req.session.data['link-url']
  delete req.session.data['todo-tags']
  delete req.session.data['release-content']
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




router.post('/admin/plan-types/create/todo/stepped/confirm2', function (req, res){


  if (req.session.data['todo-main-content']) {
    req.session.data['todoRendered'] = marked(req.session.data['todo-main-content'])
  }
  if (req.session.data['task-content']) {
    req.session.data['taskRendered'] = marked(req.session.data['task-content'])
  }
  if (req.session.data['task-content-2']) {
    req.session.data['task2Rendered'] = marked(req.session.data['task-content-2'])
  }
  if (req.session.data['release-content']) {
    req.session.data['releaseRendered'] = marked(req.session.data['release-content'])
  }


  res.redirect('/admin/plan-types/create/todo/stepped/confirm2')

})

module.exports = router

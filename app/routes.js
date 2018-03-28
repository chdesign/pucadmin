const express = require('express')
const router = express.Router()
const marked = require('marked')

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line


router.get('/plansaved', function (req, res) {
  res.render('admin/index', {plansaved: 'true'})
})

router.get('/siteadded', function (req, res) {
  res.render('admin/index', {siteadded: 'true'})
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
  res.redirect('/admin/')
})

router.get('/canceltodo', function (req, res) {
  delete req.session.data['todo-title']
  delete req.session.data['todo-start']
  delete req.session.data['todo-end']
  delete req.session.data['plan-length']
  delete req.session.data['todo-priority']
  delete req.session.data['todo-main-lede']
  delete req.session.data['todo-main-content']
  delete req.session.data['task-content']
  delete req.session.data['task-content-2']
  delete req.session.data['task-content-3']
  delete req.session.data['link-title']
  delete req.session.data['link-url']
  delete req.session.data['todo-tags']
  delete req.session.data['release-content']
  delete req.session.data['todoRendered']
  delete req.session.data['taskRendered']
  delete req.session.data['task2Rendered']
  delete req.session.data['task3Rendered']
  delete req.session.data['releaseRendered']

  res.redirect('/admin/plan-types/create/draft')
})

router.get('/todosave', function (req, res) {
  req.session.data['firsttodosaved'] = "true"
  req.session.data['todo-title-2'] = req.session.data['todo-title']
  req.session.data['todo-start-2'] = req.session.data['todo-start']
  req.session.data['todo-end-2'] = req.session.data['todo-end']
  req.session.data['plan-length-2'] =  req.session.data['plan-length']
  req.session.data['todo-priority-2'] = req.session.data['todo-priority']
  req.session.data['todo-main-lede-2'] = req.session.data['todo-main-lede']
  req.session.data['todo-main-content-2'] = req.session.data['todo-main-content']
  req.session.data['task-content-2'] = req.session.data['task-content']
  req.session.data['task-content-2-2'] = req.session.data['task-content-2']
  req.session.data['task-content-3-2'] = req.session.data['task-content-3']
  req.session.data['link-title-2'] = req.session.data['link-title']
  req.session.data['link-url-2'] = req.session.data['link-url']
  req.session.data['todo-tags-2'] = req.session.data['todo-tags']
  req.session.data['release-content-2'] = req.session.data['release-content']
  req.session.data['todoRendered-2'] = req.session.data['todoRendered']
  req.session.data['taskRendered-2'] = req.session.data['taskRendered']
  req.session.data['task2Rendered-2'] = req.session.data['task2Rendered']
  req.session.data['task3Rendered-2'] = req.session.data['task3Rendered']
  req.session.data['releaseRendered-2'] = req.session.data['releaseRendered']

  delete req.session.data['todo-title']
  delete req.session.data['todo-start']
  delete req.session.data['todo-end']
  delete req.session.data['plan-length']
  delete req.session.data['todo-priority']
  delete req.session.data['todo-main-lede']
  delete req.session.data['todo-main-content']
  delete req.session.data['task-content']
  delete req.session.data['task-content-2']
  delete req.session.data['task-content-3']
  delete req.session.data['link-title']
  delete req.session.data['link-url']
  delete req.session.data['todo-tags']
  delete req.session.data['release-content']
  delete req.session.data['todoRendered']
  delete req.session.data['taskRendered']
  delete req.session.data['task2Rendered']
  delete req.session.data['task3Rendered']
  delete req.session.data['releaseRendered']

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
  if (req.session.data['task-content-3']) {
    req.session.data['task3Rendered'] = marked(req.session.data['task-content-3'])
  }
  if (req.session.data['release-content']) {
    req.session.data['releaseRendered'] = marked(req.session.data['release-content'])
  }


  res.redirect('/admin/plan-types/create/todo/stepped/confirm2')

})

module.exports = router

const express = require('express')
const router = express.Router()
const marked = require('marked')

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

router.get('/admin', function (req, res) {
  res.redirect('/admin/index')
})


// Add your routes here - above the module.exports line


router.get('/templatesaved', function (req, res) {
  res.render('admin/index', {templatesaved: 'true'})
})

router.get('/planadded', function (req, res) {
  res.render('admin/index', {planadded: 'true'})
})


router.get('/deletedraftplan', function (req, res) {
  req.session.destroy()
  res.redirect('/admin/')
})

router.all('/admin/templates/create/todo/confirm', function (req, res){
  if (req.session.data['todo-introduction']) {
    req.session.data['todo-introduction-rendered'] = marked(req.session.data['todo-introduction'])
  }
  if (req.session.data['task-content']) {
    req.session.data['task-content-rendered'] = marked(req.session.data['task-content'])
  }
  if (req.session.data['task-content2']) {
    req.session.data['task-content2-rendered'] = marked(req.session.data['task-content2'])
  }
  if (req.session.data['task-content3']) {
    req.session.data['task-content3-rendered'] = marked(req.session.data['taskcontent-3'])
  }

  delete req.session.data['edit']

  res.render('admin/templates/create/todo/confirm')
})

router.get('/canceltodo', function (req, res) {
  delete req.session.data['todo-title']
  delete req.session.data['todo-end']
  delete req.session.data['todo-length']
  delete req.session.data['todo-priority']
  delete req.session.data['todo-introduction']
  delete req.session.data['todo-introduction-rendered']
  delete req.session.data['task-content']
  delete req.session.data['task-content-rendered']
  delete req.session.data['task-content2']
  delete req.session.data['task-content2-rendered']
  delete req.session.data['task-content3']
  delete req.session.data['task-content3-rendered']
  delete req.session.data['link-title']
  delete req.session.data['link-url']
  delete req.session.data['todo-tags']

  res.redirect('/admin/templates/create/draft')
})

router.get('/todosave', function (req, res) {
  req.session.data['firsttodosaved'] = "true"
  req.session.data['todo-title-2'] = req.session.data['todo-title']
  req.session.data['todo-end-2'] = req.session.data['todo-end']
  req.session.data['todo-length-2'] =  req.session.data['todo-length']
  req.session.data['todo-priority-2'] = req.session.data['todo-priority']
  req.session.data['todo-introduction-2'] = req.session.data['todo-introduction']
  req.session.data['todo-introduction-rendered-2'] = req.session.data['todo-introduction-rendered']
  req.session.data['task-content-2'] = req.session.data['task-content']
  req.session.data['task-content-rendered-2'] = req.session.data['task-content-rendered']
  req.session.data['task-content2-2'] = req.session.data['task-content2']
  req.session.data['task-content2-rendered-2'] = req.session.data['task-content-2-rendered']
  req.session.data['task-content3-2'] = req.session.data['task-content3']
  req.session.data['task-content3-rendered-2'] = req.session.data['task-content3-rendered']
  req.session.data['link-title-2'] = req.session.data['link-title']
  req.session.data['link-url-2'] = req.session.data['link-url']
  req.session.data['todo-tags-2'] = req.session.data['todo-tags']


  delete req.session.data['todo-title']
  delete req.session.data['todo-end']
  delete req.session.data['todo-length']
  delete req.session.data['todo-priority']
  delete req.session.data['todo-introduction']
  delete req.session.data['todo-introduction-rendered']
  delete req.session.data['task-content']
  delete req.session.data['task-content-rendered']
  delete req.session.data['task-content2']
  delete req.session.data['task-content2-rendered']
  delete req.session.data['task-content3']
  delete req.session.data['task-content3-rendered']
  delete req.session.data['link-title']
  delete req.session.data['link-url']
  delete req.session.data['todo-tags']

  res.redirect('/admin/templates/create/draft')
})













module.exports = router

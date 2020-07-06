const mongoose  = require('mongoose');
const express = require('express');
const  Post = require('../models/Post');

const app = express();

/* get page posts */
exports.get = (req, res) => {
  /* */
  Post.find((err, dataPost) => {
    if (err) {
      /* */
      res.status(404).render('404');
    } else {
      /* Impostazione dello stato HTTP success e rendering della pagina degli posts */
      console.log(dataPost);
        /*Funzione generica*/
    }
  });
};

/* get page posts */
exports.getPostCarousel = (req, res) => {
  /* */
  Post.find((err, dataPost) => {
    if (err) {
      /* */
      res.status(404).render('404');
    } else {
      /* Impostazione dello stato HTTP success e rendering della pagina degli posts */
      console.log(dataPost);

     if(req.originalUrl == '/eng'){
      res.render('indexEnglish',
      {
        Post: dataPost
      } );
    }else{
      res.render('index',
      {Post: dataPost}
      );
    }
    }
  });
};


exports.new = (req, res) =>{
  console.log('ciaoooooooooooooooooooooo -' + req.user + ' ---------------- ciao');
  const newPost = {
    Author: req.user.name,
    Title: req.body.Title,
    Content: req.body.Content,
  //  Uploaded: req.body.uploaded,
    Date: req.body.Date//,
   // Imgs: req.body.imgs,
  };

  console.log(newPost.Author + ' - ' + newPost.Title)

  Post.create(newPost, (err, data) =>{
    if(err){
      res.status(400).json({
        status: 'fail',
        message: 'Post could not be created'
     });
    } else{
      /*Post created*/
      res.send('Post has been created successfully');
      /*TO CHANGE, redirect to post page*/
      res.redirect('/admin/dashboard');
    }
  })
};


exports.get_new = (req, res) => {
  res.status(200).render('index')
}


exports.edit = (req, res) => {
  let id = req.params.id;
  const updated = {
    Author: req.body.author,
    Title: req.body.title,
    Content: req.body.content,
    Uploaded: req.body.uploaded,
    Date: req.body.date,
    Imgs: req.body.imgs,
  }

  Post.findById(id, (err, data) => {
    if (err) {
      res.status(404).json({
        status: 'failed',
        message: 'Post does not exist | Invalid'
     })
    }
    data.replaceOne(updated, err => {
      if (err) {
        res.status(500).json({
          status: 'failed',
          message: 'Post could not deleted'
        })
      } else {
        res.redirect('/')
      }
    })
  })
}

exports.get_edit = (req, res) => {
  Post.findById(req.params.id, (err, data) => {
    if (err) {
      res.status(404).render('404')
    } else {
      res.render('index', {
        post: data
      })
    }
  })
}


exports.remove = (req, res) => {
  let id = req.params.id;
  Post.deleteOne({
    _id: id
  },
  (err, data) => {
    if (err) {
      res.status(500).json({
        status: 'fail',
        message: 'Post could not deleted'
      })
    } else {
      res.redirect('/')
    }
  }
  )
}

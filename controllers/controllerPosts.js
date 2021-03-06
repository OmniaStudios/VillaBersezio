const express = require('express');
const Post = require('../models/Post');
const { get_AdminRegister } = require('./controllerAdmin');

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
     // console.log(dataPost);
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
      /* console.log(dataPost);  
      console.log(req.originalUrl) */
     if(req.originalUrl == '/'){
      res.render('index',
      {
        Post: dataPost
      } );
    }else{
      if(req.originalUrl == '/fr/home'){
      res.render('indexFrench',
      {
        Post: dataPost
      } );
    }
  else{
    res.render('indexEnglish',
      {
        Post: dataPost
      } );
  }
    }
  }
  });
};


exports.new = (req, res) =>{
  
  var today = new Date();

  const newPost = {
    Author: req.user.userName,
    Title: req.body.Title,
    Content: req.body.Content,
    Uploaded: today.getDate() + '/' + (today.getMonth()+1) + '/' + today.getFullYear(),
    Date: req.body.Date.replace(/-/g, "/"),
    Hour: req.body.Hour
   // Imgs: req.body.imgs,
  };
  Post.create(newPost, (err, data) =>{
    if(err){
      res.status(400).json({
        status: 'fail',
        message: 'Post could not be created'
     });
    } else{
      /*Post created*/
      /* res.send('Post has been created successfully'); */
      /*TO CHANGE, redirect to post page*/
      res.redirect('/admin/dashboard');
    }
  })
};


exports.get_new = (req, res) => {
  res.status(200).render('index')
}


exports.edit = (req, res) => {
  //console.log(req.body);
  let id = req.params.id;
  Post.findById(id, (err, data) => {
    if (err) {
      res.status(404).json({
        status: 'failed',
        message: 'Post does not exist | Invalid'
     })
    }


    
    const updated = {
      Author: data.Author,
      Title: req.body.demo_title,
      Content: req.body.demo_content,
      Uploaded: data.Uploaded,
      Date: req.body.demo_date,
      Hour: req.body.demo_hour  
     // Imgs: req.body.imgs
    }


    data.replaceOne(updated, err => {
      if (err) {
        res.status(500).json({
          status: 'failed',
          message: 'Post could not be deleted'
        })
      } else {
        res.redirect('/admin/tuttiPost')
      }
    })
  }) 
}

exports.get_edit = (req, res) => {
  Post.findById(req.params.id, (err, data) => {
    if (err) {
      res.status(404).render('404')
    } else {
      res.render('modificaPost', {
        Post: data
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
      res.redirect('/admin/eliminaPost')
    }
  }
  )
}

const router = require('express').Router();
const { Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');

// get all comments
router.get('/', (req, res) => {
  Comment.findOne({
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(commentData => res.json(commentData))
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
})

// get comment by id
router.get('/:id', (req, res) => {
  Comment.findAll({
    where: {
      id: req.params.id
    }
  })
    .then((commentData) => res.json(commentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


// module 14.3.5
router.post('/', withAuth, (req, res) => {
  if (req.session) {
    Comment.create({
      comment_text: req.body.comment_text,
      user_id: req.session.user_id,
      post_id: req.body.post_id
    })
      .then(CommentData => res.json(CommentData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

router.delete('/:id', (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No comment found with this ID' });
        return;
      }
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
  Comment.update({
    comment: req.body.comment
  }, {
    where: {
      id: req.params.id
    }
  }
  )
    .then(commentData => {
      if (!commentData) {
        res.status(404).json({ message: 'No comment found with this id' })
        return
      }
      res.json(commentData)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
})

router.delete('/section/:id', withAuth, (req, res) => {
  Comment.destroy({
    where: {
      post_id: req.params.id
    },
  })
    .then(commentData => {
      if (!commentData) {
        res.status(404).json({ message: 'Comment section not found' })
        return
      }
      res.json(commentData)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    });
});

module.exports = router;
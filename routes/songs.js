const router = require('express').Router();
const SongService = require('../services/songs');
router.post('/', (req, res) => {
   return SongService.create(req.body)
      .then(song => {
         res.status(201).send(song);
      })
      .catch(err => {
         res.status(500).send(err);
      })
; });
router.get('/', (req, res) => {
   SongService.find(req.query)
       .then(songs => {
           res.status(201).send(songs);
}) ;
});
module.exports = router;
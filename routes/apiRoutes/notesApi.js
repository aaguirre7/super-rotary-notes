const router = require('express').Router();
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    let myNotes = notes;
    if (req.query){
        myNotes = filterByQuery(req.query, myNotes);
    }
    res.json(myNotes);    
});

router.post('/notes',(req,res) =>{
    
})


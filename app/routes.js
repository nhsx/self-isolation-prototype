// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

router.post('/updates-text', function(req,res){
    var contacted = req.session.data['how-contacted']
    if (contacted == "email"){
        res.redirect('telephone-number')
    }
    if (contacted == "phone"){
        res.redirect('check-answers')
    }
    else {
        res.redirect('check-answers')
    }

})

router.post('live-alone1', function(req,res){
    var contacted = req.session.data['live-alone123']
    if (contacted == "yes"){
        res.redirect('living-number')
    }
    if (contacted == "no"){
        res.redirect('updates-text')
    }
})

module.exports = router;

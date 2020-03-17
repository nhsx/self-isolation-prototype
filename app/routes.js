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
        res.redirect('#')
    }

})

/* router.post('/self-isolate', function(req,res){
    var contacted = req.session.data['self-isolate-1']
    if (contacted == "self-isolate-yes"){
        res.redirect('reason-isolating')
    }
    if (contacted == "self-isolate-no"){
        res.redirect('why-not-isolate')
    }
    else {
        res.redirect('#')
    }

})*/

module.exports = router;

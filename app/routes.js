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

router.post('/live-alone', function(req,res){
    var contacted = req.session.data['living-alone']
    if (contacted == "yes"){
        res.redirect('live-number')
    }
    if (contacted == "no"){
        res.redirect('updates-text')
    }
    else {
        res.redirect('#')
    }
})

router.post('/symptoms1', function(req,res){
    var contacted = req.session.data['symptoms1']
    if (contacted == "no-symptoms"){
        res.redirect('which-conditions')
    }
    else {
        res.redirect('symptoms-start')
    }
})
module.exports = router;

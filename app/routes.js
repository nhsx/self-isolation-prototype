// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

module.exports = router;


router.post('self-isolate', function(req,res){
    var sisolate = req.session.data[sisolate]
    if (sisolate == "yes"){
        res.redirect('other-conditions')
    }
    else {
        res.redirect('check-answers-no')
    }

})
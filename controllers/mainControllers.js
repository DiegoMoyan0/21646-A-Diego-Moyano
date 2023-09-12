const path = require('path');

const controllers = {

    getHome: (req,res) => {
        res.sendFile(path.join(__dirname, '../views/mainViews/home.html'));
    }
    
}

module.exports = controllers;
module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    },
    getTest: (req, res) => {
        res.render('test2.ejs')
    }
}
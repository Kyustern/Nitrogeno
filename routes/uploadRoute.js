module.exports = (app, upload) => {
    app.post('/api/upload', upload.single('music'), function (req, res) {
        console.log(req.file)
        res.send(req.file)
    });
}
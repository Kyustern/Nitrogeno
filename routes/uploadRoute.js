module.exports = (app, upload) => {
    app.post('/api/upload', upload.single('music'), function (req, res) {
        res.send(req.file)
    });
}
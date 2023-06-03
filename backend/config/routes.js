

module.exports = app => {
    app.post('/registrar', app.api.user.save)


    app.route('/teste')
        .get(app.api.user.teste)
}
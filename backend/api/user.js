


module.exports = app => {


    const save = (req, res) => {
        const formData = {...req.body}
        res.json({sucess: true})
        console.log(formData)
    }

    const teste = (req, res) => {
        res.send('teste')
    }

    return {save, teste}

}
async function getIndex(req, res, next){
    res.json({
        msj: "Hola mundo"
      });
}

module.exports = {
    getIndex
}
exports.getNotFound = (req, res, next) => {
    res.status(404).json({
        message: "resources not found"
    })
}
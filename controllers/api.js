
exports.api = function(req, res) {
    res.json([
        {
            resource: "aircraft",
            verbs: ["GET", "POST", "PUT", "DELETE"]
        }
    ]);
};

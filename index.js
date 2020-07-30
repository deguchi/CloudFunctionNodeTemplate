exports.helloWorld = (req, res) => {
    const url = req.query.url
    res.send(url || 'Hello, World');
};
  
exports.helloWorld = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, HEAD');

    const url = req.query.url
    res.send(url || 'Hello, World');
};
  
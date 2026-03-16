const getConfig = async (req, res) => {
  try {
    // AppConfig model dependency removed. Returning a placeholder object.
    res.json({ homeBackgroundUrl: '' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateConfig = async (req, res) => {
  try {
    // AppConfig model dependency removed. Returning the request body.
    res.json(req.body);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getConfig,
  updateConfig,
};

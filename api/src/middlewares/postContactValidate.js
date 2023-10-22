const postContactValidate = (req, res, next) => {
  const { name, email, phone, address } = req.body;

  if (!name || !name.first || !name.last)
    return res.status(404).json({ error: 'Missing name or part of it' });
  if (!email) return res.status(404).json({ error: 'Missing email' });
  if (!phone) return res.status(404).json({ error: 'Missing phone' });
  if (!address || !address.street || !address.city || !address.state)
    return res.status(404).json({ error: 'Missing address or part of it' });

  next();
};

module.exports = postContactValidate;

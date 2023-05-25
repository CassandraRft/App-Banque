exports.signup = (req, res);
res.send("Welcome !");

newAccount.save((err, account) => {
  if (err) {
    res.status(500).json({ error: " Error creating account." });
  } else {
    res.status(200).json({ message: "account created", account: account });
  }
});

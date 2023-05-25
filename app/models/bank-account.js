const accountSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});
const Account = mongoose.model("Account", accountSchema);

const newAccount = new Account({
  username: username,
  email: email,
  password: password,
});

function User(Props) {
  //   If Statement
  if (Props.isLoggedIn) {
    return <h2 className="success">The MS Dhoni is a {Props.username}</h2>;
  } else {
    return <h2 className="danger">Smitri Mandhana not a All rounder</h2>;
  }
}

export default User;

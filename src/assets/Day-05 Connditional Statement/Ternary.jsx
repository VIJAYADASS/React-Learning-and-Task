function Ternary(Props) {
  return (
    <div>
      <>
        {Props.isLoggedIn ? (
          <h2 className="success">The MS Dhoni is a {Props.username}</h2>
        ) : (
          <h2 className="danger">Smitri Mandhana not a All rounder</h2>
        )}
      </>
    </div>
  );
}

export default Ternary;

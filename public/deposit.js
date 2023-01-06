function Deposit() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [deposit, setDeposit] = React.useState(0);
  const ctx = useUserContext();
  const currentUser = useCurrentUser();

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleDeposit(e) {
    e.preventDefault();
    console.log(deposit);

    if (!validate(deposit, "Enter valid amount. Must be a number.")) return;
    else {
      if (deposit <= 0 || isNaN(deposit)) {
        alert("Enter valid amount! Must be a number.");
        return;
      }
    }

    const newUsers = ctx.state.users.reduce((res, user) => {
      if (user.email === currentUser.email) {
        user.balance = Number(user.balance) + Number(deposit);
        console.log("New balance", user.balance);
      }
      res.push(user);
      return res;
    }, []);
    ctx.setState({ ...ctx.state, users: newUsers });
    ctx.addAudit({ action: "deposit", email: currentUser.email, data: { deposit } });
    // }
    // ctx.users.push({ });
    setShow(false);
  }

  function clearForm() {
    setDeposit(0);
    setShow(true);
  }

  if (!currentUser) return <Card bgcolor="info" body="Not logged in."></Card>;

  const totalBalance = `Account Balance $${currentUser.balance}`;

  return (
    <Card
      bgcolor="info"
      header="Deposit"
      status={status}
      body={
        show ? (
          <form onSubmit={handleDeposit}>
            <h5> {totalBalance} </h5>
            <br />
            <br />
            Deposit Amount
            <br />
            <input
              type="input"
              className="form-control"
              id="deposit"
              placeholder="Deposit Amount"
              value={deposit}
              onChange={(e) => setDeposit(e.currentTarget.value)}
            />
            <br />
            <button type="submit" className="btn btn-light" disabled={!deposit}>
              Deposit
            </button>
          </form>
        ) : (
          <>
            <h5>Success, new balance $ {currentUser.balance}</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Deposit another amount
            </button>
          </>
        )
      }
    />
  );
}

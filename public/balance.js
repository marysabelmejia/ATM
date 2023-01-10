function Balance() {
  const [status, setStatus] = React.useState("");
  const [number, setNumber] = React.useState(null);
  const ctx = useUserContext();
  const currentUser = useCurrentUser();
  
  if (!currentUser) return <Card bgcolor="danger" body="Not logged in"></Card>;
  const totalBalance = `Account Balance $ ${currentUser.balance}`;
  
  const getRndInteger = (min, max) => setNumber(Math.floor(Math.random() * (max - min)) + min);
  
  return (
  <div style={{ flexDirection: 'column', alignItems: 'center' }}>
  <Card
  bgcolor="success"
  header="Balance"
  status={status}
  body={
  <>
  <h5> {totalBalance} </h5>
  </>
  }
  />
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <button onClick={() => getRndInteger(10000,99999)} disabled={number !== null} class="button">Account Number:</button>
  {number}
  </div>
  </div>
  );
  }

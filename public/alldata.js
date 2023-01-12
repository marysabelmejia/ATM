function AuditEntry({ data }) {
  return (
    <div>
      <Card
        bgcolor="secondary"
        title={data.action}
        text={"By " + (data.email || "Guest")}
        body={"At " + new Date(data.timestamp).toLocaleString()}
        status={data.data && "Extra info: " + JSON.stringify(data.data)}
      />
    </div>
  );
}

function AllData(){
  const [data, setData] = React.useState(''); 
  const ctx = useUserContext();   

  React.useEffect(() => {
      
      // fetch all accounts from API
      fetch('http://badbank-mm.vercel.app/account/all')
          .then((response) => response.json())
          .then(data => {
              console.log('here');
              setState({...state, users:data});                
          });

  }, []);

  if (!ctx.state.audit.length) return <Card bgcolor="warning" body="Audit Trail: no data" />;

  return (
      ctx.state.audit.map((data, i) => <AuditEntry key={i} data={data}></AuditEntry>)
  );
}

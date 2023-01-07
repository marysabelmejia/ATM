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

  React.useEffect(() => {
      
      // fetch all accounts from API
      fetch('/account/all')
          .then(response => response.json())
          .then(data => {
              console.log(data);
              setData(JSON.stringify(data));                
          });

  }, []);

  return (<>
      <h5>All Data in Store:</h5>
      {data}
  </>);
}
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

function AllData() {
  // const ctx = React.useContext(UserContext);
  const ctx = useUserContext();

  if (!ctx.state.audit.length) return <Card bgcolor="warning" body="Audit Trail: no data" />;

  return ctx.state.audit.map((data, i) => <AuditEntry key={i} data={data}></AuditEntry>);
}
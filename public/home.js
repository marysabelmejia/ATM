function Home() {
  return (
    <div className="text-center">
      <Card
        bgcolor="dark"
        txtcolor="white"
        header="Welcome to the family!"
        text="We've got all your banking needs covered!"
        body={<img src="logo.png" className="img-fluid" alt="logo" />}
      />
    </div>
  );
}


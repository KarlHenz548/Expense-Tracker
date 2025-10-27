import { SignInButton } from "@clerk/nextjs";

const Guest = () => {
  return (
    <div className="guest">
      <h1>Welcome</h1>
      <p>Please sign in manage your transaction</p>
      <SignInButton />
    </div>
  );
};

export default Guest;
<div className="guest">
  <h1>Welcome</h1>
  <p>Please sign in manage your transaction</p>
</div>;

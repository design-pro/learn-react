function Header() {
  function Test(){
    return " from function"
  }
  return (
    <span>
      this from load header <br />
      {Test()} <br />
    </span>
  );
}
export default Header;
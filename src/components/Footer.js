function Footer(props) {
  return (
    <span>
      this from load footer <br />
      copy right: {props?.name || "Name"} <br />
      date right: {props?.date ?? "Date"} <br />
      link right: {props?.link ? props?.link : "Link"}
    </span>
  );
}
export default Footer;
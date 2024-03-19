const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i class="fa-solid fa-heart"></i>
      <a href="" target="_blank">
        Rishabh Chauhan
      </a>
      <i class="fa-solid fa-copyright"></i>
      {year}
      <strong>
        Oni<span>food</span>
      </strong>
    </div>
  );
};

export default Footer;

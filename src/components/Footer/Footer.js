import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <hr className="footer-hr br1 b--white-90 w-80 mt3" />
      <p>
        تم التطوير بواسطة{'  '}
        <span className="white">-</span>
        <a className="auther" href="https://www.linkedin.com/in/makhalifa/">
          محمد خليفة
        </a>
      </p>
    </footer>
  );
};

export default Footer;

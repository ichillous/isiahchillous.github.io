import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-section" role="contentinfo">
      <div className="row">
        <div className="col-lg-12">
          <div className="copyright-text">
            © {year} Isiah Chillous
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

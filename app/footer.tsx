const Footer = () => {
  return (
    <footer className=" text-white bg-yellow-400 py-4 px-6 text-center">
      <p>
        &copy; {new Date().getFullYear()} Your Restaurant Name. All Rights
        Reserved.
      </p>
    </footer>
  );
};

export default Footer;

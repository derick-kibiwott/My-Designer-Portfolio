const Background = ({ className = "" }) => {
  return (
    <>
      <svg
        className={`${className} absolute`}
        viewBox="0 0 1435 668"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M691.5 2.83C420.352 -8.855 0 19.4224 0 19.4224V668H1435V2.83C1435 2.83 1258 19.4224 1137 19.4224C960.606 19.4224 867.594 10.4187 691.5 2.83Z" />
      </svg>

      <svg
        className={`${className} absolute`}
        viewBox="0 0 1436 668"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M477.5 16.8982C290.845 19.6238 0 0.0340498 0 0.0340498V668H1436V0.0340498C1436 0.0340498 1283.24 22.2115 1184 25.3302C1039.4 29.8744 959.726 0.979148 815 0.0340498C682.898 -0.828612 609.581 14.9695 477.5 16.8982Z" />
      </svg>
    </>
  );
};

export default Background;

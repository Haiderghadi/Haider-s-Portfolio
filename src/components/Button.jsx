const Button = ({ name, isBeam = false, containerClass, href, onClick }) => {
  // Determine common button class attributes
  const buttonClasses = `btn ${containerClass}`;

  // Create the beam effect if required
  const beamElement = isBeam && (
    <span className="relative flex h-3 w-3">
      <span className="btn-ping"></span>
      <span className="btn-ping_dot"></span>
    </span>
  );

  // If href is provided, render as anchor tag
  if (href) {
    return (
      <a href={href} className={buttonClasses} onClick={onClick}>
        {isBeam && beamElement}
        {name}
      </a>
    );
  }

  // Otherwise render as button
  return (
    <button className={buttonClasses} onClick={onClick}>
      {isBeam && beamElement}
      {name}
    </button>
  );
};

export default Button;

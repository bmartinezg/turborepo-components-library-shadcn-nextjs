const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="card">{children}</div>;
};

const Header = ({ children }: { children: React.ReactNode }) => {
  return <div className="card-header">{children}</div>;
};

const Body = ({ children }: { children: React.ReactNode }) => {
  return <div className="card-body">{children}</div>;
};

Card.Header = Header;
Card.Body = Body;

export { Card };

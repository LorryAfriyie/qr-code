export const Card = () => {
  return (
    <div className="card">
      <div className="card-img">
        <img src="/images/image-qr-code.png" alt="" />
      </div>
      <div className="card-body">
        <h3>
          <strong>Improve your front-end skills by buidling projects</strong>
        </h3>

        <p className="text-muted">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

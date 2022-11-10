import "../css/group.css";
import { useState } from "react";

export default function Group({ group }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="group-card">
        <h4 className="group-name" onClick={handleOpen}>
          {group?.name}
        </h4>
        {open ? (
          <div className="group-popup">
            <div className="group-popup-inner">
              <button className="group-close-btn" onClick={handleClose}>
                Return Home
              </button>
              <h1>{group?.name}</h1>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

import React, { useState } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

function Count() {
  const [contadorValue, setContadorValue] = useState(0);

  function SumarConteo() {
    setContadorValue(contadorValue + 1);
  }
  function RestarConteo(){
      setContadorValue(contadorValue - 1);
  }

  return (
    <div>
        <h1 className="count">{contadorValue}</h1>
      <div className="action">
        <button onClick={SumarConteo}>
          <AddRoundedIcon sx={{ fontSize: 150 }} />
        </button>
        <button onClick={RestarConteo}>
          <RemoveRoundedIcon sx={{ fontSize: 150 }} />
        </button>
      </div>
    </div>
  );
}

export default Count;

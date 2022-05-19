import React, { useState } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { motion } from "framer-motion";

function Count() {
  const [contadorValue, setContadorValue] = useState(0);

  function SumarConteo() {
    setContadorValue(contadorValue + 1);
  }
  function RestarConteo() {
    setContadorValue(contadorValue - 1);
  }

  return (
    <div>
      <motion.div
        className="count"
        animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0]
          }}
      >
        <h1>{contadorValue}</h1>
      </motion.div>
      <div className="action">
        <motion.button
          onClick={SumarConteo}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AddRoundedIcon sx={{ fontSize: 150 }} />
        </motion.button>
        <motion.button
          onClick={RestarConteo}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <RemoveRoundedIcon sx={{ fontSize: 150 }} />
        </motion.button>
      </div>
    </div>
  );
}

export default Count;

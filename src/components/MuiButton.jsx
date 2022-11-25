import { memo } from "react";
import { Button } from "@mui/material";

export const MuiButton = memo(() => {
  return (
    <>
      <Button color="error" variant="outlined">
        ボタン
      </Button>
    </>
  );
});

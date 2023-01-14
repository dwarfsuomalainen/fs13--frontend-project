import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export const Panel = (props: any) => {
  const [value, setValue] = React.useState("one");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box className="panel" sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Sort by category" />
        <Tab onClick={props.sortName} value="two" label="Sort by name" />
        <Tab onClick={props.sortPrice} value="three" label="Sort by price" />
      </Tabs>{" "}
    </Box>
  );
};

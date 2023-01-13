import * as React from "react";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Cart from "../../pages/Cart";
import { Link } from "react-router-dom";

const iconStyles = {
  padding: "10px",
};
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 4,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function CustomizedBadges() {
  return (
    <Link style={{ textDecoration: "none", color: "white" }} to={"/cart"}>
      <IconButton aria-label="cart" sx={iconStyles}>
        <StyledBadge badgeContent={4} color="secondary">
          <ShoppingCartIcon fontSize="large" sx={iconStyles} />
        </StyledBadge>
      </IconButton>
    </Link>
  );
}

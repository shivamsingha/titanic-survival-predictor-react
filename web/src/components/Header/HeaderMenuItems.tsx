import { HeaderMenu, HeaderMenuItem } from "carbon-components-react";
import React from "react";

const HeaderMenuItems = () => (
  <>
    <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
    <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
    <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
    <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
      <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
      <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
      <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
    </HeaderMenu>
  </>
);

export default HeaderMenuItems;

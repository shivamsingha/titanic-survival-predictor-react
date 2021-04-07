import {
  HeaderContainer,
  Header,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderSideNavItems,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
  SkipToContent
} from 'carbon-components-react';
import React from 'react';
import {
  Search20,
  Notification20,
  AppSwitcher20,
  Fade16
} from '@carbon/icons-react';
import HeaderMenuItems from './HeaderMenuItems';

const action = (x: string) => () => console.log(x);

const HeaderNav: React.FC = ({ children }) => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <>
        <Header aria-label="IBM Platform Name">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <HeaderName href="#" prefix="ProtonAutoML">
            Titanic Survival Predictor
          </HeaderName>
          <HeaderNavigation aria-label="IBM [Platform]">
            <HeaderMenuItems />
          </HeaderNavigation>
          <HeaderGlobalBar>
            <HeaderGlobalAction
              aria-label="Search"
              onClick={action('search click')}
            >
              <Search20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="Notifications"
              onClick={action('notification click')}
            >
              <Notification20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="App Switcher"
              onClick={action('app-switcher click')}
              tooltipAlignment="end"
            >
              <AppSwitcher20 />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
          <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
            <SideNavItems>
              <HeaderSideNavItems hasDivider={true}>
                <HeaderMenuItems />
              </HeaderSideNavItems>
              <SideNavMenu renderIcon={Fade16} title="Category title">
                <SideNavMenuItem href="#">Link</SideNavMenuItem>
                <SideNavMenuItem href="#">Link</SideNavMenuItem>
                <SideNavMenuItem href="#">Link</SideNavMenuItem>
              </SideNavMenu>
              <SideNavMenu renderIcon={Fade16} title="Category title">
                <SideNavMenuItem href="#">Link</SideNavMenuItem>
                <SideNavMenuItem href="#">Link</SideNavMenuItem>
                <SideNavMenuItem href="#">Link</SideNavMenuItem>
              </SideNavMenu>
              <SideNavMenu
                renderIcon={Fade16}
                title="Category title"
                isActive={true}
              >
                <SideNavMenuItem href="#">Link</SideNavMenuItem>
                <SideNavMenuItem aria-current="page" href="#">
                  Link
                </SideNavMenuItem>
                <SideNavMenuItem href="#">Link</SideNavMenuItem>
              </SideNavMenu>
              <SideNavLink renderIcon={Fade16} href="#">
                Link
              </SideNavLink>
              <SideNavLink renderIcon={Fade16} href="#">
                Link
              </SideNavLink>
            </SideNavItems>
          </SideNav>
        </Header>
        {children}
      </>
    )}
  />
);

export default HeaderNav;

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
  SkipToContent,
  HeaderMenuItem
} from 'carbon-components-react';
import React from 'react';
import {
  Search20,
  Notification20,
  AppSwitcher20,
  Fade16
} from '@carbon/icons-react';
import { NavLink } from 'react-router-dom';

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
            <HeaderMenuItem>
              <NavLink
                to="/"
                exact
                activeStyle={{
                  fontWeight: 'bold'
                }}
                style={{
                  color: 'inherit',
                  textDecoration: 'inherit'
                }}
              >
                Predict
              </NavLink>
            </HeaderMenuItem>
            <HeaderMenuItem>
              <NavLink
                to="/eda"
                activeStyle={{ fontWeight: 'bold' }}
                style={{
                  color: 'inherit',
                  textDecoration: 'inherit'
                }}
              >
                EDA
              </NavLink>
            </HeaderMenuItem>
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
                <HeaderMenuItem href="#">Predict</HeaderMenuItem>
                <HeaderMenuItem href="#">EDA</HeaderMenuItem>
              </HeaderSideNavItems>
              <SideNavLink renderIcon={Fade16} href="#">
                Predictions
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

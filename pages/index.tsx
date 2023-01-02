import {
  LdButton,
  LdIcon,
  LdSidenav,
  LdSidenavToggleOutside,
  LdSidenavHeader,
  LdSidenavHeading,
  LdSidenavNavitem,
  LdSidenavSeparator,
  LdSidenavSlider,
  LdTooltip,
  LdTypo,
} from '@emdgroup-liquid/liquid/dist/react'
import type { NextPage } from 'next'
import * as React from 'react'
import Logo from "../components/Logo/Logo";

const Home: NextPage = () => {
  const tetherOptions = {
    bodyElement: typeof document !== 'undefined' ? document.getElementById('tooltip-container') : undefined,
  }

  return (
    <div className="flex flex-col min-h-dvh">
      <div className="relative flex items-center flex-grow">
        <div className="w-full min-h-dvh relative flex bg-neutral-010">

          {/* Sidenav */}
          <LdSidenavToggleOutside className="z-10" />
          <LdSidenav
            collapse-trigger="mouseout"
            collapsed
            collapsible
            narrow
            className="z-10 shrink-0"
          >
            <LdSidenavHeader href="/todo" slot="header">
              <Logo
                className="leading-7 w-[10rem]"
                slot="logo"
                variant="b6"
                to="/"
              />
            </LdSidenavHeader>
            <LdSidenavSlider label="To-Do">
              <LdSidenavHeading>Your tasks</LdSidenavHeading>
              <LdSidenavNavitem
                rounded
              >
                <LdIcon slot="icon" name="calendar" /> Upcomming{' '}
              </LdSidenavNavitem>
              <LdSidenavNavitem
                rounded
              >
                <LdIcon slot="icon" name="attention" /> Due today
              </LdSidenavNavitem>
              <LdSidenavNavitem
                rounded
              >
                <LdIcon slot="icon" name="checkmark" /> Done{' '}
              </LdSidenavNavitem>
              <LdSidenavSeparator />
              <LdSidenavHeading>Preferences</LdSidenavHeading>
              <LdSidenavNavitem
                rounded
              >
                <LdIcon slot="icon" name="conversation" /> Notification settings
              </LdSidenavNavitem>
              <LdSidenavNavitem
                rounded
              >
                <LdIcon slot="icon" name="user" /> Account settings
              </LdSidenavNavitem>
            </LdSidenavSlider>
            <LdSidenavNavitem
              slot="bottom"
              rounded
            >
              Log out
            </LdSidenavNavitem>
          </LdSidenav>

          {/* Tooltip */}
          <div id="tooltip-container" className="absolute right-ld-16 top-ld-16">
            <LdTooltip arrow position="top right" tetherOptions={tetherOptions}>
              <LdButton slot="trigger">Tooltip</LdButton>
              <LdTypo variant="h4" style={{marginBottom: '0.625rem'}}>Headline</LdTypo>
              <LdTypo>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </LdTypo>
            </LdTooltip>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

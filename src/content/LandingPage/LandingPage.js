import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
} from 'carbon-components-react';
import { InfoSection, InfoCard } from '../../components/Info';
import Globe32 from '@carbon/icons-react/lib/globe/32';
import PersonFavorite32 from '@carbon/icons-react/lib/person--favorite/32';
import Application32 from '@carbon/icons-react/lib/application/32';

const props = {
  tabs: {
    selected: 0,
    triggerHref: '#',
    role: 'navigation',
  },
  tab: {
    href: '#',
    role: 'presentation',
    tabIndex: 0,
  },
};

const LandingPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <Breadcrumb noTrailingSlash aria-label="Page navigation">
            <BreadcrumbItem>
              <a href="/">Getting started</a>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="landing-page__heading">
            Getting Started with CSAFE
          </h1>
          <img
            className="landing-page__image"
            src={`${process.env.PUBLIC_URL}/CSAFE_Banner.png`}
            alt="CSAFE illustration"
          />
        </div>
      </div>
      <div className="bx--row landing-page__r2">
        <div className="bx--col bx--no-gutter">
          <Tabs {...props.tabs} aria-label="Tab navigation">
            <Tab {...props.tab} label="About">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-md-4 bx--col-lg-7">
                    <h2 className="landing-page__subheading">
                      What is CSAFE?
                    </h2>
                    <p className="landing-page__p">
                      CSAFE is a facility for people who have remotely lockable safes (safeholders) to hand over 
                      control of their safe to another CSAFE users (the keyholder).  Keyholders set the parameters
                      for their safeholders' safes.  The safe will only unlock according to those parameters.
                    </p>
                    <Button>Register for CSAFE</Button>
                  </div>
                  <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
                    
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Safeholders">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    Safeholders can ......
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Keyholders">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    Keyholders can ...
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      <InfoSection heading="The Principles" className="landing-page__r3">
        <InfoCard
          heading="CSAFE is Secure"
          body="Communication between the server and a safe is military-grade encrypted."
          icon={<Globe32 />}
        />
        <InfoCard
          heading="CSAFE is HighTech"
          body="It uses a Flask-based server, backed with a PosgreSQL database, and fronted with a React web app using IBM's Carbon design system."
          icon={<Application32 />}
        />
        <InfoCard
          heading="CSAFE is Fun"
          body="It allows a productive relationship between a safeholder and a keyholder via a safe."
          icon={<PersonFavorite32 />}
        />
      </InfoSection>
    </div>
  );
};

export default LandingPage;
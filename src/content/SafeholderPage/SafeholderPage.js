import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem
} from 'carbon-components-react';

const SafeholderPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row safeholder-page__banner">
        <div className="bx--col-lg-16">
          <Breadcrumb noTrailingSlash aria-label="Page navigation">
            <BreadcrumbItem>
              <a href="/">CSAFE Home</a>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="safeholder-page__heading">
            Safeholders
          </h1>
        </div>
      </div>
      <div className="bx--row landing-page__r2">
        <div className="bx--col bx--no-gutter">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row safeholder-page__tab-content">
                  <div className="bx--col-md-4 bx--col-lg-7">
                    <h2 className="landing-page__subheading">
                      Your safes
                    </h2>
                    <p className="landing-page__p">
                      Safe summary list
                    </p>
                  </div>
                  <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8 safeholder-page__c2">
                    <h2 className="landing-page__subheading">
                      Selected safe details
                    </h2>
                    <p className="landing-page__p">
                      Safe details and messages
                    </p>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default SafeholderPage;
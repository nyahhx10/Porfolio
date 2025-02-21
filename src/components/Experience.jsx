import React from 'react';

const Experience = () => {
  return (
    <section id="experience">
      <h2>Work Experience</h2>
      <div className="experience">
        <h3>Technical Specialist - Forecasting Planning and Technology Inc.</h3>
        <p>July 2017- January 2018</p>
        <ul>
          <li>We develop different kinds of Accounting Module here such as General Ledger, Account Receivable , Accounts Payable.</li>
        </ul>
      </div>
      <div className="experience">
        <h3>Full Stack Developer - Londa Online Technology Inc</h3>
        <p>January 2018 - July 2018 and April 2019 - July 2021</p>
        <ul>
          <li>I manage the local and Bangladesh developer while mentoring them and doing code reviews.</li>
        </ul>
      </div>
      <div className="experience">
        <h3>.Net Developer - Yondu Inc</h3>
        <p>July 2021 - November 2022</p>
        <ul>
          <li>Migrate .Net Framework to .Net Core and database to Snowflake and configuration of
          pipelines in GitHub using CI/CD, Github Actions</li>
          <li>Manage different kinds of team under the same clients by mentoring them, leading
              them on what tools to be use, helping/creating a proof of concept architecture, doing
              code review and facing clients</li>
            <li>Develops Loaning Application to one of our client that is one of the Big Bank here in the Phillipines in which it allows their employee to have an advance payroll/salary loan</li>
        </ul>
      </div>
      <div className="experience">
        <h3>.Net Software Engineer - Arch Global Service Inc</h3>
        <p>April 2023 - Current</p>
        <ul>
          <li>As a software Engineer here we maintains/enhance the development of the
              Insurance portal on which the underwriter/broker create their policy we keep
              improving this by creating new products, additional feature that help the
              underwriter to analyze the risk</li>
          <li>Create a tools that automatically migrated from old application to new application when the policy gets renewed.</li>
          <li>Develops Loaning Application to one of our client that is one of the Big Bank here in the Phillipines in which it allows their employee to have an advance payroll/salary loan</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;

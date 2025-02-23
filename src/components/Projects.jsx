import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Project 1: Accounting Applications</h3>
        <p>Built an application that has accounts payable, accounts receivable, general ledger that uses MSSQL, C#, .Net Webforms, Javascript and Jquery</p>
      </div>
      <div className="project">
        <h3>Project 2: Forex Trading Platform</h3>
        <p>An application that allows to Trade Forex in different kinds of currencies around the world. It uses C#, Asp.Net Webform, Asp.Net MVC, Blazor,ReactJS, Javascript, Jquery, Search Engine Optimization, SVNTortoise, MySQL</p>
        <a href="https://www.instaforex.com/" target="_blank" rel="noopener noreferrer">InstaForex</a>
      </div>
      <div className="project">
        <h3>Project 3: Forex Manager Reports Monitoring</h3>
        <p>This is just an internal portal where the manager monitors all different kinds of reports and statistics that reflects our forex platform, this allows also to blacklisted a certain IP/username/email/phone number
          We use different tech stack also such as Angular,Javascript,Jquery, C#.Net, MySQL, TFS, Redux
        </p>
      </div>
      <div className="project">
        <h3>Project 3: Forex Copy trading API</h3>
        <p>During this period of time, there's a new feature that is trend in crypto/forex industry and that is for allowing the user to copy another trader transaction at the expense of extra commission per profit.
          The trader can opted how many commission he wants to gain per profit on his/her follower, while the follower can allow how much leverage and S/L,T/P they want thats the sort story of this feature.
          I'm the one who lead to develop this from scratch design its architecture/pattern/deployment etc so there's numerous technologies that were used here which is C#.Net, .Net Core, Windows Server, MSSQL, Email Server, Repository, CI/CD, API
        </p>
      </div>
      <div className="project">
        <h3>Project 4: Client Cabinet Application</h3>
        <p>This is a windows application that allows the trader/user monitor his statistics and can change different account configuration however there's a limited functionality on this one as the only purpose of this is for trade monitoring.
          This was created from scratch lead by me in development by using C# WPF, MSSQL, Github, Email Server, Window Server, CI/CD. Window Service, Web Service
        </p>
      </div>
      <div className="project">
        <h3>Project 5: Forex Course API</h3>
        <p>This API is created on sole purpose for allowing any one who wants to learn/understand how forex/crypto tradings works its a tool that help people to guide on terminoligies/strategies and so on. 
          I developed the backend/api for this project that utilized this tools upon development C#.Net MVC API, .Net Core, MSSQL, Email Server, Repository, Window Service, Github, CI/CD
        </p>
        <a href="https://play.google.com/store/apps/details?id=com.instaforex.forextest&hl=en&referrer=utm_source%3Dmainsite%26utm_medium%3Dmobile_forex" target="_blank" rel="noopener noreferrer">Forex Course</a>
      </div>
      <div className="project">
        <h3>Project 6: Loaning Application</h3>
        <p>This project is created for one of the biggest bank company here in the Philippines that allows its employee to have an advance/salary loan and its only an in house application.
          This is created using this technologies :  C#.Net MVC API, .Net Core, MSSQL, SMS Server, Email Server , Window Service, Github, CI/CD, API Management
        </p>
      </div>
      <div className="project">
        <h3>Project 6: Claim Rewards</h3>
        <p>On this project I helped in developing this, it allows the user to convert their points into different reward options.
          This uses C#.Net MVC API, .Net Core, MSSQL, SMS Server, Email Server , Github, CI/CD, API Management, AngularJS
        </p>
      </div>
      <div className="project">
        <h3>Project 7: Insurance Portal</h3>
        <p>This project where underwriter creates their insurance its an inhouse application from a re-insurance company that mainly targets another insurance company as its client.
          We navigate usually here from the system that the vendor created which is from the form of vb.net, MSSQL as its database.
          What we mostly do here is add additional customization on the top of what our vendors original process/flow by integrating some vb.net snippet and some dll, services 
          that uses C#.Net, ASP.Net API, Javascript, Jquery. We also manage on converting our build process to maximize any automation tools which involves Github Actions, CI/CD, Azure, Docker, Kubernetes, Jfrog, PowerShell,Harness, Dynatrace, PowerBI, Mabl
        </p>
      </div>
      <div className="project">
        <h3>Project 7:Insight Migration</h3>
        <p>This project is a window service that runs every day to pick up all the policy that has renewal period of today from the legacy system and pick this up and migrated to the more modern system we have which is web portal.
          This uses C#.Net, WCF , .Net Core, MSSQL then was supported by different utility to ease up the migration and maintenance by the use of Github Actions, CI/CD, Azure, Docker, Kubernetes, JFrog, Harness, Dynatrace, PowerBI
        </p>
      </div>
      <div className="project">
        <h3>Project 8:ART</h3>
        <p>This project is just a locally used/demo on which it manage the time tracker of the employee within the local branch so it can be easily monitored per department by the local management. However I only helped for a while in this project as this one is only for prototype/mock project only as we are already have a 3rd party time tracker.
          This uses C#.Net, .Net Core, ReactJS, Javascript, Jquery, Blazor, API, MSSQL
        </p>
      </div>
    </section>
  );
};

export default Projects;

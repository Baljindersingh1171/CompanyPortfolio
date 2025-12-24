import React, { useState } from 'react';
import { Menu, X, Code, Briefcase, User, Home as HomeIcon, Github, Linkedin, Mail, ExternalLink, Moon, Sun } from 'lucide-react';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Project from './Banner';
import Footer from './Footer';
import Home from './Home';
import Think from './Think';
import Services from './Services';
import Message from './Message';
import WorkflowCard from './WorkflowCard';
import {
  FaLightbulb,
  FaCheck,
  FaUpload,
  FaFileAlt,
  FaUsers,
} from 'react-icons/fa';
import TermConditions from './TermConditions';
import OurWork from './Ourwork';
// import Soacialmedia from './Socialmedia';
import work from "./Work";
import Brandidentity from './Brandidentity';
import Brandidentity2 from './Brandidentity2';
import Banner from './Banner';
import Thankyou from './Thankyou';
import SrollToTop from './ScrollToTop';
import ScrollToTop from './ScrollToTop';
import Work from './Work';

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false);
  const steps = [
    {
      title: 'Brainstorming',
      description:
        'A roadmap & strategy is provided to the client after a brainstorming session between directors, creatives, strategists & writers.',
      icon: <FaLightbulb className="w-6 h-6" />,
    },
    {
      title: 'Approval',
      description:
        'Content is sent to the client for approval. Once approved, it goes to the creative team; otherwise, it’s revised.',
      icon: <FaCheck className="w-6 h-6" />,
    },
    {
      title: "Execution",
      description: "The execution uploads all content after client's approval, they optimize it using relevant hashtags to reach more audiences, captions are also added on posts focused to engage audience as much as possible. This team uses different up-to-date soft wares to search words.",
      icon: <FaUpload className="w-6 h-6" />
    },
    {
      title: "Content",
      description: "The content writer prepares a content calendar for posts that will be created for client's social media. This includes engaging posts, messaging posts, ad posts & brand-building posts which enables us to position the business in audience's minds.",
      icon: <FaFileAlt className="w-6 h-6" />
    },
    {
      title: "Creative Team",
      description: "This team consists of graphic designers who are highly skilled in their work, they design & create each post which is first approved by client then sent to execution team for uploading. This team is equipped with high-end systems creative tools to meet their needs.",
      icon: <FaUsers className="w-6 h-6" />
    }
  ]

  return (
    <div className={isDark ? 'bg-gray-900 min-h-screen' : 'bg-gray-50 min-h-screen'}>
        {/* Navigation */}
        <Header isDark={isDark} setIsDark={setIsDark}/>

        {/* Home Section */}
        <Home isDark={isDark}/>

        {/* About Section */}
        <About isDark={isDark}/>
        <Think isDark={isDark}/>
        <Services isDark={isDark}/>
        <Message isDark={isDark}/>
        <WorkflowCard steps={steps}/>
        <TermConditions isDark={isDark}/>
        <Brandidentity/>
         {/* <Brandidentity2/> */}
        <OurWork/>
    <Work/>
        <Banner/>
        {/* <Banner1/>
        <Banner2/> */}
        <Thankyou/>


        {/* Skills Section */}
        {/* <Skills isDark={isDark}/> */}
<ScrollToTop isDark={false}/>
     

        {/* Footer */}
        <Footer isDark={isDark}/>
    </div>
  );
}
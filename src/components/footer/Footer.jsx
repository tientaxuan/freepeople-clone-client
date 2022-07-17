import React from 'react';
import './footer.scss';
import locationIcon from '../../assets/icon/location.svg';
import giftIcon from '../../assets/icon/gift.svg';
import sizeGuideIcon from '../../assets/icon/size-guide.svg';
import mailIcon from '../../assets/icon/mail.svg';
import youtubeIcon from '../../assets/icon/youtube.svg';
import facebookIcon from '../../assets/icon/facebook.svg';
import pinterestIcon from '../../assets/icon/pinterest.svg';
import twitterIcon from '../../assets/icon/twitter.svg';
import instaIcon from '../../assets/icon/instagram.svg';
import appStoreImg from '../../assets/icon/appstore.png';
import careFPfooter from '../../assets/icon/careFPfooter.jpg';
import { Link } from 'react-router-dom';

const footerGridData = [
  {
    title: 'Your Order',
    list: [
      {
        display: 'Track Your Order',
        path: '',
      },
      {
        display: 'Shipping + Delivery',
        path: '',
      },
      {
        display: 'Returns + Exchange',
        path: '',
      },
      {
        display: 'Start A Return (US)',
        path: '',
      },
    ],
  },
  {
    title: 'Help + Info',
    list: [
      {
        display: 'FP Commitments',
        path: '',
      },
      {
        display: 'Contact Us',
        path: '',
      },
      {
        display: 'Request A Catalog',
        path: '',
      },
      {
        display: 'See All Help Topics',
        path: '',
      },
    ],
  },
  {
    title: 'About Free People',
    list: [
      {
        display: 'Our Story',
        path: '',
      },
      {
        display: 'Job Opportunities',
        path: '',
      },
      {
        display: 'WHolesale',
        path: '',
      },
      {
        display: 'Affiliates',
        path: '',
      },
    ],
  },
  {
    title: 'Discover',
    list: [
      {
        display: 'FP Movement',
        path: '',
      },
      {
        display: 'Cafe FP',
        path: '',
      },
      {
        display: 'Bldg 25 Blog',
        path: '',
      },
    ],
  },
  {
    title: '',
    listWithIcon: [
      {
        icon: locationIcon,
        display: 'Find Your Store',
        path: '',
      },
      {
        icon: giftIcon,
        display: 'Gift Cards',
        path: '',
      },
      {
        icon: sizeGuideIcon,
        display: 'Size Guide',
        path: '',
      },
      {
        icon: mailIcon,
        display: 'Sign Up For Email',
        path: '',
      },
    ],
  },
];
const otherRefData = [
  {
    icon: instaIcon,
    path: '',
  },
  {
    icon: facebookIcon,
    path: '',
  },
  {
    icon: pinterestIcon,
    path: '',
  },
  {
    icon: twitterIcon,
    path: '',
  },
  {
    icon: youtubeIcon,
    path: '',
  },
];

const lastLeft = [
  {
    display: 'Terms of Use',
    path: '',
  },
  {
    display: 'Privacy & Security',
    path: '',
  },
  {
    display: 'CA Transparency',
    path: '',
  },
  {
    display: 'Website Accessibility',
    path: '',
  },
  {
    display: 'URBN.com',
    path: '',
  },
  {
    display: 'For CA Residents',
    path: '',
  },
];

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer__for-sign'>
          <div className='footer__for-sign-container'>
            <div className='for-sign-main'>
              <div className='for-sign-main__left'>
                <h3>Sign Up for Email </h3>
                <p>
                  Sign up for emails and receive early access to new arrivals,
                  sales, events + more. Plus, enjoy free express shipping on
                  your first order (check your inbox for details).{' '}
                </p>
              </div>
              <div className='for-sign-main__right'>
                <label htmlFor='footer-input-email'>Email Adress *</label>
                <div className='input-email'>
                  <input id='footer-input-email' type='text' />
                  <button className='footer-submit-email'>SUBMIT</button>
                </div>
              </div>
            </div>
            <p className='for-sign-sub'>
              By signing up, you will receive Free People offers, promotions and
              other commercial messages. You are also agreeing to Free People's
              Privacy Policy. You may unsubscribe at any time.
            </p>
          </div>
        </div>
        <div className='footer-main'>
          <div className='footer-grid'>
            <div className='footer-grid-container'>
              {footerGridData?.map &&
                footerGridData.map((ele, idx) => (
                  <div
                    className='footer-grid-item'
                    key={`footer-grid-item-${idx}`}
                  >
                    {ele.title && (
                      <h3 className='footer-grid-item-title'>{ele.title}</h3>
                    )}
                    <ul className='footer-item-list'>
                      {ele.list?.map &&
                        ele.list.map((listItem, idx) => (
                          <li className='footer-item' key={`list-item-${idx}`}>
                            <Link to={listItem.path}>{listItem.display}</Link>
                          </li>
                        ))}
                      {ele.listWithIcon?.map &&
                        ele.listWithIcon.map((itemWithIcon, idx) => (
                          <li
                            className='footer-item-with-icon'
                            key={`item-with-icon-${idx}`}
                          >
                            <img src={itemWithIcon.icon} alt='' />
                            <Link to={itemWithIcon.path}>
                              {itemWithIcon.display}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
          <div className='footer-other-reference'>
            <div className='footer-other-reference-container'>
              <div className='left-side'>
                <Link to=''>
                  <img src={appStoreImg} alt='' />
                </Link>
              </div>
              <div className='right-side'>
                {otherRefData.map((ele, idx) => (
                  <Link to={ele.path}>
                    <img
                      src={ele.icon}
                      alt=''
                      className='right-side-icon'
                      key={`right-side-icon-${idx}`}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className='footer-banner'>
            <div className='footer-banner-container'>
              <img src={careFPfooter} alt='' />
            </div>
            <div className='footer-last'>
              <div className='last-left-side'>
                {lastLeft.map((ele, idx) => (
                  <Link to={ele.path} key={`footer-last-left-item-${idx}`}>
                    {ele.display}
                  </Link>
                ))}
              </div>
              <div className='last-right-side'>
                <p>© 2022 URBN US Retail, LLC. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

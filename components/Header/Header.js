import { useState } from 'react';
import classNames from 'classnames/bind';
import { FaBars, FaCode, FaSearch } from 'react-icons/fa';
import Link from 'next/link';

import appConfig from 'app.config';
import { NavigationMenu, SkipNavigationLink } from '../';

import styles from './Header.module.scss';
let cx = classNames.bind(styles);
/**
 * A Header component
 * @param {Props} props The props object.
 * @param {string} props.className An optional className to be added to the container.
 * @return {React.ReactElement} The FeaturedImage component.
 */
export default function Header({ className, menuItems }) {
  const [isNavShown, setIsNavShown] = useState(false);
  const logoText = appConfig.siteLogoText ?? appConfig.siteTitle;
  const [logoBase, logoSuffix] = logoText.split('.', 2);

  const headerClasses = cx('header', className);
  const navClasses = cx(
    'primary-navigation',
    isNavShown ? cx('show') : undefined
  );

  return (
    <header className={headerClasses}>
      <SkipNavigationLink />
      <div className="container">
        <div className={cx('bar')}>
          <div className={cx('logo')}>
            <Link legacyBehavior href="/">
              <a title="Home">
                <span className={cx('logoMark')} aria-hidden="true">
                  <FaCode />
                </span>
                <span className={cx('logoText')}>
                  {logoBase}
                  {logoSuffix ? (
                    <span className={cx('logoDot')}>.{logoSuffix}</span>
                  ) : null}
                </span>
                <span className={cx('srOnly')}>{logoText}</span>
              </a>
            </Link>
          </div>
          <button
            type="button"
            className={cx('nav-toggle')}
            onClick={() => setIsNavShown(!isNavShown)}
            aria-label="Toggle navigation"
            aria-controls={cx('primary-navigation')}
            aria-expanded={isNavShown}
          >
            <FaBars />
          </button>
          <NavigationMenu
            id={cx('primary-navigation')}
            className={navClasses}
            menuItems={menuItems}
          >
            <li>
              <Link legacyBehavior href="/search">
                <a>
                  <FaSearch title="Search" role="img" />
                </a>
              </Link>
            </li>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}

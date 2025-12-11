import './Banner.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import type { Banner } from '../../types/product';

interface BannerProps {
  banner: Banner;
  onClick: (link: string) => void;
}

const BannerComponent: React.FC<BannerProps> = ({ banner, onClick }) => {
  return (
    <div 
      className="banner"
      style={{ background: banner.backgroundColor }}
    >
      <div className="banner-content">
        <h2 className="banner-title">{banner.title}</h2>
        <p className="banner-subtitle">{banner.subtitle}</p>
        <button 
          className="banner-button"
          onClick={() => onClick(banner.link)}
        >
          {banner.buttonText}
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <div className="banner-image">
        <img src={banner.image} alt={banner.title} />
      </div>
    </div>
  );
};

export default BannerComponent;
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const PageHeader = ({ title, desc, integration, blogtags, backgroundImage, eyebrow }) => {
  if (integration) {
    const pageBackground = backgroundImage || '/page-header-bg.svg';
    return (
      <section
        className="page-header position-relative overflow-hidden ptb-120 bg-dark"
        style={{
          background: `url('${pageBackground}') no-repeat center center`,
          backgroundSize: 'cover',
        }}
      >
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-8 col-12">
              <div className="company-info-wrap align-items-center">
                <div className="company-logo p-4 bg-white shadow rounded-custom me-4 mt-2">
                  <div className="logo justify-content-center">
                    <img src="/integations/2.png" alt="company logo" className="img-fluid" />
                  </div>
                </div>
                <div className="company-overview">
                  <h1 className="display-5 fw-bold">{title}</h1>
                  <p className="lead mb-0">{desc}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12">
              <div className="action-btns mt-4 mt-lg-0 mt-xl-0">
                <Link href="#"><a className="btn btn-outline-light">Connect with Google</a></Link>
              </div>
            </div>
          </div>
          <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5"></div>
        </div>
      </section>
    );
  }

  // Premium hero — used by contact-us, about-us, services, etc.
  return (
    <section className="ph-hero">
      <div className="ph-hero__bg" aria-hidden>
        <span className="ph-hero__pattern" />
        <span className="ph-hero__orb ph-hero__orb--a" />
        <span className="ph-hero__orb ph-hero__orb--b" />
        <span className="ph-hero__beam" />
      </div>
      <div className="container position-relative">
        <div className="ph-hero__inner">
          <span className="ph-hero__eyebrow">
            <span className="ph-hero__eyebrow-dot" aria-hidden />
            {eyebrow || 'RFIDIA'}
          </span>
          <h1 className="ph-hero__title">{title}</h1>
          {desc && <p className="ph-hero__lead">{desc}</p>}

          {blogtags && (
            <div className="ph-hero__chips">
              {['Marketing', 'Sales', 'Design', 'Development', 'Product Design', 'Customers', 'Agency', 'Investors', 'Research'].map((tag) => (
                <Link key={tag} href="#" passHref>
                  <a className="ph-hero__chip">{tag}</a>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="ph-hero__divider" aria-hidden />
    </section>
  );
};

export default PageHeader;

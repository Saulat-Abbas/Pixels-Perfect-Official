import React from "react";
import { useState } from "react";
import BasicModal from "./PortfolioModal";

import "./style.css";

const Portfolio = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalData, setModalData] = useState()

  const Img1 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/portfolio-1.jpg?alt=media&token=f0a6e742-7e49-44e1-9fef-4f7ad890e317"
  const Img2 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/portfolio-2.jpg?alt=media&token=d13a62da-b00b-43cd-860f-7871b02cf65f"
  const Img3 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/portfolio-3.jpg?alt=media&token=5806b5e3-d17b-4aed-91c0-ae07a9773e92"
  const Img4 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/portfolio-4.jpg?alt=media&token=3c69f6cf-4e64-4dbd-9d4c-725650a32701"
  const Img5 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/portfolio-5.jpg?alt=media&token=4e3fe457-da6e-4766-beba-2f451d791862"
  const Img6 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/portfolio-6.jpg?alt=media&token=fd3dd6f5-bd35-4c92-9a7e-5b3ec38902cf"
  const Img7 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/portfolio-7.jpg?alt=media&token=63f78d96-13e4-43c8-b081-5d5180b48a94"

  return (
    <>
<BasicModal open={openModal} setOpen={setOpenModal} data={modalData} />
      <section className="portfolio-area portfolio-page">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 no-paading">
              <div
                className="portfolio-box hover-effect"
                onClick={() => {
                  setOpenModal(true);
                  setModalData(Img1);
                }}
              >
                 <div className="portfolio-img">
                  <img src={Img1} alt="" />
                  </div>
                <div className="portfolio-text text-center" style={{ textAlign: 'center', marginBottom: '150px' }}>
                  <h2 className="h4">Interior Design</h2>
                  <h3 className="h2">City</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 no-paading" onClick={() => { setOpenModal(true); setModalData(Img2) }}>
              <div className="portfolio-box">
                <div className="portfolio-img">
                  <img src={Img2} alt="portfolio img" />
                </div>
                <div className="portfolio-text text-center"style={{ textAlign: 'center', marginBottom : "150px" }}>
                  <h2 className="h4">Interior Design</h2>
                  <h3 className="h2">Drawing Room</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 no-paading" onClick={() => { setOpenModal(true); setModalData(Img3) }}>
              <div className="portfolio-box">
                <div className="portfolio-img">
                  <img src={Img3} alt="portfolio img" />
                </div>
                <div className="portfolio-text text-center"style={{ textAlign: 'center', marginBottom : "150px" }}>
                  <h2 className="h4">Interior Design</h2>
                  <h3 className="h2">Drawing Room</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 no-paading" onClick={() => { setOpenModal(true); setModalData(Img4) }}>
              <div className="portfolio-box">
                <div className="portfolio-img">
                  <img src={Img4} alt="portfolio img" />
                </div>
                <div className="portfolio-text text-center"style={{ textAlign: 'center', marginBottom : "150px" }}>
                  <h2 className="h4">House Planning</h2>
                  <h3 className="h2">Pool</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 no-paading" onClick={() => { setOpenModal(true); setModalData(Img5) }}>
              <div className="portfolio-box">
                <div className="portfolio-img">
                  <img src={Img5} alt="portfolio img" />
                </div>
                <div className="portfolio-text text-center"style={{ textAlign: 'center', marginBottom : "150px" }}>
                  <h2 className="h4">House Planning</h2>
                  <h3 className="h2">Garden</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 no-paading" onClick={() => { setOpenModal(true); setModalData(Img6) }}>
              <div className="portfolio-box">
                <div className="portfolio-img">
                  <img src={Img6} alt="portfolio img" />
                </div>
                <div className="portfolio-text text-center"style={{ textAlign: 'center', marginBottom : "150px" }}>
                  <h2 className="h4">Interior Design</h2>
                  <h3 className="h2">Bathroom</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 no-paading" onClick={() => { setOpenModal(true); setModalData(Img7) }}>
              <div className="portfolio-box">
                <div className="portfolio-img">
                  <img src={Img7} alt="portfolio img" />
                </div>
                <div className="portfolio-text text-center"style={{ textAlign: 'center', marginBottom : "150px" }}>
                  <h2 className="h4">House Planning</h2>
                  <h3 className="h2">Pool</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 no-paading" onClick={() => { setOpenModal(true); setModalData(Img1) }}>
              <div className="portfolio-box">
                <div className="portfolio-img">
                  <img src={Img1} alt="portfolio img" />
                </div>
                <div className="portfolio-text text-center"style={{ textAlign: 'center', marginBottom : "150px" }}>
                  <h2 className="h4">Interior Design</h2>
                  <h3 className="h2">Hotel</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 no-paading" onClick={() => { setOpenModal(true); setModalData(Img2) }}>
              <div className="portfolio-box">
                <div className="portfolio-img">
                  <img src={Img2} alt="portfolio img" />
                </div>
                <div className="portfolio-text text-center"style={{ textAlign: 'center', marginBottom : "150px" }}>
                  <h2 className="h4">Interior Design</h2>
                  <h3 className="h2">Residential</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

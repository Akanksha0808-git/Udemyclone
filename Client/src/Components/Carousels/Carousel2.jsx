// // Carousel2.js
// import React, { useState } from 'react';
// // CardCarousel.js
// import { cardData } from './StaticData';
// const cardsPerPage = 3;
// import './Carousels.css'; // Make sure to import your CSS file

// const Carousel2 = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const nextCards = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % cardData.length);
//   };
  

//   const prevCards = () => {
//     setActiveIndex((prevIndex) => (prevIndex - cardsPerPage + cardData.length) % cardData.length);
//   };

// //   const visibleCards = [
// //     cardData[(activeIndex - 1 + cardData.length) % cardData.length],
// //     ...cardData.slice(activeIndex, activeIndex + cardsPerPage),
// //   ];
// const visibleCards = [
//     cardData[activeIndex],
//     cardData[(activeIndex + 1) % cardData.length],
//     cardData[(activeIndex + 2) % cardData.length],
//     cardData[(activeIndex + 3) % cardData.length],
//   ];

//   return (
//     <div className="card-carousel">
//       <button className="carousel-btn prev-btn" onClick={prevCards} disabled={activeIndex === 0}>
//         Previous
//       </button>
//       <div className="cards-container">
//         {visibleCards.map((card, index) => (
//           <div key={index} className="card">
//             {/* <img src={card.image} alt={card.title} /> */}
//             <div className="card-content">
//               <h3>{card.title}</h3>
//               <p>{card.description}</p>
//               <div className="quote-icon">''</div>
//               <p>{card.quote}</p>
//               <div className="author-badge">{card.author}</div>
//               <hr />
//               <div className="play-button">
//                 <i className="fa fa-play-circle" /> {card.playButtonText}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button className="carousel-btn next-btn" onClick={nextCards} style={{ display: activeIndex < cardData.length - 4 ? 'block' : 'none' }}>
//         Next
//       </button>
//     </div>
//   );
// };

// export default Carousel2;
import React from 'react'

const Carousel2 = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-6">
                <h3 className="mb-3">Carousel cards title </h3>
            </div>
            <div className="col-6 text-right">
                <a className="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                    <i className="fa fa-arrow-left"></i>
                </a>
                <a className="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                    <i className="fa fa-arrow-right"></i>
                </a>
            </div>
            <div className="col-12">
                <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">

                                <div className="col-md-4 mb-3">
                                    <div className="card">
                                        <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"/>
                                        <div className="card-body">
                                            <h4 className="card-title">Special title treatment</h4>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="card">
                                        <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698"/>
                                        <div className="card-body">
                                            <h4 className="card-title">Special title treatment</h4>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="card">
                                        <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a"/>
                                        <div className="card-body">
                                            <h4 className="card-title">Special title treatment</h4>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">

                                <div className="col-md-4 mb-3">
                                    <div className="card">
                                        <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3f317c1f7a16116dec454fbc267dd8e4"/>
                                        <div className="card-body">
                                            <h4 className="card-title">Special title treatment</h4>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="card">
                                        <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ebadb044b374504ef8e81bdec4d0e840"/>
                                        <div className="card-body">
                                            <h4 className="card-title">Special title treatment</h4>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="card">
                                        <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e"/>
                                        <div className="card-body">
                                            <h4 className="card-title">Special title treatment</h4>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">

                                <div className="col-md-4 mb-3">
                                    <div className="card">
                                        <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ee8417f0ea2a50d53a12665820b54e23"/>
                                        <div className="card-body">
                                            <h4 className="card-title">Special title treatment</h4>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="card">
                                        <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=8ac55cf3a68785643998730839663129"/>
                                        <div className="card-body">
                                            <h4 className="card-title">Special title treatment</h4>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="card">
                                        <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=5ee4fd5d19b40f93eadb21871757eda6"/>
                                        <div className="card-body">
                                            <h4 className="card-title">Special title treatment</h4>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </div>
  )
}

export default Carousel2


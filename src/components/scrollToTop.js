// import { useState, useEffect } from 'react';

// const ScrollToTop = () => {
//   const [showTopBtn, setShowTopBtn] = useState(false);
//   useEffect(() => {
//     window.addEventListener('scroll', () => {
//       if (window.scrollY > 60) {
//         setShowTopBtn(true);
//       } else {
//         setShowTopBtn(false);
//       }
//     });
//   }, []);
//   const goToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };
//   return (
//     <div className="top-to-btm">
//       {' '}
//       {showTopBtn && (
//         <button href="#" id="back-to-top" className="top" onClick={goToTop}>
//           top
//         </button>
//       )}{' '}
//     </div>
//   );
// };
// export default ScrollToTop;

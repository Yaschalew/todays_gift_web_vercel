import images from "../../constants"

const Carsouel = () => {
    return (
        <p>ghghg</p>
        // <section id="silder">
        //     <input type="radio" name="slider" id="s1" />
        //     <input type="radio" name="slider" id="s2" />
        //     <input type="radio" name="slider" id="s3" checked/>
        //     <input type="radio" name="slider" id="s4" />
        //     <input type="radio" name="slider" id="s5" />
        //     <label for="s1" id="slide1">
        //         <img src={`${images.slider2}`} height="100%" width="100%" />
        //     </label>
        //     <label for="s2" id="slide2">
        //         <img src={`${images.Slide1}`} height="100%" width="100%" />
        //     </label>
        //     <label for="s3" id="slide3">
        //         <img src={`${images.slider4}`} height="100%" width="100%" />
        //     </label>
        //     <label for="s4" id="slide4">
        //         <img src={`${images.Slide2}`} height="100%" width="100%" />
        //     </label>
        //     <label for="s5" id="slide5">
        //         <img src={`${images.slider3}`} height="100%" width="100%" />
        //     </label>
        // </section>
    )
}
export default Carsouel;

 // <>
      {/* <Flex className="flex-col  space-y-8 ">
      <Flex className="flex-col text-center justify-center pt-4">
      <p className="font-bold text-4xl py-2">Seasonal Sales here</p>
      <p>Unwarp Today's Joy, </p>
      <p>Shop the Perfect Present Online!</p>
    </Flex> */}
    {/* {setControls()} ref={containerRef}*/}

    {/* <Flex className="container " >
      <Swiper
        effect={'coverflow'}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 200,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          //clickable: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >

        {sliders.map((item, index) =>

          <SwiperSlide >
            <div className="w-[250%]">
              <img className="swiper-slide" src={item.image} data-index={item.labelId} alt={`img ${index}`} />
            </div>
          </SwiperSlide>

        )}

  //       <div className="slider-controler"> */}
  //         {/* <div className="swiper-button-prev slider-arrow">
  //           <p>{`<`}</p>
  //         </div>
  //         <div className="swiper-button-next slider-arrow">
  //           <p>{`>`}</p>
  //         </div> */}
  {/* //         <div className="swiper-pagination"></div>
  //       </div>
  //     </Swiper> */}
  {/* //   </Flex> */}
  //   {/* <div className="gallery-controls"></div> */}

  {/* // </Flex> */}
  
// </>


//     <Flex className="flex-col text-center ">
//       <Flex className="flex-col justify-center pt-4">
//         <p className="font-bold text-4xl py-2">Seasonal Sales here</p>
//         <p>Unwarp Today's Joy, </p>
//         <p>Shop the Perfect Present Online!</p>
//       </Flex>
//       <Flex className="flex-col items-center  sm:px-6 px-2 ">
//         <Flex className="flex-col items-center space-y-3">
//           <Flex className="flex-col text-center items-center">
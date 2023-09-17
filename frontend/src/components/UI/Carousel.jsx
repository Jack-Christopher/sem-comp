import React from 'react';
import Carousel from 'react-material-ui-carousel'

function Item(props)
{
  return (
    <div className="relative flex items-center justify-center bg-transparent">
      <img 
        src={props.item.url} 
        alt={props.item.name} 
        style={{
          height: "85vh",
          width: "auto",
        }}
     />
    </div>
  )
}

const CarouselText = (props) => {
  return (
    <div>
      <h1 className="text-xl md:text-5xl font-bold text-center mb-6">
        Semana de la Computación UNSA {new Date().getFullYear()}
      </h1>
      <h2 className="text-sm md:text-3xl font-bold text-center mb-6">
        {props.editionNumber}° Edición
      </h2>
      <h3 className="text-sm md:text-2xl font-bold text-center">
        {props.startDate} - {props.endDate} Arequipa, Perú
      </h3>
    </div>
  )
}

export default function PhotoCarousel(props)
{
  return (
    <div>
      <Carousel
        interval={props.interval}
        animation="slide"
        autoPlay={true}
        stopAutoPlayOnHover={false}
        indicators={false}
        duration={1000}
      >
        {
          props.items.map( function(item, i) {
            return (
              <div key={i} className="relative">
                <Item key={i} item={item} />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white">
                  <CarouselText 
                    startDate={props.startDate}
                    endDate={props.endDate}
                    editionNumber={props.editionNumber}
                  />
                </div>
              </div>
            )
          })
        }
      </Carousel>
    </div>
  )
}

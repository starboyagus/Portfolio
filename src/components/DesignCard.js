import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';

export const DesignCard = ({ description,imgUrl,imgUrl2,imgUrl3 }) => {
    const responsive = {
        res: {
            breakpoint:{ max:4000, min:0 },
            items: 1
        }
    };

    return(
        <div className='design-card'>
        <h5>{description}</h5>
        <Carousel responsive={responsive} infinite={true} className='owl-carousel owl-theme des-slider'>
            <div className='des-item'>
                <img src={imgUrl} alt='image1'/>
            </div>
            <div className='des-item'>
                <img src={imgUrl2} alt='image1'/>
            </div>
            <div className='des-item'>
                <img src={imgUrl3} alt='image1'/>
            </div>
        </Carousel>
        </div>
    )
}
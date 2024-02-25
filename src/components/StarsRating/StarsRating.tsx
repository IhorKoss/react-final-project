import {FC, PropsWithChildren} from "react";
// import StarRating from 'react-stars-rating'
interface IProps extends PropsWithChildren {

}

const StarsRating: FC<IProps> = () => {
    return (
        <div>
            {/*<StarRating*/}
            {/*    rating={5}*/}
            {/*    starRatedColor="blue"*/}
            {/*    numberOfStars={5}*/}
            {/*    name='rating'*/}
            {/*    starDimension='30px'*/}
            {/*/>*/}
        </div>
    );
};

export {StarsRating};
import {FC, PropsWithChildren} from "react";
import StarRating from 'react-star-ratings'
interface IProps extends PropsWithChildren {
    vote_average:number
}

const StarsRating: FC<IProps> = ({vote_average}) => {
    return (
        <div>
            <StarRating
                rating={vote_average}
                starRatedColor="rgb(245, 188, 0)"
                numberOfStars={10}
                name='rating'
                starDimension='15px'
            />
        </div>
    );
};

export {StarsRating};
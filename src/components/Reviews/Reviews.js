
import Reviewdata from '../../hooks/Reviewdata';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews] = Reviewdata();
    return (
        <div className='mt-6'>
            <h1 className='text-4xl font-bold'>Our Customers Speak for Us</h1>

            <div className="grid grid-cols-3 gap-4">
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>


        </div>
    );
};

export default Reviews;
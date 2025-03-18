
const Ratings = ({ratings, totalStars = 5}) => {

    const filledStars = Math.round(ratings)

    const renderStars = () => {
        const  stars = []

        for(let i = 0; i < totalStars; i++) {
            stars.push(
                <span key={i} className={`text-2xl cursor-pointer ${i < filledStars ? 'text-yellow-500' : 'text-gray-300'}`}>★</span>
            )
        }

        return stars
    }

    return (
    <>
        {renderStars()}
    </>
        
    )

}

export default Ratings

const CardConversion = ({ src, width }) => {
    return (
        <div className={`${width} md:w-auto`}>
            <img className="w-full md:w-auto" src={src} />
        </div>
    )
};

export default CardConversion;

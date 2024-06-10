
const CardConversion = ({ src, width }) => {
    return (
        <div className={`${width} md:w-auto`}>
            <img src={src} />
        </div>
    )
};

export default CardConversion;

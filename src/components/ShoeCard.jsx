import React from "react";

const ShoeCard = ({ imageURL, changeBigshoeImage, bigShoeImg }) => {

  const handleClick = () => {
    if (bigShoeImg !== imageURL.bigShoe) {
      changeBigshoeImage(imageURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl bigs ${
        bigShoeImg === imageURL.bigShoe ? "border-coral-red " : "border-transparent"
      } 
    cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
        <div className="flex items-center justify-center bg-center bg-cover bg-card sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img src={imageURL.thumbnail} alt="shoe collection"
            width={127}
            height={103}
            className="object-contain" />
        </div>
    </div>
  );
};

export default ShoeCard;

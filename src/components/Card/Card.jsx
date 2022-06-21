import React, { useState } from "react";

import cn from "classnames";

import "./Card.scss";

const Card = ({
  isSelected,
  selectItem,
  taste,
  portions,
  gift,
  weight,
  options,
  _id,
  desc,
  availableForPurchase,
}) => {
  const giftCount = (count) => {
    if (count === 1) {
      return "мышь";
    } else if (count > 1 && count < 5) {
      return `мыши`;
    } else if (count >= 5) {
      return `мышей`;
    }
  };

  const [isSelectedHover, setIsSelectedHover] = useState(false);

  const onMouseEnter = () => {
    setIsSelectedHover(true);
  };

  const onMouseLeave = () => {
    setIsSelectedHover(false);
  };

  return (
    <div className="card-item">
      {/* prettier-ignore */}
      <div
        className={cn("card-container", {
          'selected': isSelected,
          'disabled': isSelected && availableForPurchase == 0,
        })}
        onClick={() => selectItem(_id)}
        onMouseEnter={()=>{onMouseEnter()}}
        onMouseLeave={()=>{onMouseLeave()}}
      >
        <p className= {cn("card-title", {
          'active': isSelectedHover && isSelected
        })}>{isSelectedHover && isSelected && availableForPurchase > 0 ? 'Котэ не одобряет?' : 'Сказочное заморское яство'}</p>
        <h2 className="title-name">Нямушка</h2>
        <p className="taste">{taste}</p>
        <p className="portions">
          <span>{portions}</span> порций
        </p>
        <p className="gift">
          {gift > 1 && <span>{gift}</span>}
          {` ${giftCount(gift)} в подарок`}
        </p>
        {options && <p className="options">{options}</p>}
        <span className="weight">
          <div>{weight}</div>
          <div>кг</div>
        </span>
      </div>
      <p className="buy-title">
        {isSelected ? (
          availableForPurchase >= 1 ? (
            <p> {desc}</p>
          ) : (
            <p className="disabled-text">Печалька {taste} закончился.</p>
          )
        ) : (
          <p>
            Чего сидишь? Порадуй котэ,{" "}
            <span className="dasded" onClick={() => selectItem(_id)}>
              купи
            </span>
            <span>.</span>
          </p>
        )}
      </p>
    </div>
  );
};

export default Card;

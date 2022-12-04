import { CartItem, PizzaModel } from "@/types/types";
import clsx from "clsx";
import Image from "next/image";
import Plus from "public/svg/plus.svg";
import { useMemo, useState } from "react";
import type { FC } from "react";

export interface PizzaCardProps {
  pizza: PizzaModel;
  onAddPizza: (pizza: CartItem) => void;
}

const SizeToCostMultiplier = new Map<number, number>([
  [26, 1],
  [30, 1.4],
  [40, 1.8],
]);

const PizzaCard: FC<PizzaCardProps> = ({ pizza, onAddPizza }) => {
  const [activeDough, setActiveDough] = useState(pizza.types[0]);
  const [activeSize, setActiveSize] = useState(pizza.sizes[0]);

  const pizzaCost = useMemo(() => {
    // @ts-ignore
    return Math.floor(pizza.price * SizeToCostMultiplier.get(activeSize));
  }, [activeSize, pizza.price]);

  const handleAddPizza = () => {
    onAddPizza({
      id: pizza.id,
      imageUrl: pizza.imageUrl,
      name: pizza.name,
      // @ts-ignore
      size: activeSize,
      dough: activeDough,
      cost: pizzaCost,
    });
  };

  return (
    <div className="pizza-block">
      <Image
        className="pizza-block__image"
        src={pizza.imageUrl}
        alt="Pizza"
        height={260}
        width={260}
      />
      <h4 className="pizza-block__title">{pizza.name}</h4>
      <div className="pizza-block__selector">
        <ul>
          <li
            className={clsx({
              disabled: !pizza.types.includes(0),
              active: activeDough === 0,
            })}
            onClick={() => {
              setActiveDough(0);
            }}
          >
            тонкое
          </li>
          <li
            className={clsx({
              disabled: !pizza.types.includes(1),
              active: activeDough === 1,
            })}
            onClick={() => {
              setActiveDough(1);
            }}
          >
            традиционное
          </li>
        </ul>
        <ul>
          {pizza.sizes.map((size) => (
            <li
              key={size}
              onClick={() => setActiveSize(size)}
              className={activeSize === size ? "active" : ""}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">{`${pizzaCost} ₽`}</div>
        <div
          className="button button--outline button--add"
          onClick={handleAddPizza}
        >
          <Image src={Plus} alt="plus icon" />
          <span>Добавить</span>
          <i>2</i>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;

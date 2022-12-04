import PizzaCard from "@/components/pizza-card";
import { CartItem, PizzaModel } from "@/types/types";
import { client } from "@/utils/pocketbase";
import type { GetStaticProps } from "next";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CartIcon from "public/svg/cart.svg";
import PizzaLogo from "public/svg/pizza-logo.svg";
import { useEffect, useState } from "react";

export interface HomeProps {
  pizzas: PizzaModel[];
}

const Home: NextPage<HomeProps> = (props) => {
  const [pizzaCart, setPizzaCart] = useState<CartItem[]>([]);

  const onAddPizza = (pizza: CartItem) => {
    setPizzaCart((prevState) => [...prevState, pizza]);
  };

  useEffect(() => {
    console.log(pizzaCart);
  }, [pizzaCart]);

  return (
    <>
      <Head>
        <title>Pizza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="wrapper">
        <div className="header">
          <div className="container">
            <div className="header__logo">
              <Image width="38" src={PizzaLogo} alt="Pizza logo" />
              <div>
                <h1>React Pizza</h1>
                <p>самая вкусная пицца во вселенной</p>
              </div>
            </div>
            <div className="header__cart">
              <a href="/cart.html" className="button button--cart">
                <span>520 ₽</span>
                <div className="button__delimiter"></div>
                <Image src={CartIcon} alt="Cart icon" />
                <span>3</span>
              </a>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="content__top">
              <div className="categories">
                <ul>
                  <li className="active">Все</li>
                  <li>Мясные</li>
                  <li>Вегетарианская</li>
                  <li>Гриль</li>
                  <li>Острые</li>
                  <li>Закрытые</li>
                </ul>
              </div>
              <div className="sort">
                <div className="sort__label">
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                      fill="#2C2C2C"
                    />
                  </svg>
                  <b>Сортировка по:</b>
                  <span>популярности</span>
                </div>
                <div className="sort__popup">
                  <ul>
                    <li className="active">популярности</li>
                    <li>цене</li>
                    <li>алфавиту</li>
                  </ul>
                </div>
              </div>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {props.pizzas.map((pizza) => (
                <PizzaCard
                  pizza={pizza}
                  onAddPizza={onAddPizza}
                  key={pizza.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await client.records.getList("pizzas");
  const pizzas = JSON.parse(JSON.stringify(res.items));

  return {
    props: {
      pizzas,
      revalidate: 10,
    },
  };
};

export default Home;

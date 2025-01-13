import React, { useState } from "react";
import Card from "./Card";
import "./Card.css";

function Menu() {
  const menu = [
    {
      url: "https://tse3.mm.bing.net/th?id=OIP.RNEJRcChNOXRi0A6LU7KfAHaFE&pid=Api&P=0&h=180",
      name: "burger",
      desc: "This is a delicious burger.",
    },
    {
      url: "https://tse2.mm.bing.net/th?id=OIP.RWaaZCnAJwE8O0FxwD7y0AHaEo&pid=Api&P=0&h=180",
      name: "pizza",
      desc: "A cheesy pizza with toppings.",
    },
    {
      url: "https://tse1.mm.bing.net/th?id=OIP.BTjk2eoQk_MlhES166t-JAHaE8&pid=Api&P=0&h=180",
      name: "pasta",
      desc: "Creamy white sauce pasta.",
    },
    {
      url: "https://tse2.mm.bing.net/th?id=OIP.-Uz3VT-ucv_eBD1EaVUlMQHaE7&pid=Api&P=0&h=180",
      name: "noodles",
      desc: "Hot and spicy noodles.",
    },
    {
      url: "https://tse1.mm.bing.net/th?id=OIP.LUdVB3scfT1YPgs2vHchhQHaE8&pid=Api&P=0&h=180",
      name: "biryani",
      desc: "Aromatic and flavorful biryani.",
    },
    {
      url: "https://tse1.mm.bing.net/th?id=OIP.f1R8kpo61Jk2qWFj3ruS3wAAAA&pid=Api&P=0&h=180",
      name: "fries",
      desc: "Crispy and golden french fries.",
    },
    {
      url: "https://tse2.mm.bing.net/th?id=OIP.qWEc89dzq5Vc2K_HcwrfZgHaEJ&pid=Api&P=0&h=180",
      name: "icecream",
      desc: "Delightful vanilla ice cream.",
    },
    {
      url: "https://tse3.mm.bing.net/th?id=OIP.uAQhnAN6kzLX_WPFMEC2EAHaKP&pid=Api&P=0&h=180",
      name: "pancake",
      desc: "Soft and fluffy pancakes.",
    },
    {
      url: "https://tse2.mm.bing.net/th?id=OIP.lsjPUDAhP4v9QLIgPkeGMAHaE7&pid=Api&P=0&h=180",
      name: "waffle",
      desc: "Crispy waffles with syrup.",
    },
    {
      url: "https://tse3.mm.bing.net/th?id=OIP.Xp2RQVjyCr3kN1G8VhcK_wHaE_&pid=Api&P=0&h=180",
      name: "samosa",
      desc: "A crispy and spicy samosa.",
    },
    {
      url: "https://tse3.mm.bing.net/th?id=OIP.Etq8rgFhccPxMT2iNawYKQHaHa&pid=Api&P=0&h=180",
      name: "wrap",
      desc: "A wholesome veggie wrap.",
    },
    {
      url: "https://tse4.mm.bing.net/th?id=OIP.ywM_T_rM7jFED-ubeSJqaAHaE8&pid=Api&P=0&h=180",
      name: "tacos",
      desc: "Mexican tacos with fillings.",
    },
    {
      url: "https://tse2.mm.bing.net/th?id=OIP.s-SkCl70_IA8RJgV-Gbu-QHaK8&pid=Api&P=0&h=180",
      name: "smoothie",
      desc: "A refreshing fruit smoothie.",
    },
    {
      url: "https://tse1.mm.bing.net/th?id=OIP.asFVgG-WmY4KYrALwUvt0wHaHa&pid=Api&P=0&h=180",
      name: "salad",
      desc: "A healthy and fresh salad.",
    },
    {
      url: "https://tse2.mm.bing.net/th?id=OIP.nTT5tvHk0Up59zRcC6oEygHaHa&pid=Api&P=0&h=180",
      name: "curry",
      desc: "Spicy and flavorful curry.",
    },
    {
      url: "https://tse3.mm.bing.net/th?id=OIP.RuaM0j1MH4LRye_dcfWlfwHaEK&pid=Api&P=0&h=180",
      name: "dosa",
      desc: "Crispy Indian dosa.",
    },
    {
      url: "https://tse3.mm.bing.net/th?id=OIP.nLsW6EI7W_KwH7FPjQ4TvwHaEd&pid=Api&P=0&h=180",
      name: "idli",
      desc: "Soft and fluffy idlis.",
    },
    {
      url: "https://tse1.mm.bing.net/th?id=OIP.JRktMqKvNgprK-1BI7a-eQHaLK&pid=Api&P=0&h=180",
      name: "cake",
      desc: "A moist and delicious cake.",
    },
    {
      url: "https://tse1.mm.bing.net/th?id=OIP.odEzuqOhXMCg38dU-WwIJgHaE7&pid=Api&P=0&h=180",
      name: "coffee",
      desc: "Hot and aromatic coffee.",
    },
    {
      url: "https://tse1.mm.bing.net/th?id=OIP.OrD-0SE3pvuxamciektv-AHaE8&pid=Api&P=0&h=180",
      name: "tea",
      desc: "A soothing cup of tea.",
    },
  ];

  const [menus, setMenu] = useState(menu);
  const [search, setSearch] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
    if (e.target.value == "") {
      setMenu(menu);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const filteredItems = menu.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    if (filteredItems.length > 0) {
      setMenu(filteredItems);
    } else {
      setMenu(menu);
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          MOM's Kitchen
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleChange}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              onClick={handleSubmit}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      <div className="m">
        {menus.map((x) => (
          <Card url={x.url} name={x.name} desc={x.desc} />
        ))}
      </div>
    </>
  );
}

export default Menu;

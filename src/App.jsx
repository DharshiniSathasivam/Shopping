import { useState } from "react";
import "./App.css";

function App() {
  const data = [
    {
      productimg:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEBIPDw8PEA8QDxAPDw4ODw8ODRAOFREWFxURFRUYHSggGBolHRUTITEhJSkrOi46Fx8/OzMsOCktLisBCgoKDg0OFRAQGSsdHR0tLS0tKys3LS03LTAtLS0tKy0rLS0vLS0tLTgtLSstKystKysrKzArLi0rNysrLTc3K//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwMEBQYIAgH/xABOEAACAgACBQQOBAoHCQAAAAAAAQIDBBEFBxIhMQYTcbIiJTQ1QVFhcnSBgqGxsyQykcEIFSNCUnOio8LRFDNTVGKS0hYXRGOElLTT8P/EABgBAQEBAQEAAAAAAAAAAAAAAAAEAQMC/8QAIBEBAAEDBAMBAAAAAAAAAAAAAAECAwQRMUFREhMyIf/aAAwDAQACEQMRAD8AnEAAAAAAAAAAARNrY1kY7ReMrw2Fhh3CWHjdJ3QnZJylOay3SWSyj7zWadcOlLcNiLXHCQnQ8OoqFVqjLnJyi887M92z4H4QJ/Bz3j9bmlq6cPZGWG2ro2uedLlFOFjhkuyM/wAhNbU3z89M3011qNbo5qtbaebU864Nzy3w8HjAmUHmE1JKSaaaTTW9NPgz0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABzr+EMu2lPoVfzbDSNFdx43yPBP99I3n8InvnR6FH51homi39Dxy8mEf78BpRfQ8C/8OL/8hmw6seR0NM3X1W3zpjTXCb5uEZSmpTyazfDh4ma9pR/Q8D0Yz56JE/Bxl9Nxa8eFg/stX8wJ8oqjCMYRWUYRUYrxRSySPYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANN1t6TuwuirrsPbOq1SqjGyt5TWc1nkzciPtekstD2eW6lftMDnXSOmsRiZ87ip/wBIsSUdu6MZTaXBOSSb9bMq6oLRkr4R2J3YiNNkIOXNyhDso5qTbzzWe5o1o2OM+1OXi0g0ujmYv72AwtcJ6NstsjtvDXKumMpTUIxtlBz3Rabebz3sx2itOYnCTdmFs5ibWzt1wht5eRyTa9RkMFLtVivLiqf4DXgOp9UOlb8Xoqq7E2yutdl0ZWTycmo2NLP1G5keah32mr8l+IX7wkMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEda+X2ol6RT/ESKRxr8fah+lU/CYHNZmndH8XbGfZf03aa8nNJGFLpr8jn/AMz+EDJYKxfi7Exb3vEUtLx74/yZhC7qT5mx+DbgWYHSmoJ9p15MViF70SORr+D++1HRi7/hAkoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEVaztL4XSmEt0fhbtrGVXqfMbMlNuvNNPNZZb1vWfFEnY3FRpg7J/VWWb3+F5eAiy5RldKxLsnOTUtnKWTln9bI8V1xS6W7fmh2zkbpCL2Z4dxk9+zN7MsvHk/AVreSWkI1JOjdtbS7Le93gz3e8mOzDRsalYnOSiopuUs1FcFxK08LujnF5JZR3y4eI4TkdO8Y0coSo5L6Rdc4rC2NNxb4PLLw7tx5o5HaQm3GFG1NJvYi9qeS8iTJwrw2SlsxeTWUsm+Bawwqqk5wjsTacXJSlnsvit7EZHbZxo4VNWeOo0Rg6cBjLHDF4jETnGnm7E85uMUk8smuG/cSkRDCzZvqtnvcLItzecpbKlm+yJWwGMhfXG2t5wlnk8ms8nl4eg7UXIrcLlvwXAAOjkAAAAAAAAAAAAAAAAAAAAAAAAAADFcqF9Fs9nrI0KuKzN95T9y2ez1kaHXxJr6vH2ldQivEVpRXiKMCtImUkIR8Rb3RXiLiJQuRgxuKSy4Ehckl9Dp6JddkfYlEh8le5Kvb68inH3lPk7QywAKkYAAAAAAAAAAAAAAAAAAAAAAAAAAMVyo7ls9jro0Ko33lP3LZ7HXRHjxVcJRjOcIyl9WMpJOXZRjuXh7KcF7SJ7/CrH2lkaynpXGKmp2NpJZJzlGUq614Zz2d+yv/AJrivleKr/tIblKT7OP1YvKT6E9zKelqacThp1SujGq5c07Iyi89qWzsxeeW03uXHf4CaI7Uzt+LXD6Xr5xQjiI3ZylGUHW65xcZRjJxeSWUXOGcXvyknnlxydpha9DYVWO+OIWcLrp2ZzrlGPPOtSrf6P8AVRSz8pk7MbU21zkM02mlJZ5pJtdOUov1o2dOGRM8qN0TfuSvclXt9eRG9mlMO8srYPNRayeeak5KL+2uf+Vkkclu5Kvb68jtY3lxyPmGWABUjAAAAAAAAAAAAAAAAAAAAAAAAAABi+U3ctvRHroiPTuAsttw9lcXJV2VOWWX1ViqJy91bfqJc5Tdy2dEeuiOpYWM3m3NNZb4yy4Nv7/ccLs6TCmxGtMw12GCxkMkqpyjzWPpnuzeVluIlVJP11/5vIZi7CYh0VLjGF+Gcq+akr84YiLla3tcMk3komRowKWWVlm7Z4yzzy5v/wBf7TKk9HNpfl7lkoLdLL6soP37GT85nCaneKWCehpKnFzUbFfbaubyTaXM3zspnsritqbb8aEsFdzspOqSTvtfjSjLDUJerOEln5DYYYWSi487NvahLbeW12Mk8uh5ZPpZZrRzjFJ3WTay7KTzk8p7W/1ZIzyb4tNo0Bicq84OOSqbzlHdvxSa4+DnYP1k58lu5Kvb68iMnouKyztulsuMlnPi4qGWe7/AvtZJnJbuSr2+vI72qtanC9TpTDLAAoSgAAAAAAAAAAAAAAAAAAAAAAAAAAxnKXuW3oj14mg1m/8AKJZ4W3oj1kaBWT3+FWPtK7rKzKFZXZMqEULSuihaYLS43zkt3JV7fXkaHcb7yX7kq6JddlFjeU+R8wykpJLNtJLi3uRYXacwcN0sVh01xXOwcvszzIW1o8q7adJ30TUrKa+bUI7bShnTCTyjw4t+I16jlZRLjG2PTGLXuk2Vo3QMuVWAX/Ew9SnL4I8f7XaP/vMf8lv+kg2On8O/z2umEv5Hr8eYb+0/Zn/IaCdIcqMA+GKr9rOPxRd4fS2Fs3V4iib8UbYN/Zmc/S09h1+e30Qm/uLS7lVh1uUbZ9EYpe9oaDpkEM6ouU1uIxzoW1GjmLJc25uack45PLhHi+BMxgAAAAAAAAAAAAAAAAAADH6eX0a3zV1kR9USHpzuezzfvRHlZPf4VY/K6rLhlCsrMmVCKFpXRQtMFpab9yY7kq6JdZmg2m/cme5KvNfWZRY3lPk/MOeNc3ffE9NXyKzTKTctcnffE+dX8mBptJUkXtZ7PFZ7NY82FpIurC1kGJI1E98n6Nd8YHQZz7qJ75P0a3rQOghLQAGAAAAAAAAAAAAAAAACx033PZ5v3oj2HEkPTXc9nm/eiPI8Se/wqx+VzWV2UKyuTKhFC0rooWgWlxv/ACa7kq819ZkfXyyJA5M9yU+a+szvY3lPkfMOdtcfffFedX8mBp1JuGuLvvivOr+TA0+orRrys9nis9mjzYW0i4mW8gJJ1Ed8n6Lb1oHQJz/qIXbKXotvXrOgDJAAGAAAAAAAAAAAAAAAACx028sPZn+j96I8hxNu1h2SjozEyi3GSjBprivysCB6OW+JqeUowsS8rg/W969xyuUTVs7WrkU7pTrZWbI8w2sWP5+HkvNnGXxyL7/eLh8t9F/qVT+Mif1VdKfdR23VMo2moLWLh/7C/wBaq+6ZY4vWNHfsYeT8W1OMfhmPVV0e6jtteLZI3Jd/Q6PM+9nNek+XWJs3RhXWn5XN+p7vgT9quulPROEnNuUpRsbb4v8ALTO9q3NOurheuRVERCCdcPffFefD5UDUKTbtcPffFefD5UDUaTunXsD0eaz0aPky2kXEyhICS9RHfGXotvXrJ+IC1ELtjL0W3r1k+mSAAMAAAAAAAAAAAAAAAAGtax+9eK/Vw+ZE5hxPFnT+sVdq8X+rj8yJzDiOLNhjxWV8yhArGtChcVkUbQLK06m1Ud58H5lnzpnLk4nUuquOWh8H+rn82ZggjW++2+K/WR+XE1Kk2zW0s9LYr9aupE1WpAXcD0eYHoD5Mt2V5lF8TWJM1E98Jei29esnwgPUV3wl6Lb1oE+GS0ABgAAAAAAAAAAAAAAAAsdN6NjisPbhpycY2wcHKOWcX4H9uRBWnNUelapSdEacVDPsXVYqrWvLCzJJ+RSZ0GAOVr+R2lKvr6Oxi8yidq+2GaLaeh8WuOExa87DXxfvidZA3Ucmw0Ni3wwmLfm4a+XwiXNPI3Stv9Xo7GPP9OmdS+2eSOqQNRzvobU9pW6Sd6owkPznbYrbUvJCvNP1yRO/J7RMMFhacLCUpxphs7cslKTzbbyXDe3uMiDBFGsHVPbjcRZi8JiK1Za1KdGJUow2skm42RTaW7g4vpS4R1jNWOmqXvwUrF+nRbTZH7NpS9x04AOVZ8ltJQ+to/Growt8veolH8RY7+443/s8T/pOsAaOVIcl9JT+ro/Gv/pb18YmRwOrPTVz3YKVa/TvtpriulbTl7jpoDUR1q01dW6NseJxN9c7nXKtVUKTqipNNtzkk5PcvAvDxJFAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//Z",
      productName: "Fluid Foundation",
      Rate: "$40.00",
    },
    {
      productimg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoEwbUEpGu4nxMQJTb0ycHa0Gn_q-uJxNEyA&usqp=CAU",
      productName: "Liquid Foundation ",
      Rate: "$30.00",
    },
    {
      productimg:
        "https://rubysorganics.in/cdn/shop/products/LM01.8_1100x.png?v=1646217387",
      productName: "Mattifying Foundation",
      Rate: "$90.00",
    },
    {
      productimg:
        "https://www.narscosmetics.com/on/demandware.static/-/Sites-itemmaster_NARS/default/dwbde949d5/2023/February/LRFoundation/NARS_SP23_AllureBeautySeal_PDPCrop_Soldier_LRF_Siberia_US_2000x2000.png",
      productName: "SkinCare Foundation ",
      Rate: "$10.00",
    },
    {
      productimg:
        "https://sdcdn.io/mac/in/mac_sku_M6JC26_1x1_0.png?width=1440&height=1440",
      productName: "Stuido Fix SPF",
      Rate: "$70.00",
    },
    {
      productimg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoEwbUEpGu4nxMQJTb0ycHa0Gn_q-uJxNEyA&usqp=CAU",
      productName: "Smooth Foundation  ",
      Rate: "$30.00",
      
    },
    {
      productimg:
        "https://rubysorganics.in/cdn/shop/products/LM01.8_1100x.png?v=1646217387",
      productName: "Base Foundation ",
      Rate: "$60.00",
    },
    {
      productimg:
        "https://images-static.nykaa.com/media/catalog/product/e/9/e91d6d7NYLAGRL000175_1.jpg",
      productName: "Liquid Foundation",
      Rate: "$80.00",
    },
  ];
  const [product, add] = useState([]);
  const [inCart, setInCart] = useState(0);
  setTimeout(() => {
    add(data);
  }, 2000);
  return (
    
    <div className="card">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand" href="#">
          Start BootStrap
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  All Product
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Popular Items
                </a>
                <a className="dropdown-item" href="#">
                  New Arrival
                </a>
              </div>
            </li>
          </ul>
          <div className="proCart">
            <button className="incart">CART {inCart}</button>
          </div>
        </div>
      </nav>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Shop in style</h1>
          <p className="lead">With this shop hompeage template</p>
        </div>
      </div>
      <footer>
        <div className="footer">
          <div className="contend">Copyright © Your Website 2023</div>
        </div>
      </footer>
      <div className="cart">
        {product?.map((cardDetail, idx) => (
          <><ShoppingCart
            key={idx}
            img={cardDetail.productimg}
            name={cardDetail.productName}
            rate={cardDetail.Rate}
            inCart={inCart}
            setInCart={setInCart} /></>
        ))}
      </div>
    </div>
    
  );
}

export default App;

function ShoppingCart({ name, img, rate, inCart, setInCart }) {
  const [show, setShow] = useState(true);
  const handleAdd = () => {
    setShow(!show);
    setInCart(inCart + 1);
  };
  const handleRemve = () => {
    setShow(!show);
    setInCart(inCart - 1);
  };
  return (
    <div className="card-group">
      <div className="cards">
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-text">{rate}</h6>
          {show === true ? (
            <button onClick={handleAdd} className="btn">Add To Cart</button>
          ) : (
            <button onClick={handleRemve} className="btn">Remove</button>
          )}
        </div>
      </div>
    </div>
    
  );
}





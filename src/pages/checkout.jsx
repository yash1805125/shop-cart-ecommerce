import React, { useState, useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { PRODUCTS } from "../products";
import "./styleCheckoutContact.css";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Checkout = ({ user, email }) => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);

  //   console.log(cartItems);

  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [mystate, setMyState] = useState("");
  const [zip, setZip] = useState();

  const [shippinguser, setShippingUser] = useState("");
  const [shippingemail, setShippingEmail] = useState("");
  const [shipaddr, setShipaddr] = useState("");
  const [shipcountry, setShipCountry] = useState("");
  const [shipcity, setShipcity] = useState("");
  const [shipstate, setShipstate] = useState("");
  const [shipzip, setShipzip] = useState();
  const [checked, setChecked] = useState(false);

  const [cardno, setCard] = useState();
  const [billzip, setbillZip] = useState();
  const [cardmonth, setMonth] = useState("");
  const [cardyear, setYear] = useState();
  const [cvc, setCVC] = useState();

  const handleCheck = (event) => {
    // if (event.target.checked) setChecked(true);
    // else setChecked(false);
    setChecked((current) => !current);
  };

  return (
    <div className="fix-checkout-outer">
      <div className="fix-checkout-inner-left">
        <div className="customer-info">
          <h1>Customer Info</h1>
          <div className="fix-fields">
            <div className="fix-all-input-div">
              <label>Full Name</label>
              <input
                value={user}
                className="fix-all-input"
                disabled="disabled"
              />
            </div>

            <div className="fix-all-input-div">
              <label>Enter email</label>
              <input
                value={email}
                className="fix-all-input"
                disabled="disabled"
              />
            </div>
          </div>

          <div className="fix-fields">
            <div className="fix-all-input-div">
              <label>Address</label>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="fix-all-input"
                placeholder="Enter Plot/Street/Locality/Landmark"
              />
            </div>
            <div className="fix-all-input-div">
              <label>Select Country</label>
              <select
                name="country"
                onChange={(e) => setCountry(e.target.value)}
                className="fix-all-input"
                required
              >
                <option disabled selected value="">
                  Select an option
                </option>
                <option value="India">India</option>
                <option value="USA">USA</option>
              </select>
            </div>
          </div>

          <div className="fix-fields">
            <div className="fix-all-input-div">
              <label>Select State</label>
              <select
                name="state"
                onChange={(e) => setMyState(e.target.value)}
                className="fix-all-input-last"
              >
                <option disabled selected value="">
                  Select an option
                </option>
                <option value="Delhi">Delhi</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Odisha">Odisha</option>
                <option value="Maharastra">Maharastra</option>
              </select>
            </div>

            <div className="fix-all-input-div">
              <label>Town/City</label>
              <input
                value={city}
                placeholder="Enter city"
                className="fix-all-input-last"
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className="fix-all-input-div">
              <label>Zip/Postal</label>
              <input
                placeholder="000000"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="fix-all-input-last"
              />
            </div>
          </div>
        </div>
        <div className="shipping-info">
          <h1>Shipping Info</h1>

          <div className="ui-checkbox">
            <input
              className="hidden"
              readOnly
              type="checkbox"
              onChange={handleCheck}
            />
            <label>Shipping address same as Customer address ?</label>
          </div>

          {checked ? (
            <div>
              <div className="fix-fields">
                <div className="fix-all-input-div">
                  <label>Full name</label>
                  <input value={user} disabled className="fix-all-input" />
                </div>

                <div className="fix-all-input-div">
                  <label>Email</label>
                  <input value={email} disabled className="fix-all-input" />
                </div>
              </div>

              <div className="fix-fields">
                <div className="fix-all-input-div">
                  <label>Address</label>
                  <input value={address} disabled className="fix-all-input" />
                </div>
                <div className="fix-all-input-div">
                  <label>Country</label>
                  <input value={country} disabled className="fix-all-input" />
                </div>
              </div>

              <div className="fix-fields">
                <div className="fix-all-input-div">
                  <label>State</label>
                  <input
                    value={mystate}
                    disabled
                    className="fix-all-input-last"
                  />
                </div>
                <div className="fix-all-input-div">
                  <label>Town/City</label>
                  <input value={city} disabled className="fix-all-input-last" />
                </div>
                <div className="fix-all-input-div">
                  <label>Zip/Postal</label>
                  <input value={zip} disabled className="fix-all-input-last" />
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="fix-fields">
                <div className="fix-all-input-div">
                  <label>Full Name</label>
                  <input
                    value={shippinguser}
                    onChange={(e) => setShippingUser(e.target.value)}
                    className="fix-all-input"
                  />
                </div>
                <div className="fix-all-input-div">
                  <label>Email Address</label>
                  <input
                    value={shippingemail}
                    onChange={(e) => setShippingEmail(e.target.value)}
                    className="fix-all-input"
                  />
                </div>
              </div>

              <div className="fix-fields">
                <div className="fix-all-input-div">
                  <label>Enter Address</label>
                  <input
                    value={shipaddr}
                    onChange={(e) => setShipaddr(e.target.value)}
                    placeholder="Enter Plot/Street/Locality/Landmark"
                    className="fix-all-input"
                  />
                </div>
                <div className="fix-all-input-div">
                  <label>Select Country</label>
                  <select
                    name="country"
                    onChange={(e) => setShipCountry(e.target.value)}
                    className="fix-all-input"
                  >
                    <option>India</option>
                    <option>USA</option>
                  </select>
                </div>
              </div>

              <div className="fix-fields">
                <div className="fix-all-input-div">
                  <label>Select State</label>
                  <select
                    name="state"
                    onChange={(e) => setShipstate(e.target.value)}
                    className="fix-all-input-last"
                  >
                    <option>Delhi</option>
                    <option>Karnataka</option>
                    <option>Odisha</option>
                    <option>Maharastra</option>
                  </select>
                </div>

                <div className="fix-all-input-div">
                  <label>Town/City</label>
                  <input
                    value={shipcity}
                    placeholder="Enter city"
                    onChange={(e) => setShipcity(e.target.value)}
                    className="fix-all-input-last"
                  />
                </div>
                <div className="fix-all-input-div">
                  <label>Zip/Postal</label>
                  <input
                    value={shipzip}
                    onChange={(e) => setShipzip(e.target.value)}
                    className="fix-all-input-last"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="payment-info">
          <h1>Payment Info</h1>
          <div className="fix-fields">
            <div className="fix-all-input-div">
              <label>Credit Card Number</label>
              <input
                type="number"
                onChange={(e) => setCard(e.target.value)}
                className="fix-payment-fields"
                placeholder="0000001111100111001"
              />
            </div>
            <div className="fix-all-input-div">
              <label>Billing Zip</label>
              <input
                type="number"
                onChange={(e) => setbillZip(e.target.value)}
                className="fix-payment-fields"
                placeholder="Enter Billing Zip Code"
              />
            </div>
          </div>

          <div className="fix-fields">
            <div className="fix-all-input-div">
              <label>Month</label>
              <select
                value={cardmonth}
                onChange={(e) => setMonth(e.target.value)}
                className="fix-payment-fields"
              >
                <option disabled selected value="">
                  Select an option
                </option>
                {months.map((month) => {
                  return <option value={month}>{month}</option>;
                })}
              </select>
            </div>
            <div className="fix-all-input-div">
              <label>Year</label>
              <select
                value={cardyear}
                onChange={(e) => setYear(e.target.value)}
                className="fix-payment-fields"
              >
                <option disabled selected value="">
                  Select an option
                </option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
              </select>
            </div>

            <div className="fix-all-input-div">
              <label>CVC</label>
              <input
                type="number"
                value={cvc}
                onChange={(e) => setCVC(e.target.value)}
                placeholder="123"
                className="fix-payment-fields"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="fix-checkout-inner-right">
        <div className="billing-info">
          <h1>Billing Info</h1>
          <div className="billing-border">
            {PRODUCTS.map((item) => {
              if (cartItems[item.id] !== 0) {
                return (
                  <div className="display-items">
                    <div className="display-i">{item.title}</div>
                    <div className="display-j">
                      <b style={{ color: "red" }}>x{cartItems[item.id]}</b>$
                      {cartItems[item.id] * item.price}
                    </div>
                  </div>
                );
              }
            })}
            <div className="underline-border"></div>
            <div className="fix-total">
              <h3>Total Bill :-</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <div>
            <button className="checkout-button" onClick={() => checkout()}>
              <b>Complete Checkout & Pay</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

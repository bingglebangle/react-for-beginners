import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [amount, setAmount] = useState("");
  const [selectedCoin, setSelectedCoin] = useState(null);

  const onChange = (event) => setAmount(event.target.value);

  const onSelectChange = (event) => {
    const selectedId = event.target.value;
    const coin = coins.find((coin) => coin.id === selectedId);
    setSelectedCoin(coin);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The coins {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading....</strong>
      ) : (
        <>
          <input
            type="number"
            value={amount}
            onChange={onChange}
            placeholder="Enter amount in USD"
          />
          <select onChange={onSelectChange}>
            <option value="">Select a coin</option>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.id}>
                {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <p>
            {selectedCoin && amount
              ? `You can get ${amount / selectedCoin.quotes.USD.price} ${
                  selectedCoin.symbol
                } for ${amount} USD`
              : "Please select a coin and enter an amount."}
          </p>
        </>
      )}
    </div>
  );
}

export default App;

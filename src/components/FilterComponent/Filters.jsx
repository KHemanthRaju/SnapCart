import "../FilterComponent/Filters.css";

const Filters = () => {
  return (
    <>
      <form>
        <header>
          <h3>Filters</h3>
          <button>Clear</button>
        </header>
        <h3>Price</h3>
        <input
          type="range"
          min="0"
          max="2000"
          value={range}
          list="range"
          id="price-range"
        />
      </form>
    </>
  );
};

export default Filters;

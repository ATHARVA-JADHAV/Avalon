import "./carbonem.css";

export const CarbonEmissionForm = () => {
  return (
    <div className="main">
      <div className="bg">
        <div className="form-element">
          <p className="text">Carbon Emission Calculator</p>
          <form className="form">
            <label htmlFor="car">Car</label>
            <select id="car" name="car">
              <option value="wagonR">WagonR</option>
              <option value="i20">i20</option>
              <option value="swift">Swift</option>
              <option value="creta">Creta</option>
            </select>
            <label htmlFor="dateBought">Date-Bought</label>
            <input type="date" id="dateBought" name="dateBought" />
            <label htmlFor="lastServicingDate">Last Servicing Date</label>
            <input
              type="date"
              id="lastServicingDate"
              name="lastServicingDate"
            />
            <label htmlFor="kmstravelled">KMs Travelled</label>
            <input type="text" id="kmstravelled" name="kmstravelled" />
            <button type="submit" id="button">
              Calculate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

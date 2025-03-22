import { Accordion } from "react-bootstrap";
import "./style.css";

const MobileFilters = () => {
  return (
    <div className="mobile-filters">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0" style={{ border: "none" }}>
          <Accordion.Header style={{ backgroundColor: "#060624" }}>Filters</Accordion.Header>
          <Accordion.Body>
            <h3>Filter by category</h3>
            <form className="category-filter">
              <div className="form-group">
                <input type="checkbox" id="men" name="men" value="men" />
                <label htmlFor="men">Men's Wear</label>
              </div>
              <div className="form-group">
                <input type="checkbox" id="women" name="women" value="women" />
                <label htmlFor="women">Women's Wear</label>
              </div>
            </form>
            <h3>Filter by price</h3>
            <form className="price-filter">
              <div className="form-group">
                <input type="checkbox" id="499" name="499" value="499" />
                <label htmlFor="499">0-499</label>
              </div>
              <div className="form-group">
                <input type="checkbox" id="999" name="999" value="999" />
                <label htmlFor="999">500-999</label>
              </div>
              <div className="form-group">
                <input type="checkbox" id="1999" name="1999" value="1999" />
                <label htmlFor="1999">1000-1999</label>
              </div>
              <div className="form-group">
                <input type="checkbox" id="2999" name="2999" value="2999" />
                <label htmlFor="2999">2000-2999</label>
              </div>
              <div className="form-group">
                <input type="checkbox" id="3000" name="3000" value="3000" />
                <label htmlFor="3000">More than 3000</label>
              </div>
            </form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default MobileFilters;

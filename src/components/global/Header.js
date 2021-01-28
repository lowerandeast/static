import Link from "next/link";
import RouteActive from "../../utils/RouteActive";

const Header = () => (
  <div>
    <div className="outer p-t-1-h">
      <div className="row align-center">
        <div className="column s-40 s-40-phone">
          <h5>Stoop</h5>
        </div>
        <div className="column s-60 s-60-phone type-r">
          <h6 className="type-is">
            <RouteActive activeClassName="active" href="/">
              <a>Index</a>
            </RouteActive>
          </h6>
          <h6 className="type-i">
            <RouteActive activeClassName="active" href="/about">
              <a>Page</a>
            </RouteActive>
          </h6>
        </div>
      </div>
    </div>
  </div>
);

export default Header;

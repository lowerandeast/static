import { NextSeo } from "next-seo";

function Home() {
  return (
    <div>
      <NextSeo
        title=" "
        description="Lower & East's inhouse static site boiler, using next.js"
      />

      <div className="outer confined">
        <div className="row p-t-3 p-t-1-tablet type-c">
          <div className="column">
            <img
              src="https://i.imgur.com/ojEO6Nl.png"
              alt="Stoop"
              width="550.0rem"
            />
          </div>
        </div>
        <div className="row p-t-3 p-t-5-phone">
          <div className="column type-c">
            <h1>
              Our boiler and light framework for static sites, using Next.js.
            </h1>
            <h6>
              Made for static sites, using Next.js and React components -
              tailored for Lower & East internally, but like - use it if you
              want.
            </h6>
            <h6 class="p-t-1">
              <a href="https://www.npmjs.com/package/stoop">
                npmjs.com/package/stoop
              </a>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

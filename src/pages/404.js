import Link from "next/link";
import { NextSeo } from "next-seo";

export default function Custom404() {
  return (
    <div>
      <NextSeo title="- Nothing here" />

      <div className="outer confined">
        <div className="row">
          <div className="column type-c">
            <h6>Page not found.</h6>
            <Link href="/">
              <a>&#10229; Home</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

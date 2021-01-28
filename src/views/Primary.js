import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

import Header from "../components/global/Header";

const PrimaryLayout = ({ children }) => (
  <div>
    <DefaultSeo {...SEO} />

    <Header />

    <div>{children}</div>
  </div>
);

export default PrimaryLayout;

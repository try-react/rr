import React from "react";
import { useCount } from "@app/containers/lib/hooks";
import { HandleCount } from "@app/components/lib/presentational/ecosystems";

const Shop = () => (
  <>
    Shop
    <p>useDispatch, useSelector</p>
    <HandleCount {...useCount()} />
  </>
);
export default Shop;

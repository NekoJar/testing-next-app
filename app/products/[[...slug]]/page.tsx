import React from "react";

interface Props {
  params: { slug: string[] };
  searchParams: { sortorder: String };
}

const ProductPage = ({
  params: { slug },
  searchParams: { sortorder },
}: Props) => {
  return (
    <div>
      <h1>
        ProductPage {slug} {sortorder}
      </h1>
    </div>
  );
};

export default ProductPage;

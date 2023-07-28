import "/build/_shared/chunk-7IAJ7MEL.js";
import {
  F,
  Image,
  Money,
  Xt
} from "/build/_shared/chunk-SIHKIWRQ.js";
import {
  Await,
  Link,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-GRGILMUK.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/products.$handle.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = ({ data }) => {
  return [{ title: `Hydrogen | ${data.product.title}` }];
};
function Product() {
  const { product, variants } = useLoaderData();
  const { selectedVariant } = product;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductImage, { image: selectedVariant?.image }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 95,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      ProductMain,
      {
        selectedVariant,
        product,
        variants
      },
      void 0,
      false,
      {
        fileName: "app/routes/products.$handle.jsx",
        lineNumber: 96,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/products.$handle.jsx",
    lineNumber: 94,
    columnNumber: 5
  }, this);
}
function ProductImage({ image }) {
  if (!image) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-image" }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 107,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Image,
    {
      alt: image.altText || "Product Image",
      aspectRatio: "1/1",
      data: image,
      sizes: "(min-width: 45em) 50vw, 100vw"
    },
    image.id,
    false,
    {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 111,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/routes/products.$handle.jsx",
    lineNumber: 110,
    columnNumber: 5
  }, this);
}
function ProductMain({ selectedVariant, product, variants }) {
  const { title, descriptionHtml } = product;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-main", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: title }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 126,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductPrice, { selectedVariant }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 127,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 128,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      import_react.Suspense,
      {
        fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          ProductForm,
          {
            product,
            selectedVariant,
            variants: []
          },
          void 0,
          false,
          {
            fileName: "app/routes/products.$handle.jsx",
            lineNumber: 131,
            columnNumber: 11
          },
          this
        ),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Await,
          {
            errorElement: "There was a problem loading product variants",
            resolve: variants,
            children: (data) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              ProductForm,
              {
                product,
                selectedVariant,
                variants: data.product?.variants.nodes || []
              },
              void 0,
              false,
              {
                fileName: "app/routes/products.$handle.jsx",
                lineNumber: 143,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/routes/products.$handle.jsx",
            lineNumber: 138,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/products.$handle.jsx",
        lineNumber: 129,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 151,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 152,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Description" }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 154,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 153,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 156,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { dangerouslySetInnerHTML: { __html: descriptionHtml } }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 157,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 158,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products.$handle.jsx",
    lineNumber: 125,
    columnNumber: 5
  }, this);
}
function ProductPrice({ selectedVariant }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-price", children: selectedVariant?.compareAtPrice ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Sale" }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 168,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 169,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-price-on-sale", children: [
      selectedVariant ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: selectedVariant.price }, void 0, false, {
        fileName: "app/routes/products.$handle.jsx",
        lineNumber: 171,
        columnNumber: 32
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("s", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: selectedVariant.compareAtPrice }, void 0, false, {
        fileName: "app/routes/products.$handle.jsx",
        lineNumber: 173,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/products.$handle.jsx",
        lineNumber: 172,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 170,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products.$handle.jsx",
    lineNumber: 167,
    columnNumber: 9
  }, this) : selectedVariant?.price && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: selectedVariant?.price }, void 0, false, {
    fileName: "app/routes/products.$handle.jsx",
    lineNumber: 178,
    columnNumber: 35
  }, this) }, void 0, false, {
    fileName: "app/routes/products.$handle.jsx",
    lineNumber: 165,
    columnNumber: 5
  }, this);
}
function ProductForm({ product, selectedVariant, variants }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-form", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Xt,
      {
        handle: product.handle,
        options: product.options,
        variants,
        children: ({ option }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductOptions, { option }, option.name, false, {
          fileName: "app/routes/products.$handle.jsx",
          lineNumber: 192,
          columnNumber: 24
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/products.$handle.jsx",
        lineNumber: 187,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 194,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      AddToCartButton,
      {
        disabled: !selectedVariant || !selectedVariant.availableForSale,
        onClick: () => {
          window.location.href = window.location.href + "#cart-aside";
        },
        lines: selectedVariant ? [
          {
            merchandiseId: selectedVariant.id,
            quantity: 1
          }
        ] : [],
        children: selectedVariant?.availableForSale ? "Add to cart" : "Sold out"
      },
      void 0,
      false,
      {
        fileName: "app/routes/products.$handle.jsx",
        lineNumber: 195,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/products.$handle.jsx",
    lineNumber: 186,
    columnNumber: 5
  }, this);
}
function ProductOptions({ option }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-options", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { children: option.name }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 220,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-options-grid", children: option.values.map(({ value, isAvailable, isActive, to }) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Link,
        {
          className: "product-options-item",
          prefetch: "intent",
          preventScrollReset: true,
          replace: true,
          to,
          style: {
            border: isActive ? "1px solid black" : "1px solid transparent",
            opacity: isAvailable ? 1 : 0.3
          },
          children: value
        },
        option.name + value,
        false,
        {
          fileName: "app/routes/products.$handle.jsx",
          lineNumber: 224,
          columnNumber: 13
        },
        this
      );
    }) }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 221,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 241,
      columnNumber: 7
    }, this)
  ] }, option.name, true, {
    fileName: "app/routes/products.$handle.jsx",
    lineNumber: 219,
    columnNumber: 5
  }, this);
}
function AddToCartButton({ analytics, children, disabled, lines, onClick }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(F, { route: "/cart", inputs: { lines }, action: F.ACTIONS.LinesAdd, children: (fetcher) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        name: "analytics",
        type: "hidden",
        value: JSON.stringify(analytics)
      },
      void 0,
      false,
      {
        fileName: "app/routes/products.$handle.jsx",
        lineNumber: 251,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        type: "submit",
        onClick,
        disabled: disabled ?? fetcher.state !== "idle",
        children
      },
      void 0,
      false,
      {
        fileName: "app/routes/products.$handle.jsx",
        lineNumber: 256,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/products.$handle.jsx",
    lineNumber: 250,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/products.$handle.jsx",
    lineNumber: 248,
    columnNumber: 5
  }, this);
}
var PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariant on ProductVariant {
    availableForSale
    compareAtPrice {
      amount
      currencyCode
    }
    id
    image {
      __typename
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
    quantityAvailable
    selectedOptions {
      name
      value
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
  }
`;
var PRODUCT_FRAGMENT = `#graphql
  fragment Product on Product {
    id
    title
    vendor
    handle
    descriptionHtml
    description
    options {
      name
      values
    }
    selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions) {
      ...ProductVariant
    }
    variants(first: 1) {
      nodes {
        ...ProductVariant
      }
    }
    seo {
      description
      title
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
`;
var PRODUCT_QUERY = `#graphql
  query Product(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...Product
    }
  }
  ${PRODUCT_FRAGMENT}
`;
var PRODUCT_VARIANTS_FRAGMENT = `#graphql
  fragment ProductVariants on Product {
    variants(first: 250) {
      nodes {
        ...ProductVariant
      }
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
`;
var VARIANTS_QUERY = `#graphql
  ${PRODUCT_VARIANTS_FRAGMENT}
  query ProductVariants(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...ProductVariants
    }
  }
`;
export {
  Product as default,
  meta
};
//# sourceMappingURL=/build/routes/products.$handle-KYFYC73J.js.map

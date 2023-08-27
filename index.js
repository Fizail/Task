window.addEventListener("load", () => {
  const tableBody = document.getElementById("item_list_body");
  const categoryDropdown = document.getElementById("category_filter");
  const removeCatFilterBtn = document.getElementById("remove_cat_filter");
  const availabilityDropdown = document.getElementById("availability_filter");
  const removeAvailabilityFilterBtn = document.getElementById(
    "remove_availablilty_filter"
  );

  const products = [
    {
      name: "Product 1",
      category: "Electronics",
      price: 799.99,
      available: true,
    },
    {
      name: "Product 2",
      category: "Books",
      price: 19.99,
      available: true,
    },
    {
      name: "Product 3",
      category: "Home & Kitchen",
      price: 49.99,
      available: false,
    },
    {
      name: "Product 4",
      category: "Toys & Games",
      price: 29.99,
      available: true,
    },
    {
      name: "Product 5",
      category: "Electronics",
      price: 599.99,
      available: true,
    },
    {
      name: "Product 6",
      category: "Books",
      price: 9.99,
      available: false,
    },
    {
      name: "Product 7",
      category: "Electronics",
      price: 799.99,
      available: true,
    },
    {
      name: "Product 8",
      category: "Books",
      price: 19.99,
      available: true,
    },
    {
      name: "Product 9",
      category: "Home & Kitchen",
      price: 49.99,
      available: true,
    },
    {
      name: "Product 10",
      category: "Toys & Games",
      price: 29.99,
      available: false,
    },
    {
      name: "Product 11",
      category: "Electronics",
      price: 599.99,
      available: true,
    },
    {
      name: "Product 12",
      category: "Books",
      price: 9.99,
      available: false,
    },
  ];

  function getTableRows(products) {
    return products
      ?.map((product) => {
        return `<tr>
            <td>${product?.name}</td>
            <td>${product?.category}</td>
            <td>${product?.price}</td>
            <td>${product?.available}</td>
          </tr>`;
      })
      ?.join("");
  }

  function removeFilters() {
    categoryDropdown.value = "";
    availabilityDropdown.value = "";
    tableBody.innerHTML = getTableRows(products);
  }

  tableBody.innerHTML = getTableRows(products);

  categoryDropdown.addEventListener("change", (e) => {
    let value = e.target.value;
    let filteredProducts = products?.filter(
      (product) => product?.category === value
    );
    tableBody.innerHTML = getTableRows(filteredProducts);
  });

  removeCatFilterBtn.addEventListener(
    "click",
    () => categoryDropdown.value && removeFilters()
  );

  availabilityDropdown.addEventListener("change", (e) => {
    let value = e.target.value;
    let filteredProducts = products?.filter((product) =>
      value === "true"
        ? product?.available === true
        : product?.available === false
    );
    categoryDropdown.value = "";
    tableBody.innerHTML = getTableRows(filteredProducts);
  });

  removeAvailabilityFilterBtn.addEventListener(
    "click",
    () => availabilityDropdown.value && removeFilters()
  );
});

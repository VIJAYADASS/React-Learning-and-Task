function productList() {
  const dummyProductData = ["Vegetable", "Dhall", "Nuts"];
  return (
    <div>
      <h3>Products List</h3>
      <ul>
        {dummyProductData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default productList;

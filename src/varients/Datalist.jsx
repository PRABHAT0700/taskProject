import React, { useState } from 'react';

function DataList() {
  const [productName, setProductName] = useState('');
  const [productOptions, setProductOptions] = useState([{ name: '', value: '' }]);
  const [productList, setProductList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleOptionNameChange = (event, index) => {
    const updatedOptions = [...productOptions];
    updatedOptions[index].name = event.target.value;
    setProductOptions(updatedOptions);
  };

  const handleOptionValueChange = (event, index) => {
    const updatedOptions = [...productOptions];
    updatedOptions[index].value = event.target.value;
    setProductOptions(updatedOptions);
  };

  const handleAddAnotherValue = () => {
    setProductOptions([...productOptions, { name: '', value: '' }]);
  };

  const handleSaveProduct = () => {
    if (productName.trim() === '') {
      alert('Please enter a product name.');
      return;
    }

    setProductList([
      ...productList,
      {
        name: productName,
        options: productOptions,
      },
    ]);

    setProductName('');
    setProductOptions([{ name: '', value: '' }]);
  };

  const handleEditProduct = (index) => {
    const product = productList[index];
    setProductName(product.name);
    setProductOptions(product.options);
    setEditingIndex(index);
  };

  const handleDeleteProduct = (index) => {
    const updatedProductList = [...productList];
    updatedProductList.splice(index, 1);
    setProductList(updatedProductList);
  };

  return (
    <div className='main-container'>

      <h2>Products</h2>
      <div className='datalist'>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={handleProductNameChange}
        />
      </div>
      {productOptions.map((option, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Option Name"
            value={option.name}
            onChange={(event) => handleOptionNameChange(event, index)}
          />
         
          <button onClick={handleAddAnotherValue}>Add Another Value</button>
          <button onClick={handleSaveProduct}>
            {editingIndex !== null ? 'Update' : 'Save'}
          </button>
        </div>
      ))}
      <ul>
        {productList.map((product, index) => (
          <li key={index}>
            <span>Product Name: {product.name}</span>
            <ul>
              {product.options.map((option, optionIndex) => (
                <li key={optionIndex}>
                  Option Name: {option.name}, Option Value: {option.value}
                </li>
              ))}
            </ul>
            <button onClick={() => handleEditProduct(index)}>Edit</button>
            <button onClick={() => handleDeleteProduct(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataList;
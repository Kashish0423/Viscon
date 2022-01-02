import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className='newProduct'>
      <h1 className='addTitle'>New Product</h1>
      <form className='addForm'>
        <div className='addItem'>
          <label>Image</label>
          <input type='file' id='file' />
        </div>
        <div className='addItem'>
          <label>Name</label>
          <input type='text' placeholder='Apple Airpods' />
        </div>
        <div className='addItem'>
          <label>Stock</label>
          <input type='text' placeholder='123' />
        </div>
        <div className='addItem'>
          <label>Active</label>
          <select name='active' id='active'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <button className='addButton'>Create</button>
      </form>
    </div>
  );
}

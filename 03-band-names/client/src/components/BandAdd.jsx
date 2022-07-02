export const BandAdd = () => {
  const handleAdd = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h3>Add Band</h3>
      <form onSubmit={handleAdd}>
        <input type='text' placeholder='Band Name' className='form-control' />
        <button className='btn btn-primary' type='submit'>
          Submit
        </button>
      </form>
    </>
  );
};

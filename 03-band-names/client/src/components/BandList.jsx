export const BandList = () => {
  const createRows = () => {};
  return (
    <>
      <table className='table table-stripped'>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Votes</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <button className='btn btn-primary'>+1</button>
            </td>
            <td>
              <input className='form-control' />
            </td>
            <td>
              <h3>0</h3>
            </td>
            <td>
              <button className='btn btn-danger'>Borrar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

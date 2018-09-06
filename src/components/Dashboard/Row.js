import React from 'react';

const Row = (props) => (
  <tr>
    <td>
      <p>Burguer King</p>
      <p>King de Pollo</p>
    </td>
    <td>
      <p>17th Oct, 15</p>
      <p className="day-text">monday</p>
    </td>
    <td className="member">
      <figure>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/people_8.png" />
      </figure>
      <div className="member-info">
        <p>Food</p>
        <p>&nbsp;</p>
      </div>
    </td>
    <td>
      <p>Credit Card</p>
      <p>Ficohsa</p>
    </td>
    <td>
      <p className="income-text">$4,670</p>
      <p>Paid</p>
    </td>
    <td className="status">
      <button>Notas</button>
    </td>
  </tr>
);

// Row.propTypes = {
//   Nombre: PropTypes.string.isRequired,
//   Fecha: PropTypes.object,
//   Categoria: PropTypes.string.isRequired,
//   Tipo: PropTypes.string.isRequired,
//   Monto: PropTypes.number.isRequired
// };

export default Row;

import PropTypes from 'prop-types';
import React from 'react';

export default class Table extends React.Component {
  static propTypes = {
    rows: PropTypes.array.isRequired,
    title: PropTypes.string
  };

  render() {
    const { rows, title } = this.props;
    const headers = Object.keys(rows[0]);

    return (
      <table className="usa-table" style={{ width: '100%'}}>
        {title && <caption>{title}</caption>}
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th scope="col" key={`header-${i}`}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={`table-row-${i}`}>
              {headers.map((h, j) => (
                <td key={`table-row-cell-${i}-${j}`} style={{ width: `${100/headers.length}%`}}>{row[h]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
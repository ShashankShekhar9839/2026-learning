import tableData from "./data";
import "./styles.css";

function StickyTable({
  columnData = tableData.columns,
  rowData = tableData.rows,
}) {
  // calculate left offset for sticky columns
  let stickyLeft = 0;

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            {columnData.map((col) => {
              const style = col.sticky
                ? { left: stickyLeft, width: col.width }
                : { width: col.width };

              if (col.sticky) stickyLeft += col.width;

              return (
                <th
                  key={col.id}
                  className={col.sticky ? "sticky-column" : ""}
                  style={style}
                >
                  {col.label}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {rowData.map((row) => {
            let rowStickyLeft = 0;

            return (
              <tr key={row.id}>
                {columnData.map((col) => {
                  const style = col.sticky
                    ? { left: rowStickyLeft, width: col.width }
                    : { width: col.width };

                  if (col.sticky) rowStickyLeft += col.width;

                  return (
                    <td
                      key={col.id}
                      className={col.sticky ? "sticky-column" : ""}
                      style={style}
                    >
                      {row[col.accessor]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StickyTable;

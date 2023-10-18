import "./style.css";

const CustomTable = (props) => {

  return (
    <>
      <div className="filterWrapper justify-content-end d-flex gap-3">
      </div>
      <div className="customTable">
        <table>
          <thead>
            <tr>
              {props?.headers.map((header) => (
                <th key={header.key}>{header.title}</th>
              ))}
            </tr>
          </thead>
          {props?.children}
        </table>
      </div>

    </>
  );
};

export default CustomTable;

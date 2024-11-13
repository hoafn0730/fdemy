import { Table as TableComp } from 'react-bootstrap';

type TableProps = {
    columns: any[];
    dataSource: any;
};

function Table({ columns = [], dataSource = [] }: TableProps) {
    return (
        <TableComp hover responsive>
            <thead>
                <tr>
                    <th>Quote#</th>
                    {columns.map((col: any, index: number) => (
                        <th key={index}>{col.title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {dataSource.map((item: any, index: number) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            {columns.map((col, index) => {
                                if (col?.render) {
                                    return <td key={index}>{col.render(item)}</td>;
                                }
                                return (
                                    <td key={index}>
                                        {col?.key?.model ? item[col?.key?.model][col?.key?.field] : item[col.key]}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </TableComp>
    );
}

export default Table;

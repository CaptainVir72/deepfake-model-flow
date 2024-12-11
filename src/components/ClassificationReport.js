import React from 'react'

const Table = ({ children, className, ...props }) => (
  <div className={`w-full overflow-auto ${className}`} {...props}>
    <table className="w-full caption-bottom text-sm">{children}</table>
  </div>
)

const TableHeader = ({ children, className, ...props }) => (
  <thead className={`[&_tr]:border-b ${className}`} {...props}>
    {children}
  </thead>
)

const TableBody = ({ children, className, ...props }) => (
  <tbody className={`[&_tr:last-child]:border-0 ${className}`} {...props}>
    {children}
  </tbody>
)

const TableRow = ({ children, className, ...props }) => (
  <tr
    className={`border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted ${className}`}
    {...props}
  >
    {children}
  </tr>
)

const TableHead = ({ children, className, ...props }) => (
  <th
    className={`h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ${className}`}
    {...props}
  >
    {children}
  </th>
)

const TableCell = ({ children, className, ...props }) => (
  <td
    className={`p-4 align-middle [&:has([role=checkbox])]:pr-0 ${className}`}
    {...props}
  >
    {children}
  </td>
)

const ClassificationReport = ({ model }) => {
  const getReportData = () => {
    switch (model) {
      case 'CrossVit':
        return [
          { metric: 'Precision', class1: '0.92', class2: '0.88', class3: '0.90', class4: '0.95' },
          { metric: 'Recall', class1: '0.90', class2: '0.85', class3: '0.92', class4: '0.93' },
          { metric: 'F1-score', class1: '0.91', class2: '0.86', class3: '0.91', class4: '0.94' },
          { metric: 'Support', class1: '1000', class2: '800', class3: '1200', class4: '1000' },
        ]
      case 'PPG':
        return [
          { metric: 'Precision', class1: '0.88', class2: '0.85', class3: '0.87', class4: '0.89' },
          { metric: 'Recall', class1: '0.86', class2: '0.83', class3: '0.85', class4: '0.88' },
          { metric: 'F1-score', class1: '0.87', class2: '0.84', class3: '0.86', class4: '0.88' },
          { metric: 'Support', class1: '900', class2: '750', class3: '1100', class4: '950' },
        ]
      case 'Audio':
        return [
          { metric: 'Precision', class1: '0.94', class2: '0.91', class3: '0.93', class4: '0.96' },
          { metric: 'Recall', class1: '0.93', class2: '0.89', class3: '0.92', class4: '0.95' },
          { metric: 'F1-score', class1: '0.93', class2: '0.90', class3: '0.92', class4: '0.95' },
          { metric: 'Support', class1: '1100', class2: '850', class3: '1300', class4: '1050' },
        ]
      default:
        return []
    }
  }

  const data = getReportData()

  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold mb-4">Classification Report for {model}</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Metric</TableHead>
            <TableHead>Class 1</TableHead>
            <TableHead>Class 2</TableHead>
            <TableHead>Class 3</TableHead>
            <TableHead>Class 4</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.metric}>
              <TableCell className="font-medium">{row.metric}</TableCell>
              <TableCell>{row.class1}</TableCell>
              <TableCell>{row.class2}</TableCell>
              <TableCell>{row.class3}</TableCell>
              <TableCell>{row.class4}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default ClassificationReport


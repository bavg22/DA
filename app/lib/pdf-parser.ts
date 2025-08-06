import pdf from 'pdf-parse'

export interface ParsedData {
  items: Array<{
    description: string
    quantity: number
    price: number
    total: number
  }>
  subtotal: number
  tax: number
  total: number
  date: string
  vendor: string
}

export async function parsePDFToCSV(buffer: Buffer): Promise<string> {
  try {
    const data = await pdf(buffer)
    const text = data.text
    
    // Extract structured data from PDF text
    const parsedData = extractDataFromText(text)
    
    // Convert to CSV format
    const csv = convertToCSV(parsedData)
    
    return csv
  } catch (error) {
    console.error('Error parsing PDF:', error)
    throw new Error('Failed to parse PDF')
  }
}

function extractDataFromText(text: string): ParsedData {
  const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0)
  
  // Basic extraction logic - this would be enhanced with ML/AI
  const items: ParsedData['items'] = []
  let subtotal = 0
  let tax = 0
  let total = 0
  let date = ''
  let vendor = ''
  
  // Extract date (various formats)
  const dateRegex = /(\d{1,2}\/\d{1,2}\/\d{2,4}|\d{4}-\d{2}-\d{2})/
  const dateMatch = text.match(dateRegex)
  if (dateMatch) {
    date = dateMatch[1]
  }
  
  // Extract vendor (usually first few lines)
  if (lines.length > 0) {
    vendor = lines[0]
  }
  
  // Extract line items (simplified pattern matching)
  for (const line of lines) {
    // Look for patterns like "Item Name 2 $5.99 $11.98"
    const itemRegex = /(.+?)\s+(\d+)\s+\$?([\d.]+)\s+\$?([\d.]+)/
    const match = line.match(itemRegex)
    
    if (match) {
      items.push({
        description: match[1].trim(),
        quantity: parseInt(match[2]),
        price: parseFloat(match[3]),
        total: parseFloat(match[4])
      })
    }
    
    // Extract totals
    if (line.toLowerCase().includes('subtotal')) {
      const amount = line.match(/\$?([\d.]+)/)
      if (amount) subtotal = parseFloat(amount[1])
    }
    
    if (line.toLowerCase().includes('tax')) {
      const amount = line.match(/\$?([\d.]+)/)
      if (amount) tax = parseFloat(amount[1])
    }
    
    if (line.toLowerCase().includes('total') && !line.toLowerCase().includes('subtotal')) {
      const amount = line.match(/\$?([\d.]+)/)
      if (amount) total = parseFloat(amount[1])
    }
  }
  
  return { items, subtotal, tax, total, date, vendor }
}

function convertToCSV(data: ParsedData): string {
  const headers = ['Date', 'Vendor', 'Description', 'Quantity', 'Unit Price', 'Total', 'Category']
  const rows = [headers.join(',')]
  
  for (const item of data.items) {
    const row = [
      data.date,
      `"${data.vendor}"`,
      `"${item.description}"`,
      item.quantity,
      item.price,
      item.total,
      'Expense' // Default category
    ]
    rows.push(row.join(','))
  }
  
  // Add summary rows
  rows.push('')
  rows.push(`Summary,,,,,`)
  rows.push(`Subtotal,,,,,$${data.subtotal}`)
  rows.push(`Tax,,,,,$${data.tax}`)
  rows.push(`Total,,,,,$${data.total}`)
  
  return rows.join('\n')
}

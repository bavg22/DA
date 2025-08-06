import { NextRequest, NextResponse } from 'next/server'
import { parsePDFToCSV } from '../../lib/pdf-parser'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    if (file.type !== 'application/pdf') {
      return NextResponse.json({ error: 'Only PDF files are allowed' }, { status: 400 })
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Parse PDF to CSV
    const csvData = await parsePDFToCSV(buffer)

    // In a real app, you'd save this to cloud storage (Firebase Storage, AWS S3, etc.)
    // For now, we'll return the CSV data directly
    const csvBlob = new Blob([csvData], { type: 'text/csv' })
    const downloadUrl = URL.createObjectURL(csvBlob)

    return NextResponse.json({
      success: true,
      downloadUrl,
      filename: file.name.replace('.pdf', '.csv')
    })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: 'Failed to process file' },
      { status: 500 }
    )
  }
}

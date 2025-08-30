#!/usr/bin/env python3
"""
Script to extract text from Strength of Thousands PDFs and save to Data folder
"""

import os
import sys
from pathlib import Path
import pypdf

def extract_pdf_text(pdf_path, output_path):
    """Extract text from a PDF file and save to a text file"""
    try:
        print(f"Processing: {pdf_path.name}")
        
        with open(pdf_path, 'rb') as pdf_file:
            pdf_reader = pypdf.PdfReader(pdf_file)
            
            text_content = []
            total_pages = len(pdf_reader.pages)
            
            for page_num, page in enumerate(pdf_reader.pages, 1):
                print(f"  Extracting page {page_num}/{total_pages}", end='\r')
                try:
                    page_text = page.extract_text()
                    if page_text.strip():  # Only add non-empty pages
                        text_content.append(f"=== PAGE {page_num} ===\n")
                        text_content.append(page_text)
                        text_content.append("\n\n")
                except Exception as e:
                    print(f"  Warning: Could not extract text from page {page_num}: {e}")
                    continue
            
            # Write extracted text to file
            with open(output_path, 'w', encoding='utf-8') as text_file:
                text_file.writelines(text_content)
            
            print(f"  ✓ Extracted {total_pages} pages to {output_path.name}")
            return True
            
    except Exception as e:
        print(f"  ✗ Error processing {pdf_path.name}: {e}")
        return False

def main():
    # Set up paths
    base_dir = Path(".")
    pdf_dir = base_dir / "Strength of Thousands PF2E" / "Files"
    data_dir = base_dir / "Data"
    
    # Create Data directory if it doesn't exist
    data_dir.mkdir(exist_ok=True)
    
    # Check if PDF directory exists
    if not pdf_dir.exists():
        print(f"Error: PDF directory not found at {pdf_dir}")
        return 1
    
    # Find all PDF files
    pdf_files = list(pdf_dir.glob("*.pdf"))
    
    if not pdf_files:
        print(f"No PDF files found in {pdf_dir}")
        return 1
    
    print(f"Found {len(pdf_files)} PDF files to process")
    print("=" * 50)
    
    successful = 0
    failed = 0
    
    # Process each PDF
    for pdf_path in sorted(pdf_files):
        # Create output filename (replace .pdf with .txt)
        output_filename = pdf_path.stem + ".txt"
        output_path = data_dir / output_filename
        
        if extract_pdf_text(pdf_path, output_path):
            successful += 1
        else:
            failed += 1
        
        print()  # Add blank line between files
    
    print("=" * 50)
    print(f"Extraction complete!")
    print(f"Successfully processed: {successful} files")
    print(f"Failed to process: {failed} files")
    print(f"Text files saved to: {data_dir}")
    
    return 0 if failed == 0 else 1

if __name__ == "__main__":
    sys.exit(main())

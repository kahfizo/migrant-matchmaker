export interface Document {
  id: string;
  cpmi_id: string;
  type: 'passport' | 'visa' | 'medical' | 'contract' | 'other';
  document_number: string;
  issue_date: string;
  expiry_date: string;
  status: 'valid' | 'expired' | 'pending';
  file_path: string;
  created_at: string;
  updated_at: string;
}

export const documentTableSchema = `
CREATE TABLE documents (
  id VARCHAR(36) PRIMARY KEY,
  cpmi_id VARCHAR(36) NOT NULL,
  type ENUM('passport', 'visa', 'medical', 'contract', 'other') NOT NULL,
  document_number VARCHAR(100) NOT NULL,
  issue_date DATE NOT NULL,
  expiry_date DATE NOT NULL,
  status ENUM('valid', 'expired', 'pending') NOT NULL,
  file_path TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (cpmi_id) REFERENCES cpmi(id)
)`;
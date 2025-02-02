export interface CPMI {
  id: string;
  full_name: string;
  nik: string;
  birth_place: string;
  birth_date: string;
  gender: 'male' | 'female';
  address: string;
  phone: string;
  email: string;
  registration_source: 'facebook' | 'website' | 'agency' | 'referral';
  branch_office_id: string;
  sector: 'formal' | 'informal';
  status: 'registered' | 'data_collection' | 'interview' | 'document_processing' | 'placement';
  created_at: string;
  updated_at: string;
}

export const cpmiTableSchema = `
CREATE TABLE cpmi (
  id VARCHAR(36) PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  nik VARCHAR(16) UNIQUE NOT NULL,
  birth_place VARCHAR(100) NOT NULL,
  birth_date DATE NOT NULL,
  gender ENUM('male', 'female') NOT NULL,
  address TEXT NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(255),
  registration_source ENUM('facebook', 'website', 'agency', 'referral') NOT NULL,
  branch_office_id VARCHAR(36) NOT NULL,
  sector ENUM('formal', 'informal') NOT NULL,
  status ENUM('registered', 'data_collection', 'interview', 'document_processing', 'placement') NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (branch_office_id) REFERENCES branch_offices(id)
)`;
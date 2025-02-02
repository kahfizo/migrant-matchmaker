export interface Agency {
  id: string;
  name: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  status: 'active' | 'inactive';
  created_at: string;
  updated_at: string;
}

export const agencyTableSchema = `
CREATE TABLE agencies (
  id VARCHAR(36) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  country VARCHAR(100) NOT NULL,
  address TEXT NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL,
  status ENUM('active', 'inactive') DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`;
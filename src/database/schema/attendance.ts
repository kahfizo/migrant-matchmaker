export interface Attendance {
  id: string;
  user_id: string;
  check_in: string;
  check_out: string;
  type: 'fingerprint' | 'selfie' | 'gps';
  status: 'present' | 'sick' | 'permission';
  proof_file?: string;
  location?: string;
  created_at: string;
  updated_at: string;
}

export const attendanceTableSchema = `
CREATE TABLE attendance (
  id VARCHAR(36) PRIMARY KEY,
  user_id VARCHAR(36) NOT NULL,
  check_in TIMESTAMP NOT NULL,
  check_out TIMESTAMP,
  type ENUM('fingerprint', 'selfie', 'gps') NOT NULL,
  status ENUM('present', 'sick', 'permission') DEFAULT 'present',
  proof_file TEXT,
  location TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
)`;
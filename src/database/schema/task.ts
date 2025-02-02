export interface Task {
  id: string;
  title: string;
  description: string;
  cpmi_id: string;
  assigned_to: string;
  status: 'todo' | 'on_process' | 'review' | 'done';
  due_date: string;
  created_at: string;
  updated_at: string;
}

export const taskTableSchema = `
CREATE TABLE tasks (
  id VARCHAR(36) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  cpmi_id VARCHAR(36) NOT NULL,
  assigned_to VARCHAR(36) NOT NULL,
  status ENUM('todo', 'on_process', 'review', 'done') DEFAULT 'todo',
  due_date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (cpmi_id) REFERENCES cpmi(id),
  FOREIGN KEY (assigned_to) REFERENCES users(id)
)`;
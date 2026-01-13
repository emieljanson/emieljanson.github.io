export class LegacyService {
  private data: string;
  
  constructor() {
    this.data = "legacy";
  }
  
  getData(): string {
    return this.data;
  }
  
  setData(value: string): void {
    this.data = value;
  }
}

// Add more lines to make it substantial
export const config = {
  enabled: true,
  timeout: 5000,
  retries: 3,
};

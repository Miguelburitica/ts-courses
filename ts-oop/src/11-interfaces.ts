export interface Driver {
  host: string;
  username: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  get isConnected(): boolean;
}

const driver: Driver = {
  host: 'my-host',
  username: 'my-username',
  password: 'my-password',
  port: 5432,

  connect() {
    console.log('Connecting to database...');
  },
  disconnect() {
    console.log('Disconnecting from database...');
  },

  get isConnected() {
    return true;
  },
};

class PostgresDriver implements Driver {
  constructor(
    public host: string,
    public username: string,
    public password: string,
    public port: number
  ) {}

  connect() {
    console.log('Connecting to Postgres database...');
  }
  disconnect() {
    console.log('Disconnecting from Postgres database...');
  }

  get isConnected() {
    return this.host !== null;
  }
}

class MySQLDriver implements Driver {
  constructor(
    public host: string,
    public username: string,
    public password: string,
    public port: number
  ) {}

  connect() {
    console.log('Connecting to MySQL database...');
  }
  disconnect(): void {
    console.log('Disconnecting from MySQL database...');
  }

  get isConnected() {
    return this.host !== null;
  }
}
